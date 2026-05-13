// ============================================================
// Jake's TOEIC Speaking Trainer - main app
// ============================================================

let progress = loadProgress();
let state = {
  activeTab: 'home',
  // Learn tab
  learnCat: 'all',
  learnSrsMode: 'due',
  learnQueue: [],
  learnIndex: 0,
  learnFlipped: false,
  // Quiz tab
  quizCat: 'all',
  quizDir: 'ko-en',
  quizCorrect: 0,
  quizWrong: 0,
  quizCurrent: null,
  quizAnswered: false,
  // Build tab
  buildIndex: 0,
  buildAnswer: [],
  buildScore: 0,
  // Speak tab
  speakCat: 'all',
  speakIndex: 0,
  speakSpeed: 0.85,
  speakQueue: []
};

// ============================================================
// Utility functions
// ============================================================
function $(sel) { return document.querySelector(sel); }
function $$(sel) { return document.querySelectorAll(sel); }

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showToast(msg, duration = 2000) {
  const toast = $('#toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), duration);
}

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

// ============================================================
// Tab switching
// ============================================================
$$('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tabName) {
  state.activeTab = tabName;
  $$('.tab-btn').forEach(b => {
    const active = b.dataset.tab === tabName;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
  $$('.tab-panel').forEach(p => {
    p.classList.toggle('active', p.id === `tab-${tabName}`);
  });

  // Render the tab content
  if (tabName === 'home') renderHome();
  else if (tabName === 'grammar') renderGrammar();
  else if (tabName === 'learn') initLearn();
  else if (tabName === 'quiz') initQuiz();
  else if (tabName === 'build') initBuild();
  else if (tabName === 'write') initWrite();
  else if (tabName === 'speak') initSpeak();

  // Scroll to top on tab change
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// HOME TAB
// ============================================================
function renderHome() {
  const counts = countByStatus(progress, VOCAB);
  const total = VOCAB.length;
  const masteryPct = Math.round((counts.mastered / total) * 100);

  // Header stats
  $('#streak-num').textContent = progress.streak || 0;
  $('#mastered-num').textContent = counts.mastered;
  $('#goal-fill').style.width = masteryPct + '%';
  $('#goal-pct').textContent = masteryPct + '%';

  // Due summary
  const dueText = counts.due === 0
    ? '🎉 오늘 복습할 카드가 없어요! 새 카드를 학습해 보세요.'
    : `오늘 <strong>${counts.due}개</strong>의 카드를 복습할 시간이에요.`;

  $('#due-summary').innerHTML = `
    <div class="due-grid">
      <div class="due-stat">
        <div class="due-num">${counts.due}</div>
        <div class="due-label">복습 필요<br/><span class="due-en">Due now</span></div>
      </div>
      <div class="due-stat">
        <div class="due-num">${counts.new}</div>
        <div class="due-label">새 카드<br/><span class="due-en">New cards</span></div>
      </div>
      <div class="due-stat">
        <div class="due-num">${counts.mastered}</div>
        <div class="due-label">완료<br/><span class="due-en">Mastered</span></div>
      </div>
    </div>
    <p class="due-msg">${dueText}</p>
  `;

  // Verb progress
  const verbs = ['take','get','do','go','make','have'];
  const verbHtml = verbs.map(v => {
    const cards = VOCAB.filter(c => c.cat === v);
    const masteredCount = cards.filter(c => {
      const s = progress.cards[c.id];
      return s && s.status === 'mastered';
    }).length;
    const pct = Math.round((masteredCount / cards.length) * 100);
    return `
      <div class="verb-row">
        <div class="verb-label">${v}</div>
        <div class="verb-bar"><div class="verb-fill" style="width: ${pct}%"></div></div>
        <div class="verb-count">${masteredCount} / ${cards.length}</div>
      </div>
    `;
  }).join('');
  $('#verb-progress').innerHTML = verbHtml;

  // Daily tip
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(),0,0)) / 86400000);
  $('#daily-tip').textContent = DAILY_TIPS[dayOfYear % DAILY_TIPS.length];

  $('#start-study').onclick = () => {
    state.learnSrsMode = counts.due > 0 ? 'due' : 'new';
    switchTab('learn');
  };
}

// ============================================================
// GRAMMAR TAB
// ============================================================
// ============================================================
// GRAMMAR TAB (grouped accordion → lesson view)
// ============================================================
let activeLessonIdx = null; // null = list view, number = lesson view
let lessonOrder = []; // flat list of lesson indices in display order
let activeTrack = 'haemin'; // 'haemin' or 'jake'

// Get the lessons and groups for the active track
function getActiveLessons() {
  if (activeTrack === 'jake') {
    return { lessons: JAKE_LESSONS, groups: JAKE_LESSON_GROUPS };
  }
  return { lessons: LESSONS, groups: LESSON_GROUPS };
}

function renderGrammar() {
  const { groups } = getActiveLessons();
  // Build the flat order from groups
  lessonOrder = [];
  groups.forEach(g => g.lessons.forEach(l => lessonOrder.push(l.idx)));

  // Sync track buttons
  $$('.track-btn').forEach(b => b.classList.toggle('active', b.dataset.track === activeTrack));

  if (activeLessonIdx === null) {
    showGrammarList();
  } else {
    showGrammarLesson(activeLessonIdx);
  }

  // Wire up navigation buttons (only once)
  if (!$('#tab-grammar').dataset.wired) {
    // Track switcher
    $$('.track-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTrack = btn.dataset.track;
        activeLessonIdx = null; // back to list when switching tracks
        renderGrammar();
      });
    });

    // Back/prev/next live inside the lesson view container, so wire them globally via delegation
    document.addEventListener('click', (e) => {
      if (e.target.closest('#lesson-back-btn')) {
        activeLessonIdx = null;
        renderGrammar();
      } else if (e.target.closest('#lesson-prev-btn')) {
        const pos = lessonOrder.indexOf(activeLessonIdx);
        if (pos > 0) {
          activeLessonIdx = lessonOrder[pos - 1];
          renderGrammar();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (e.target.closest('#lesson-next-btn')) {
        const pos = lessonOrder.indexOf(activeLessonIdx);
        if (pos < lessonOrder.length - 1) {
          activeLessonIdx = lessonOrder[pos + 1];
          renderGrammar();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    });
    $('#tab-grammar').dataset.wired = '1';
  }
}

function showGrammarList() {
  $('#grammar-list-view').style.display = 'block';
  $('#grammar-lesson-view').style.display = 'none';

  const { groups } = getActiveLessons();
  const html = groups.map((group, gIdx) => `
    <div class="lesson-group">
      <div class="lesson-group-header">
        <h3>${group.title}</h3>
        <span class="lesson-group-en">${group.titleEn}</span>
      </div>
      <div class="lesson-group-list">
        ${group.lessons.map(l => `
          <button class="lesson-card-btn" data-lesson-idx="${l.idx}">
            <div class="lesson-card-title">${escapeHtml(l.title)}</div>
            <div class="lesson-card-sub">${escapeHtml(l.subtitle)}</div>
            <div class="lesson-card-arrow">→</div>
          </button>
        `).join('')}
      </div>
    </div>
  `).join('');

  $('#lesson-groups').innerHTML = html;

  // Wire up lesson card buttons
  $$('.lesson-card-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeLessonIdx = parseInt(btn.dataset.lessonIdx);
      renderGrammar();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function showGrammarLesson(idx) {
  $('#grammar-list-view').style.display = 'none';
  const lessonView = $('#grammar-lesson-view');
  lessonView.style.display = 'block';

  const { lessons } = getActiveLessons();
  // Rebuild the lesson view (back button + content + nav buttons)
  // We do this every render so the navigation works for both tracks
  lessonView.innerHTML = `
    <button class="back-btn" id="lesson-back-btn">← 목록으로 (Back to list)</button>
    <div id="lesson-content" class="lesson-content">${lessons[idx]}</div>
    <div class="lesson-nav">
      <button class="ctrl-btn" id="lesson-prev-btn">← 이전 레슨</button>
      <button class="ctrl-btn" id="lesson-next-btn">다음 레슨 →</button>
    </div>
  `;

  // Show/hide prev/next buttons based on position
  const pos = lessonOrder.indexOf(idx);
  $('#lesson-prev-btn').disabled = pos <= 0;
  $('#lesson-next-btn').disabled = pos >= lessonOrder.length - 1;

  // Initialize any interactive practice blocks (Jake track has these)
  initPracticeBlocks();
}

// Initialize interactive practice blocks inside Jake lessons
function initPracticeBlocks() {
  $$('.practice-block').forEach(block => {
    if (block.dataset.initialized) return;
    block.dataset.initialized = '1';
    const id = parseInt(block.dataset.practiceId);
    if (isNaN(id) || typeof JAKE_PRACTICE_DATA === 'undefined' || !JAKE_PRACTICE_DATA[id]) {
      console.error('No practice data for id', id);
      return;
    }
    renderPracticeBlock(block, JAKE_PRACTICE_DATA[id]);
  });

  // Initialize AI-checked practice blocks
  $$('.ai-practice-block').forEach(block => {
    if (block.dataset.initialized) return;
    block.dataset.initialized = '1';
    const id = block.dataset.practiceId;
    if (!id || typeof JAKE_AI_PRACTICE === 'undefined' || !JAKE_AI_PRACTICE[id]) {
      console.error('No AI practice data for id', id);
      return;
    }
    renderAIPracticeBlock(block, JAKE_AI_PRACTICE[id], id);
  });

  // Initialize flashcard drill blocks
  $$('.flashcard-block').forEach(block => {
    if (block.dataset.initialized) return;
    block.dataset.initialized = '1';
    const id = block.dataset.flashcardId;
    if (!id || typeof JAKE_FLASHCARDS === 'undefined' || !JAKE_FLASHCARDS[id]) {
      console.error('No flashcard data for id', id);
      return;
    }
    renderFlashcardBlock(block, JAKE_FLASHCARDS[id], id);
  });
}

function renderPracticeBlock(container, data) {
  let answered = new Array(data.questions.length).fill(null);
  let revealed = new Array(data.questions.length).fill(false);

  function render() {
    const total = data.questions.length;
    const correct = answered.filter((a, i) => a === data.questions[i].answer).length;
    const completed = answered.filter(a => a !== null).length;

    container.innerHTML = `
      <div class="practice-card">
        <div class="practice-header">
          <h4>📝 ${escapeHtml(data.title)}</h4>
          <div class="practice-progress">${completed} / ${total} ${completed === total ? `· 정답 ${correct}/${total}` : ''}</div>
        </div>
        ${data.questions.map((q, qi) => `
          <div class="practice-question ${answered[qi] !== null ? 'answered' : ''}">
            <p class="practice-prompt"><strong>${qi+1}.</strong> ${escapeHtml(q.prompt)}</p>
            <div class="practice-options">
              ${q.options.map((opt, oi) => {
                let cls = 'practice-option';
                if (answered[qi] !== null) {
                  if (oi === q.answer) cls += ' correct';
                  else if (oi === answered[qi]) cls += ' wrong';
                }
                return `<button class="${cls}" data-q="${qi}" data-o="${oi}" ${answered[qi] !== null ? 'disabled' : ''}>${escapeHtml(opt)}</button>`;
              }).join('')}
            </div>
            ${answered[qi] !== null ? `
              <div class="practice-explain ${answered[qi] === q.answer ? 'correct' : 'wrong'}">
                ${answered[qi] === q.answer ? '✅ 정답!' : '❌ 다시 보세요.'} <br/>
                <span class="practice-explain-text">${escapeHtml(q.explanation)}</span>
              </div>
            ` : ''}
          </div>
        `).join('')}
        ${completed === total ? `
          <button class="ctrl-btn practice-reset-btn">↻ 다시 풀기 (Try again)</button>
        ` : ''}
      </div>
    `;

    container.querySelectorAll('.practice-option').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const qi = parseInt(btn.dataset.q);
        const oi = parseInt(btn.dataset.o);
        answered[qi] = oi;
        render();
      });
    });

    const resetBtn = container.querySelector('.practice-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        answered = new Array(data.questions.length).fill(null);
        render();
      });
    }
  }

  render();
}

