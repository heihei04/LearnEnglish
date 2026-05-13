// ============================================================
// Jake's Lessons - Index (groups + multiple choice + AI practice data)
// Chapters themselves live in jake-chapters/ch1.js through ch10.js
// ============================================================

// Combine chapter variables into the JAKE_LESSONS array the app uses
const JAKE_LESSONS = [JAKE_CH1, JAKE_CH2, JAKE_CH3, JAKE_CH4, JAKE_CH5, JAKE_CH6, JAKE_CH7, JAKE_CH8, JAKE_CH9, JAKE_CH10];

const JAKE_LESSON_GROUPS = [
  {
    title: '📘 Jake의 기초 영문법',
    titleEn: '10 chapters',
    lessons: [
      {idx: 0, title: 'Chapter 1. 동사', subtitle: 'Verbs'},
      {idx: 1, title: 'Chapter 2. 동사의 활용', subtitle: 'Verb tenses'},
      {idx: 2, title: 'Chapter 3. 조동사', subtitle: 'Modal verbs'},
      {idx: 3, title: 'Chapter 4. 명사와 대명사', subtitle: 'Nouns & pronouns'},
      {idx: 4, title: 'Chapter 5. 형용사와 부사', subtitle: 'Adjectives & adverbs'},
      {idx: 5, title: 'Chapter 6. 부정사와 동명사', subtitle: 'Infinitives & gerunds'},
      {idx: 6, title: 'Chapter 7. 수동태', subtitle: 'Passive voice'},
      {idx: 7, title: 'Chapter 8. 접속사와 전치사', subtitle: 'Conjunctions & prepositions'},
      {idx: 8, title: 'Chapter 9. 분사', subtitle: 'Participles'},
      {idx: 9, title: 'Chapter 10. 관계사', subtitle: 'Relative pronouns'}
    ]
  }
];

