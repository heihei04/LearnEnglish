// ============================================================
// Write tab — AI grammar checker using Google Gemini
// ============================================================

const API_KEY_STORAGE = 'jake-toeic-gemini-key';
const HISTORY_STORAGE = 'jake-toeic-write-history';
// Models to try in order. Free-tier availability changes — fall back if one fails.
const GEMINI_MODELS = [
  'gemini-2.5-flash-lite',  // Currently most reliable on free tier
  'gemini-2.5-flash',       // Backup
  'gemini-2.0-flash-lite',  // Older backup
  'gemini-2.0-flash'        // Last resort
];
const GEMINI_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

// ============================================================
// Writing prompts — categorized by difficulty
// ============================================================
const WRITE_PROMPTS = {
  beginner: [
    {ko:'당신이 매일 무엇을 하는지 한 문장으로 쓰세요.', en:'Write one sentence about what you do every day.'},
    {ko:'어제 무엇을 했는지 쓰세요. (과거 시제 사용)', en:'Write what you did yesterday. (Use past tense)'},
    {ko:'좋아하는 음식에 대해 한 문장으로 쓰세요.', en:'Write one sentence about your favorite food.'},
    {ko:'당신의 가족을 소개하는 문장을 쓰세요.', en:'Write a sentence introducing your family.'},
    {ko:'주말에 무엇을 하는지 쓰세요.', en:'Write what you do on weekends.'},
    {ko:'오늘 아침에 무엇을 먹었는지 쓰세요. (과거 시제)', en:'Write what you ate for breakfast today. (Past tense)'},
    {ko:'친구와 무엇을 하는지 쓰세요.', en:'Write what you do with your friend.'},
    {ko:'어떻게 학교/직장에 가는지 쓰세요.', en:'Write how you go to school/work.'},
    {ko:'어디에 살고 있는지 쓰세요.', en:'Write where you live.'},
    {ko:'몇 시에 일어나는지 쓰세요.', en:'Write what time you wake up.'},
    {ko:'어떤 운동을 좋아하는지 쓰세요.', en:'Write what kind of exercise you like.'},
    {ko:'영화 보러 자주 가는지 쓰세요.', en:'Write whether you go to the movies often.'}
  ],
  intermediate: [
    {ko:'어제 한 일과 그 이유를 두 문장으로 쓰세요.', en:'Write two sentences about what you did yesterday and why.'},
    {ko:'좋아하는 취미와 그 취미를 좋아하는 이유를 쓰세요.', en:'Write about your hobby and why you like it.'},
    {ko:'최근에 갔던 여행에 대해 쓰세요. (과거 시제)', en:'Write about a recent trip you took.'},
    {ko:'미래의 계획을 두 문장으로 쓰세요.', en:'Write two sentences about your future plans.'},
    {ko:'친구를 처음 만났을 때를 쓰세요.', en:'Write about when you first met your friend.'},
    {ko:'요리할 수 있는 음식과 만드는 방법을 쓰세요.', en:'Write about food you can cook and how to make it.'},
    {ko:'당신의 직업이나 공부에 대해 두 문장으로 쓰세요.', en:'Write two sentences about your job or studies.'},
    {ko:'좋아하는 영화나 책에 대해 쓰세요.', en:'Write about a movie or book you like.'},
    {ko:'어제 회의나 수업이 있었으면 무엇을 했는지 쓰세요.', en:'Write what you did if you had a meeting or class yesterday.'},
    {ko:'당신이 자주 가는 카페나 식당에 대해 쓰세요.', en:'Write about a cafe or restaurant you often go to.'}
  ],
  free: [
    {ko:'자유롭게 영어 문장을 쓰세요. 어떤 문장이든 좋습니다.', en:'Write any English sentence freely.'}
  ]
};

let writeState = {
  difficulty: 'beginner',
  promptIdx: 0,
  currentPrompt: null,
  history: []
};

// ============================================================
// Storage
// ============================================================
function getApiKey() {
  return localStorage.getItem(API_KEY_STORAGE);
}
function setApiKey(k) {
  localStorage.setItem(API_KEY_STORAGE, k);
}
function clearApiKey() {
  localStorage.removeItem(API_KEY_STORAGE);
}
function loadWriteHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_STORAGE);
    return raw ? JSON.parse(raw) : [];
  } catch(e) { return []; }
}
function saveWriteHistory(h) {
  try {
    // Keep only last 20 entries
    const trimmed = h.slice(-20);
    localStorage.setItem(HISTORY_STORAGE, JSON.stringify(trimmed));
  } catch(e) {}
}