// ============================================================
// AI-checked practice blocks (free-write activities)
// Sends user answer to Gemini for grading + Korean explanation
// ============================================================
function renderAIPracticeBlock(container, data, blockId) {
  // Track answers and feedback per question
  const state = {
    answers: new Array(data.questions.length).fill(''),
    feedback: new Array(data.questions.length).fill(null), // null | {ok, message}
    loading: new Array(data.questions.length).fill(false)
  };

  function render() {
    container.innerHTML = `
      <div class="ai-practice-card">
        <div class="ai-practice-header">
          <h4>${escapeHtml(data.title)}</h4>
          <p class="ai-practice-instruction">${escapeHtml(data.instruction).replace(/\n/g, '<br/>')}</p>
        </div>
        ${data.questions.map((q, i) => renderQuestion(q, i)).join('')}
      </div>
    `;

    // Wire up textareas
    container.querySelectorAll('.ai-practice-input').forEach(input => {
      input.addEventListener('input', (e) => {
        const i = parseInt(input.dataset.idx);
        state.answers[i] = e.target.value;
      });
    });

    // Wire up check buttons
    container.querySelectorAll('.ai-practice-check-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.idx);
        handleCheck(i);
      });
    });

    // Wire up "show answer" buttons
    container.querySelectorAll('.ai-practice-show-answer').forEach(btn => {
      btn.addEventListener('click', () => {
        const i = parseInt(btn.dataset.idx);
        const q = data.questions[i];
        const correct = q.answer || q.expectedPattern || q.correctedSentence || '';
        state.feedback[i] = {
          ok: null,
          message: `<strong>정답 예시:</strong> ${escapeHtml(correct)}${q.explanation ? '<br/><br/><strong>설명:</strong> ' + escapeHtml(q.explanation) : ''}`
        };
        render();
      });
    });
  }

  function renderQuestion(q, i) {
    const fb = state.feedback[i];
    const loading = state.loading[i];

    let questionHtml = '';
    if (data.type === 'fill-blank') {
      questionHtml = `
        <p class="ai-q-prompt"><strong>${i+1}.</strong> ${escapeHtml(q.prompt)}</p>
        <p class="ai-q-sentence">${escapeHtml(q.sentence)}</p>
      `;
    } else if (data.type === 'complete-sentence') {
      questionHtml = `
        <p class="ai-q-prompt"><strong>${i+1}.</strong> ${escapeHtml(q.prompt)} <span class="ai-q-hint">${escapeHtml(q.hint || '')}</span></p>
        <p class="ai-q-sentence">${escapeHtml(q.template || '')}</p>
      `;
    } else if (data.type === 'correction') {
      questionHtml = `
        <p class="ai-q-prompt"><strong>${i+1}.</strong> 다음 문장의 잘못된 부분을 고치세요:</p>
        <p class="ai-q-sentence ai-q-wrong">❌ ${escapeHtml(q.sentence)}</p>
      `;
    } else if (data.type === 'translation') {
      questionHtml = `
        <p class="ai-q-prompt"><strong>${i+1}.</strong> ${escapeHtml(q.korean)} <span class="ai-q-hint">${escapeHtml(q.hint || '')}</span></p>
      `;
    }

    const placeholder = data.type === 'fill-blank' ? 'Type one word...' : 'Type your answer in English...';

    return `
      <div class="ai-q-block ${fb ? (fb.ok === true ? 'correct' : fb.ok === false ? 'incorrect' : 'shown') : ''}">
        ${questionHtml}
        <textarea class="ai-practice-input"
                  data-idx="${i}"
                  placeholder="${placeholder}"
                  rows="${data.type === 'fill-blank' ? 1 : 2}"
                  ${loading ? 'disabled' : ''}>${escapeHtml(state.answers[i])}</textarea>
        <div class="ai-q-actions">
          <button class="ai-practice-show-answer" data-idx="${i}" ${loading ? 'disabled' : ''}>💡 답 보기</button>
          <button class="ai-practice-check-btn" data-idx="${i}" ${loading ? 'disabled' : ''}>
            ${loading ? '⏳ 채점 중...' : '✓ AI 채점'}
          </button>
        </div>
        ${fb ? `
          <div class="ai-q-feedback ${fb.ok === true ? 'correct' : fb.ok === false ? 'incorrect' : 'neutral'}">
            ${fb.message}
          </div>
        ` : ''}
      </div>
    `;
  }

  async function handleCheck(i) {
    const answer = (state.answers[i] || '').trim();
    if (!answer) {
      showToast('답을 먼저 작성해주세요');
      return;
    }

    // Check API key
    const apiKey = (typeof getApiKey === 'function') ? getApiKey() : localStorage.getItem('jake-toeic-gemini-key');
    if (!apiKey) {
      state.feedback[i] = {
        ok: null,
        message: '⚠️ AI 채점을 사용하려면 먼저 <strong>Write 탭</strong>에서 Gemini API 키를 설정해주세요.'
      };
      render();
      return;
    }

    state.loading[i] = true;
    state.feedback[i] = null;
    render();

    try {
      const q = data.questions[i];
      const result = await checkPracticeAnswer(data.type, q, answer, apiKey);
      state.feedback[i] = result;
    } catch (err) {
      console.error('Practice check failed', err);
      let msg = '⚠️ 채점에 실패했습니다. ';
      if (err.message?.includes('429') || err.message?.includes('limit: 0')) {
        msg += '오늘의 무료 사용량이 초과되었거나, 잠시 후 다시 시도해주세요.';
      } else {
        msg += '인터넷 연결을 확인하거나 잠시 후 다시 시도해주세요.';
      }
      state.feedback[i] = { ok: null, message: msg };
    } finally {
      state.loading[i] = false;
      render();
    }
  }

  render();
}