const JAKE_PRACTICE_DATA = [
  {
    "title": "연습 1: 동사 고르기",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "She ___ to the gym every day.",
        "options": [
          "go",
          "goes",
          "going",
          "gone"
        ],
        "answer": 1,
        "explanation": "주어가 she (3인칭 단수)이므로 동사에 -s를 붙여 goes가 정답입니다."
      },
      {
        "prompt": "I ___ a student at the university.",
        "options": [
          "is",
          "are",
          "am",
          "be"
        ],
        "answer": 2,
        "explanation": "주어 I 에는 항상 am을 사용합니다."
      },
      {
        "prompt": "The children ___ in the park.",
        "options": [
          "plays",
          "play",
          "playing",
          "is play"
        ],
        "answer": 1,
        "explanation": "주어 children은 복수형이므로 동사에 -s를 붙이지 않습니다."
      },
      {
        "prompt": "He ___ very tired today.",
        "options": [
          "look",
          "looks",
          "looking",
          "is looks"
        ],
        "answer": 1,
        "explanation": "주어 he (3인칭 단수) + 일반동사 → 동사에 -s를 붙입니다."
      },
      {
        "prompt": "My brother ___ English at the academy.",
        "options": [
          "study",
          "studys",
          "studies",
          "studying"
        ],
        "answer": 2,
        "explanation": "study는 자음+y로 끝나므로 -y를 -ies로 바꿉니다: studies."
      }
    ]
  },
  {
    "title": "연습 2: 시제 선택하기",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "I ___ to the movies last night.",
        "options": [
          "go",
          "went",
          "will go",
          "am going"
        ],
        "answer": 1,
        "explanation": "\"last night\" 은 과거를 나타냅니다. go의 과거형은 went입니다."
      },
      {
        "prompt": "She ___ TV right now.",
        "options": [
          "watches",
          "watched",
          "is watching",
          "will watch"
        ],
        "answer": 2,
        "explanation": "\"right now\" 는 지금 진행 중인 일을 나타냅니다. 현재진행: is + watching."
      },
      {
        "prompt": "We ___ Korea next year.",
        "options": [
          "visit",
          "visited",
          "are visiting",
          "will visit"
        ],
        "answer": 3,
        "explanation": "\"next year\" 는 미래입니다. will + 동사원형 = will visit."
      },
      {
        "prompt": "He ___ in this company for 5 years.",
        "options": [
          "works",
          "worked",
          "has worked",
          "will work"
        ],
        "answer": 2,
        "explanation": "5년 동안 계속 일해왔다는 의미는 현재완료를 사용합니다: has worked."
      },
      {
        "prompt": "They ___ dinner every evening.",
        "options": [
          "have",
          "had",
          "are having",
          "will have"
        ],
        "answer": 0,
        "explanation": "\"every evening\" 은 반복되는 습관이므로 현재 시제: have."
      }
    ]
  },
  {
    "title": "연습 3: 조동사 선택하기",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "You ___ smoke in this building. It is forbidden.",
        "options": [
          "can",
          "may",
          "must not",
          "would"
        ],
        "answer": 2,
        "explanation": "금지되어 있다는 강한 의미는 must not (mustn't)을 사용합니다."
      },
      {
        "prompt": "___ you please pass me the salt?",
        "options": [
          "May",
          "Could",
          "Should",
          "Must"
        ],
        "answer": 1,
        "explanation": "정중한 부탁에는 Could you ~? 가 가장 자연스럽습니다."
      },
      {
        "prompt": "I ___ swim when I was 5 years old.",
        "options": [
          "can",
          "could",
          "will",
          "should"
        ],
        "answer": 1,
        "explanation": "과거의 능력은 could로 표현합니다."
      },
      {
        "prompt": "She ___ be at home. Her car is in the driveway.",
        "options": [
          "must",
          "should",
          "will",
          "can"
        ],
        "answer": 0,
        "explanation": "강한 추측 (틀림없이 ~일 것이다)에는 must를 사용합니다."
      },
      {
        "prompt": "You ___ eat more vegetables for your health.",
        "options": [
          "must",
          "should",
          "can",
          "will"
        ],
        "answer": 1,
        "explanation": "건강을 위한 조언/충고에는 should가 적절합니다."
      }
    ]
  },
  {
    "title": "연습 4: 명사와 대명사",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "I need ___ to finish my homework.",
        "options": [
          "a time",
          "time",
          "times",
          "a times"
        ],
        "answer": 1,
        "explanation": "time은 셀 수 없는 명사 — a 없이, -s 없이 사용합니다."
      },
      {
        "prompt": "My sister and ___ are going to the park.",
        "options": [
          "me",
          "I",
          "my",
          "mine"
        ],
        "answer": 1,
        "explanation": "문장의 주어 위치이므로 주격 I를 사용합니다."
      },
      {
        "prompt": "Can you help ___ with this problem?",
        "options": [
          "I",
          "me",
          "my",
          "mine"
        ],
        "answer": 1,
        "explanation": "동사 help의 목적어 자리이므로 목적격 me를 사용합니다."
      },
      {
        "prompt": "There are five ___ in the kitchen.",
        "options": [
          "child",
          "childs",
          "children",
          "childrens"
        ],
        "answer": 2,
        "explanation": "child의 복수형은 불규칙 변화 children입니다."
      },
      {
        "prompt": "She made the cake ___.",
        "options": [
          "herself",
          "her",
          "she",
          "hers"
        ],
        "answer": 0,
        "explanation": "\"자기 자신이\" 직접 했다는 의미는 재귀대명사 herself를 사용합니다."
      }
    ]
  },
  {
    "title": "연습 5: 형용사와 부사",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "She sings ___.",
        "options": [
          "beautiful",
          "beautifully",
          "more beautiful",
          "beauty"
        ],
        "answer": 1,
        "explanation": "sings(동사)를 꾸미려면 부사가 필요합니다: beautifully."
      },
      {
        "prompt": "This bag is ___ than that one.",
        "options": [
          "heavy",
          "heavier",
          "heaviest",
          "more heavy"
        ],
        "answer": 1,
        "explanation": "두 개를 비교할 때는 비교급: heavy → heavier."
      },
      {
        "prompt": "Mount Everest is ___ mountain in the world.",
        "options": [
          "high",
          "higher",
          "the highest",
          "more high"
        ],
        "answer": 2,
        "explanation": "최상급 표현 \"the + 최상급\": the highest."
      },
      {
        "prompt": "He can run very ___.",
        "options": [
          "fast",
          "fastly",
          "more fast",
          "the fast"
        ],
        "answer": 0,
        "explanation": "fast는 부사 형태가 형용사와 같습니다 (fastly는 틀린 단어)."
      },
      {
        "prompt": "I feel ___ today than yesterday.",
        "options": [
          "good",
          "well",
          "better",
          "best"
        ],
        "answer": 2,
        "explanation": "good의 비교급은 불규칙하게 better입니다 (more good 아님)."
      }
    ]
  },
  {
    "title": "연습 6: 부정사와 동명사",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "I enjoy ___ in my free time.",
        "options": [
          "read",
          "to read",
          "reading",
          "reads"
        ],
        "answer": 2,
        "explanation": "enjoy 뒤에는 항상 동명사 (-ing): reading."
      },
      {
        "prompt": "She decided ___ a new job.",
        "options": [
          "take",
          "to take",
          "taking",
          "takes"
        ],
        "answer": 1,
        "explanation": "decide 뒤에는 부정사 (to + 동사원형): to take."
      },
      {
        "prompt": "He is interested in ___ Korean.",
        "options": [
          "learn",
          "to learn",
          "learning",
          "learns"
        ],
        "answer": 2,
        "explanation": "전치사 in 뒤에는 반드시 동명사: learning."
      },
      {
        "prompt": "I went to the cafe ___ some coffee.",
        "options": [
          "get",
          "to get",
          "getting",
          "for get"
        ],
        "answer": 1,
        "explanation": "목적을 나타내는 \"~하기 위해\"는 부정사 (to + 동사원형): to get."
      },
      {
        "prompt": "Would you mind ___ the door?",
        "options": [
          "close",
          "to close",
          "closing",
          "closed"
        ],
        "answer": 2,
        "explanation": "mind 뒤에는 동명사: closing."
      }
    ]
  },
  {
    "title": "연습 7: 수동태",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "The window ___ by the strong wind.",
        "options": [
          "broke",
          "broken",
          "was broken",
          "is break"
        ],
        "answer": 2,
        "explanation": "수동태 과거형: was + p.p. (was broken)."
      },
      {
        "prompt": "Many languages ___ in this country.",
        "options": [
          "speak",
          "spoke",
          "are spoken",
          "are speak"
        ],
        "answer": 2,
        "explanation": "현재 수동태: are + p.p. (are spoken)."
      },
      {
        "prompt": "The new bridge ___ next year.",
        "options": [
          "will build",
          "will be built",
          "is built",
          "builds"
        ],
        "answer": 1,
        "explanation": "미래 수동태: will be + p.p. (will be built)."
      },
      {
        "prompt": "The cars ___ on the street.",
        "options": [
          "park",
          "parking",
          "are parked",
          "is parking"
        ],
        "answer": 2,
        "explanation": "차가 \"주차되어 있다\" 는 수동태: are + parked."
      },
      {
        "prompt": "This book ___ by a famous author.",
        "options": [
          "wrote",
          "writes",
          "is written",
          "writing"
        ],
        "answer": 2,
        "explanation": "현재 수동태: is + p.p. (is written)."
      }
    ]
  },
  {
    "title": "연습 8: 접속사와 전치사",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "I want to go out, ___ it is raining.",
        "options": [
          "and",
          "but",
          "so",
          "or"
        ],
        "answer": 1,
        "explanation": "원하는 것(나가고 싶다)과 반대 상황(비가 온다)을 연결: but."
      },
      {
        "prompt": "My birthday is ___ March.",
        "options": [
          "at",
          "on",
          "in",
          "from"
        ],
        "answer": 2,
        "explanation": "월 앞에는 in을 사용합니다: in March."
      },
      {
        "prompt": "The keys are ___ the table.",
        "options": [
          "at",
          "on",
          "in",
          "to"
        ],
        "answer": 1,
        "explanation": "표면 위(테이블 위)에는 on을 사용합니다."
      },
      {
        "prompt": "I will stay home ___ it rains tomorrow.",
        "options": [
          "because",
          "if",
          "but",
          "or"
        ],
        "answer": 1,
        "explanation": "조건(만약 ~한다면)에는 if를 사용합니다."
      },
      {
        "prompt": "She walked ___ the park to her office.",
        "options": [
          "on",
          "at",
          "through",
          "in"
        ],
        "answer": 2,
        "explanation": "공원을 통과해서 지나갔다는 의미: through."
      }
    ]
  },
  {
    "title": "연습 9: 분사",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "The lecture was very ___.",
        "options": [
          "interesting",
          "interested",
          "interest",
          "interests"
        ],
        "answer": 0,
        "explanation": "강의(사물/상황)가 흥미를 만들어내므로 -ing 형태: interesting."
      },
      {
        "prompt": "I am ___ in learning Spanish.",
        "options": [
          "interesting",
          "interested",
          "interest",
          "interests"
        ],
        "answer": 1,
        "explanation": "사람(I)이 흥미를 느끼므로 -ed 형태: interested."
      },
      {
        "prompt": "Look at that ___ dog!",
        "options": [
          "bark",
          "barked",
          "barking",
          "barks"
        ],
        "answer": 2,
        "explanation": "개가 짖고 있다(능동/진행)는 의미는 현재분사: barking."
      },
      {
        "prompt": "The ___ window needs to be repaired.",
        "options": [
          "break",
          "breaking",
          "broken",
          "breaks"
        ],
        "answer": 2,
        "explanation": "창문이 깨진 상태(수동)는 과거분사: broken."
      },
      {
        "prompt": "After the long trip, we were very ___.",
        "options": [
          "tiring",
          "tired",
          "tire",
          "tires"
        ],
        "answer": 1,
        "explanation": "우리(사람)가 피곤함을 느끼므로 -ed 형태: tired."
      }
    ]
  },
  {
    "title": "연습 10: 관계사",
    "type": "multiple-choice",
    "questions": [
      {
        "prompt": "The woman ___ is talking to my mother is my aunt.",
        "options": [
          "who",
          "which",
          "where",
          "whose"
        ],
        "answer": 0,
        "explanation": "woman은 사람 + 주어 자리이므로 who를 사용합니다."
      },
      {
        "prompt": "I lost the keys ___ you gave me yesterday.",
        "options": [
          "who",
          "which",
          "where",
          "what"
        ],
        "answer": 1,
        "explanation": "keys는 사물이므로 which (또는 that)를 사용합니다."
      },
      {
        "prompt": "This is the school ___ I studied for 10 years.",
        "options": [
          "which",
          "who",
          "where",
          "that"
        ],
        "answer": 2,
        "explanation": "school은 장소이므로 where를 사용합니다."
      },
      {
        "prompt": "He is the boy ___ father is a doctor.",
        "options": [
          "who",
          "which",
          "whose",
          "where"
        ],
        "answer": 2,
        "explanation": "\"그의 아버지\" 라는 소유 관계이므로 whose를 사용합니다."
      },
      {
        "prompt": "I met a man ___ can speak five languages.",
        "options": [
          "who",
          "which",
          "where",
          "whose"
        ],
        "answer": 0,
        "explanation": "man은 사람 + 주어 자리이므로 who를 사용합니다."
      }
    ]
  }
];

