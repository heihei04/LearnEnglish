// ============================================================
// Jake's Chapter 2
// ============================================================

const JAKE_CH2 = `<div class="lesson-block info">
    <div class="lesson-block-header">⏰ 동사의 활용 (Verb Forms)</div>
    <p>동사는 <strong>시간에 따라 모양이 바뀝니다</strong>. 영어에는 시제 (tense)를 표현하는 여러 방법이 있습니다. 여기서는 가장 중요한 5가지를 배웁니다.</p>
  </div>

  <p class="sub-label">시제 한눈에 보기:</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>시제</th><th>형태</th><th>예시</th></tr></thead>
      <tbody>
        <tr><td><strong>현재</strong></td><td>동사원형 (-s)</td><td>I <strong>eat</strong> rice.</td></tr>
        <tr><td><strong>과거</strong></td><td>동사 + ed (불규칙)</td><td>I <strong>ate</strong> rice.</td></tr>
        <tr><td><strong>미래</strong></td><td>will + 동사원형</td><td>I <strong>will eat</strong> rice.</td></tr>
        <tr><td><strong>현재진행</strong></td><td>am/is/are + -ing</td><td>I <strong>am eating</strong> rice.</td></tr>
        <tr><td><strong>현재완료</strong></td><td>have/has + p.p.</td><td>I <strong>have eaten</strong> rice.</td></tr>
      </tbody>
    </table>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">현재 (Present Simple) — 습관, 사실</div>
    <p class="part-desc">매일, 보통, 항상 일어나는 일</p>
    <p class="en-line">I <strong>drink</strong> coffee every morning.</p>
    <p class="ko-line">저는 매일 아침 커피를 마십니다.</p>
    <hr/>
    <p class="en-line">The sun <strong>rises</strong> in the east.</p>
    <p class="ko-line">해는 동쪽에서 뜹니다. (변하지 않는 사실)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">과거 (Past Simple) — 이미 끝난 일</div>
    <p class="part-desc">규칙 변화: 동사 + <strong>-ed</strong></p>
    <p class="en-line">work → work<strong>ed</strong>, study → stud<strong>ied</strong>, play → play<strong>ed</strong></p>
    <hr/>
    <p class="part-desc">불규칙 변화 (꼭 외우세요!):</p>
    <p class="en-line">go → <strong>went</strong>, eat → <strong>ate</strong>, see → <strong>saw</strong></p>
    <p class="en-line">take → <strong>took</strong>, have → <strong>had</strong>, do → <strong>did</strong></p>
    <p class="en-line">make → <strong>made</strong>, get → <strong>got</strong>, come → <strong>came</strong></p>
    <hr/>
    <p class="en-line">I <strong>went</strong> to Busan last weekend.</p>
    <p class="ko-line">저는 지난 주말에 부산에 갔습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">미래 (Future) — 앞으로 일어날 일</div>
    <p class="part-desc"><strong>will + 동사원형</strong></p>
    <p class="en-line">I <strong>will visit</strong> my parents next month.</p>
    <p class="ko-line">저는 다음 달에 부모님을 방문할 것입니다.</p>
    <hr/>
    <p class="part-desc"><strong>be going to + 동사원형</strong> (이미 계획된 일)</p>
    <p class="en-line">She <strong>is going to</strong> start a new job.</p>
    <p class="ko-line">그녀는 새 직장을 시작할 예정입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">현재진행 (Present Continuous) — 지금 하고 있는 일</div>
    <p class="part-desc"><strong>am/is/are + 동사ing</strong></p>
    <p class="en-line">I <strong>am working</strong> right now.</p>
    <p class="ko-line">저는 지금 일하고 있습니다.</p>
    <hr/>
    <p class="part-desc"><strong>ing 만드는 규칙:</strong></p>
    <p class="en-line">play → play<strong>ing</strong> (대부분)</p>
    <p class="en-line">make → mak<strong>ing</strong> (e로 끝나면 e 삭제)</p>
    <p class="en-line">run → run<strong>ning</strong> (짧은 모음+자음은 자음 중복)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">현재완료 (Present Perfect) — 경험, 계속, 완료</div>
    <p class="part-desc"><strong>have/has + 과거분사 (p.p.)</strong></p>
    <p class="en-line">"~한 적이 있다" (경험)</p>
    <p class="en-line">I <strong>have visited</strong> Japan twice.</p>
    <p class="ko-line">저는 일본을 두 번 방문한 적이 있습니다.</p>
    <hr/>
    <p class="part-desc">자주 쓰는 과거분사 (외우세요):</p>
    <p class="en-line">go → went → <strong>gone</strong></p>
    <p class="en-line">see → saw → <strong>seen</strong></p>
    <p class="en-line">eat → ate → <strong>eaten</strong></p>
    <p class="en-line">have → had → <strong>had</strong></p>
    <p class="en-line">do → did → <strong>done</strong></p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ Yesterday I <s>go</s> to school. → ✅ Yesterday I <strong>went</strong> to school.</p>
    <p>❌ I <s>am go</s> tomorrow. → ✅ I <strong>will go</strong> tomorrow.</p>
    <p>❌ She <s>is eat</s> lunch now. → ✅ She <strong>is eating</strong> lunch now.</p>
    <p>❌ I <s>have went</s> there. → ✅ I <strong>have gone</strong> there.</p>
  </div>

  <!-- INTERACTIVE PRACTICE -->
  <div class="practice-block" data-practice-id="1"></div>`;
