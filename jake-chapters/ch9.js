// ============================================================
// Jake's Chapter 9
// ============================================================

const JAKE_CH9 = `<div class="lesson-block info">
    <div class="lesson-block-header">🎨 분사 (Participles) 란?</div>
    <p>분사는 동사를 <strong>형용사처럼</strong> 사용하는 형태입니다. 두 종류가 있습니다: <strong>현재분사 (-ing)</strong>와 <strong>과거분사 (p.p.)</strong>.</p>
  </div>

  <p class="sub-label">두 가지 분사의 의미 차이:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">현재분사 (-ing): 능동, 진행 — "~하는"</div>
    <p class="en-line"><strong>boring</strong> = 지루하게 만드는 (다른 사람을 지루하게 함)</p>
    <p class="en-line"><strong>exciting</strong> = 신나게 만드는</p>
    <p class="en-line"><strong>interesting</strong> = 흥미를 끄는</p>
    <p class="en-line"><strong>tiring</strong> = 피곤하게 만드는</p>
    <hr/>
    <p class="en-line">The movie was <strong>boring</strong>. (영화가 지루했다)</p>
    <p class="ko-line">→ 영화 자체가 지루함을 만들었다</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">과거분사 (p.p.): 수동, 완료 — "~된"</div>
    <p class="en-line"><strong>bored</strong> = 지루함을 느끼는</p>
    <p class="en-line"><strong>excited</strong> = 신난 상태인</p>
    <p class="en-line"><strong>interested</strong> = 흥미를 느끼는</p>
    <p class="en-line"><strong>tired</strong> = 피곤한 상태인</p>
    <hr/>
    <p class="en-line">I was <strong>bored</strong>. (저는 지루했다)</p>
    <p class="ko-line">→ 저 자신이 지루함을 느꼈다</p>
  </div>

  <p class="sub-label">중요한 비교 — 같은 단어, 완전 다른 의미:</p>

  <div class="example-box">
    <p class="en-line">✅ The movie was <strong>boring</strong>. (영화는 지루했다)</p>
    <p class="en-line">✅ I was <strong>bored</strong> by the movie. (저는 지루함을 느꼈다)</p>
    <hr/>
    <p class="en-line">❌ I am <s>boring</s>. (→ "저는 다른 사람을 지루하게 만드는 사람이에요" 라는 뜻!)</p>
    <p class="en-line">✅ I am <strong>bored</strong>. (저는 지루해요)</p>
    <hr/>
    <p class="part-desc"><strong>규칙:</strong></p>
    <p class="part-desc">• 사물 / 상황 → -ing (사물이 그런 감정을 만들어냄)</p>
    <p class="part-desc">• 사람의 감정 → -ed / p.p. (사람이 그 감정을 느낌)</p>
  </div>

  <p class="sub-label">분사의 사용:</p>

  <div class="part-card">
    <div class="part-tag wb-obj">1. 명사 앞에서 형용사처럼</div>
    <p class="en-line">a <strong>running</strong> dog (달리는 개)</p>
    <p class="en-line">a <strong>broken</strong> window (깨진 창문)</p>
    <p class="en-line">a <strong>sleeping</strong> baby (자는 아기)</p>
    <p class="en-line">a <strong>locked</strong> door (잠긴 문)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">2. 명사 뒤에서 (수식어가 길 때)</div>
    <p class="en-line">The man <strong>standing</strong> at the door is my father.</p>
    <p class="ko-line">문에 서 있는 남자는 제 아버지입니다.</p>
    <hr/>
    <p class="en-line">The letter <strong>written</strong> by her is on the desk.</p>
    <p class="ko-line">그녀에 의해 쓰여진 편지가 책상 위에 있습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">3. 진행형과 수동태에서 (앞서 배운 내용)</div>
    <p class="en-line">She <strong>is reading</strong> a book. (현재분사 → 진행형)</p>
    <p class="en-line">The cake <strong>was eaten</strong>. (과거분사 → 수동태)</p>
  </div>

  <p class="sub-label">자주 쓰는 감정 분사 (꼭 외우세요!):</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>사물/상황 (-ing)</th><th>사람의 감정 (-ed)</th><th>의미</th></tr></thead>
      <tbody>
        <tr><td>interesting</td><td>interested</td><td>흥미로운/흥미있는</td></tr>
        <tr><td>boring</td><td>bored</td><td>지루한/지루해하는</td></tr>
        <tr><td>exciting</td><td>excited</td><td>신나는/신난</td></tr>
        <tr><td>tiring</td><td>tired</td><td>피곤하게하는/피곤한</td></tr>
        <tr><td>surprising</td><td>surprised</td><td>놀라운/놀란</td></tr>
        <tr><td>confusing</td><td>confused</td><td>혼란스럽게하는/혼란스러운</td></tr>
        <tr><td>amazing</td><td>amazed</td><td>놀라운/놀란</td></tr>
        <tr><td>disappointing</td><td>disappointed</td><td>실망스러운/실망한</td></tr>
      </tbody>
    </table>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ I am <s>boring</s>. → ✅ I am <strong>bored</strong>. (저는 지루함을 느낍니다)</p>
    <p>❌ The book is <s>interested</s>. → ✅ The book is <strong>interesting</strong>. (책이 흥미를 만듭니다)</p>
    <p>❌ The students were <s>confusing</s>. → ✅ The students were <strong>confused</strong>. (학생들이 혼란을 느꼈습니다)</p>
    <p>사람 = -ed, 사물 = -ing! 기억하세요.</p>
  </div>

  <!-- INTERACTIVE PRACTICE -->
  <div class="practice-block" data-practice-id="8"></div>`;