const JAKE_AI_PRACTICE = {
  // ====== CHAPTER 1 ACTIVITIES ======

  "ch1-a": {
    title: "A. 빈칸에 알맞은 be동사를 넣어 문장을 완성하세요",
    instruction: "빈칸에 알맞은 be동사 (am / is / are / was / were)를 쓰세요. 한 단어만 답으로 쓰세요.",
    type: "fill-blank",
    questions: [
      { prompt: "저는 학생입니다.", sentence: "I _____ a student.", answer: "am", lesson: "be동사" },
      { prompt: "그녀는 의사입니다.", sentence: "She _____ a doctor.", answer: "is", lesson: "be동사" },
      { prompt: "그 책들은 책상 위에 있습니다.", sentence: "The books _____ on the desk.", answer: "are", lesson: "be동사" },
      { prompt: "어제 그는 피곤했습니다.", sentence: "He _____ tired yesterday.", answer: "was", lesson: "be동사" },
      { prompt: "우리는 작년에 부산에 있었습니다.", sentence: "We _____ in Busan last year.", answer: "were", lesson: "be동사" }
    ]
  },

  "ch1-b": {
    title: "B. 단어 상자에서 알맞은 be동사를 골라 한국어 문장과 일치하는 영어 문장을 완성하세요",
    instruction: "단어 상자: [ am / are / is / was / were ]\n주어진 단어를 사용하여 전체 영어 문장을 쓰세요.",
    type: "complete-sentence",
    questions: [
      { prompt: "그는 저의 가장 친한 친구입니다.", hint: "( best friend )", template: "He ___________", expectedPattern: "He is my best friend" },
      { prompt: "야채는 건강에 좋습니다.", hint: "( good for health )", template: "Vegetables ___________", expectedPattern: "Vegetables are good for health" },
      { prompt: "저는 수영을 잘합니다.", hint: "( good at swimming )", template: "I ___________", expectedPattern: "I am good at swimming" },
      { prompt: "지난 여름은 매우 더웠습니다.", hint: "( very hot )", template: "Last summer ___________", expectedPattern: "Last summer was very hot" },
      { prompt: "그들은 몸이 아팠습니다.", hint: "( sick )", template: "They ___________", expectedPattern: "They were sick" }
    ]
  },

  "ch1-c": {
    title: "C. 문장에서 잘못된 부분을 찾아 바르게 고치세요",
    instruction: "각 문장에는 동사 사용에 문제가 있습니다. 틀린 부분을 찾아 올바른 형태로 고친 후, 전체 문장을 다시 쓰세요.",
    type: "correction",
    questions: [
      { sentence: "There was many stars in the sky last night.", correctedSentence: "There were many stars in the sky last night.", explanation: "many stars는 복수형이므로 were를 사용해야 합니다." },
      { sentence: "There is a bakery in this area 5 years ago.", correctedSentence: "There was a bakery in this area 5 years ago.", explanation: "5 years ago는 과거 시제이므로 was를 사용해야 합니다." },
      { sentence: "My brother have a new bicycle.", correctedSentence: "My brother has a new bicycle.", explanation: "주어가 3인칭 단수 (my brother)이므로 have가 아니라 has를 사용해야 합니다." },
      { sentence: "She doesn't likes spicy food.", correctedSentence: "She doesn't like spicy food.", explanation: "doesn't 뒤에는 동사원형이 옵니다. likes가 아니라 like." },
      { sentence: "They works at the same office.", correctedSentence: "They work at the same office.", explanation: "주어가 they (복수)이므로 동사에 -s를 붙이지 않습니다. works가 아니라 work." }
    ]
  },

  "ch1-d": {
    title: "D. 한국어 문장을 영어로 옮기세요",
    instruction: "주어진 단어를 활용하여 완전한 영어 문장을 쓰세요.",
    type: "translation",
    questions: [
      { korean: "냉장고에 음식이 너무 많습니다.", hint: "( too much / food / refrigerator )", expectedPattern: "There is too much food in the refrigerator" },
      { korean: "사무실에 많은 사람들이 있습니다.", hint: "( a lot of / people / office )", expectedPattern: "There are a lot of people in the office" },
      { korean: "그 서점에는 많은 종류의 책이 있습니다.", hint: "( many kinds of / bookstore )", expectedPattern: "There are many kinds of books in the bookstore" },
      { korean: "그 피트니스 센터에는 수영장이 없었습니다.", hint: "( no / swimming pool / fitness center )", expectedPattern: "There was no swimming pool in the fitness center" },
      { korean: "그녀는 어제 영화를 보지 않았습니다.", hint: "( didn't / watch / movie )", expectedPattern: "She didn't watch a movie yesterday" }
    ]
  },

  // ====== CHAPTER 2 ACTIVITIES ======

  "ch2-a": {
    title: "A. 괄호 안의 동사를 알맞은 시제로 바꾸세요",
    instruction: "문장의 의미와 시간 표현에 맞게 동사의 시제를 바꿔 빈칸에 한 단어 또는 짧은 구로 답하세요.",
    type: "fill-blank",
    questions: [
      { prompt: "내 사촌은 매일 학교까지 자전거를 탑니다.", sentence: "My cousin _____ (ride) his bike to school every day.", answer: "rides", lesson: "현재 시제" },
      { prompt: "지금 비가 내리고 있습니다.", sentence: "It _____ (rain) right now.", answer: "is raining", lesson: "현재진행형" },
      { prompt: "우리는 지난 토요일에 박물관에 갔습니다.", sentence: "We _____ (go) to the museum last Saturday.", answer: "went", lesson: "과거 시제" },
      { prompt: "그녀는 그 회사에서 6년째 일하고 있습니다.", sentence: "She _____ (work) at the company for 6 years.", answer: "has worked", lesson: "현재완료" },
      { prompt: "나는 오늘 아침부터 너를 기다리고 있어.", sentence: "I _____ (wait) for you since this morning.", answer: "have been waiting", lesson: "현재완료 진행형" }
    ]
  },

  "ch2-b": {
    title: "B. 다음 동사의 과거형 또는 과거분사형을 쓰세요",
    instruction: "각 동사의 과거형 (past)과 과거분사형 (p.p.)을 모두 쓰세요. 형식: \"과거형, 과거분사형\" (예: went, gone)",
    type: "fill-blank",
    questions: [
      { prompt: "동사: take", sentence: "과거형, 과거분사형:", answer: "took, taken", lesson: "불규칙 동사" },
      { prompt: "동사: write", sentence: "과거형, 과거분사형:", answer: "wrote, written", lesson: "불규칙 동사" },
      { prompt: "동사: drive", sentence: "과거형, 과거분사형:", answer: "drove, driven", lesson: "불규칙 동사" },
      { prompt: "동사: speak", sentence: "과거형, 과거분사형:", answer: "spoke, spoken", lesson: "불규칙 동사" },
      { prompt: "동사: eat", sentence: "과거형, 과거분사형:", answer: "ate, eaten", lesson: "불규칙 동사" }
    ]
  },

  "ch2-c": {
    title: "C. 문장에서 잘못된 시제를 찾아 바르게 고치세요",
    instruction: "각 문장은 시제 사용에 오류가 있습니다. 틀린 부분을 찾아 바르게 고친 후, 전체 문장을 다시 쓰세요.",
    type: "correction",
    questions: [
      { sentence: "She go to the dentist last Friday.", correctedSentence: "She went to the dentist last Friday.", explanation: "\"last Friday\"는 과거를 나타내므로 동사를 과거형 went로 바꿔야 합니다." },
      { sentence: "I am knowing him for many years.", correctedSentence: "I have known him for many years.", explanation: "know는 상태 동사라서 진행형을 쓰지 않습니다. 과거부터 지금까지의 의미는 현재완료 have known으로 표현합니다." },
      { sentence: "They have visited Paris in 2019.", correctedSentence: "They visited Paris in 2019.", explanation: "\"in 2019\" 같은 구체적인 과거 시점은 현재완료와 함께 쓸 수 없습니다. 과거 시제 visited로 바꿔야 합니다." },
      { sentence: "He is study for the exam right now.", correctedSentence: "He is studying for the exam right now.", explanation: "현재진행형은 \"be동사 + 동사ing\" 형태입니다. study가 아니라 studying이 맞습니다." },
      { sentence: "The bus leaved the station 5 minutes ago.", correctedSentence: "The bus left the station 5 minutes ago.", explanation: "leave는 불규칙 동사입니다. 과거형은 leaved가 아니라 left입니다." }
    ]
  },

  "ch2-d": {
    title: "D. 한국어 문장을 영어로 옮기세요",
    instruction: "주어진 단어를 활용하여 완전한 영어 문장을 쓰세요. 시제에 특히 주의하세요.",
    type: "translation",
    questions: [
      { korean: "나는 어제 친구들과 저녁을 먹었습니다.", hint: "( have dinner / friends / yesterday )", expectedPattern: "I had dinner with my friends yesterday" },
      { korean: "그는 지금 거실에서 TV를 보고 있습니다.", hint: "( watch TV / living room / now )", expectedPattern: "He is watching TV in the living room now" },
      { korean: "저는 한 번도 일본에 가본 적이 없습니다.", hint: "( never / been to / Japan )", expectedPattern: "I have never been to Japan" },
      { korean: "우리는 2020년부터 이 동네에 살고 있습니다.", hint: "( live / neighborhood / since )", expectedPattern: "We have lived in this neighborhood since 2020" },
      { korean: "그녀는 두 시간 동안 책을 읽고 있습니다.", hint: "( read / book / for two hours )", expectedPattern: "She has been reading a book for two hours" }
    ]
  },

  // ====== CHAPTER 3 ACTIVITIES ======

  "ch3-a": {
    title: "A. 다음 문장의 틀린 부분을 바르게 고치세요",
    instruction: "각 문장에는 조동사 사용에 오류가 있습니다. 틀린 부분을 찾아 고친 후, 전체 문장을 다시 쓰세요.",
    type: "correction",
    questions: [
      { sentence: "He can speaking three languages.", correctedSentence: "He can speak three languages.", explanation: "조동사 can 뒤에는 동사원형이 옵니다. speaking이 아니라 speak." },
      { sentence: "I could to finish the work yesterday.", correctedSentence: "I could finish the work yesterday.", explanation: "조동사 could 뒤에는 to 없이 동사원형이 바로 옵니다." },
      { sentence: "She was able to fixed the printer.", correctedSentence: "She was able to fix the printer.", explanation: "be able to 뒤에는 동사원형이 옵니다. fixed가 아니라 fix." },
      { sentence: "We were able to not solve the problem.", correctedSentence: "We were not able to solve the problem.", explanation: "부정문에서 not은 be동사 바로 뒤에 옵니다. \"were not able to\" 가 올바른 순서입니다." },
      { sentence: "She will able to join the meeting tomorrow.", correctedSentence: "She will be able to join the meeting tomorrow.", explanation: "미래형은 \"will + be able to\"로, be가 빠지면 안 됩니다." }
    ]
  },

  "ch3-b": {
    title: "B. 본인의 능력에 대해 자유롭게 문장을 만들어 보세요",
    instruction: "아래 예시를 참고하여 본인의 능력에 관한 문장을 만들어 보세요.\n예시:\n  • I can play the guitar.\n  • I can't ski.\n  • I was able to graduate from university.",
    type: "complete-sentence",
    questions: [
      { prompt: "자신이 할 수 있는 일을 쓰세요.", hint: "( can )", template: "I can ___________", expectedPattern: "I can [any verb phrase]" },
      { prompt: "자신이 잘하는 다른 일을 쓰세요.", hint: "( can )", template: "I can ___________", expectedPattern: "I can [any verb phrase]" },
      { prompt: "자신이 못 하는 일을 쓰세요.", hint: "( can't )", template: "I can't ___________", expectedPattern: "I can't [any verb phrase]" },
      { prompt: "자신이 못 하는 다른 일을 쓰세요.", hint: "( can't )", template: "I can't ___________", expectedPattern: "I can't [any verb phrase]" },
      { prompt: "과거에 할 수 있었던 일을 쓰세요.", hint: "( was able to )", template: "I was able to ___________", expectedPattern: "I was able to [any verb phrase]" },
      { prompt: "과거에 해낼 수 있었던 다른 일을 쓰세요.", hint: "( was able to )", template: "I was able to ___________", expectedPattern: "I was able to [any verb phrase]" }
    ]
  },

  "ch3-c": {
    title: "C. 한국어 문장에 맞게 알맞은 동사를 골라 문장을 완성하세요",
    instruction: "단어 상자에서 알맞은 동사를 고르고, will이나 be going to를 활용하여 영어로 답하세요.\n단어 상자: [ rain / attend / go / sell ]",
    type: "complete-sentence",
    questions: [
      { prompt: "그들은 회의에 참여하지 않을 것입니다. (의지)", hint: "( will not + attend )", template: "They ___________ the meeting.", expectedPattern: "They will not attend the meeting" },
      { prompt: "제 생각엔 내일 비가 올 것 같습니다. (예측)", hint: "( will + rain )", template: "I think it ___________ tomorrow.", expectedPattern: "I think it will rain tomorrow" },
      { prompt: "우리는 캠핑을 갈 것입니다. (계획)", hint: "( be going to + go )", template: "We ___________ camping.", expectedPattern: "We are going to go camping" },
      { prompt: "저는 차를 팔지 않을 것입니다. (계획)", hint: "( be going to + not + sell )", template: "I ___________ my car.", expectedPattern: "I am not going to sell my car" },
      { prompt: "그녀는 오늘 회사에 가지 않을 것입니다. (의지)", hint: "( will not + go )", template: "She ___________ to work today.", expectedPattern: "She will not go to work today" }
    ]
  },

  "ch3-d": {
    title: "D. 한국어 문장에 맞게 알맞은 조동사를 골라 문장을 완성하세요",
    instruction: "단어 상자에서 가장 알맞은 조동사 표현을 골라 빈칸을 채우세요.\n단어 상자: [ have to / has to / had to / should / shouldn't / don't have to / didn't have to ]",
    type: "fill-blank",
    questions: [
      { prompt: "돈을 내지 않아도 됩니다.", sentence: "You _____ pay.", answer: "don't have to", lesson: "have to" },
      { prompt: "지하철을 타는 것이 좋겠습니다.", sentence: "You _____ take the subway.", answer: "should", lesson: "should" },
      { prompt: "그에게 지금 전화하면 안 돼요.", sentence: "You _____ call him now.", answer: "shouldn't", lesson: "should" },
      { prompt: "그들은 서두를 필요가 없었습니다.", sentence: "They _____ hurry.", answer: "didn't have to", lesson: "have to" },
      { prompt: "저는 그 시험에 꼭 합격해야 합니다.", sentence: "I _____ pass the test.", answer: "have to", lesson: "have to" },
      { prompt: "저는 계획을 변경해야만 했습니다.", sentence: "I _____ change the plan.", answer: "had to", lesson: "have to" }
    ]
  }
};