// ============================================================
// Init
// ============================================================
function initWrite() {
  if (!document.getElementById('tab-write').dataset.wired) {
    // Save API key
    document.getElementById('save-api-key').addEventListener('click', handleSaveKey);
    document.getElementById('reset-api-key').addEventListener('click', handleResetKey);

    // Difficulty buttons
    document.querySelectorAll('.diff-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        writeState.difficulty = btn.dataset.diff;
        showNewPrompt();
      });
    });

    document.getElementById('new-prompt-btn').addEventListener('click', showNewPrompt);
    document.getElementById('write-clear-btn').addEventListener('click', () => {
      document.getElementById('write-input').value = '';
      document.getElementById('write-feedback-area').innerHTML = '';
    });
    document.getElementById('write-check-btn').addEventListener('click', handleCheck);

    document.getElementById('tab-write').dataset.wired = '1';
  }

  // Load history
  writeState.history = loadWriteHistory();

  // Show setup or main UI
  if (getApiKey()) {
    document.getElementById('write-setup').style.display = 'none';
    document.getElementById('write-main').style.display = 'block';
    showNewPrompt();
    renderWriteHistory();
  } else {
    document.getElementById('write-setup').style.display = 'block';
    document.getElementById('write-main').style.display = 'none';
  }
}

function handleSaveKey() {
  const input = document.getElementById('api-key-input');
  const key = input.value.trim();
  if (!key) {
    showToast('API 키를 입력해주세요');
    return;
  }
  if (!key.startsWith('AIza')) {
    showToast('잘못된 키 형식입니다. AIza로 시작해야 합니다.');
    return;
  }
  setApiKey(key);
  input.value = '';
  showToast('✓ 저장되었습니다!');
  initWrite();
}

function handleResetKey() {
  if (confirm('API 키를 변경하시겠습니까?\n(Change API key?)')) {
    clearApiKey();
    initWrite();
  }
}

// ============================================================
// Prompts
// ============================================================
function showNewPrompt() {
  const prompts = WRITE_PROMPTS[writeState.difficulty];
  // Random different prompt
  let idx;
  do {
    idx = Math.floor(Math.random() * prompts.length);
  } while (prompts.length > 1 && idx === writeState.promptIdx);
  writeState.promptIdx = idx;
  writeState.currentPrompt = prompts[idx];

  document.getElementById('write-prompt-text').textContent = writeState.currentPrompt.ko;
  document.getElementById('write-prompt-en').textContent = writeState.currentPrompt.en;
  document.getElementById('write-input').value = '';
  document.getElementById('write-feedback-area').innerHTML = '';
}