// ============================================================
// FLASHCARD DRILL BLOCK
// Self-contained: shows base verb, user types past + p.p.,
// shows immediate feedback per card, then results summary at end.
// ============================================================
function renderFlashcardBlock(container, data, blockId) {
  // Route to the right flashcard style based on data.type
  if (data.type === 'choice') {
    return renderFlashcardChoiceBlock(container, data, blockId);
  }
  // Default: typing-input style (used by ch2 irregular verbs)
  return renderFlashcardTypeBlock(container, data, blockId);
}

function renderFlashcardTypeBlock(container, data, blockId) {
  // Shuffle the cards each session
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const state = {
    cards: shuffle(data.cards),
    idx: 0,
    pastInput: '',
    ppInput: '',
    revealed: false,        // current card has been submitted
    results: [],            // {base, past, pp, userPast, userPp, pastCorrect, ppCorrect}
    finished: false,
    onlyWrong: false,       // for "retry wrong only" mode
    userInteracted: false   // becomes true after first submit/click — controls auto-focus
  };

  // Normalize answer: lowercase, trim. Accept multiple correct answers separated by " / " or " or "
  function normalizeAnswer(s) {
    return (s || '').trim().toLowerCase().replace(/\s+/g, ' ');
  }
  function isCorrect(userInput, correctAnswers) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    // correctAnswers may be a string with " / " separator for variants
    const variants = correctAnswers.split(/\s*\/\s*/).map(normalizeAnswer);
    return variants.includes(u);
  }

  function render() {
    if (state.finished) {
      renderResults();
      return;
    }
    renderCard();
  }

  function renderCard() {
    const card = state.cards[state.idx];
    const total = state.cards.length;
    const cardNum = state.idx + 1;

    const result = state.revealed ? state.results[state.idx] : null;

    container.innerHTML = `
      <div class="flashcard-card">
        <div class="flashcard-header">
          <h4>🃏 ${escapeHtml(data.title)}</h4>
          <div class="flashcard-progress">${cardNum} / ${total}</div>
        </div>
        <p class="flashcard-instruction">${escapeHtml(data.instruction || '')}</p>

        <div class="flashcard-face">
          <div class="flashcard-label">현재 (base)</div>
          <div class="flashcard-base">${escapeHtml(card.base)}</div>
          ${card.meaning ? `<div class="flashcard-meaning">${escapeHtml(card.meaning)}</div>` : ''}
        </div>

        <div class="flashcard-inputs">
          <div class="flashcard-input-row">
            <label>과거 (past):</label>
            <input type="text"
                   class="flashcard-input"
                   id="fc-past-${blockId}"
                   value="${escapeHtml(state.pastInput)}"
                   ${state.revealed ? 'disabled' : ''}
                   autocomplete="off"
                   autocapitalize="off"
                   placeholder="e.g. went" />
            ${state.revealed ? (result.pastCorrect
              ? `<span class="fc-mark correct">✓</span>`
              : `<span class="fc-mark wrong">✗ <small>${escapeHtml(card.past)}</small></span>`
            ) : ''}
          </div>
          <div class="flashcard-input-row">
            <label>과거분사 (p.p.):</label>
            <input type="text"
                   class="flashcard-input"
                   id="fc-pp-${blockId}"
                   value="${escapeHtml(state.ppInput)}"
                   ${state.revealed ? 'disabled' : ''}
                   autocomplete="off"
                   autocapitalize="off"
                   placeholder="e.g. gone" />
            ${state.revealed ? (result.ppCorrect
              ? `<span class="fc-mark correct">✓</span>`
              : `<span class="fc-mark wrong">✗ <small>${escapeHtml(card.pp)}</small></span>`
            ) : ''}
          </div>
        </div>

        <div class="flashcard-actions">
          ${!state.revealed
            ? `<button class="ctrl-btn primary fc-submit">✓ 확인 (Check)</button>`
            : (state.idx < state.cards.length - 1
                ? `<button class="ctrl-btn primary fc-next">다음 카드 →</button>`
                : `<button class="ctrl-btn primary fc-finish">📊 결과 보기 (See results)</button>`)
          }
        </div>
      </div>
    `;

    // Wire inputs
    const pastInput = container.querySelector(`#fc-past-${blockId}`);
    const ppInput = container.querySelector(`#fc-pp-${blockId}`);
    if (pastInput) {
      pastInput.addEventListener('input', (e) => { state.pastInput = e.target.value; });
      pastInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); ppInput?.focus(); }
      });
    }
    if (ppInput) {
      ppInput.addEventListener('input', (e) => { state.ppInput = e.target.value; });
      ppInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); handleSubmit(); }
      });
    }

    const submitBtn = container.querySelector('.fc-submit');
    if (submitBtn) submitBtn.addEventListener('click', handleSubmit);

    const nextBtn = container.querySelector('.fc-next');
    if (nextBtn) nextBtn.addEventListener('click', handleNext);

    const finishBtn = container.querySelector('.fc-finish');
    if (finishBtn) finishBtn.addEventListener('click', handleFinish);

    // After submitting, Enter key advances to next card (or finish)
    // Listen on the card container so the keypress works regardless of focus
    if (state.revealed) {
      const handleEnterAdvance = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (nextBtn) handleNext();
          else if (finishBtn) handleFinish();
        }
      };
      // Attach to the card; clean up will happen on next render
      const card = container.querySelector('.flashcard-card');
      if (card) {
        card.tabIndex = -1;
        card.addEventListener('keydown', handleEnterAdvance);
        // Focus the advance button so Enter has somewhere natural to land
        setTimeout(() => {
          if (state.userInteracted) {
            (nextBtn || finishBtn)?.focus();
          }
        }, 50);
      }
    } else if (state.userInteracted) {
      // Only auto-focus the input if the user has already interacted with the deck
      // — prevents the page from jumping down on first lesson load
      setTimeout(() => {
        if (!state.pastInput && pastInput) pastInput.focus();
        else if (!state.ppInput && ppInput) ppInput.focus();
      }, 50);
    }
  }

  function handleSubmit() {
    state.userInteracted = true;
    const card = state.cards[state.idx];
    const pastCorrect = isCorrect(state.pastInput, card.past);
    const ppCorrect = isCorrect(state.ppInput, card.pp);
    state.results[state.idx] = {
      base: card.base,
      past: card.past,
      pp: card.pp,
      meaning: card.meaning || '',
      userPast: state.pastInput,
      userPp: state.ppInput,
      pastCorrect,
      ppCorrect
    };
    state.revealed = true;
    render();
  }

  function handleNext() {
    state.idx += 1;
    state.pastInput = '';
    state.ppInput = '';
    state.revealed = false;
    render();
  }

  function handleFinish() {
    state.finished = true;
    render();
  }

  function renderResults() {
    const total = state.results.length;
    const fullyCorrect = state.results.filter(r => r.pastCorrect && r.ppCorrect).length;
    const wrong = state.results.filter(r => !r.pastCorrect || !r.ppCorrect);
    const correct = state.results.filter(r => r.pastCorrect && r.ppCorrect);

    let scoreLabel, scoreClass;
    const pct = Math.round((fullyCorrect / total) * 100);
    if (pct === 100) { scoreLabel = '완벽해요! 🎉'; scoreClass = 'perfect'; }
    else if (pct >= 80) { scoreLabel = '아주 잘했어요! 👏'; scoreClass = 'great'; }
    else if (pct >= 50) { scoreLabel = '잘했어요. 조금 더 연습해봐요. 💪'; scoreClass = 'good'; }
    else { scoreLabel = '괜찮아요. 다시 한번 해봅시다! 🌱'; scoreClass = 'try-again'; }

    container.innerHTML = `
      <div class="flashcard-card">
        <div class="flashcard-results-header ${scoreClass}">
          <div class="fc-score-big">${fullyCorrect} / ${total}</div>
          <div class="fc-score-pct">${pct}%</div>
          <div class="fc-score-label">${scoreLabel}</div>
        </div>

        ${wrong.length > 0 ? `
          <div class="fc-results-section">
            <h4 class="fc-results-title wrong">❌ 다시 외워야 할 단어 (${wrong.length}개)</h4>
            <div class="fc-results-list">
              ${wrong.map(r => `
                <div class="fc-result-row wrong">
                  <div class="fc-result-base">${escapeHtml(r.base)}${r.meaning ? ` <span class="fc-meaning">(${escapeHtml(r.meaning)})</span>` : ''}</div>
                  <div class="fc-result-detail">
                    <div class="fc-result-line ${r.pastCorrect ? 'ok' : 'bad'}">
                      <span class="fc-result-label">과거:</span>
                      ${r.pastCorrect
                        ? `<span class="fc-correct">${escapeHtml(r.past)} ✓</span>`
                        : `<span class="fc-user">${escapeHtml(r.userPast || '(빈칸)')}</span> → <span class="fc-correct">${escapeHtml(r.past)}</span>`
                      }
                    </div>
                    <div class="fc-result-line ${r.ppCorrect ? 'ok' : 'bad'}">
                      <span class="fc-result-label">p.p.:</span>
                      ${r.ppCorrect
                        ? `<span class="fc-correct">${escapeHtml(r.pp)} ✓</span>`
                        : `<span class="fc-user">${escapeHtml(r.userPp || '(빈칸)')}</span> → <span class="fc-correct">${escapeHtml(r.pp)}</span>`
                      }
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${correct.length > 0 ? `
          <div class="fc-results-section">
            <h4 class="fc-results-title correct">✅ 잘 외운 단어 (${correct.length}개)</h4>
            <div class="fc-results-list compact">
              ${correct.map(r => `
                <div class="fc-result-row correct compact">
                  <span class="fc-result-base">${escapeHtml(r.base)}</span>
                  <span class="fc-result-arrow">→</span>
                  <span class="fc-correct">${escapeHtml(r.past)}, ${escapeHtml(r.pp)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="fc-actions-row">
          <button class="ctrl-btn fc-restart-all">↻ 처음부터 다시</button>
          ${wrong.length > 0
            ? `<button class="ctrl-btn primary fc-restart-wrong">📌 틀린 단어만 다시 (${wrong.length}개)</button>`
            : ''}
        </div>
      </div>
    `;

    container.querySelector('.fc-restart-all')?.addEventListener('click', () => {
      state.cards = shuffle(data.cards);
      state.idx = 0;
      state.pastInput = '';
      state.ppInput = '';
      state.revealed = false;
      state.results = [];
      state.finished = false;
      state.onlyWrong = false;
      render();
    });

    container.querySelector('.fc-restart-wrong')?.addEventListener('click', () => {
      // Re-drill only the cards he got wrong
      const wrongCards = state.results
        .filter(r => !r.pastCorrect || !r.ppCorrect)
        .map(r => ({ base: r.base, past: r.past, pp: r.pp, meaning: r.meaning }));
      state.cards = shuffle(wrongCards);
      state.idx = 0;
      state.pastInput = '';
      state.ppInput = '';
      state.revealed = false;
      state.results = [];
      state.finished = false;
      state.onlyWrong = true;
      render();
    });
  }

  render();
}

// ============================================================
// FLASHCARD CHOICE BLOCK
// Buttons instead of typing — user picks one of N options.
// Used for: noun countability classification (Ch4).
// ============================================================
function renderFlashcardChoiceBlock(container, data, blockId) {
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const state = {
    cards: shuffle(data.cards),
    idx: 0,
    chosen: null,          // index of chosen option, null if not answered yet
    revealed: false,
    results: [],           // {word, meaning, correctIndex, chosenIndex, isCorrect}
    finished: false,
    userInteracted: false
  };

  function render() {
    if (state.finished) {
      renderResults();
      return;
    }
    renderCard();
  }

  function renderCard() {
    const card = state.cards[state.idx];
    const total = state.cards.length;
    const cardNum = state.idx + 1;
    const result = state.revealed ? state.results[state.idx] : null;

    container.innerHTML = `
      <div class="flashcard-card">
        <div class="flashcard-header">
          <h4>🃏 ${escapeHtml(data.title)}</h4>
          <div class="flashcard-progress">${cardNum} / ${total}</div>
        </div>
        <p class="flashcard-instruction">${escapeHtml(data.instruction || '')}</p>

        <div class="flashcard-face">
          <div class="flashcard-label">${escapeHtml(data.faceLabel || '명사')}</div>
          <div class="flashcard-base">${escapeHtml(card.word)}</div>
          ${card.meaning ? `<div class="flashcard-meaning">${escapeHtml(card.meaning)}</div>` : ''}
        </div>

        <div class="flashcard-choices">
          ${data.options.map((opt, i) => {
            let cls = 'flashcard-choice-btn';
            if (state.revealed) {
              if (i === card.correctIndex) cls += ' correct';
              else if (i === state.chosen) cls += ' wrong';
              else cls += ' dim';
            }
            return `<button class="${cls}" data-choice="${i}" ${state.revealed ? 'disabled' : ''}>${escapeHtml(opt)}</button>`;
          }).join('')}
        </div>

        ${state.revealed ? `
          <div class="flashcard-feedback ${result.isCorrect ? 'correct' : 'wrong'}">
            ${result.isCorrect
              ? `✅ 정답입니다!`
              : `❌ 정답은 <strong>${escapeHtml(data.options[card.correctIndex])}</strong>입니다.`}
            ${card.note ? `<br/><small>${escapeHtml(card.note)}</small>` : ''}
          </div>
        ` : ''}

        <div class="flashcard-actions">
          ${state.revealed
            ? (state.idx < state.cards.length - 1
                ? `<button class="ctrl-btn primary fc-next">다음 카드 →</button>`
                : `<button class="ctrl-btn primary fc-finish">📊 결과 보기 (See results)</button>`)
            : ''}
        </div>
      </div>
    `;

    container.querySelectorAll('.flashcard-choice-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.disabled) return;
        const choice = parseInt(btn.dataset.choice);
        handleChoice(choice);
      });
    });

    const nextBtn = container.querySelector('.fc-next');
    if (nextBtn) nextBtn.addEventListener('click', handleNext);

    const finishBtn = container.querySelector('.fc-finish');
    if (finishBtn) finishBtn.addEventListener('click', handleFinish);

    // After answering, Enter advances to next card
    if (state.revealed) {
      const handleEnterAdvance = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          if (nextBtn) handleNext();
          else if (finishBtn) handleFinish();
        }
      };
      const card = container.querySelector('.flashcard-card');
      if (card) {
        card.tabIndex = -1;
        card.addEventListener('keydown', handleEnterAdvance);
        if (state.userInteracted) {
          setTimeout(() => (nextBtn || finishBtn)?.focus(), 50);
        }
      }
    }
  }

  function handleChoice(choiceIdx) {
    state.userInteracted = true;
    const card = state.cards[state.idx];
    state.chosen = choiceIdx;
    state.results[state.idx] = {
      word: card.word,
      meaning: card.meaning || '',
      correctIndex: card.correctIndex,
      chosenIndex: choiceIdx,
      isCorrect: choiceIdx === card.correctIndex,
      note: card.note || ''
    };
    state.revealed = true;
    render();
  }

  function handleNext() {
    state.idx += 1;
    state.chosen = null;
    state.revealed = false;
    render();
  }

  function handleFinish() {
    state.finished = true;
    render();
  }

  function renderResults() {
    const total = state.results.length;
    const correct = state.results.filter(r => r.isCorrect);
    const wrong = state.results.filter(r => !r.isCorrect);
    const pct = Math.round((correct.length / total) * 100);

    let scoreLabel, scoreClass;
    if (pct === 100) { scoreLabel = '완벽해요! 🎉'; scoreClass = 'perfect'; }
    else if (pct >= 80) { scoreLabel = '아주 잘했어요! 👏'; scoreClass = 'great'; }
    else if (pct >= 50) { scoreLabel = '잘했어요. 조금 더 연습해봐요. 💪'; scoreClass = 'good'; }
    else { scoreLabel = '괜찮아요. 다시 한번 해봅시다! 🌱'; scoreClass = 'try-again'; }

    container.innerHTML = `
      <div class="flashcard-card">
        <div class="flashcard-results-header ${scoreClass}">
          <div class="fc-score-big">${correct.length} / ${total}</div>
          <div class="fc-score-pct">${pct}%</div>
          <div class="fc-score-label">${scoreLabel}</div>
        </div>

        ${wrong.length > 0 ? `
          <div class="fc-results-section">
            <h4 class="fc-results-title wrong">❌ 다시 확인해야 할 단어 (${wrong.length}개)</h4>
            <div class="fc-results-list">
              ${wrong.map(r => `
                <div class="fc-result-row wrong">
                  <div class="fc-result-base">${escapeHtml(r.word)}${r.meaning ? ` <span class="fc-meaning">(${escapeHtml(r.meaning)})</span>` : ''}</div>
                  <div class="fc-result-detail">
                    <div class="fc-result-line bad">
                      <span class="fc-result-label">선택:</span>
                      <span class="fc-user">${escapeHtml(data.options[r.chosenIndex])}</span>
                      <span class="fc-result-arrow">→</span>
                      <span class="fc-correct">${escapeHtml(data.options[r.correctIndex])}</span>
                    </div>
                    ${r.note ? `<div class="fc-result-note">${escapeHtml(r.note)}</div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        ${correct.length > 0 ? `
          <div class="fc-results-section">
            <h4 class="fc-results-title correct">✅ 잘 맞춘 단어 (${correct.length}개)</h4>
            <div class="fc-results-list compact">
              ${correct.map(r => `
                <div class="fc-result-row correct compact">
                  <span class="fc-result-base">${escapeHtml(r.word)}</span>
                  <span class="fc-result-arrow">→</span>
                  <span class="fc-correct">${escapeHtml(data.options[r.correctIndex])}</span>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="fc-actions-row">
          <button class="ctrl-btn fc-restart-all">↻ 처음부터 다시</button>
          ${wrong.length > 0
            ? `<button class="ctrl-btn primary fc-restart-wrong">📌 틀린 단어만 다시 (${wrong.length}개)</button>`
            : ''}
        </div>
      </div>
    `;

    container.querySelector('.fc-restart-all')?.addEventListener('click', () => {
      state.cards = shuffle(data.cards);
      state.idx = 0;
      state.chosen = null;
      state.revealed = false;
      state.results = [];
      state.finished = false;
      render();
    });

    container.querySelector('.fc-restart-wrong')?.addEventListener('click', () => {
      const wrongCards = state.results
        .filter(r => !r.isCorrect)
        .map(r => {
          // Find the original card in data.cards by word
          return data.cards.find(c => c.word === r.word);
        })
        .filter(Boolean);
      state.cards = shuffle(wrongCards);
      state.idx = 0;
      state.chosen = null;
      state.revealed = false;
      state.results = [];
      state.finished = false;
      render();
    });
  }

  render();
}


// ============================================================
// Call Gemini to check a practice answer
// ============================================================
async function checkPracticeAnswer(type, q, userAnswer, apiKey) {
  // Build a type-specific prompt for the AI
  let userPrompt = '';

  if (type === 'fill-blank') {
    userPrompt = `Question: "${q.prompt}" (Korean meaning)
Sentence with blank: "${q.sentence}"
Expected answer: "${q.answer}"
Student's answer: "${userAnswer}"

The student needs to fill the blank with a single English word. Check if their answer is correct.`;
  } else if (type === 'complete-sentence') {
    userPrompt = `Korean meaning: "${q.prompt}"
Hint words: ${q.hint || '(none)'}
Template: "${q.template || ''}"
Expected pattern: "${q.expectedPattern}"
Student's full English sentence: "${userAnswer}"

Check if the student's sentence correctly expresses the Korean meaning and is grammatically correct. Minor variations in wording are OK as long as the grammar and meaning match.`;
  } else if (type === 'correction') {
    userPrompt = `Original (incorrect) sentence: "${q.sentence}"
Correct version: "${q.correctedSentence}"
Why it was wrong: ${q.explanation}
Student's corrected sentence: "${userAnswer}"

Check if the student successfully corrected the grammar error. Other valid corrections of the same error are acceptable.`;
  } else if (type === 'translation') {
    userPrompt = `Korean sentence: "${q.korean}"
Hint words: ${q.hint || '(none)'}
Expected pattern: "${q.expectedPattern}"
Student's English translation: "${userAnswer}"

Check if the student's translation correctly expresses the Korean meaning with proper grammar. Minor word variations are fine.`;
  }

  const systemInstruction = `You are a friendly English grammar tutor for a Korean speaker who is a beginner learning English. You check practice answers and explain in Korean.

Respond ONLY with valid JSON (no markdown, no code fences) in this exact structure:
{
  "ok": true or false,
  "feedback": "Brief feedback in Korean (한국어). If correct: praise. If incorrect: explain what's wrong and show the correct answer.",
  "correction": "The correct version of what the student wrote (or empty string if they were correct)"
}

Rules:
- Be encouraging. The student is a beginner.
- Write feedback in Korean (한국어).
- If the answer is correct OR an acceptable variation, set ok: true.
- If incorrect, set ok: false. Briefly explain why in Korean, then show the correct version.
- Keep feedback under 80 Korean characters when possible.
- For fill-blank: only the exact correct word (or close variant) counts as correct.
- For other types: focus on grammar correctness, not exact wording match.`;

  const body = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [{ parts: [{ text: userPrompt }] }],
    generationConfig: {
      temperature: 0.2,
      responseMimeType: "application/json"
    }
  };

  // Use the same model fallback as write.js
  const models = ['gemini-2.5-flash-lite', 'gemini-2.5-flash', 'gemini-2.0-flash-lite', 'gemini-2.0-flash'];
  const lastWorking = localStorage.getItem('jake-toeic-working-model');
  const tryOrder = lastWorking ? [lastWorking, ...models.filter(m => m !== lastWorking)] : models;

  let lastError = null;
  for (const model of tryOrder) {
    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const respData = await response.json();
        const text = respData?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty response');
        const parsed = JSON.parse(text);
        localStorage.setItem('jake-toeic-working-model', model);

        let message = escapeHtml(parsed.feedback || '');
        if (parsed.correction && parsed.ok === false) {
          message += `<br/><strong>정답:</strong> ${escapeHtml(parsed.correction)}`;
        }

        return { ok: parsed.ok === true, message };
      }

      const errText = await response.text();
      lastError = new Error(`API ${response.status} (${model}): ${errText}`);
      if (response.status !== 429 && response.status !== 404) throw lastError;
    } catch (err) {
      lastError = err;
      if (err.message?.includes('API ') && !err.message.includes('429') && !err.message.includes('404')) throw err;
    }
  }

  throw lastError || new Error('All models failed');
}