// ============================================================
// Flashcard drill data — indexed by drill ID
// Each card has: base (current), past, pp (past participle), meaning
// Multiple correct answers can be separated by " / "
// ============================================================
const JAKE_FLASHCARDS = {
  "ch2-irregular": {
    title: "불규칙 동사 암기 카드",
    instruction: "현재형(base)을 보고 과거형(past)과 과거분사형(p.p.)을 입력하세요. 끝나면 결과를 보여드립니다.",
    cards: [
      { base: "be (am/is)", past: "was", pp: "been", meaning: "~이다" },
      { base: "be (are)", past: "were", pp: "been", meaning: "~이다" },
      { base: "have / has", past: "had", pp: "had", meaning: "가지다" },
      { base: "do / does", past: "did", pp: "done", meaning: "하다" },
      { base: "go", past: "went", pp: "gone", meaning: "가다" },
      { base: "come", past: "came", pp: "come", meaning: "오다" },
      { base: "see", past: "saw", pp: "seen", meaning: "보다" },
      { base: "eat", past: "ate", pp: "eaten", meaning: "먹다" },
      { base: "drink", past: "drank", pp: "drunk", meaning: "마시다" },
      { base: "buy", past: "bought", pp: "bought", meaning: "사다" },
      { base: "take", past: "took", pp: "taken", meaning: "가져가다" },
      { base: "give", past: "gave", pp: "given", meaning: "주다" },
      { base: "get", past: "got", pp: "gotten / got", meaning: "얻다" },
      { base: "make", past: "made", pp: "made", meaning: "만들다" },
      { base: "write", past: "wrote", pp: "written", meaning: "쓰다" },
      { base: "read", past: "read", pp: "read", meaning: "읽다 (발음만 'red'로 바뀜)" },
      { base: "speak", past: "spoke", pp: "spoken", meaning: "말하다" },
      { base: "tell", past: "told", pp: "told", meaning: "전하다" },
      { base: "say", past: "said", pp: "said", meaning: "말하다" },
      { base: "know", past: "knew", pp: "known", meaning: "알다" },
      { base: "think", past: "thought", pp: "thought", meaning: "생각하다" },
      { base: "find", past: "found", pp: "found", meaning: "찾다" },
      { base: "feel", past: "felt", pp: "felt", meaning: "느끼다" },
      { base: "sleep", past: "slept", pp: "slept", meaning: "자다" },
      { base: "leave", past: "left", pp: "left", meaning: "떠나다" },
      { base: "lose", past: "lost", pp: "lost", meaning: "잃다" },
      { base: "meet", past: "met", pp: "met", meaning: "만나다" },
      { base: "run", past: "ran", pp: "run", meaning: "달리다" },
      { base: "drive", past: "drove", pp: "driven", meaning: "운전하다" },
      { base: "bring", past: "brought", pp: "brought", meaning: "가져오다" },
      { base: "begin", past: "began", pp: "begun", meaning: "시작하다" },
      { base: "break", past: "broke", pp: "broken", meaning: "부수다" },
      { base: "choose", past: "chose", pp: "chosen", meaning: "선택하다" },
      { base: "put", past: "put", pp: "put", meaning: "놓다" },
      { base: "cut", past: "cut", pp: "cut", meaning: "자르다" },
      { base: "let", past: "let", pp: "let", meaning: "허락하다" }
    ]
  }
};
