// ============================================================
// Spaced Repetition System (modified SM-2 algorithm)
// Used by Anki, SuperMemo, Duolingo etc.
// Cards you struggle with come back fast; cards you know come back later.
// ============================================================

const STORAGE_KEY = 'jake-toeic-progress-v1';

const DEFAULT_CARD_STATE = {
  ef: 2.5,           // ease factor (how easy you find it)
  interval: 0,       // days until next review
  reps: 0,           // total successful repetitions
  lapses: 0,         // total times forgotten
  due: null,         // next due date (timestamp)
  lastSeen: null,    // last review timestamp
  status: 'new'      // 'new' | 'learning' | 'review' | 'mastered'
};

const DEFAULT_PROGRESS = {
  cards: {},                  // {cardId: cardState}
  streak: 0,
  lastStudyDate: null,        // YYYY-MM-DD string
  totalReviews: 0,
  totalCorrect: 0,
  installedDate: null
};

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fresh = { ...DEFAULT_PROGRESS, installedDate: new Date().toISOString() };
      saveProgress(fresh);
      return fresh;
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to load progress:', e);
    return { ...DEFAULT_PROGRESS, installedDate: new Date().toISOString() };
  }
}

function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress:', e);
  }
}

function getCardState(progress, cardId) {
  return progress.cards[cardId] || { ...DEFAULT_CARD_STATE };
}

function todayString() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function daysBetween(d1, d2) {
  const ms = Math.abs(d2 - d1);
  return Math.floor(ms / (1000 * 60 * 60 * 24));
}

// Update streak based on whether user studied today
function updateStreak(progress) {
  const today = todayString();
  if (progress.lastStudyDate === today) return; // already counted today

  if (!progress.lastStudyDate) {
    progress.streak = 1;
  } else {
    const last = new Date(progress.lastStudyDate);
    const now = new Date(today);
    const gap = daysBetween(last, now);
    if (gap === 1) {
      progress.streak += 1;
    } else if (gap > 1) {
      progress.streak = 1; // streak broken
    }
  }
  progress.lastStudyDate = today;
}

// Modified SM-2: rate a card after review
// quality: 0 = "Again" (forgot), 3 = "Good" (recalled), 5 = "Easy" (very easy)
function reviewCard(progress, cardId, quality) {
  let card = getCardState(progress, cardId);
  card = { ...card };
  const now = Date.now();

  progress.totalReviews += 1;
  if (quality >= 3) progress.totalCorrect += 1;

  if (quality < 3) {
    // Failed - reset progress, show again soon
    card.lapses += 1;
    card.reps = 0;
    card.interval = 0; // see again in same session
    card.ef = Math.max(1.3, card.ef - 0.2);
    card.status = 'learning';
  } else {
    // Passed
    card.reps += 1;
    if (card.reps === 1) {
      card.interval = 1; // 1 day
    } else if (card.reps === 2) {
      card.interval = 3; // 3 days
    } else {
      card.interval = Math.round(card.interval * card.ef);
    }
    // Adjust ease factor
    card.ef = card.ef + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    card.ef = Math.max(1.3, card.ef);

    if (card.reps >= 4 && card.interval >= 21) {
      card.status = 'mastered';
    } else {
      card.status = 'review';
    }
  }

  card.lastSeen = now;
  card.due = now + (card.interval * 24 * 60 * 60 * 1000);

  progress.cards[cardId] = card;
  updateStreak(progress);
  saveProgress(progress);
  return card;
}

// Get cards due for review (or new cards)
function getDueCards(progress, allCards, mode = 'due', cat = 'all') {
  const now = Date.now();
  let pool = allCards;
  if (cat !== 'all') pool = pool.filter(c => c.cat === cat);

  if (mode === 'all') return pool;
  if (mode === 'new') {
    return pool.filter(c => {
      const state = progress.cards[c.id];
      return !state || state.status === 'new';
    });
  }
  // mode === 'due'
  return pool.filter(c => {
    const state = progress.cards[c.id];
    if (!state || state.status === 'new') return true; // new cards are always "due"
    return state.due && state.due <= now;
  });
}

function countByStatus(progress, allCards) {
  const counts = { new: 0, learning: 0, review: 0, mastered: 0, due: 0 };
  const now = Date.now();
  allCards.forEach(c => {
    const state = progress.cards[c.id];
    if (!state) {
      counts.new += 1;
      counts.due += 1;
    } else {
      counts[state.status] = (counts[state.status] || 0) + 1;
      if (state.status !== 'mastered' && state.due && state.due <= now) {
        counts.due += 1;
      }
    }
  });
  return counts;
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
