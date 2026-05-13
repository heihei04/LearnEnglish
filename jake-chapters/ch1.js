// ============================================================
// Jake's Chapter 1
// ============================================================

const JAKE_CH1 = `<div class="lesson-block info">
    <div class="lesson-block-header">📌 개념 정리 (Key Concept)</div>
    <p>▸ 영어 문장은 보통 <strong>주어 (subject)</strong>로 시작합니다. 주어는 "누가" 또는 "무엇이"입니다.</p>
    <p>▸ <strong>동사 (verb)</strong>는 주어 바로 뒤에 와서 주어의 <strong>상태</strong>나 <strong>행동</strong>을 설명합니다. 모든 영어 문장에는 동사가 반드시 필요합니다.</p>
    <p>▸ 동사는 크게 <strong>be동사</strong>와 <strong>일반동사</strong>로 나뉩니다.</p>
    <hr/>
    <p class="en-line"><span class="hl-subj">My coffee</span> is hot.</p>
    <p class="ko-line">제 커피는 뜨겁습니다. (be동사)</p>
    <p class="en-line"><span class="hl-subj">Children</span> love candy.</p>
    <p class="ko-line">아이들은 사탕을 좋아합니다. (일반동사)</p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 1: be동사 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❶ be동사의 형태</h2>
  <p class="section-intro">be동사는 주어가 <strong>"누구인지"</strong>, <strong>"어떤 상태인지"</strong>, 또는 <strong>"어디에 있는지"</strong>를 설명할 때 사용하며 "<strong>~이다</strong>", "<strong>~가 있다</strong>"라는 의미를 가집니다.</p>

  <div class="example-box">
    <p class="en-line">• My brother <strong>is</strong> a firefighter. <span class="ko-line-inline">제 형은 소방관입니다.</span></p>
    <p class="en-line">• The soup <strong>is</strong> cold. <span class="ko-line-inline">수프가 차갑습니다.</span></p>
    <p class="en-line">• The keys <strong>are</strong> on the shelf. <span class="ko-line-inline">열쇠는 선반 위에 있습니다.</span></p>
  </div>

  <p class="sub-label">be동사는 주어와 시제에 따라 모양이 바뀝니다:</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead>
        <tr><th>주어</th><th>현재</th><th>과거</th></tr>
      </thead>
      <tbody>
        <tr><td>I</td><td><strong>am</strong></td><td><strong>was</strong></td></tr>
        <tr><td>We / You / They</td><td><strong>are</strong></td><td><strong>were</strong></td></tr>
        <tr><td>He / She / It / 사람 이름</td><td><strong>is</strong></td><td><strong>was</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <p class="en-line">• I <strong>am</strong> hungry. <span class="ko-line-inline">저는 배가 고픕니다.</span></p>
    <p class="en-line">• Sarah <strong>is</strong> at the airport. <span class="ko-line-inline">사라는 공항에 있습니다.</span></p>
    <p class="en-line">• These chairs <strong>are</strong> broken. <span class="ko-line-inline">이 의자들은 망가졌습니다.</span></p>
    <p class="en-line">• My grandfather <strong>was</strong> a pilot. <span class="ko-line-inline">제 할아버지는 조종사였습니다.</span></p>
    <p class="en-line">• You <strong>were</strong> right yesterday. <span class="ko-line-inline">당신은 어제 맞았습니다.</span></p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 2: be동사 부정문 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❷ be동사의 부정문</h2>
  <p class="section-intro">"<strong>~이 아니다</strong>", "<strong>~에 없다</strong>"라고 표현할 때는 <strong>be동사 뒤에 not</strong>을 붙입니다.</p>

  <div class="example-box">
    <p class="en-line">She <strong>is</strong> a nurse. <span class="ko-line-inline">그녀는 간호사입니다.</span></p>
    <p class="en-line">→ She <strong>is not</strong> a nurse. <span class="ko-line-inline">그녀는 간호사가 아닙니다.</span></p>
    <hr/>
    <p class="en-line">My phone <strong>was</strong> in my bag. <span class="ko-line-inline">제 핸드폰은 가방에 있었습니다.</span></p>
    <p class="en-line">→ My phone <strong>was not</strong> in my bag. <span class="ko-line-inline">제 핸드폰은 가방에 없었습니다.</span></p>
    <hr/>
    <p class="en-line">These cookies <strong>are</strong> fresh. <span class="ko-line-inline">이 쿠키들은 신선합니다.</span></p>
    <p class="en-line">→ These cookies <strong>are not</strong> fresh. <span class="ko-line-inline">이 쿠키들은 신선하지 않습니다.</span></p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">💡 TIP — 줄임말 (Contractions)</div>
    <p>회화에서는 보통 줄여 씁니다:</p>
    <p class="en-line">is not = <strong>isn't</strong></p>
    <p class="en-line">are not = <strong>aren't</strong></p>
    <p class="en-line">was not = <strong>wasn't</strong></p>
    <p class="en-line">were not = <strong>weren't</strong></p>
    <p class="en-line">am not은 줄여 쓰지 않습니다 (하지만 I am not → I'm not은 가능)</p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 3: There + be동사 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❸ There + be동사</h2>
  <p class="section-intro"><strong>"~에 ~이 있다"</strong>라는 의미로, 어떤 장소에 무엇이 존재함을 나타냅니다. 뒤에 오는 명사가 단수냐 복수냐에 따라 be동사 형태가 바뀝니다.</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>형태</th><th>+</th><th>뒤에 오는 명사</th></tr></thead>
      <tbody>
        <tr><td>There <strong>is</strong> (현재) / <strong>was</strong> (과거)</td><td>+</td><td>단수 명사 또는 셀 수 없는 명사<br/><small>(a pen, milk, sugar 등)</small></td></tr>
        <tr><td>There <strong>are</strong> (현재) / <strong>were</strong> (과거)</td><td>+</td><td>복수 명사<br/><small>(two dogs, many books 등)</small></td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <p class="en-line">• There <strong>is</strong> a cat under the bed. <span class="ko-line-inline">침대 아래에 고양이가 있습니다.</span></p>
    <p class="en-line">• There <strong>was</strong> a lot of snow last winter. <span class="ko-line-inline">지난 겨울에는 눈이 많이 왔습니다.</span></p>
    <p class="en-line">• There <strong>are</strong> three cups in the sink. <span class="ko-line-inline">싱크대에 컵이 세 개 있습니다.</span></p>
    <p class="en-line">• There <strong>were</strong> not enough seats on the train. <span class="ko-line-inline">기차에 좌석이 충분하지 않았습니다.</span></p>
  </div>

  <p class="sub-label">자주 쓰는 표현:</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>표현</th><th>의미</th></tr></thead>
      <tbody>
        <tr><td>There is <strong>no</strong> + 명사</td><td>(명사)가 없다</td></tr>
        <tr><td>There are <strong>many kinds of</strong> + 복수 명사</td><td>~의 다양한 종류가 있다</td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <p class="en-line">• There is <strong>no</strong> milk in the fridge. <span class="ko-line-inline">냉장고에 우유가 없습니다.</span></p>
    <p class="en-line">• There are <strong>many kinds of</strong> coffee at this cafe. <span class="ko-line-inline">이 카페에는 다양한 종류의 커피가 있습니다.</span></p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">💡 TIP — 셀 수 없는 명사</div>
    <p>water, milk, money, time, advice, information 등은 셀 수 없는 명사입니다. 항상 <strong>단수</strong> 취급하므로 <strong>is</strong> / <strong>was</strong>를 씁니다.</p>
    <p class="en-line">❌ There <s>are</s> a lot of water. → ✅ There <strong>is</strong> a lot of water.</p>
    <p class="en-line">❌ There <s>were</s> too much traffic. → ✅ There <strong>was</strong> too much traffic.</p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 4: 일반동사 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❹ 일반동사 (General Verbs)</h2>
  <p class="section-intro">be동사를 제외한 모든 동사를 <strong>일반동사</strong>라고 합니다. 주어의 <strong>행동</strong>을 나타냅니다.</p>

  <div class="example-box">
    <p class="en-line">• He <strong>drives</strong> a truck. <span class="ko-line-inline">그는 트럭을 운전합니다.</span></p>
    <p class="en-line">• Tina <strong>bought</strong> a new laptop. <span class="ko-line-inline">티나는 새 노트북을 샀습니다.</span></p>
    <p class="en-line">• They <strong>visit</strong> their parents on Sundays. <span class="ko-line-inline">그들은 일요일마다 부모님을 방문합니다.</span></p>
  </div>

  <p class="sub-label">일반동사는 현재의 사실이나 반복적인 습관을 표현할 때 기본형을 사용합니다:</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>의미</th><th>예시</th></tr></thead>
      <tbody>
        <tr><td>현재 사실</td><td>I <strong>own</strong> a small bakery.<br/><small>저는 작은 빵집을 운영합니다.</small></td></tr>
        <tr><td>반복적 습관</td><td>We <strong>jog</strong> in the park every morning.<br/><small>우리는 매일 아침 공원에서 조깅합니다.</small></td></tr>
        <tr><td>일반적 진실</td><td>Penguins <strong>live</strong> in cold places.<br/><small>펭귄은 추운 곳에 삽니다.</small></td></tr>
      </tbody>
    </table>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">💡 TIP — be동사와 일반동사는 함께 쓰지 않습니다</div>
    <p class="en-line">❌ She <s>is play</s> tennis. → ✅ She <strong>plays</strong> tennis.</p>
    <p class="en-line">❌ I <s>am have</s> a sister. → ✅ I <strong>have</strong> a sister.</p>
    <p>한 문장에 동사는 하나만! be동사와 일반동사를 동시에 쓰면 안 됩니다.</p>
    <hr/>
    <p>예외: be동사 + 일반동사<strong>-ing</strong>는 진행형으로 사용됩니다 (chapter 2에서 학습).</p>
    <p class="en-line">✅ She <strong>is playing</strong> tennis. (그녀는 테니스를 치고 있습니다)</p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 5: 3인칭 단수 변화 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❺ 일반동사의 3인칭 단수 변화</h2>
  <p class="section-intro">주어가 <strong>3인칭 단수</strong> (he, she, it, 사람 이름 등)일 때, 현재 시제 일반동사 뒤에 <strong>-s</strong>, <strong>-es</strong>, 또는 <strong>-ies</strong>를 붙입니다.</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>규칙</th><th>변화</th><th>예시</th></tr></thead>
      <tbody>
        <tr><td>대부분</td><td>+ <strong>-s</strong></td><td>read → read<strong>s</strong>, want → want<strong>s</strong></td></tr>
        <tr><td>-o, -ch, -sh, -ss, -x로 끝나면</td><td>+ <strong>-es</strong></td><td>go → go<strong>es</strong>, watch → watch<strong>es</strong>, miss → miss<strong>es</strong></td></tr>
        <tr><td>자음 + y로 끝나면</td><td>y → <strong>-ies</strong></td><td>study → stud<strong>ies</strong>, cry → cr<strong>ies</strong></td></tr>
        <tr><td>have</td><td>불규칙</td><td>have → <strong>has</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <p class="en-line">• My uncle <strong>fixes</strong> cars for a living. <span class="ko-line-inline">제 삼촌은 차를 고치는 일을 합니다.</span></p>
    <p class="en-line">• Olivia <strong>worries</strong> about her exam. <span class="ko-line-inline">올리비아는 시험에 대해 걱정합니다.</span></p>
    <p class="en-line">• The dog <strong>has</strong> a long tail. <span class="ko-line-inline">그 개는 긴 꼬리가 있습니다.</span></p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 6: 일반동사의 부정문 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❻ 일반동사의 부정문</h2>
  <p class="section-intro">"~하지 않다"라고 표현할 때 동사 앞에 <strong>don't / doesn't / didn't</strong>을 붙입니다. 그리고 <strong>뒤에 오는 동사는 반드시 원형</strong>입니다.</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>주어</th><th>시제</th><th>형태</th></tr></thead>
      <tbody>
        <tr><td>I / We / You / They</td><td>현재</td><td><strong>don't</strong> + 동사원형</td></tr>
        <tr><td>He / She / It / 이름</td><td>현재</td><td><strong>doesn't</strong> + 동사원형</td></tr>
        <tr><td>모든 주어</td><td>과거</td><td><strong>didn't</strong> + 동사원형</td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <p class="en-line">• I <strong>don't drink</strong> alcohol. <span class="ko-line-inline">저는 술을 마시지 않습니다.</span></p>
    <p class="en-line">• My sister <strong>doesn't eat</strong> meat. <span class="ko-line-inline">제 여동생은 고기를 먹지 않습니다.</span></p>
    <p class="en-line">• We <strong>didn't see</strong> the movie. <span class="ko-line-inline">우리는 그 영화를 보지 않았습니다.</span></p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">💡 TIP — 가장 흔한 실수</div>
    <p>doesn't / didn't 뒤에는 <strong>반드시 동사원형</strong>이 옵니다. -s나 과거형이 오면 안됩니다!</p>
    <p class="en-line">❌ She doesn't <s>likes</s> tea. → ✅ She doesn't <strong>like</strong> tea.</p>
    <p class="en-line">❌ He didn't <s>went</s> home. → ✅ He didn't <strong>go</strong> home.</p>
  </div>

  <!-- ============================================================ -->
  <!-- SECTION 7: 일반동사의 의문문 -->
  <!-- ============================================================ -->
  <h2 class="section-title-large">❼ 일반동사의 의문문</h2>
  <p class="section-intro">"~합니까?"라고 물어볼 때 문장 맨 앞에 <strong>Do / Does / Did</strong>를 붙이고, 동사는 <strong>원형</strong>으로 씁니다.</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>주어</th><th>시제</th><th>형태</th></tr></thead>
      <tbody>
        <tr><td>I / We / You / They</td><td>현재</td><td><strong>Do</strong> + 주어 + 동사원형 ~?</td></tr>
        <tr><td>He / She / It / 이름</td><td>현재</td><td><strong>Does</strong> + 주어 + 동사원형 ~?</td></tr>
        <tr><td>모든 주어</td><td>과거</td><td><strong>Did</strong> + 주어 + 동사원형 ~?</td></tr>
      </tbody>
    </table>
  </div>

  <div class="example-box">
    <p class="en-line">Q: <strong>Do</strong> you exercise regularly? <span class="ko-line-inline">당신은 규칙적으로 운동합니까?</span></p>
    <p class="en-line">A: Yes, I do. / No, I don't.</p>
    <hr/>
    <p class="en-line">Q: <strong>Does</strong> Aiden speak Japanese? <span class="ko-line-inline">에이든은 일본어를 합니까?</span></p>
    <p class="en-line">A: Yes, he does. / No, he doesn't.</p>
    <hr/>
    <p class="en-line">Q: <strong>Did</strong> they finish the project? <span class="ko-line-inline">그들은 프로젝트를 끝냈습니까?</span></p>
    <p class="en-line">A: Yes, they did. / No, they didn't.</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">⭐ Jake's 핵심 정리 (Summary)</div>
    <p>✅ 영어 문장에는 <strong>반드시 동사 1개</strong>가 필요합니다.</p>
    <p>✅ 동사 = <strong>be동사 (am/is/are/was/were)</strong> 또는 <strong>일반동사 (work, eat, study 등)</strong></p>
    <p>✅ 주어가 he/she/it이면 일반동사에 <strong>-s</strong>를 붙입니다.</p>
    <p>✅ 부정문: be동사 + <strong>not</strong> / <strong>don't·doesn't·didn't</strong> + 동사원형</p>
    <p>✅ 의문문: be동사를 앞으로 / <strong>Do·Does·Did</strong>를 맨 앞에</p>
  </div>

  <!-- ============================================================ -->
  <!-- INTERACTIVE PRACTICE ACTIVITIES -->
  <!-- ============================================================ -->
  <div class="practice-section">
    <h2 class="practice-section-title">📝 연습 문제 (Practice)</h2>
    <p class="practice-section-intro">아래 4가지 연습을 해보세요. 답을 쓰고 "AI 채점" 버튼을 누르면 AI가 한국어로 설명해 줍니다.</p>
  </div>

  <!-- Activity A: Fill in be동사 -->
  <div class="ai-practice-block" data-practice-id="ch1-a"></div>

  <!-- Activity B: Word bank — choose be동사 + complete sentence -->
  <div class="ai-practice-block" data-practice-id="ch1-b"></div>

  <!-- Activity C: Find and fix the error -->
  <div class="ai-practice-block" data-practice-id="ch1-c"></div>

  <!-- Activity D: Translate Korean to English -->
  <div class="ai-practice-block" data-practice-id="ch1-d"></div>`;
