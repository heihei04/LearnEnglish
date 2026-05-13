// ============================================================
// Jake's Chapter 3
// ============================================================

const JAKE_CH3 = `<div class="lesson-block info">
    <div class="lesson-block-header">🔧 조동사 (Modal Verbs) 란?</div>
    <p>조동사는 일반 동사를 <strong>도와주는</strong> 역할을 합니다. 능력, 가능성, 허가, 의무 등을 표현합니다. 조동사 뒤에는 <strong>항상 동사원형</strong>이 옵니다.</p>
  </div>

  <p class="sub-label">조동사 기본 규칙:</p>
  <div class="example-box">
    <p class="en-line">주어 + <strong>조동사</strong> + <strong>동사원형</strong> + ...</p>
    <hr/>
    <p class="en-line">✅ She <strong>can speak</strong> English.</p>
    <p class="en-line">❌ She can <s>speaks</s> English. (-s 붙이면 안됨)</p>
    <p class="en-line">❌ She can <s>to speak</s> English. (to 붙이면 안됨)</p>
  </div>

  <p class="sub-label">자주 쓰는 6가지 조동사:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">1. can / could — 능력, 가능성</div>
    <p class="en-line"><strong>can</strong> = 할 수 있다 (현재)</p>
    <p class="en-line"><strong>could</strong> = 할 수 있었다 (과거) / 할 수도 있다 (가능성)</p>
    <hr/>
    <p class="en-line">I <strong>can</strong> swim very well.</p>
    <p class="ko-line">저는 수영을 잘 할 수 있습니다.</p>
    <hr/>
    <p class="en-line">When I was young, I <strong>could</strong> run fast.</p>
    <p class="ko-line">제가 어렸을 때, 저는 빨리 달릴 수 있었습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">2. will / would — 미래, 정중함</div>
    <p class="en-line"><strong>will</strong> = 할 것이다 (미래)</p>
    <p class="en-line"><strong>would</strong> = 한다면 ~할 텐데 (가정)</p>
    <hr/>
    <p class="en-line">I <strong>will</strong> call you tomorrow.</p>
    <p class="ko-line">저는 내일 당신에게 전화할 것입니다.</p>
    <hr/>
    <p class="en-line">I <strong>would</strong> like a cup of coffee, please.</p>
    <p class="ko-line">커피 한 잔 주세요. (정중한 부탁)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">3. should — 충고, 권유</div>
    <p class="en-line"><strong>should</strong> = ~해야 한다 (조언)</p>
    <hr/>
    <p class="en-line">You <strong>should</strong> exercise every day.</p>
    <p class="ko-line">당신은 매일 운동해야 합니다.</p>
    <hr/>
    <p class="en-line">He <strong>should not</strong> (shouldn't) eat too much sugar.</p>
    <p class="ko-line">그는 설탕을 너무 많이 먹지 말아야 합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">4. must / have to — 강한 의무</div>
    <p class="en-line"><strong>must</strong> = 반드시 해야 한다 (강한 의무)</p>
    <p class="en-line"><strong>have to / has to</strong> = ~해야 한다 (의무)</p>
    <hr/>
    <p class="en-line">Students <strong>must</strong> wear uniforms at this school.</p>
    <p class="ko-line">학생들은 이 학교에서 교복을 입어야 합니다.</p>
    <hr/>
    <p class="en-line">I <strong>have to</strong> finish this report today.</p>
    <p class="ko-line">저는 오늘 이 보고서를 끝내야 합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">5. may / might — 가능성, 허가</div>
    <p class="en-line"><strong>may</strong> = ~할지도 모른다 / ~해도 된다</p>
    <p class="en-line"><strong>might</strong> = ~할지도 모른다 (더 낮은 가능성)</p>
    <hr/>
    <p class="en-line">It <strong>may</strong> rain this afternoon.</p>
    <p class="ko-line">오늘 오후에 비가 올지도 모릅니다.</p>
    <hr/>
    <p class="en-line"><strong>May</strong> I use your phone?</p>
    <p class="ko-line">전화 좀 사용해도 될까요? (정중한 허가 요청)</p>
  </div>

  <p class="sub-label">조동사 부정문과 의문문:</p>
  <div class="part-card">
    <div class="part-tag wb-obj">부정: 조동사 + not</div>
    <p class="en-line">cannot (can't), will not (won't), should not (shouldn't)</p>
    <p class="en-line">must not (mustn't), may not, might not</p>
    <hr/>
    <p class="en-line">She <strong>cannot</strong> come tonight.</p>
    <p class="en-line">You <strong>shouldn't</strong> worry.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">의문문: 조동사를 맨 앞으로</div>
    <p class="en-line"><strong>Can</strong> you help me?</p>
    <p class="en-line"><strong>Should</strong> I call her?</p>
    <p class="en-line"><strong>Will</strong> it rain tomorrow?</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ He can <s>plays</s> the piano. → ✅ He can <strong>play</strong> the piano.</p>
    <p>❌ I <s>can to</s> swim. → ✅ I <strong>can</strong> swim.</p>
    <p>❌ She <s>musts</s> study. → ✅ She <strong>must</strong> study. (조동사는 변하지 않음)</p>
    <p>조동사 + 동사원형! 절대 잊지 마세요.</p>
  </div>

  <!-- INTERACTIVE PRACTICE -->
  <div class="practice-block" data-practice-id="2"></div>`;
