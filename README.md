# 📚 Jake's TOEIC Speaking Trainer

A custom-built English learning app designed for a Korean speaker preparing for the **TOEIC Speaking test (target score: 140)**. Built for absolute beginners — every instruction, hint, and lesson is written in Korean with clear English examples.

> **Live demo:** Once deployed to GitHub Pages, this app works on any phone or computer browser. No installation needed.

---

## ✨ Features

### 🏠 **Home Dashboard**
- Daily streak counter (🔥) — encourages habit formation
- Progress toward TOEIC 140 goal
- Cards due today (spaced repetition queue)
- Per-verb mastery progress
- Daily learning tips

### 📖 **Grammar Lessons (6 modules)**
Bilingual explanations covering the foundations Korean speakers struggle with:
1. **어순 (Word order)** — why English is SVO and Korean is SOV
2. **문장 구조 (Sentence structure)** — Subject + Verb + Object building blocks
3. **관사 (Articles a/an/the)** — articles don't exist in Korean
4. **시제 (Tenses)** — present, past, present continuous
5. **전치사 (Prepositions)** — in/on/at, to/from, by/with
6. **be동사 (Be verbs)** — am/is/are usage

### 🃏 **Smart Flashcards (Spaced Repetition)**
- Modified **SM-2 algorithm** (same as Anki)
- Cards rated "Again / Hard / Good / Easy" — difficult cards return more often
- Progress saved automatically (`localStorage`)
- Filter by verb (take, get, do, go, make, have)
- Three modes: due cards, all cards, or new cards only
- Audio playback for every sentence

### 🎯 **Quiz Mode**
- Multiple choice questions
- Switch direction: 🇰🇷 Korean → 🇬🇧 English, or 🇬🇧 → 🇰🇷
- Live accuracy tracking
- Wrong answers feed back into spaced repetition queue

### 🧩 **Sentence Builder**
- Click words in the right order to construct English sentences
- Bilingual hints showing the grammar pattern
- Visual feedback (green = correct, red = retry)
- Audio playback of correct answer

### 🎤 **Speaking Practice (Shadowing)**
- Adjustable speech speed (0.5x – 1.2x)
- Built-in shadowing technique guide
- Critical for the actual TOEIC Speaking test

---

## 🧠 Learning Methods Built In

This app uses techniques validated by language acquisition research:

| Method | Why it works |
|---|---|
| **Spaced Repetition (SM-2)** | The single most effective memorization technique — used by Anki, SuperMemo, Duolingo |
| **Active recall** | Forcing retrieval (vs. re-reading) creates stronger memory traces |
| **Chunking** | Learning whole phrases ("take a nap") instead of individual words enables fluent speaking |
| **Comprehensible input + scaffolding** | Korean explanations alongside English (Krashen's i+1 hypothesis) |
| **Production practice** | The sentence builder forces construction, not just recognition |
| **Habit formation** | Daily streak tracking makes practice consistent |
| **Audio + shadowing** | Critical for TOEIC Speaking test pronunciation and fluency |

---

## 🚀 Deploy to GitHub Pages (5 minutes)

1. **Create a new GitHub repo** (e.g., `toeic-trainer`)
2. **Upload all files** from this folder to the repo:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `data.js`
   - `srs.js`
   - `manifest.json`
   - `README.md`
3. Go to repo **Settings** → **Pages**
4. Under **Source**, select branch `main` and folder `/ (root)`
5. Click **Save**
6. Wait ~1 minute. GitHub will give you a URL like:
   ```
   https://YOUR-USERNAME.github.io/toeic-trainer/
   ```
7. Send the link to your friend!

---

## 📱 Install as a Phone App

Once deployed, your friend can install it like a real app:

**iPhone (Safari):**
1. Open the link in Safari
2. Tap the Share button (square with arrow)
3. Scroll down → "Add to Home Screen"

**Android (Chrome):**
1. Open the link in Chrome
2. Tap the menu (⋮)
3. "Install app" or "Add to Home Screen"

The app will appear on the home screen with its own icon, work offline, and feel like a native app.

---

## 🔧 Customization

### Add more vocabulary
Edit `data.js` → add entries to the `VOCAB` array. Use a unique `id` (e.g., `'t13'`).

### Add more grammar lessons
Edit `data.js` → add HTML strings to the `LESSONS` array.
Then in `index.html`, add a new lesson tab button.

### Add more sentence-building questions
Edit `data.js` → add entries to `BUILD_QUESTIONS`.

### Change colors / theme
Edit `styles.css` → modify the CSS custom properties at the top (`:root`).

---

## 💾 Data & Privacy

- All progress is stored locally in the browser (`localStorage`)
- No server, no analytics, no tracking
- Progress survives browser restarts but is per-device
- "Reset progress" button at the bottom of the app clears everything

---

## 🙏 Credits

- Vocabulary content from **제이크 토익스피킹 필수표현 (기초편 ①)**
- Spaced repetition based on Piotr Wozniak's **SM-2 algorithm**
- Built with vanilla HTML/CSS/JS — no build step, no dependencies

---

**화이팅! 🎯 You can do it!**
