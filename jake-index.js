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
  }
};