// ============================================================
// API call to Gemini
// ============================================================
async function checkSentence(userSentence, prompt) {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('No API key');

  const systemInstruction = `You are a friendly English grammar tutor for a Korean speaker who is a beginner learning English for the TOEIC Speaking test.

The student is given a writing prompt (in Korean) and writes a sentence in English. Your job is to check their grammar and explain in Korean (한국어).

Their grammar lessons covered:
1. 어순 (word order): English is Subject-Verb-Object, not Korean's Subject-Object-Verb
2. 문장 구조: every sentence needs a subject + verb (and often an object)
3. 관사 (articles): a/an/the are required before most nouns
4. 시제 (tenses): present (I take), past (I took), present continuous (I am taking)
5. 전치사 (prepositions): in/on/at, to/from, by/with
6. be동사: am/is/are usage

Respond ONLY with valid JSON (no markdown, no code fences) in this exact structure:
{
  "isCorrect": true or false,
  "verdict": "한국어로 간단한 평가 (e.g. '완벽해요!' or '거의 다 맞았어요')",
  "corrected": "the corrected English sentence (or same as input if already correct)",
  "errors": [
    {
      "issue": "한국어로 어떤 문제인지 설명 (e.g. '동사가 빠졌습니다')",
      "rule": "관련 문법 규칙 in Korean (e.g. '영어 문장에는 항상 동사가 필요합니다')",
      "lesson": "어순" or "문장 구조" or "관사" or "시제" or "전치사" or "be동사",
      "example": "a correct example sentence in English with Korean translation"
    }
  ],
  "praise": "한국어로 잘한 부분 칭찬 (e.g. '주어와 목적어 순서가 정확해요')",
  "tip": "한국어로 다음에 더 잘하기 위한 팁 (optional, can be empty string)"
}

Rules:
- If the sentence is grammatically correct, set isCorrect: true, errors: [], and give warm praise.
- If there are errors, set isCorrect: false. List each distinct error in the errors array.
- Be encouraging — this is a beginner. Don't overwhelm with many errors; focus on the 1-3 most important ones.
- Always provide the corrected version even if there are multiple ways to fix it.
- The "lesson" field MUST be one of: 어순, 문장 구조, 관사, 시제, 전치사, be동사 (or empty string if not applicable).
- Reference rules from the lessons above when possible.
- Be brief and clear. Korean explanations should be simple, not academic.`;

  const userPrompt = `Writing prompt (Korean): ${prompt.ko}
Writing prompt (English): ${prompt.en}

Student's sentence: "${userSentence}"

Check this sentence and respond in JSON.`;

  const body = {
    systemInstruction: { parts: [{ text: systemInstruction }] },
    contents: [{ parts: [{ text: userPrompt }] }],
    generationConfig: {
      temperature: 0.3,
      responseMimeType: "application/json"
    }
  };

  // Try each model in order. If one returns 429 (quota), try the next.
  // Remember the working model so we use it first next time.
  const lastWorking = localStorage.getItem('jake-toeic-working-model');
  const tryOrder = lastWorking
    ? [lastWorking, ...GEMINI_MODELS.filter(m => m !== lastWorking)]
    : GEMINI_MODELS;

  let lastError = null;
  for (const model of tryOrder) {
    try {
      const url = `${GEMINI_BASE_URL}/${model}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      if (response.ok) {
        const data = await response.json();
        const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (!text) throw new Error('Empty response from AI');
        // Cache the working model for next time
        localStorage.setItem('jake-toeic-working-model', model);
        return JSON.parse(text);
      }

      const errText = await response.text();
      lastError = new Error(`API error ${response.status} (${model}): ${errText}`);

      // 429 = quota exceeded — try next model
      // 404 = model not found/available — try next model
      // Anything else (auth, network) — stop and report
      if (response.status !== 429 && response.status !== 404) {
        throw lastError;
      }
    } catch (err) {
      lastError = err;
      // Network errors, JSON parse errors etc — try next
      if (err.message?.includes('API error') && !err.message.includes('429') && !err.message.includes('404')) {
        throw err;
      }
    }
  }

  throw lastError || new Error('All models failed');
}

// ============================================================
// Check button handler
// ============================================================
async function handleCheck() {
  const input = document.getElementById('write-input');
  const sentence = input.value.trim();
  if (!sentence) {
    showToast('문장을 입력해주세요');
    return;
  }
  if (sentence.length > 500) {
    showToast('문장이 너무 깁니다 (max 500 chars)');
    return;
  }

  const btn = document.getElementById('write-check-btn');
  const fbArea = document.getElementById('write-feedback-area');

  btn.disabled = true;
  btn.textContent = '⏳ 확인 중...';
  fbArea.innerHTML = `
    <div class="ai-loading">
      <div class="ai-loading-spinner"></div>
      <p>AI가 문장을 확인하고 있어요...</p>
    </div>
  `;

  try {
    const result = await checkSentence(sentence, writeState.currentPrompt);
    renderFeedback(result, sentence);

    // Save to history
    writeState.history.push({
      timestamp: Date.now(),
      prompt: writeState.currentPrompt,
      sentence: sentence,
      result: result
    });
    saveWriteHistory(writeState.history);
    renderWriteHistory();

  } catch (err) {
    console.error(err);
    let msg = err.message || 'Unknown error';
    let helpText = '';

    if (msg.includes('401') || msg.includes('403') || msg.includes('API_KEY')) {
      helpText = 'API 키가 잘못되었거나 만료되었을 수 있습니다. "API 키 변경" 버튼을 눌러 다시 입력해보세요.';
    } else if (msg.includes('429') || msg.includes('limit: 0') || msg.includes('RESOURCE_EXHAUSTED')) {
      helpText = '⚠️ Google API 무료 사용량 문제입니다.\n\n해결 방법:\n1. 잠시 (5분) 기다린 후 다시 시도해보세요.\n2. 그래도 안되면, https://aistudio.google.com/apikey 에서 새 API 키를 만들어보세요. (Try creating a new API key)\n3. 새 키를 만들 때 "Create API key in new project" 옵션을 선택하세요.';
    } else if (msg.includes('Failed to fetch') || msg.includes('NetworkError')) {
      helpText = '인터넷 연결을 확인해주세요.';
    } else {
      helpText = '잠시 후 다시 시도해주세요.';
    }

    fbArea.innerHTML = `
      <div class="ai-error">
        <h4>⚠️ 오류가 발생했습니다</h4>
        <p style="white-space: pre-wrap;">${escapeHtml(helpText)}</p>
        <details style="margin-top:8px;">
          <summary style="cursor:pointer; font-size:12px; color:var(--text-tertiary)">기술 정보</summary>
          <code style="font-size:11px; color:var(--text-tertiary)">${escapeHtml(msg)}</code>
        </details>
      </div>
    `;
  } finally {
    btn.disabled = false;
    btn.textContent = '✓ 확인 (Check)';
  }
}

// ============================================================
// Render feedback
// ============================================================
function renderFeedback(result, originalSentence) {
  const fbArea = document.getElementById('write-feedback-area');
  const isCorrect = result.isCorrect;

  let errorsHtml = '';
  if (result.errors && result.errors.length > 0) {
    errorsHtml = '<div class="ai-errors">' + result.errors.map(err => `
      <div class="ai-error-item">
        <div class="ai-error-issue">❌ ${escapeHtml(err.issue || '')}</div>
        ${err.rule ? `<div class="ai-error-rule">📚 <strong>규칙:</strong> ${escapeHtml(err.rule)}</div>` : ''}
        ${err.lesson ? `<div class="ai-error-lesson">📖 관련 레슨: <button class="lesson-link" data-lesson="${escapeHtml(err.lesson)}">${escapeHtml(err.lesson)}</button></div>` : ''}
        ${err.example ? `<div class="ai-error-example">💡 <strong>예시:</strong> ${escapeHtml(err.example)}</div>` : ''}
      </div>
    `).join('') + '</div>';
  }

  fbArea.innerHTML = `
    <div class="ai-feedback ${isCorrect ? 'correct' : 'incorrect'}">
      <div class="ai-verdict">
        ${isCorrect ? '✅' : '📝'} <strong>${escapeHtml(result.verdict || '')}</strong>
      </div>

      <div class="ai-comparison">
        <div class="ai-original">
          <div class="ai-label">당신이 쓴 문장:</div>
          <div class="ai-text">${escapeHtml(originalSentence)}</div>
        </div>
        ${!isCorrect ? `
          <div class="ai-corrected">
            <div class="ai-label">정답:</div>
            <div class="ai-text">${escapeHtml(result.corrected || '')}</div>
            <button class="speak-btn" onclick="speakSentence('${(result.corrected || '').replace(/'/g, "\\'")}')" style="margin-top:6px">🔊 듣기</button>
          </div>
        ` : `
          <button class="speak-btn" onclick="speakSentence('${(result.corrected || originalSentence).replace(/'/g, "\\'")}')" style="margin-top:8px">🔊 듣기</button>
        `}
      </div>

      ${errorsHtml}

      ${result.praise ? `<div class="ai-praise">⭐ <strong>잘한 점:</strong> ${escapeHtml(result.praise)}</div>` : ''}
      ${result.tip ? `<div class="ai-tip">💡 <strong>팁:</strong> ${escapeHtml(result.tip)}</div>` : ''}
    </div>
  `;

  // Wire up lesson links
  fbArea.querySelectorAll('.lesson-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const lessonName = btn.dataset.lesson;
      jumpToLesson(lessonName);
    });
  });
}

// ============================================================
// Jump to a specific grammar lesson
// ============================================================
function jumpToLesson(lessonName) {
  const lessonMap = {
    '어순': 0,
    '문장 구조': 1,
    '관사': 2,
    '시제': 3,
    '전치사': 4,
    'be동사': 5
  };
  const idx = lessonMap[lessonName];
  if (idx === undefined) return;

  switchTab('grammar');
  // Trigger the lesson tab
  setTimeout(() => {
    const btn = document.querySelector(`.lesson-tab[data-lesson="${idx}"]`);
    if (btn) btn.click();
  }, 100);
}

// ============================================================
// History
// ============================================================
function renderWriteHistory() {
  const histArea = document.getElementById('write-history');
  if (!writeState.history.length) {
    histArea.innerHTML = '';
    return;
  }
  const recent = writeState.history.slice(-5).reverse();
  histArea.innerHTML = `
    <h3 class="section-title">📜 최근 작문 기록 (Recent attempts)</h3>
    <div class="history-list">
      ${recent.map(h => `
        <div class="history-item ${h.result.isCorrect ? 'correct' : 'incorrect'}">
          <div class="history-icon">${h.result.isCorrect ? '✅' : '📝'}</div>
          <div class="history-body">
            <div class="history-prompt">${escapeHtml(h.prompt.ko)}</div>
            <div class="history-sentence">${escapeHtml(h.sentence)}</div>
            ${!h.result.isCorrect ? `<div class="history-corrected">→ ${escapeHtml(h.result.corrected || '')}</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}