// Public function so the Write tab can jump to a specific lesson
function jumpToLessonByName(lessonName) {
  // Map old lesson names from Write tab feedback to new indices
  const lessonMap = {
    '어순': 0,
    '문장 구조': 1,
    '관사': 2,
    '시제': 3,
    '전치사': 4,
    'be동사': 5,
    '대명사': 6,
    '단수와 복수': 7,
    '복수': 7,
    '미래': 8,
    'will': 8,
    '시간 표현': 9,
    '질문': 10,
    '의문문': 10,
    '부정문': 11,
    '복합문': 12,
    'VCOP': 13
  };
  const idx = lessonMap[lessonName];
  if (idx === undefined) return;
  activeLessonIdx = idx;
  switchTab('grammar');
}

// ============================================================
// LEARN TAB - Spaced Repetition Flashcards
// ============================================================
function initLearn() {
  // Wire filters once
  if (!$('#tab-learn').dataset.wired) {
    $$('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.learnCat = btn.dataset.cat;
        buildLearnQueue();
      });
    });
    $$('.srs-mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.srs-mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.learnSrsMode = btn.dataset.srs;
        buildLearnQueue();
      });
    });
    $('#tab-learn').dataset.wired = '1';
  }

  // Sync UI to state
  $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === state.learnCat));
  $$('.srs-mode-btn').forEach(b => b.classList.toggle('active', b.dataset.srs === state.learnSrsMode));

  buildLearnQueue();
}

