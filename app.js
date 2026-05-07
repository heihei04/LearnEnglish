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
let activeLessonIdx = 0;
function renderGrammar() {
  $$('.lesson-tab').forEach(b => {
    b.classList.toggle('active', parseInt(b.dataset.lesson) === activeLessonIdx);
  });
  $('#lesson-content').innerHTML = LESSONS[activeLessonIdx];
}
$$('.lesson-tab').forEach(btn => {
  btn.addEventListener('click', () => {
    activeLessonIdx = parseInt(btn.dataset.lesson);
    renderGrammar();
  });
});

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