function buildLearnQueue() {
  state.learnQueue = shuffle(getDueCards(progress, VOCAB, state.learnSrsMode, state.learnCat));
  state.learnIndex = 0;
  state.learnFlipped = false;
  renderLearn();
}

function renderLearn() {
  const area = $('#learn-area');
  const total = state.learnQueue.length;

  if (total === 0) {
    area.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🎉</div>
        <h3>모두 완료!</h3>
        <p>이 카테고리의 카드를 모두 복습했어요. 다른 카테고리를 선택하거나 내일 다시 오세요.</p>
      </div>
    `;
    $('#learn-counter').textContent = '0 / 0';
    $('#learn-progress-fill').style.width = '0%';
    return;
  }

  if (state.learnIndex >= total) {
    area.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🏆</div>
        <h3>잘했어요!</h3>
        <p>오늘의 학습 세션을 완료했습니다.<br/>매일 꾸준히 하면 토익 140점을 달성할 수 있어요!</p>
        <button class="cta-btn" onclick="buildLearnQueue()">↻ 다시 시작</button>
      </div>
    `;
    $('#learn-counter').textContent = `${total} / ${total}`;
    $('#learn-progress-fill').style.width = '100%';
    return;
  }

  const card = state.learnQueue[state.learnIndex];
  const cardState = getCardState(progress, card.id);
  const statusBadge = {
    'new': '<span class="status-badge new">✨ 새 카드</span>',
    'learning': '<span class="status-badge learning">📚 학습중</span>',
    'review': '<span class="status-badge review">🔄 복습</span>',
    'mastered': '<span class="status-badge mastered">⭐ 완료</span>'
  }[cardState.status] || '';

  $('#learn-counter').textContent = `${state.learnIndex + 1} / ${total}`;
  $('#learn-progress-fill').style.width = `${((state.learnIndex) / total) * 100}%`;

  if (!state.learnFlipped) {
    // Front: phrase + meaning, prompt to think of example
    area.innerHTML = `
      <div class="flash-card" id="flash-card">
        <div class="flash-top">
          <span class="cat-badge cat-${card.cat}">${card.cat}</span>
          ${statusBadge}
        </div>
        <div class="flash-body">
          <p class="flash-label">표현 (Phrase)</p>
          <p class="flash-phrase">${escapeHtml(card.phrase)}</p>
          <p class="flash-meaning">${escapeHtml(card.meaning)}</p>
        </div>
        <div class="flash-footer">
          <p class="flash-hint">💭 머릿속으로 영어 예문을 떠올려 보세요</p>
          <button class="flip-btn" onclick="flipCard()">정답 보기 (Show answer) ↓</button>
        </div>
      </div>
    `;
  } else {
    // Back: full sentence + Korean + rating buttons
    area.innerHTML = `
      <div class="flash-card flipped" id="flash-card">
        <div class="flash-top">
          <span class="cat-badge cat-${card.cat}">${card.cat}</span>
          ${statusBadge}
          <button class="speak-btn" onclick="speakSentence('${card.en.replace(/'/g, "\\'")}')" title="Listen">🔊</button>
        </div>
        <div class="flash-body">
          <p class="flash-label">예문 (Example)</p>
          <p class="flash-en">${escapeHtml(card.en)}</p>
          <div class="flash-divider"></div>
          <p class="flash-ko">${escapeHtml(card.ko)}</p>
          <p class="flash-phrase-small">📌 ${escapeHtml(card.phrase)}</p>
        </div>
        <div class="flash-footer">
          <p class="flash-rate-prompt">얼마나 잘 기억했나요?</p>
          <div class="rate-buttons">
            <button class="rate-btn rate-again" onclick="rateCard(0)">
              <span class="rate-emoji">😣</span>
              <span class="rate-label">다시</span>
              <span class="rate-sub">Again</span>
            </button>
            <button class="rate-btn rate-hard" onclick="rateCard(3)">
              <span class="rate-emoji">😐</span>
              <span class="rate-label">어려움</span>
              <span class="rate-sub">Hard</span>
            </button>
            <button class="rate-btn rate-good" onclick="rateCard(4)">
              <span class="rate-emoji">🙂</span>
              <span class="rate-label">좋음</span>
              <span class="rate-sub">Good</span>
            </button>
            <button class="rate-btn rate-easy" onclick="rateCard(5)">
              <span class="rate-emoji">😄</span>
              <span class="rate-label">쉬움</span>
              <span class="rate-sub">Easy</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

function flipCard() {
  state.learnFlipped = true;
  renderLearn();
  // Auto-play sentence audio when card flips
  const card = state.learnQueue[state.learnIndex];
  if (card) speakSentence(card.en);
}

function rateCard(quality) {
  const card = state.learnQueue[state.learnIndex];
  if (!card) return;
  reviewCard(progress, card.id, quality);

  if (quality < 3) {
    // Put it back in the queue (a few cards later)
    const insertAt = Math.min(state.learnIndex + 3, state.learnQueue.length);
    state.learnQueue.splice(insertAt, 0, card);
    showToast('나중에 다시 보여드릴게요 (See again soon)');
  } else if (quality === 5) {
    showToast('좋아요! (Excellent!)');
  } else if (quality === 4) {
    showToast('잘했어요! (Good job!)');
  }

  state.learnIndex += 1;
  state.learnFlipped = false;
  renderLearn();

  // Update header stats
  const counts = countByStatus(progress, VOCAB);
  $('#streak-num').textContent = progress.streak || 0;
  $('#mastered-num').textContent = counts.mastered;
}

// Expose for onclick
window.flipCard = flipCard;
window.rateCard = rateCard;
window.buildLearnQueue = buildLearnQueue;

// ============================================================
// QUIZ TAB - Multiple choice
// ============================================================
function initQuiz() {
  if (!$('#tab-quiz').dataset.wired) {
    $$('.quiz-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.quiz-cat').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.quizCat = btn.dataset.cat;
        nextQuiz();
      });
    });
    $$('.quiz-dir').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.quiz-dir').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.quizDir = btn.dataset.dir;
        nextQuiz();
      });
    });
    $('#tab-quiz').dataset.wired = '1';
  }
  $$('.quiz-cat').forEach(b => b.classList.toggle('active', b.dataset.cat === state.quizCat));
  $$('.quiz-dir').forEach(b => b.classList.toggle('active', b.dataset.dir === state.quizDir));
  updateQuizStats();
  nextQuiz();
}

function updateQuizStats() {
  $('#quiz-correct').textContent = state.quizCorrect;
  $('#quiz-wrong').textContent = state.quizWrong;
  const total = state.quizCorrect + state.quizWrong;
  $('#quiz-acc').textContent = total === 0 ? '—' : `${Math.round((state.quizCorrect / total) * 100)}%`;
}

function nextQuiz() {
  let pool = state.quizCat === 'all' ? VOCAB.slice() : VOCAB.filter(c => c.cat === state.quizCat);
  if (pool.length < 4) {
    $('#quiz-area').innerHTML = `<div class="empty-state"><div class="empty-icon">⚠️</div><p>이 카테고리는 카드가 부족해요. 다른 카테고리를 선택하세요.</p></div>`;
    return;
  }

  const correct = pool[Math.floor(Math.random() * pool.length)];
  const wrongs = shuffle(VOCAB.filter(c => c.id !== correct.id)).slice(0, 3);
  const options = shuffle([correct, ...wrongs]);

  state.quizCurrent = correct;
  state.quizAnswered = false;

  const isKoEn = state.quizDir === 'ko-en';
  const promptText = isKoEn ? correct.ko : correct.en;
  const promptLabel = isKoEn ? '아래 한국어 문장을 영어로 옮기면?' : 'What does this English sentence mean?';

  const optionsHtml = options.map(opt => {
    const text = isKoEn ? opt.en : opt.ko;
    return `<button class="quiz-option" data-id="${opt.id}">${escapeHtml(text)}</button>`;
  }).join('');

  $('#quiz-area').innerHTML = `
    <div class="quiz-card">
      <div class="quiz-prompt-label">${promptLabel}</div>
      <p class="quiz-prompt-text">${escapeHtml(promptText)}</p>
      ${!isKoEn ? `<button class="speak-btn" onclick="speakSentence('${correct.en.replace(/'/g, "\\'")}')" style="margin-top:8px">🔊 듣기</button>` : ''}
      <div class="quiz-options">${optionsHtml}</div>
      <div id="quiz-feedback" class="quiz-feedback"></div>
    </div>
  `;

  $$('.quiz-option').forEach(btn => {
    btn.addEventListener('click', () => handleQuizAnswer(btn));
  });
}

function handleQuizAnswer(btn) {
  if (state.quizAnswered) return;
  state.quizAnswered = true;
  const isCorrect = btn.dataset.id === state.quizCurrent.id;

  $$('.quiz-option').forEach(b => {
    b.disabled = true;
    if (b.dataset.id === state.quizCurrent.id) b.classList.add('correct');
  });

  if (isCorrect) {
    state.quizCorrect += 1;
    $('#quiz-feedback').innerHTML = `
      <div class="feedback-correct">
        ✅ 정답입니다! 잘했어요!
        <button class="ctrl-btn primary" style="margin-top:12px;width:100%" onclick="nextQuiz()">다음 문제 →</button>
      </div>
    `;
    // Reward correct quiz answers in SRS too
    reviewCard(progress, state.quizCurrent.id, 4);
  } else {
    btn.classList.add('wrong');
    state.quizWrong += 1;
    const c = state.quizCurrent;
    $('#quiz-feedback').innerHTML = `
      <div class="feedback-wrong">
        ❌ 다음 번에 더 잘할 수 있어요!
        <div class="feedback-detail">
          <p><strong>한국어:</strong> ${escapeHtml(c.ko)}</p>
          <p><strong>English:</strong> ${escapeHtml(c.en)}</p>
        </div>
        <button class="ctrl-btn primary" style="margin-top:12px;width:100%" onclick="nextQuiz()">다음 문제 →</button>
      </div>
    `;
    // Mark as needing review
    reviewCard(progress, state.quizCurrent.id, 2);
  }
  updateQuizStats();

  // Update header
  const counts = countByStatus(progress, VOCAB);
  $('#mastered-num').textContent = counts.mastered;
}

window.nextQuiz = nextQuiz;

// ============================================================
// BUILD TAB - Sentence builder
// ============================================================
function initBuild() {
  if (!$('#tab-build').dataset.wired) {
    $('#build-clear').addEventListener('click', () => renderBuild());
    $('#build-hint').addEventListener('click', () => {
      const q = BUILD_QUESTIONS[state.buildIndex];
      showToast(`첫 단어: "${q.answer[0]}"`, 3000);
    });
    $('#build-next').addEventListener('click', () => {
      state.buildIndex = (state.buildIndex + 1) % BUILD_QUESTIONS.length;
      renderBuild();
    });
    $('#tab-build').dataset.wired = '1';
  }
  $('#build-total').textContent = BUILD_QUESTIONS.length;
  renderBuild();
}

function renderBuild() {
  const q = BUILD_QUESTIONS[state.buildIndex];
  state.buildAnswer = [];
  $('#build-num').textContent = state.buildIndex + 1;
  $('#build-score').textContent = state.buildScore;

  $('#build-area').innerHTML = `
    <div class="build-card">
      <p class="build-ko">${escapeHtml(q.ko)}</p>
      <p class="build-hint">💡 힌트: ${escapeHtml(q.hint)}</p>

      <div class="build-answer-area" id="build-answer-area">
        <span class="build-placeholder">아래 단어를 순서대로 클릭하세요</span>
      </div>

      <div class="build-bank">
        ${shuffle(q.words).map((w, i) =>
          `<button class="build-word" data-word="${escapeHtml(w)}" data-i="${i}">${escapeHtml(w)}</button>`
        ).join('')}
      </div>

      <div id="build-feedback" class="build-feedback"></div>
    </div>
  `;

  $$('.build-word').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.disabled) return;
      state.buildAnswer.push(btn.dataset.word);
      btn.disabled = true;
      btn.classList.add('used');
      updateBuildAnswer();
    });
  });
}

function updateBuildAnswer() {
  const q = BUILD_QUESTIONS[state.buildIndex];
  const area = $('#build-answer-area');

  if (state.buildAnswer.length === 0) {
    area.innerHTML = '<span class="build-placeholder">아래 단어를 순서대로 클릭하세요</span>';
    return;
  }

  area.innerHTML = state.buildAnswer.map(w =>
    `<span class="build-chip">${escapeHtml(w)}</span>`
  ).join(' ');

  if (state.buildAnswer.length === q.answer.length) {
    const correct = state.buildAnswer.every((w, i) => w === q.answer[i]);
    const fb = $('#build-feedback');
    if (correct) {
      state.buildScore += 1;
      $('#build-score').textContent = state.buildScore;
      area.classList.add('correct');
      fb.innerHTML = `
        <div class="feedback-correct">
          ✅ 정답입니다! 잘했어요!
          <button class="speak-btn" onclick="speakSentence('${q.answer.join(' ').replace(/'/g, "\\'")}')" style="margin-top:8px">🔊 들어보기</button>
        </div>
      `;
    } else {
      area.classList.add('wrong');
      fb.innerHTML = `
        <div class="feedback-wrong">
          ❌ 다시 시도해보세요.
          <div class="feedback-detail">
            <p><strong>정답:</strong> ${escapeHtml(q.answer.join(' '))}</p>
          </div>
        </div>
      `;
    }
  }
}

// ============================================================
// SPEAK TAB - Audio + shadowing
// ============================================================
function initSpeak() {
  if (!$('#tab-speak').dataset.wired) {
    $$('.speak-cat').forEach(btn => {
      btn.addEventListener('click', () => {
        $$('.speak-cat').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.speakCat = btn.dataset.cat;
        buildSpeakQueue();
      });
    });
    $('#speak-speed').addEventListener('input', e => {
      state.speakSpeed = parseFloat(e.target.value);
      $('#speed-val').textContent = state.speakSpeed.toFixed(2);
    });
    $('#speak-prev').addEventListener('click', () => {
      if (state.speakIndex > 0) state.speakIndex -= 1;
      renderSpeak();
    });
    $('#speak-next').addEventListener('click', () => {
      if (state.speakIndex < state.speakQueue.length - 1) state.speakIndex += 1;
      renderSpeak();
    });
    $('#speak-play').addEventListener('click', () => {
      const card = state.speakQueue[state.speakIndex];
      if (card) speakSentence(card.en);
    });
    $('#tab-speak').dataset.wired = '1';
  }
  buildSpeakQueue();
}

function buildSpeakQueue() {
  state.speakQueue = state.speakCat === 'all' ? VOCAB.slice() : VOCAB.filter(c => c.cat === state.speakCat);
  state.speakIndex = 0;
  renderSpeak();
}

function renderSpeak() {
  const total = state.speakQueue.length;
  if (total === 0) {
    $('#speak-area').innerHTML = '<div class="empty-state"><p>카드가 없습니다.</p></div>';
    return;
  }
  const card = state.speakQueue[state.speakIndex];
  $('#speak-area').innerHTML = `
    <div class="speak-card">
      <div class="speak-counter">${state.speakIndex + 1} / ${total}</div>
      <span class="cat-badge cat-${card.cat}">${card.cat}</span>
      <p class="speak-en">${escapeHtml(card.en)}</p>
      <p class="speak-ko">${escapeHtml(card.ko)}</p>
      <p class="speak-phrase">📌 ${escapeHtml(card.phrase)}</p>
    </div>
  `;
}

// ============================================================
// Speech synthesis (Web Speech API)
// ============================================================
function speakSentence(text) {
  if (!('speechSynthesis' in window)) {
    showToast('Speech not supported on this device');
    return;
  }
  speechSynthesis.cancel(); // stop any ongoing speech
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = state.speakSpeed || 0.85;
  utter.pitch = 1;

  // Try to pick a good English voice
  const voices = speechSynthesis.getVoices();
  const enVoice = voices.find(v => v.lang.startsWith('en-US')) || voices.find(v => v.lang.startsWith('en'));
  if (enVoice) utter.voice = enVoice;

  speechSynthesis.speak(utter);
}
window.speakSentence = speakSentence;

// Some browsers load voices async
if ('speechSynthesis' in window) {
  speechSynthesis.onvoiceschanged = () => {};
}

// ============================================================
// Reset progress
// ============================================================
$('#reset-btn').addEventListener('click', () => {
  if (confirm('정말로 모든 진도를 초기화하시겠습니까?\n(Reset all progress?)')) {
    resetProgress();
    progress = loadProgress();
    state.quizCorrect = 0;
    state.quizWrong = 0;
    state.buildScore = 0;
    showToast('진도가 초기화되었습니다');
    switchTab('home');
  }
});

// ============================================================
// Initial render
// ============================================================
renderHome();

// Update streak when app opens (if it's a new day, this will adjust)
// Actually only update streak when they actually study a card.
