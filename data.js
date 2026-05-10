// ============================================================
// TOEIC Speaking vocabulary data
// Source: 제이크 토익스피킹 필수표현 (기초편 ①)
// ============================================================

const VOCAB = [
  // take (12)
  {id:'t01', cat:'take', en:'It takes about two hours to go home.', ko:'집에 가는데 두 시간 정도 걸립니다.', phrase:'It takes about 시간', meaning:'시간이 어느정도 걸리다'},
  {id:'t02', cat:'take', en:'She is taking notes.', ko:'그녀는 필기를 하고 있습니다.', phrase:'take notes', meaning:'필기하다'},
  {id:'t03', cat:'take', en:'I take a bus twice a day.', ko:'저는 버스를 하루에 두 번 탑니다.', phrase:'take 교통수단', meaning:'교통수단을 이용하다'},
  {id:'t04', cat:'take', en:'The meeting will take place at 10 A.M.', ko:'회의는 오전 10시에 열릴 것입니다.', phrase:'take place', meaning:'열리다'},
  {id:'t05', cat:'take', en:'I took an online lecture.', ko:'저는 온라인 강의를 들었습니다.', phrase:'take a lecture / take a class', meaning:'강의 / 수업을 듣다'},
  {id:'t06', cat:'take', en:'A woman is taking a picture.', ko:'한 여자가 사진을 찍고 있습니다.', phrase:'take a picture', meaning:'사진을 찍다'},
  {id:'t07', cat:'take', en:'I think this picture was taken in a lobby.', ko:'이 사진은 로비에서 찍힌 것 같습니다.', phrase:'a picture was taken', meaning:'사진이 찍히다'},
  {id:'t08', cat:'take', en:'A man is taking an order.', ko:'한 남자가 주문을 받고 있습니다.', phrase:'take an order', meaning:'주문을 받다'},
  {id:'t09', cat:'take', en:'I usually take a walk in a park.', ko:'저는 주로 공원에서 산책을 합니다.', phrase:'take a walk', meaning:'산책을 하다'},
  {id:'t10', cat:'take', en:'They are taking a break at work.', ko:'그들은 직장에서 잠시 쉬고 있습니다.', phrase:'take a break', meaning:'잠시 쉬다'},
  {id:'t11', cat:'take', en:'She took out a loan from a bank.', ko:'그녀는 은행에서 대출을 받았습니다.', phrase:'take out a loan', meaning:'대출을 받다'},
  {id:'t12', cat:'take', en:'I took a nap for about 30 minutes.', ko:'저는 30분 정도 낮잠을 잤습니다.', phrase:'take a nap', meaning:'낮잠을 자다'},

  // get (11)
  {id:'g01', cat:'get', en:'He studied hard to get a job.', ko:'그는 취업을 하기 위해 열심히 공부했습니다.', phrase:'get a job', meaning:'취업을 하다'},
  {id:'g02', cat:'get', en:'I got a high score on the TOEIC.', ko:'저는 토익에서 높은 점수를 받았습니다.', phrase:'get a high score', meaning:'높은 점수를 받다'},
  {id:'g03', cat:'get', en:'I got a refund on my shirt.', ko:'저는 셔츠를 환불 받았습니다.', phrase:'get a refund', meaning:'환불 받다'},
  {id:'g04', cat:'get', en:'You can get a $20 discount.', ko:'당신은 20달러를 할인 받을 수 있습니다.', phrase:'get a discount', meaning:'할인을 받다'},
  {id:'g05', cat:'get', en:'I got feedback often from my teacher.', ko:'저는 선생님께 자주 피드백을 받았습니다.', phrase:'get feedback', meaning:'피드백을 받다'},
  {id:'g06', cat:'get', en:'We can get help from a trainer.', ko:'우리는 트레이너에게 도움을 받을 수 있습니다.', phrase:'get help / get support', meaning:'도움 / 지원을 받다'},
  {id:'g07', cat:'get', en:'I got disappointed with the result.', ko:'저는 결과에 실망했습니다.', phrase:'get 형용사', meaning:'~한 상태가 되다'},
  {id:'g08', cat:'get', en:'He got promoted last year.', ko:'그는 작년에 승진했습니다.', phrase:'get promoted', meaning:'승진하다'},
  {id:'g09', cat:'get', en:"He didn't get paid on time.", ko:'그는 제때에 월급을 받지 못했습니다.', phrase:'get paid', meaning:'월급을 받다'},
  {id:'g10', cat:'get', en:'She got along with everyone.', ko:'그녀는 모두와 잘 지냈습니다.', phrase:'get along with A', meaning:'A와 잘 지내다'},
  {id:'g11', cat:'get', en:'I got used to my work.', ko:'저는 업무에 익숙해졌습니다.', phrase:'get used to A', meaning:'A에 익숙해지다'},

  // do (11)
  {id:'d01', cat:'do', en:'She used social media to do business.', ko:'그녀는 사업을 하기 위해 소셜미디어를 이용했습니다.', phrase:'do business', meaning:'사업을 하다'},
  {id:'d02', cat:'do', en:'I did an internship at an IT company.', ko:'저는 IT 회사에서 인턴 근무를 했습니다.', phrase:'do an internship', meaning:'인턴 근무를 하다'},
  {id:'d03', cat:'do', en:'He did a variety of tasks at work.', ko:'그는 직장에서 다양한 업무를 했습니다.', phrase:'do a task', meaning:'업무를 하다'},
  {id:'d04', cat:'do', en:'We can do various exercises at the gym.', ko:'우리는 헬스장에서 다양한 운동을 할 수 있습니다.', phrase:'do exercise', meaning:'운동을 하다'},
  {id:'d05', cat:'do', en:'He did yoga every day.', ko:'그는 매일 요가를 했습니다.', phrase:'do yoga / do weight training', meaning:'요가 / 웨이트 트레이닝을 하다'},
  {id:'d06', cat:'do', en:'I do the grocery shopping online.', ko:'저는 온라인에서 식료품 쇼핑을 합니다.', phrase:'do the shopping', meaning:'쇼핑을 하다'},
  {id:'d07', cat:'do', en:'I had to do housework alone.', ko:'저는 집안일을 혼자 해야 했습니다.', phrase:'do housework', meaning:'집안일을 하다'},
  {id:'d08', cat:'do', en:"I don't have to do the dishes after eating.", ko:'저는 식사 후에 설거지를 하지 않아도 됩니다.', phrase:'do the dishes / do the laundry', meaning:'설거지 / 빨래를 하다'},
  {id:'d09', cat:'do', en:'When I was young, I did volunteer work often.', ko:'제가 어렸을 때, 저는 자주 봉사활동을 했습니다.', phrase:'do volunteer work', meaning:'봉사활동을 하다'},
  {id:'d10', cat:'do', en:'A man is doing an experiment.', ko:'한 남자가 실험을 하고 있습니다.', phrase:'do an experiment', meaning:'실험을 하다'},
  {id:'d11', cat:'do', en:'I did a team project on AI.', ko:'저는 AI에 관한 팀 프로젝트를 진행했습니다.', phrase:'do a project', meaning:'프로젝트를 진행하다'},

  // go (12)
  {id:'o01', cat:'go', en:'I went on a trip to Sydney with my family.', ko:'저는 가족과 함께 시드니로 여행을 갔습니다.', phrase:'go on a trip', meaning:'여행을 하다'},
  {id:'o02', cat:'go', en:'I went on a package tour to Shanghai.', ko:'저는 상하이로 패키지 투어를 갔습니다.', phrase:'go on a package tour', meaning:'패키지 여행을 하다'},
  {id:'o03', cat:'go', en:'He went on a vacation to Paris.', ko:'그는 파리로 휴가를 갔습니다.', phrase:'go on a vacation', meaning:'휴가를 가다'},
  {id:'o04', cat:'go', en:'I went on a business trip to London.', ko:'저는 런던으로 출장을 갔습니다.', phrase:'go on a business trip', meaning:'출장을 가다'},
  {id:'o05', cat:'go', en:'I go to work by subway.', ko:'저는 지하철로 출근합니다.', phrase:'go to school / go to work', meaning:'통학 / 출근하다'},
  {id:'o06', cat:'go', en:'I go to the movies about once a month.', ko:'저는 한 달에 한 번 정도 영화관에 갑니다.', phrase:'go to the movies', meaning:'영화를 보러 가다'},
  {id:'o07', cat:'go', en:'I often go for a walk in the evening.', ko:'저는 저녁에 자주 산책을 합니다.', phrase:'go for a walk / go for a run', meaning:'산책 / 달리기를 하다'},
  {id:'o08', cat:'go', en:'I go hiking for exercise.', ko:'저는 운동을 위해 등산을 합니다.', phrase:'go swimming / go hiking / go jogging', meaning:'수영 / 등산 / 조깅을 하다'},
  {id:'o09', cat:'go', en:'I usually go shopping on weekends.', ko:'저는 보통 주말에 쇼핑하러 갑니다.', phrase:'go shopping', meaning:'쇼핑을 하러 가다'},
  {id:'o10', cat:'go', en:'A man is going up the stairs.', ko:'한 남자가 계단을 올라가고 있습니다.', phrase:'go up the stairs', meaning:'계단을 올라가다'},
  {id:'o11', cat:'go', en:'A boat is going along the river.', ko:'보트가 강을 따라 가고 있습니다.', phrase:'go along A', meaning:'A를 따라 가다'},
  {id:'o12', cat:'go', en:'The company went bankrupt.', ko:'그 회사는 파산했습니다.', phrase:'go bankrupt', meaning:'파산하다'},

  // make (11)
  {id:'m01', cat:'make', en:'I made many friends at school.', ko:'저는 학교에서 많은 친구를 사귀었습니다.', phrase:'make friends', meaning:'친구를 만들다'},
  {id:'m02', cat:'make', en:'I often made mistakes at work.', ko:'저는 직장에서 자주 실수를 했습니다.', phrase:'make mistakes', meaning:'실수를 하다'},
  {id:'m03', cat:'make', en:'I made an investment in a startup company.', ko:'저는 한 스타트업 회사에 투자를 했습니다.', phrase:'make an investment', meaning:'투자를 하다'},
  {id:'m04', cat:'make', en:'I made a reservation online.', ko:'저는 온라인으로 예약을 했습니다.', phrase:'make a reservation', meaning:'예약을 하다'},
  {id:'m05', cat:'make', en:'The movie made me sad.', ko:'그 영화는 저를 슬프게 만들었습니다.', phrase:'make A 형용사', meaning:'A를 ~하게 만들다'},
  {id:'m06', cat:'make', en:'He made a good impression on us.', ko:'그는 우리에게 좋은 인상을 주었습니다.', phrase:'make a 형용사 impression', meaning:'~한 인상을 주다'},
  {id:'m07', cat:'make', en:'He made a difficult decision.', ko:'그는 어려운 결정을 내렸습니다.', phrase:'make a decision', meaning:'결정을 내리다'},
  {id:'m08', cat:'make', en:'I made a plan to travel to Japan.', ko:'저는 일본여행 계획을 세웠습니다.', phrase:'make a plan', meaning:'계획을 세우다'},
  {id:'m09', cat:'make', en:'They made an effort to attract customers.', ko:'그들은 손님을 끌기 위해 노력했습니다.', phrase:'make an effort', meaning:'노력을 하다'},
  {id:'m10', cat:'make', en:'It was difficult to make a profit.', ko:'수익을 내기가 어려웠습니다.', phrase:'make a profit', meaning:'수익을 내다'},
  {id:'m11', cat:'make', en:'He made a lot of money.', ko:'그는 많은 돈을 벌었습니다.', phrase:'make money', meaning:'돈을 벌다'},

  // have (13)
  {id:'h01', cat:'have', en:'I usually have dinner at home.', ko:'저는 주로 집에서 저녁을 먹습니다.', phrase:'have breakfast / lunch / dinner', meaning:'아침 / 점심 / 저녁을 먹다'},
  {id:'h02', cat:'have', en:'They are having a meeting.', ko:'그들은 회의를 하고 있습니다.', phrase:'have a meeting / have a discussion', meaning:'회의 / 토론을 하다'},
  {id:'h03', cat:'have', en:'I had a lot of assignments.', ko:'저는 과제가 많았습니다.', phrase:'have homework / have assignment', meaning:'숙제 / 과제가 있다'},
  {id:'h04', cat:'have', en:'I had a part-time job at a restaurant.', ko:'저는 레스토랑에서 아르바이트를 했습니다.', phrase:'have a part-time job', meaning:'아르바이트를 하다'},
  {id:'h05', cat:'have', en:'I have been to Europe.', ko:'저는 유럽에 가본 적이 있습니다.', phrase:'have been to A', meaning:'A에 가본 적이 있다'},
  {id:'h06', cat:'have', en:'She had difficulty promoting new products.', ko:'그녀는 신제품 홍보에 어려움을 겪었습니다.', phrase:'have difficulty v-ing', meaning:'~하는데 어려움을 겪다'},
  {id:'h07', cat:'have', en:'A man is having a video call.', ko:'한 남자가 영상통화를 하고 있습니다.', phrase:'have a video call', meaning:'영상통화를 하다'},
  {id:'h08', cat:'have', en:'I had a chance to study abroad.', ko:'저는 해외에서 공부할 기회가 있었습니다.', phrase:'have a chance to V', meaning:'~할 기회가 있다'},
  {id:'h09', cat:'have', en:"I didn't have enough time to study.", ko:'저는 공부할 시간이 충분하지 않았습니다.', phrase:'have enough time to V', meaning:'~할 시간이 충분하다'},
  {id:'h10', cat:'have', en:'He has experience in marketing.', ko:'그는 마케팅 업무 경험이 있습니다.', phrase:'have experience in A', meaning:'A에 경험이 있다'},
  {id:'h11', cat:'have', en:'I had an unhealthy lifestyle.', ko:'저는 건강하지 않은 생활습관을 가지고 있었습니다.', phrase:'have a 형용사 lifestyle', meaning:'~한 생활습관을 갖다'},
  {id:'h12', cat:'have', en:'I have a habit of sleeping late.', ko:'저는 늦게 자는 습관이 있습니다.', phrase:'have a habit of v-ing', meaning:'~하는 습관이 있다'},
  {id:'h13', cat:'have', en:'People have different tastes in fashion.', ko:'사람들은 패션에 대한 취향이 다릅니다.', phrase:'have different tastes in A', meaning:'A에 대한 취향이 다르다'}
];

// ============================================================
// Sentence builder questions (drag-and-drop word order)
// Generated from VOCAB so all sentences come from his actual study material
// ============================================================
const BUILD_QUESTIONS = [
  {ko:'저는 사과를 먹습니다.', words:['I','eat','an apple'], answer:['I','eat','an apple'], hint:'주어 + 동사 + 목적어'},
  {ko:'그녀는 필기를 하고 있습니다.', words:['notes','is taking','She'], answer:['She','is taking','notes'], hint:'주어 + (be + 동사ing) + 목적어'},
  {ko:'저는 버스를 하루에 두 번 탑니다.', words:['twice a day','I','take','a bus'], answer:['I','take','a bus','twice a day'], hint:'주어 + 동사 + 목적어 + 시간'},
  {ko:'한 여자가 사진을 찍고 있습니다.', words:['a picture','A woman','is taking'], answer:['A woman','is taking','a picture'], hint:'주어 + (is + 동사ing) + 목적어'},
  {ko:'그들은 직장에서 잠시 쉬고 있습니다.', words:['at work','They','are taking','a break'], answer:['They','are taking','a break','at work'], hint:'주어 + (are + 동사ing) + 목적어 + 장소'},
  {ko:'저는 30분 정도 낮잠을 잤습니다.', words:['for about 30 minutes','I','took','a nap'], answer:['I','took','a nap','for about 30 minutes'], hint:'주어 + 동사(과거) + 목적어 + 시간'},
  {ko:'그는 작년에 승진했습니다.', words:['last year','He','got promoted'], answer:['He','got promoted','last year'], hint:'주어 + 동사(과거) + 시간'},
  {ko:'저는 토익에서 높은 점수를 받았습니다.', words:['on the TOEIC','I','got','a high score'], answer:['I','got','a high score','on the TOEIC'], hint:'주어 + 동사(과거) + 목적어 + 장소'},
  {ko:'저는 결과에 실망했습니다.', words:['with the result','I','got disappointed'], answer:['I','got disappointed','with the result'], hint:'주어 + (get + 형용사) + 전치사구'},
  {ko:'그녀는 모두와 잘 지냈습니다.', words:['everyone','She','got along with'], answer:['She','got along with','everyone'], hint:'주어 + 동사구 + 목적어'},
  {ko:'저는 IT 회사에서 인턴 근무를 했습니다.', words:['at an IT company','I','did','an internship'], answer:['I','did','an internship','at an IT company'], hint:'주어 + 동사(과거) + 목적어 + 장소'},
  {ko:'한 남자가 실험을 하고 있습니다.', words:['an experiment','A man','is doing'], answer:['A man','is doing','an experiment'], hint:'주어 + (is + 동사ing) + 목적어'},
  {ko:'저는 가족과 함께 시드니로 여행을 갔습니다.', words:['with my family','I','went on','a trip','to Sydney'], answer:['I','went on','a trip','to Sydney','with my family'], hint:'주어 + 동사구 + 목적어 + 장소 + 동반자'},
  {ko:'저는 런던으로 출장을 갔습니다.', words:['to London','I','went on','a business trip'], answer:['I','went on','a business trip','to London'], hint:'주어 + 동사구 + 목적어 + 장소'},
  {ko:'저는 지하철로 출근합니다.', words:['by subway','I','go','to work'], answer:['I','go','to work','by subway'], hint:'주어 + 동사 + 장소 + 방법'},
  {ko:'한 남자가 계단을 올라가고 있습니다.', words:['the stairs','A man','is going up'], answer:['A man','is going up','the stairs'], hint:'주어 + (is + 동사ing) + 목적어'},
  {ko:'저는 학교에서 많은 친구를 사귀었습니다.', words:['at school','I','made','many friends'], answer:['I','made','many friends','at school'], hint:'주어 + 동사(과거) + 목적어 + 장소'},
  {ko:'저는 온라인으로 예약을 했습니다.', words:['online','I','made','a reservation'], answer:['I','made','a reservation','online'], hint:'주어 + 동사(과거) + 목적어 + 방법'},
  {ko:'그 영화는 저를 슬프게 만들었습니다.', words:['sad','The movie','made','me'], answer:['The movie','made','me','sad'], hint:'주어 + 동사(과거) + 목적어 + 형용사'},
  {ko:'그는 어려운 결정을 내렸습니다.', words:['a difficult decision','He','made'], answer:['He','made','a difficult decision'], hint:'주어 + 동사(과거) + 목적어'},
  {ko:'그는 많은 돈을 벌었습니다.', words:['a lot of money','He','made'], answer:['He','made','a lot of money'], hint:'주어 + 동사(과거) + 목적어'},
  {ko:'저는 주로 집에서 저녁을 먹습니다.', words:['at home','I','have','dinner','usually'], answer:['I','usually','have','dinner','at home'], hint:'주어 + 빈도부사 + 동사 + 목적어 + 장소'},
  {ko:'그들은 회의를 하고 있습니다.', words:['a meeting','They','are having'], answer:['They','are having','a meeting'], hint:'주어 + (are + 동사ing) + 목적어'},
  {ko:'저는 유럽에 가본 적이 있습니다.', words:['to Europe','I','have been'], answer:['I','have been','to Europe'], hint:'주어 + (have + 과거분사) + 장소'},
  {ko:'저는 해외에서 공부할 기회가 있었습니다.', words:['to study abroad','I','had','a chance'], answer:['I','had','a chance','to study abroad'], hint:'주어 + 동사(과거) + 목적어 + (to + 동사)'},
  {ko:'그는 마케팅 업무 경험이 있습니다.', words:['in marketing','He','has','experience'], answer:['He','has','experience','in marketing'], hint:'주어 + 동사 + 목적어 + 분야'},
  {ko:'저는 늦게 자는 습관이 있습니다.', words:['of sleeping late','I','have','a habit'], answer:['I','have','a habit','of sleeping late'], hint:'주어 + 동사 + 목적어 + (of + 동사ing)'},
  {ko:'사람들은 패션에 대한 취향이 다릅니다.', words:['in fashion','People','have','different tastes'], answer:['People','have','different tastes','in fashion'], hint:'주어 + 동사 + 목적어 + 분야'}
];

// ============================================================
// Grammar lessons content
// ============================================================
const LESSONS = [
  // Lesson 1: Word order
  `<div class="lesson-block info">
    <div class="lesson-block-header">💡 가장 중요한 차이점</div>
    <p>한국어와 영어는 <strong>단어 순서가 다릅니다</strong>. 이것이 영어가 어렵게 느껴지는 가장 큰 이유입니다.</p>
  </div>

  <p class="sub-label">한국어 순서: 주어 → 목적어 → 동사</p>
  <div class="example-box">
    <div class="word-row">
      <span class="wb wb-subj">저는</span>
      <span class="wb wb-obj">사과를</span>
      <span class="wb wb-verb">먹습니다</span>
    </div>
    <div class="word-labels">
      <span>주어 (S)</span><span>목적어 (O)</span><span>동사 (V)</span>
    </div>
  </div>

  <div class="arrow-down">↓</div>

  <p class="sub-label">영어 순서: 주어 → 동사 → 목적어</p>
  <div class="example-box">
    <div class="word-row">
      <span class="wb wb-subj">I</span>
      <span class="wb wb-verb">eat</span>
      <span class="wb wb-obj">an apple</span>
    </div>
    <div class="word-labels">
      <span>주어 (S)</span><span>동사 (V)</span><span>목적어 (O)</span>
    </div>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">🔑 기억하세요</div>
    <p>영어에서는 <strong>동사가 항상 주어 바로 뒤에</strong> 옵니다. 한국어처럼 동사를 마지막에 두면 안 됩니다.</p>
  </div>

  <p class="sub-label">더 많은 예시:</p>
  <div class="example-box">
    <p class="en-line">She <span class="hl-verb">drinks</span> coffee.</p>
    <p class="ko-line">그녀는 커피를 마십니다.</p>
    <hr/>
    <p class="en-line">He <span class="hl-verb">studies</span> English.</p>
    <p class="ko-line">그는 영어를 공부합니다.</p>
    <hr/>
    <p class="en-line">We <span class="hl-verb">go</span> to school.</p>
    <p class="ko-line">우리는 학교에 갑니다.</p>
  </div>`,

  // Lesson 2: Sentence parts
  `<div class="lesson-block info">
    <div class="lesson-block-header">🌉 영어 문장의 3가지 부분</div>
    <p>모든 영어 문장은 <strong>주어 + 동사 (+ 목적어)</strong> 구조입니다. 이 3가지만 기억하세요.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">주어 (Subject)</div>
    <p class="part-desc">"누가" 또는 "무엇이" 행동을 하는지</p>
    <p class="part-examples">예: <strong>I</strong> (저), <strong>You</strong> (당신), <strong>He</strong> (그), <strong>She</strong> (그녀), <strong>We</strong> (우리), <strong>They</strong> (그들), <strong>The dog</strong> (그 개)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">동사 (Verb)</div>
    <p class="part-desc">"무엇을 하는지" 행동</p>
    <p class="part-examples">예: <strong>eat</strong> (먹다), <strong>drink</strong> (마시다), <strong>go</strong> (가다), <strong>have</strong> (가지다), <strong>make</strong> (만들다)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">목적어 (Object)</div>
    <p class="part-desc">행동을 "받는" 대상 (필요한 경우만)</p>
    <p class="part-examples">예: <strong>an apple</strong> (사과), <strong>coffee</strong> (커피), <strong>a book</strong> (책)</p>
  </div>

  <p class="sub-label">조립해보면:</p>
  <div class="example-box">
    <div class="word-row center">
      <span class="wb wb-subj">She</span>
      <span class="wb wb-verb">makes</span>
      <span class="wb wb-obj">friends</span>
    </div>
    <p class="ko-line center">그녀는 친구를 만듭니다.</p>
    <hr/>
    <div class="word-row center">
      <span class="wb wb-subj">I</span>
      <span class="wb wb-verb">had</span>
      <span class="wb wb-obj">a meeting</span>
    </div>
    <p class="ko-line center">저는 회의를 했습니다.</p>
    <hr/>
    <div class="word-row center">
      <span class="wb wb-subj">He</span>
      <span class="wb wb-verb">got</span>
      <span class="wb wb-obj">a job</span>
    </div>
    <p class="ko-line center">그는 취업을 했습니다.</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">✅ 팁</div>
    <p>영어 문장을 만들 때 항상 "<strong>누가? + 무엇을 한다? + 무엇을?</strong>" 순서로 생각하세요.</p>
  </div>`,

  // Lesson 3: Articles
  `<div class="lesson-block info">
    <div class="lesson-block-header">❓ 왜 "a" 와 "the" 가 필요한가요?</div>
    <p>한국어에는 없지만, 영어에서는 명사 앞에 <strong>a, an, the</strong> 가 거의 항상 필요합니다. 명사가 "어떤 것"인지 알려주는 신호입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">a / an</div>
    <p class="part-desc"><strong>"하나의"</strong> — 처음 말하는 것, 어떤 것이든 상관없을 때</p>
    <p class="en-line">I bought <span class="hl-verb">a</span> book.</p>
    <p class="ko-line">저는 책을 (한 권) 샀습니다. (어떤 책인지 중요하지 않음)</p>
    <hr/>
    <p class="part-desc"><strong>규칙:</strong> 모음(a, e, i, o, u) 소리 앞에는 <strong>an</strong> 을 씁니다.</p>
    <p class="en-line"><span class="hl-verb">an</span> apple, <span class="hl-verb">an</span> hour, <span class="hl-verb">an</span> internship</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">the</div>
    <p class="part-desc"><strong>"그"</strong> — 듣는 사람도 아는 특정한 것</p>
    <p class="en-line">I read <span class="hl-subj">the</span> book you gave me.</p>
    <p class="ko-line">저는 당신이 준 그 책을 읽었습니다.</p>
    <hr/>
    <p class="part-desc">세상에 하나뿐인 것에도 사용: <strong>the</strong> sun (태양), <strong>the</strong> moon (달)</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">💡 쉬운 비교</div>
    <p><strong>a book</strong> = 책 한 권 (어떤 책이든)</p>
    <p><strong>the book</strong> = 그 책 (우리 둘 다 아는 책)</p>
  </div>

  <p class="sub-label">실제 TOEIC 예시:</p>
  <div class="example-box">
    <p class="en-line">I took <span class="hl-verb">an</span> online lecture.</p>
    <p class="ko-line">저는 온라인 강의를 들었습니다.</p>
    <hr/>
    <p class="en-line">She made <span class="hl-verb">a</span> reservation online.</p>
    <p class="ko-line">그녀는 온라인으로 예약을 했습니다.</p>
    <hr/>
    <p class="en-line">A man is going up <span class="hl-subj">the</span> stairs.</p>
    <p class="ko-line">한 남자가 (그) 계단을 올라가고 있습니다.</p>
  </div>`,

  // Lesson 4: Tenses
  `<div class="lesson-block info">
    <div class="lesson-block-header">⏰ 시제 (Tense) 란?</div>
    <p>영어에서는 <strong>동사의 모양을 바꿔서</strong> 시간을 표현합니다. 토익 스피킹에서는 3가지 기본 시제만 알면 됩니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">현재 (Present) — 지금, 항상, 보통</div>
    <p class="part-desc">동사 원형 그대로 사용 (he/she/it 일 때는 -s 추가)</p>
    <p class="en-line">I <span class="hl-subj">take</span> a bus every day.</p>
    <p class="ko-line">저는 매일 버스를 탑니다.</p>
    <hr/>
    <p class="en-line">She <span class="hl-subj">takes</span> a bus every day.</p>
    <p class="ko-line">그녀는 매일 버스를 탑니다. (she 라서 -s 추가)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">과거 (Past) — 이미 끝난 일</div>
    <p class="part-desc">동사에 보통 -ed 추가, 또는 특별한 형태로 변형</p>
    <p class="en-line">I <span class="hl-verb">took</span> a bus yesterday.</p>
    <p class="ko-line">저는 어제 버스를 탔습니다.</p>
    <hr/>
    <p class="part-desc">자주 쓰는 과거형:</p>
    <p class="en-line">take → <strong>took</strong>, get → <strong>got</strong>, do → <strong>did</strong>, go → <strong>went</strong>, make → <strong>made</strong>, have → <strong>had</strong></p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">현재 진행 (Present Continuous) — 지금 하는 중</div>
    <p class="part-desc">am / is / are + 동사ing</p>
    <p class="en-line">She <span class="hl-obj">is taking</span> notes.</p>
    <p class="ko-line">그녀는 (지금) 필기를 하고 있습니다.</p>
    <hr/>
    <p class="part-desc">주어가 I → <strong>am</strong>, he/she/it → <strong>is</strong>, we/you/they → <strong>are</strong></p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">🔑 시제 빠른 비교</div>
    <p>매일: <strong>I take</strong> a bus.</p>
    <p>어제: <strong>I took</strong> a bus.</p>
    <p>지금: <strong>I am taking</strong> a bus.</p>
  </div>`,

  // Lesson 5: Prepositions
  `<div class="lesson-block info">
    <div class="lesson-block-header">📍 전치사 (Prepositions) 란?</div>
    <p>장소, 시간, 방법을 알려주는 작은 단어들입니다. 한국어의 조사 (~에서, ~에, ~로) 와 비슷합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">in / on / at — 장소</div>
    <p class="en-line"><strong>in</strong> = 안에 (큰 공간)</p>
    <p class="ko-line">in Korea, in a park, in the room</p>
    <hr/>
    <p class="en-line"><strong>on</strong> = 위에 / 표면에</p>
    <p class="ko-line">on the table, on the wall, on a bus</p>
    <hr/>
    <p class="en-line"><strong>at</strong> = 정확한 지점에</p>
    <p class="ko-line">at home, at school, at work, at 10 A.M.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">to / from — 방향</div>
    <p class="en-line"><strong>to</strong> = ~로, ~에 (목적지)</p>
    <p class="ko-line">go <strong>to</strong> work, travel <strong>to</strong> Sydney</p>
    <hr/>
    <p class="en-line"><strong>from</strong> = ~에서 (출발지)</p>
    <p class="ko-line">I came <strong>from</strong> Korea. (저는 한국에서 왔습니다)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">by / with — 방법</div>
    <p class="en-line"><strong>by</strong> = ~로 (수단, 교통)</p>
    <p class="ko-line">by bus, by subway, by online</p>
    <hr/>
    <p class="en-line"><strong>with</strong> = ~와 함께</p>
    <p class="ko-line">with my family, with friends</p>
  </div>

  <p class="sub-label">실제 TOEIC 예시:</p>
  <div class="example-box">
    <p class="en-line">I went <span class="hl-subj">on</span> a trip <span class="hl-verb">to</span> Sydney <span class="hl-obj">with</span> my family.</p>
    <p class="ko-line">저는 가족과 함께 시드니로 여행을 갔습니다.</p>
    <hr/>
    <p class="en-line">I go to work <span class="hl-obj">by</span> subway.</p>
    <p class="ko-line">저는 지하철로 출근합니다.</p>
    <hr/>
    <p class="en-line">She is taking a break <span class="hl-subj">at</span> work.</p>
    <p class="ko-line">그녀는 직장에서 잠시 쉬고 있습니다.</p>
  </div>`,

  // Lesson 6: Be verbs (DEEPER VERSION)
  `<div class="lesson-block info">
    <div class="lesson-block-header">🔄 be동사 (am / is / are) 란?</div>
    <p>한국어의 "~이다", "~있다" 같은 역할을 합니다. 영어에서 매우 자주 사용되는 가장 중요한 동사입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">주어에 따라 모양이 다릅니다</div>
    <p class="en-line">I → <strong>am</strong></p>
    <p class="en-line">He / She / It → <strong>is</strong></p>
    <p class="en-line">We / You / They → <strong>are</strong></p>
    <hr/>
    <p class="part-desc">과거형:</p>
    <p class="en-line">I / He / She / It → <strong>was</strong></p>
    <p class="en-line">We / You / They → <strong>were</strong></p>
  </div>

  <p class="sub-label">be동사를 언제 쓰나요? 5가지 경우:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">1. 정체 (~이다)</div>
    <p class="en-line">I <span class="hl-verb">am</span> a student.</p>
    <p class="ko-line">저는 학생입니다.</p>
    <hr/>
    <p class="en-line">She <span class="hl-verb">is</span> a doctor.</p>
    <p class="ko-line">그녀는 의사입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">2. 상태 / 감정 (형용사 앞)</div>
    <p class="en-line">I <span class="hl-verb">am</span> happy.</p>
    <p class="ko-line">저는 행복합니다.</p>
    <hr/>
    <p class="en-line">The movie <span class="hl-verb">was</span> good.</p>
    <p class="ko-line">그 영화는 좋았습니다.</p>
    <hr/>
    <p class="part-desc"><strong>중요:</strong> "I happy" 는 틀림! 반드시 <strong>am</strong> 이 필요합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">3. 위치 (~에 있다)</div>
    <p class="en-line">I <span class="hl-verb">am</span> at home.</p>
    <p class="ko-line">저는 집에 있습니다.</p>
    <hr/>
    <p class="en-line">They <span class="hl-verb">are</span> in the office.</p>
    <p class="ko-line">그들은 사무실에 있습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">4. 진행형 (~하고 있다)</div>
    <p class="en-line">She <span class="hl-verb">is</span> <strong>eating</strong> lunch.</p>
    <p class="ko-line">그녀는 점심을 먹고 있습니다.</p>
    <hr/>
    <p class="en-line">They <span class="hl-verb">are</span> <strong>working</strong>.</p>
    <p class="ko-line">그들은 일하고 있습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">5. 수동태 (~되어진다)</div>
    <p class="en-line">The book <span class="hl-verb">was</span> <strong>written</strong> by him.</p>
    <p class="ko-line">그 책은 그에 의해 쓰여졌습니다.</p>
  </div>

  <p class="sub-label">부정문과 의문문:</p>

  <div class="part-card">
    <div class="part-tag wb-obj">부정문 (~아니다): be동사 + not</div>
    <p class="en-line">I <span class="hl-obj">am not</span> tired.</p>
    <p class="ko-line">저는 피곤하지 않습니다.</p>
    <hr/>
    <p class="en-line">She <span class="hl-obj">is not</span> (= <strong>isn't</strong>) at home.</p>
    <p class="ko-line">그녀는 집에 없습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">의문문 (~인가요?): be동사를 앞으로</div>
    <p class="en-line"><span class="hl-subj">Are</span> you a student?</p>
    <p class="ko-line">당신은 학생인가요?</p>
    <hr/>
    <p class="en-line"><span class="hl-subj">Is</span> he happy?</p>
    <p class="ko-line">그는 행복한가요?</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ I <s>have</s> happy. → ✅ I <strong>am</strong> happy.</p>
    <p>❌ She <s>taking</s> notes. → ✅ She <strong>is</strong> taking notes.</p>
    <p>❌ He <s>at</s> home. → ✅ He <strong>is</strong> at home.</p>
    <p>형용사, 진행형, 위치 표현에는 반드시 be동사가 필요합니다.</p>
  </div>`,

  // ============================================================
  // NEW LESSONS START HERE
  // ============================================================

  // Lesson 7: Pronouns (대명사)
  `<div class="lesson-block info">
    <div class="lesson-block-header">👤 대명사 (Pronouns) 란?</div>
    <p>"나", "너", "그" 같은 단어들. 영어 대명사는 <strong>역할에 따라 모양이 바뀝니다</strong>. 한국어와 다른 가장 큰 부분입니다.</p>
  </div>

  <p class="sub-label">대명사 표 (외워두면 매우 유용합니다):</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead>
        <tr><th>한국어</th><th>주어</th><th>목적어</th><th>소유격</th><th>소유대명사</th></tr>
      </thead>
      <tbody>
        <tr><td>나</td><td><strong>I</strong></td><td><strong>me</strong></td><td><strong>my</strong></td><td><strong>mine</strong></td></tr>
        <tr><td>너</td><td><strong>you</strong></td><td><strong>you</strong></td><td><strong>your</strong></td><td><strong>yours</strong></td></tr>
        <tr><td>그</td><td><strong>he</strong></td><td><strong>him</strong></td><td><strong>his</strong></td><td><strong>his</strong></td></tr>
        <tr><td>그녀</td><td><strong>she</strong></td><td><strong>her</strong></td><td><strong>her</strong></td><td><strong>hers</strong></td></tr>
        <tr><td>그것</td><td><strong>it</strong></td><td><strong>it</strong></td><td><strong>its</strong></td><td>—</td></tr>
        <tr><td>우리</td><td><strong>we</strong></td><td><strong>us</strong></td><td><strong>our</strong></td><td><strong>ours</strong></td></tr>
        <tr><td>그들</td><td><strong>they</strong></td><td><strong>them</strong></td><td><strong>their</strong></td><td><strong>theirs</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">주어 (Subject): 문장의 주인</div>
    <p class="en-line"><span class="hl-subj">I</span> like coffee.</p>
    <p class="ko-line">저는 커피를 좋아합니다.</p>
    <hr/>
    <p class="en-line"><span class="hl-subj">He</span> studies English.</p>
    <p class="ko-line">그는 영어를 공부합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">목적어 (Object): 행동을 받는 대상</div>
    <p class="en-line">She loves <span class="hl-verb">me</span>.</p>
    <p class="ko-line">그녀는 저를 사랑합니다.</p>
    <hr/>
    <p class="en-line">I called <span class="hl-verb">him</span> yesterday.</p>
    <p class="ko-line">저는 어제 그에게 전화했습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">소유격 (Possessive): 명사 앞에서 "~의"</div>
    <p class="en-line">This is <span class="hl-obj">my</span> book.</p>
    <p class="ko-line">이것은 제 책입니다.</p>
    <hr/>
    <p class="en-line"><span class="hl-obj">Her</span> car is red.</p>
    <p class="ko-line">그녀의 차는 빨갛습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">소유대명사 (Possessive pronoun): 명사 없이 "~의 것"</div>
    <p class="en-line">This book is <span class="hl-subj">mine</span>.</p>
    <p class="ko-line">이 책은 제 것입니다.</p>
    <hr/>
    <p class="en-line">The red car is <span class="hl-subj">hers</span>.</p>
    <p class="ko-line">그 빨간 차는 그녀의 것입니다.</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ <s>Me</s> went to school. → ✅ <strong>I</strong> went to school. (주어는 "I")</p>
    <p>❌ She likes <s>I</s>. → ✅ She likes <strong>me</strong>. (목적어는 "me")</p>
    <p>❌ <s>Him</s> is my friend. → ✅ <strong>He</strong> is my friend. (주어는 "he")</p>
    <p>❌ This is <s>I</s> book. → ✅ This is <strong>my</strong> book. (명사 앞은 "my")</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 기억하는 방법</div>
    <p><strong>주어 자리</strong> (문장 맨 앞, 동사 앞): I, He, She, We, They</p>
    <p><strong>동사 뒤</strong>: me, him, her, us, them</p>
    <p><strong>명사 앞</strong>: my, his, her, our, their</p>
  </div>`,

  // Lesson 8: Plurals & countable/uncountable
  `<div class="lesson-block info">
    <div class="lesson-block-header">🔢 단수와 복수 (Singular and Plural)</div>
    <p>한국어는 "사과 한 개"와 "사과 다섯 개"의 모양이 같습니다. 영어는 다릅니다 — <strong>2개 이상이면 보통 -s를 붙입니다</strong>.</p>
  </div>

  <div class="example-box">
    <p class="en-line">one <strong>apple</strong> → two <strong>apples</strong></p>
    <p class="ko-line">사과 1개 → 사과 2개</p>
    <hr/>
    <p class="en-line">a <strong>book</strong> → many <strong>books</strong></p>
    <p class="ko-line">책 한 권 → 책 여러 권</p>
    <hr/>
    <p class="en-line">my <strong>friend</strong> → my <strong>friends</strong></p>
    <p class="ko-line">제 친구 → 제 친구들</p>
  </div>

  <p class="sub-label">복수형 만드는 규칙:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">대부분: -s 추가</div>
    <p class="en-line">cat → cat<strong>s</strong>, dog → dog<strong>s</strong>, car → car<strong>s</strong></p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">-s, -x, -ch, -sh 로 끝나면: -es</div>
    <p class="en-line">bus → bus<strong>es</strong>, box → box<strong>es</strong>, watch → watch<strong>es</strong></p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">자음 + y 로 끝나면: y → ies</div>
    <p class="en-line">city → cit<strong>ies</strong>, baby → bab<strong>ies</strong>, country → countr<strong>ies</strong></p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">불규칙 복수형 (그냥 외우세요)</div>
    <p class="en-line">man → <strong>men</strong>, woman → <strong>women</strong>, child → <strong>children</strong></p>
    <p class="en-line">foot → <strong>feet</strong>, tooth → <strong>teeth</strong>, person → <strong>people</strong></p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 셀 수 없는 명사 (Uncountable Nouns)</div>
    <p>몇몇 단어는 <strong>복수형이 없습니다</strong>. 항상 단수처럼 사용합니다:</p>
    <p>💧 water (물), ☕ coffee (커피), 💰 money (돈), 🥛 milk (우유), 🍞 bread (빵), ⏰ time (시간), 🎵 music (음악), ℹ️ information (정보), 📚 advice (조언), 🏠 furniture (가구)</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">셀 수 없는 명사 사용법</div>
    <p class="en-line">❌ I drink <s>waters</s>.  ✅ I drink <strong>water</strong>.</p>
    <p class="en-line">❌ I have many <s>moneys</s>.  ✅ I have <strong>a lot of money</strong>.</p>
    <p class="en-line">❌ I need an <s>advice</s>.  ✅ I need <strong>advice</strong> / <strong>some advice</strong>.</p>
    <hr/>
    <p class="part-desc"><strong>양을 표현하려면:</strong></p>
    <p class="en-line">a <strong>cup of</strong> coffee, a <strong>glass of</strong> water, a <strong>piece of</strong> advice</p>
    <p class="ko-line">커피 한 잔, 물 한 잔, 조언 한 마디</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 many vs much</div>
    <p><strong>many</strong> + 셀 수 있는 복수: many books, many people, many friends</p>
    <p><strong>much</strong> + 셀 수 없는 명사: much water, much time, much money</p>
    <p><strong>a lot of</strong> 는 둘 다 사용 가능 (가장 안전한 선택)</p>
  </div>`,

  // Lesson 9: Will + Future
  `<div class="lesson-block info">
    <div class="lesson-block-header">🔮 미래 시제 (Future Tense) — will</div>
    <p>앞으로 일어날 일을 말할 때 사용합니다. 가장 쉬운 미래 표현은 <strong>will + 동사원형</strong> 입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">기본 형태: 주어 + will + 동사</div>
    <p class="en-line">I <span class="hl-subj">will</span> <strong>go</strong> to Korea.</p>
    <p class="ko-line">저는 한국에 갈 것입니다.</p>
    <hr/>
    <p class="en-line">She <span class="hl-subj">will</span> <strong>call</strong> you tomorrow.</p>
    <p class="ko-line">그녀는 내일 당신에게 전화할 것입니다.</p>
    <hr/>
    <p class="part-desc"><strong>중요:</strong> will 다음에는 항상 <strong>동사원형</strong> (변형되지 않은 형태) 만 옵니다.</p>
    <p class="en-line">❌ She will <s>goes</s>. → ✅ She will <strong>go</strong>.</p>
  </div>

  <p class="sub-label">언제 will을 사용하나요?</p>

  <div class="part-card">
    <div class="part-tag wb-verb">1. 미래의 예측 (~할 것이다)</div>
    <p class="en-line">It <strong>will rain</strong> tomorrow.</p>
    <p class="ko-line">내일 비가 올 것입니다.</p>
    <hr/>
    <p class="en-line">He <strong>will be</strong> a great teacher.</p>
    <p class="ko-line">그는 훌륭한 선생님이 될 것입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">2. 즉석 결정 (지금 막 결정한 일)</div>
    <p class="en-line">I'm thirsty. I <strong>will drink</strong> some water.</p>
    <p class="ko-line">목마르네요. 물을 마실게요.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">3. 약속 / 의지</div>
    <p class="en-line">I <strong>will help</strong> you.</p>
    <p class="ko-line">제가 도와드릴게요.</p>
    <hr/>
    <p class="en-line">I <strong>will study</strong> hard.</p>
    <p class="ko-line">저는 열심히 공부할 거예요.</p>
  </div>

  <p class="sub-label">부정문과 의문문:</p>

  <div class="part-card">
    <div class="part-tag wb-verb">부정문: will not (= won't)</div>
    <p class="en-line">I <span class="hl-verb">will not</span> (= <strong>won't</strong>) be late.</p>
    <p class="ko-line">저는 늦지 않을 것입니다.</p>
    <hr/>
    <p class="en-line">She <strong>won't</strong> come tomorrow.</p>
    <p class="ko-line">그녀는 내일 오지 않을 것입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">의문문: Will + 주어 + 동사?</div>
    <p class="en-line"><span class="hl-obj">Will</span> you <strong>come</strong> with me?</p>
    <p class="ko-line">저와 함께 가시겠어요?</p>
    <hr/>
    <p class="en-line"><span class="hl-obj">Will</span> it <strong>rain</strong> tomorrow?</p>
    <p class="ko-line">내일 비가 올까요?</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 다른 미래 표현: be going to</div>
    <p><strong>be going to + 동사</strong> 도 미래를 표현합니다. 의미가 약간 다릅니다:</p>
    <p>• <strong>will</strong>: 즉석 결정, 예측, 약속</p>
    <p>• <strong>be going to</strong>: 이미 계획한 일</p>
    <p class="en-line">I <strong>am going to</strong> visit my parents next week. (이미 계획됨)</p>
    <p class="ko-line">저는 다음 주에 부모님을 방문할 예정입니다.</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ I will <s>going</s> to school. → ✅ I will <strong>go</strong> to school.</p>
    <p>❌ She <s>will is</s> happy. → ✅ She <strong>will be</strong> happy.</p>
    <p>will 뒤에는 항상 동사원형!</p>
  </div>`,

  // Lesson 10: Time words (past, present, future)
  `<div class="lesson-block info">
    <div class="lesson-block-header">⏰ 시간 표현 (Time Words)</div>
    <p>"언제" 일이 일어났는지 알려주는 단어들. 시제와 함께 사용하면 의미가 명확해집니다.</p>
  </div>

  <p class="sub-label">과거 (Past) — 이미 지난 일</p>
  <div class="part-card">
    <div class="part-tag wb-verb">자주 쓰는 과거 시간 표현</div>
    <p class="en-line"><strong>yesterday</strong> (어제), <strong>last night</strong> (어젯밤)</p>
    <p class="en-line"><strong>last week</strong> (지난주), <strong>last month</strong> (지난달), <strong>last year</strong> (작년)</p>
    <p class="en-line"><strong>two days ago</strong> (이틀 전), <strong>a week ago</strong> (일주일 전)</p>
    <p class="en-line"><strong>this morning</strong> (오늘 아침), <strong>in 2020</strong> (2020년에)</p>
    <hr/>
    <p class="en-line">I went to Korea <strong>last year</strong>.</p>
    <p class="ko-line">저는 작년에 한국에 갔습니다.</p>
    <hr/>
    <p class="en-line">She called me <strong>two hours ago</strong>.</p>
    <p class="ko-line">그녀는 두 시간 전에 저에게 전화했습니다.</p>
  </div>

  <p class="sub-label">현재 (Present) — 항상, 보통, 매일</p>
  <div class="part-card">
    <div class="part-tag wb-subj">자주 쓰는 현재 시간 표현</div>
    <p class="en-line"><strong>every day</strong> (매일), <strong>every week</strong> (매주), <strong>every morning</strong> (매일 아침)</p>
    <p class="en-line"><strong>always</strong> (항상), <strong>usually</strong> (보통), <strong>often</strong> (자주), <strong>sometimes</strong> (가끔), <strong>never</strong> (절대로)</p>
    <p class="en-line"><strong>now</strong> (지금), <strong>today</strong> (오늘)</p>
    <hr/>
    <p class="en-line">I <strong>usually</strong> drink coffee in the morning.</p>
    <p class="ko-line">저는 보통 아침에 커피를 마십니다.</p>
    <hr/>
    <p class="en-line">She goes to the gym <strong>every day</strong>.</p>
    <p class="ko-line">그녀는 매일 헬스장에 갑니다.</p>
  </div>

  <p class="sub-label">미래 (Future) — 앞으로 일어날 일</p>
  <div class="part-card">
    <div class="part-tag wb-obj">자주 쓰는 미래 시간 표현</div>
    <p class="en-line"><strong>tomorrow</strong> (내일), <strong>tomorrow morning</strong> (내일 아침)</p>
    <p class="en-line"><strong>next week</strong> (다음 주), <strong>next month</strong> (다음 달), <strong>next year</strong> (내년)</p>
    <p class="en-line"><strong>in two days</strong> (이틀 후), <strong>in a week</strong> (일주일 후), <strong>in 2030</strong> (2030년에)</p>
    <p class="en-line"><strong>soon</strong> (곧), <strong>later</strong> (나중에), <strong>tonight</strong> (오늘 밤)</p>
    <hr/>
    <p class="en-line">I will travel to Japan <strong>next month</strong>.</p>
    <p class="ko-line">저는 다음 달에 일본으로 여행 갈 것입니다.</p>
    <hr/>
    <p class="en-line">She will graduate <strong>in two years</strong>.</p>
    <p class="ko-line">그녀는 2년 후에 졸업할 것입니다.</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 시간 표현은 보통 어디에?</div>
    <p>시간 표현은 보통 <strong>문장의 맨 끝</strong> 에 옵니다:</p>
    <p class="en-line">I went to school <strong>yesterday</strong>.</p>
    <p>또는 <strong>맨 앞</strong>에 강조하기 위해:</p>
    <p class="en-line"><strong>Yesterday</strong>, I went to school.</p>
    <p class="part-desc">하지만 <strong>always, usually, often, sometimes, never</strong> 같은 빈도부사는 <strong>동사 앞</strong>에 옵니다:</p>
    <p class="en-line">I <strong>always</strong> drink coffee. (✅ "I drink always coffee" 는 틀림)</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ ago vs in</div>
    <p><strong>ago</strong> = 과거 (~전에): two days <strong>ago</strong> (이틀 전)</p>
    <p><strong>in</strong> = 미래 (~후에): <strong>in</strong> two days (이틀 후)</p>
    <p>매우 헷갈리지만 정반대 의미입니다!</p>
  </div>`,

  // Lesson 11: Asking questions
  `<div class="lesson-block info">
    <div class="lesson-block-header">❓ 질문 만들기 (Asking Questions)</div>
    <p>토익 스피킹에서 매우 중요합니다! 영어 질문은 <strong>단어 순서를 바꿔야</strong> 합니다.</p>
  </div>

  <p class="sub-label">질문 만드는 두 가지 방법:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">방법 1: be동사 (am/is/are/was/were)</div>
    <p class="part-desc"><strong>be동사를 맨 앞으로 옮기세요.</strong></p>
    <p class="en-line">평서문: You <strong>are</strong> a student.</p>
    <p class="en-line">의문문: <strong>Are</strong> you a student?</p>
    <p class="ko-line">→ 당신은 학생인가요?</p>
    <hr/>
    <p class="en-line">평서문: She <strong>is</strong> happy.</p>
    <p class="en-line">의문문: <strong>Is</strong> she happy?</p>
    <hr/>
    <p class="en-line">평서문: They <strong>were</strong> at home.</p>
    <p class="en-line">의문문: <strong>Were</strong> they at home?</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">방법 2: 일반 동사 → Do/Does/Did를 사용</div>
    <p class="part-desc">be동사가 없는 문장에는 <strong>Do, Does, Did</strong> 를 맨 앞에 붙입니다.</p>
    <p class="en-line">현재: <strong>Do</strong> + 주어 + 동사원형 ?</p>
    <p class="en-line">현재 (he/she/it): <strong>Does</strong> + 주어 + 동사원형 ?</p>
    <p class="en-line">과거: <strong>Did</strong> + 주어 + 동사원형 ?</p>
    <hr/>
    <p class="en-line">평서문: You <strong>like</strong> coffee.</p>
    <p class="en-line">의문문: <strong>Do</strong> you like coffee?</p>
    <p class="ko-line">→ 당신은 커피를 좋아하나요?</p>
    <hr/>
    <p class="en-line">평서문: She <strong>plays</strong> tennis.</p>
    <p class="en-line">의문문: <strong>Does</strong> she play tennis?</p>
    <p class="ko-line">(주의: "plays" → "play" 로 원형으로!)</p>
    <hr/>
    <p class="en-line">평서문: He <strong>went</strong> to school.</p>
    <p class="en-line">의문문: <strong>Did</strong> he <strong>go</strong> to school?</p>
    <p class="ko-line">(주의: "went" → "go" 로 원형으로!)</p>
  </div>

  <p class="sub-label">의문사 (Wh- Questions): 무엇? 누구? 언제?</p>

  <div class="part-card">
    <div class="part-tag wb-obj">5W1H 의문사</div>
    <p class="en-line"><strong>What</strong> = 무엇</p>
    <p class="en-line"><strong>Who</strong> = 누구</p>
    <p class="en-line"><strong>When</strong> = 언제</p>
    <p class="en-line"><strong>Where</strong> = 어디</p>
    <p class="en-line"><strong>Why</strong> = 왜</p>
    <p class="en-line"><strong>How</strong> = 어떻게</p>
    <hr/>
    <p class="part-desc"><strong>구조:</strong> 의문사 + Do/Does/Did/be동사 + 주어 + 동사 ?</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">의문사 예시</div>
    <p class="en-line"><strong>What</strong> do you do?</p>
    <p class="ko-line">무슨 일을 하세요?</p>
    <hr/>
    <p class="en-line"><strong>Where</strong> are you from?</p>
    <p class="ko-line">어디에서 오셨나요?</p>
    <hr/>
    <p class="en-line"><strong>When</strong> did you arrive?</p>
    <p class="ko-line">언제 도착하셨나요?</p>
    <hr/>
    <p class="en-line"><strong>Why</strong> are you late?</p>
    <p class="ko-line">왜 늦으셨나요?</p>
    <hr/>
    <p class="en-line"><strong>How</strong> do you go to work?</p>
    <p class="ko-line">어떻게 출근하시나요?</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ <s>You like coffee?</s> → ✅ <strong>Do</strong> you like coffee?</p>
    <p>❌ Did she <s>went</s> home? → ✅ Did she <strong>go</strong> home? (Did 뒤에는 동사원형!)</p>
    <p>❌ <s>What you do?</s> → ✅ <strong>What do</strong> you do?</p>
    <p>❌ <s>Where you live?</s> → ✅ <strong>Where do</strong> you live?</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 토익 스피킹 팁</div>
    <p>토익 스피킹 5번 문제는 <strong>질문 만들기</strong> 입니다. 이 레슨이 그 문제에 직접 도움이 됩니다. 매일 5개씩 영어 질문을 만들어 보세요!</p>
  </div>`,

  // Lesson 12: Negatives
  `<div class="lesson-block info">
    <div class="lesson-block-header">🚫 부정문 (Negatives) — "~하지 않다"</div>
    <p>"먹다" → "먹지 않다", "간다" → "안 간다". 영어에서는 동사에 따라 부정문 만드는 방법이 다릅니다.</p>
  </div>

  <p class="sub-label">두 가지 방법:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">방법 1: be동사 + not</div>
    <p class="en-line">I <strong>am not</strong> a student. (= I'm not)</p>
    <p class="ko-line">저는 학생이 아닙니다.</p>
    <hr/>
    <p class="en-line">She <strong>is not</strong> happy. (= She isn't)</p>
    <p class="ko-line">그녀는 행복하지 않습니다.</p>
    <hr/>
    <p class="en-line">They <strong>are not</strong> at home. (= They aren't)</p>
    <p class="ko-line">그들은 집에 없습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">방법 2: 일반 동사 → do not / does not / did not</div>
    <p class="part-desc">be동사가 없으면 <strong>do/does/did + not</strong> 을 동사 앞에 붙입니다.</p>
    <p class="en-line">현재: <strong>do not (don't)</strong> + 동사원형</p>
    <p class="en-line">현재 (he/she/it): <strong>does not (doesn't)</strong> + 동사원형</p>
    <p class="en-line">과거: <strong>did not (didn't)</strong> + 동사원형</p>
    <hr/>
    <p class="en-line">I <strong>do not</strong> like coffee. (= I don't like)</p>
    <p class="ko-line">저는 커피를 좋아하지 않습니다.</p>
    <hr/>
    <p class="en-line">He <strong>does not</strong> play tennis. (= He doesn't play)</p>
    <p class="ko-line">(주의: "plays" → "play")</p>
    <hr/>
    <p class="en-line">We <strong>did not</strong> go to school. (= We didn't go)</p>
    <p class="ko-line">(주의: "went" → "go")</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">미래의 부정: will not (won't)</div>
    <p class="en-line">I <strong>will not</strong> (= <strong>won't</strong>) come tomorrow.</p>
    <p class="ko-line">저는 내일 오지 않을 것입니다.</p>
  </div>

  <p class="sub-label">짧은 줄임형 (Contractions) — 일상 대화에서 자주 사용:</p>

  <div class="example-box">
    <table class="grammar-table">
      <thead><tr><th>긴 형태</th><th>짧은 형태</th></tr></thead>
      <tbody>
        <tr><td>am not</td><td>—</td></tr>
        <tr><td>is not</td><td><strong>isn't</strong></td></tr>
        <tr><td>are not</td><td><strong>aren't</strong></td></tr>
        <tr><td>was not</td><td><strong>wasn't</strong></td></tr>
        <tr><td>were not</td><td><strong>weren't</strong></td></tr>
        <tr><td>do not</td><td><strong>don't</strong></td></tr>
        <tr><td>does not</td><td><strong>doesn't</strong></td></tr>
        <tr><td>did not</td><td><strong>didn't</strong></td></tr>
        <tr><td>will not</td><td><strong>won't</strong></td></tr>
        <tr><td>cannot</td><td><strong>can't</strong></td></tr>
      </tbody>
    </table>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ I <s>not like</s> coffee. → ✅ I <strong>don't</strong> like coffee.</p>
    <p>❌ She doesn't <s>likes</s> me. → ✅ She doesn't <strong>like</strong> me. (doesn't 뒤에는 동사원형!)</p>
    <p>❌ I <s>am not like</s> it. → ✅ I <strong>don't</strong> like it. (like는 일반동사)</p>
    <p>❌ He <s>didn't went</s>. → ✅ He <strong>didn't go</strong>. (didn't 뒤에는 동사원형!)</p>
  </div>`,

  // Lesson 13: Simple + compound sentences
  `<div class="lesson-block info">
    <div class="lesson-block-header">🔗 단순문과 복합문 (Simple & Compound Sentences)</div>
    <p>두 개의 짧은 문장을 하나로 합치면 더 자연스럽게 말할 수 있습니다. 토익 스피킹에서 점수를 올리는 핵심 기술입니다.</p>
  </div>

  <p class="sub-label">단순문 (Simple Sentence): 주어 + 동사 한 세트</p>
  <div class="example-box">
    <p class="en-line"><strong>I like coffee.</strong></p>
    <p class="ko-line">저는 커피를 좋아합니다.</p>
    <hr/>
    <p class="en-line"><strong>She studies English.</strong></p>
    <p class="ko-line">그녀는 영어를 공부합니다.</p>
  </div>

  <p class="sub-label">복합문 (Compound Sentence): 두 개의 단순문을 연결어로 합침</p>

  <div class="part-card">
    <div class="part-tag wb-subj">7가지 핵심 연결어 (FANBOYS)</div>
    <p class="en-line"><strong>F</strong>or = ~때문에 (이유)</p>
    <p class="en-line"><strong>A</strong>nd = 그리고</p>
    <p class="en-line"><strong>N</strong>or = 또한 ~아니다</p>
    <p class="en-line"><strong>B</strong>ut = 그러나</p>
    <p class="en-line"><strong>O</strong>r = 또는</p>
    <p class="en-line"><strong>Y</strong>et = 하지만 (= but)</p>
    <p class="en-line"><strong>S</strong>o = 그래서</p>
    <hr/>
    <p class="part-desc">"FANBOYS" 첫 글자만 외우세요!</p>
  </div>

  <p class="sub-label">자주 쓰는 4개 연결어:</p>

  <div class="part-card">
    <div class="part-tag wb-verb">and (그리고) — 비슷한 정보를 추가</div>
    <p class="en-line">I like coffee, <strong>and</strong> I like tea.</p>
    <p class="ko-line">저는 커피를 좋아하고, 차도 좋아합니다.</p>
    <hr/>
    <p class="en-line">She is smart, <strong>and</strong> she is kind.</p>
    <p class="ko-line">그녀는 똑똑하고, 친절합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">but (그러나) — 반대되는 정보</div>
    <p class="en-line">I want coffee, <strong>but</strong> I don't have time.</p>
    <p class="ko-line">커피를 원하지만, 시간이 없습니다.</p>
    <hr/>
    <p class="en-line">He studies hard, <strong>but</strong> he is tired.</p>
    <p class="ko-line">그는 열심히 공부하지만, 피곤합니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">so (그래서) — 결과</div>
    <p class="en-line">I was tired, <strong>so</strong> I went to bed early.</p>
    <p class="ko-line">저는 피곤해서, 일찍 잠자리에 들었습니다.</p>
    <hr/>
    <p class="en-line">It was raining, <strong>so</strong> I took a taxi.</p>
    <p class="ko-line">비가 와서, 저는 택시를 탔습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">or (또는) — 선택</div>
    <p class="en-line">Would you like coffee <strong>or</strong> tea?</p>
    <p class="ko-line">커피와 차 중 어느 것을 원하세요?</p>
    <hr/>
    <p class="en-line">We can go now, <strong>or</strong> we can wait.</p>
    <p class="ko-line">지금 갈 수도 있고, 기다릴 수도 있습니다.</p>
  </div>

  <p class="sub-label">기타 유용한 연결어:</p>
  <div class="part-card">
    <div class="part-tag wb-obj">because (왜냐하면 / ~때문에)</div>
    <p class="en-line">I went home <strong>because</strong> I was tired.</p>
    <p class="ko-line">저는 피곤해서 집에 갔습니다.</p>
    <hr/>
    <p class="en-line">She studied hard <strong>because</strong> she wanted to pass.</p>
    <p class="ko-line">그녀는 합격하고 싶었기 때문에 열심히 공부했습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">when (~할 때)</div>
    <p class="en-line">I drink coffee <strong>when</strong> I'm tired.</p>
    <p class="ko-line">저는 피곤할 때 커피를 마십니다.</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 콤마 (,) 규칙</div>
    <p>FANBOYS 연결어 (and, but, so, or) 앞에는 보통 <strong>콤마 (,)</strong> 를 찍습니다:</p>
    <p class="en-line">I like coffee<strong>,</strong> and I like tea.</p>
    <p>but, because, when 등은 짧은 문장에서 콤마 없이도 OK:</p>
    <p class="en-line">I went home because I was tired.</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">🎯 토익 스피킹 점수 올리기</div>
    <p>단순문만 사용하면 점수가 낮습니다. <strong>복합문을 섞어 쓰세요</strong>:</p>
    <p>❌ 낮은 점수: "I went to a cafe. I drank coffee. It was good."</p>
    <p>✅ 높은 점수: "I went to a cafe<strong>, and</strong> I drank coffee, <strong>which</strong> was really good."</p>
  </div>`,

  // Lesson 14: VCOP
  `<div class="lesson-block info">
    <div class="lesson-block-header">🌟 VCOP — 좋은 글쓰기의 4가지 요소</div>
    <p>호주 학교에서 사용하는 학습법입니다. <strong>V</strong>ocabulary (단어), <strong>C</strong>onnectives (연결어), <strong>O</strong>peners (시작어), <strong>P</strong>unctuation (문장부호). 이 4가지를 기억하면 더 좋은 영어를 쓸 수 있습니다.</p>
  </div>

  <p class="sub-label" style="font-size:18px; color:var(--primary-dark)">🔤 V — Vocabulary (어휘 업그레이드)</p>

  <div class="part-card">
    <div class="part-tag wb-subj">기본 단어를 더 좋은 단어로 바꾸기</div>
    <p class="en-line"><s>good</s> → <strong>excellent, wonderful, fantastic, great</strong></p>
    <p class="en-line"><s>bad</s> → <strong>terrible, awful, poor, disappointing</strong></p>
    <p class="en-line"><s>big</s> → <strong>huge, enormous, massive, large</strong></p>
    <p class="en-line"><s>small</s> → <strong>tiny, little, mini, compact</strong></p>
    <p class="en-line"><s>happy</s> → <strong>delighted, pleased, thrilled, glad</strong></p>
    <p class="en-line"><s>sad</s> → <strong>upset, disappointed, depressed, unhappy</strong></p>
    <p class="en-line"><s>nice</s> → <strong>pleasant, lovely, charming, kind</strong></p>
    <p class="en-line"><s>said</s> → <strong>explained, mentioned, told, replied</strong></p>
    <hr/>
    <p class="en-line">❌ "The food was good."</p>
    <p class="en-line">✅ "The food was <strong>excellent</strong>."</p>
  </div>

  <p class="sub-label" style="font-size:18px; color:var(--success-dark)">🔗 C — Connectives (연결어)</p>

  <div class="part-card">
    <div class="part-tag wb-verb">문장과 아이디어를 연결</div>
    <p><strong>추가:</strong> and, also, plus, in addition, furthermore</p>
    <p><strong>대조:</strong> but, however, although, on the other hand</p>
    <p><strong>이유:</strong> because, since, as, due to</p>
    <p><strong>결과:</strong> so, therefore, as a result, thus</p>
    <p><strong>순서:</strong> first, then, next, finally, after that</p>
    <p><strong>예시:</strong> for example, for instance, such as</p>
    <hr/>
    <p class="en-line">I like coffee. <strong>However</strong>, I prefer tea in the morning.</p>
    <p class="en-line"><strong>First</strong>, I go to school. <strong>Then</strong>, I study. <strong>Finally</strong>, I go home.</p>
  </div>

  <p class="sub-label" style="font-size:18px; color:var(--warn-dark)">🚪 O — Openers (다양한 문장 시작)</p>

  <div class="part-card">
    <div class="part-tag wb-obj">매번 "I" 로 시작하지 마세요!</div>
    <p class="part-desc">대부분의 한국 학생들은 모든 문장을 "I" 로 시작합니다. 다양하게 시작해보세요:</p>
    <hr/>
    <p><strong>시간으로 시작:</strong></p>
    <p class="en-line"><strong>Yesterday</strong>, I went to a cafe.</p>
    <p class="en-line"><strong>Last week</strong>, I had a meeting.</p>
    <p class="en-line"><strong>In the morning</strong>, I drink coffee.</p>
    <hr/>
    <p><strong>장소로 시작:</strong></p>
    <p class="en-line"><strong>At home</strong>, I usually relax.</p>
    <p class="en-line"><strong>In Korea</strong>, people eat kimchi.</p>
    <hr/>
    <p><strong>부사로 시작:</strong></p>
    <p class="en-line"><strong>Suddenly</strong>, it started to rain.</p>
    <p class="en-line"><strong>Luckily</strong>, I had an umbrella.</p>
    <hr/>
    <p><strong>-ing 동사로 시작:</strong></p>
    <p class="en-line"><strong>Walking to school</strong>, I saw my friend.</p>
  </div>

  <p class="sub-label" style="font-size:18px; color:var(--purple-dark)">. , ! ? P — Punctuation (문장부호)</p>

  <div class="part-card">
    <div class="part-tag wb-subj">기본 문장부호</div>
    <p><strong>. (period / full stop)</strong> — 평서문의 끝</p>
    <p class="en-line">I like coffee<strong>.</strong></p>
    <hr/>
    <p><strong>? (question mark)</strong> — 의문문의 끝</p>
    <p class="en-line">Do you like coffee<strong>?</strong></p>
    <hr/>
    <p><strong>! (exclamation mark)</strong> — 감탄문 / 강한 감정</p>
    <p class="en-line">That's amazing<strong>!</strong></p>
    <hr/>
    <p><strong>, (comma)</strong> — 잠깐 멈춤, 항목 나열, 연결어 앞</p>
    <p class="en-line">I bought apples<strong>,</strong> oranges<strong>,</strong> and bananas.</p>
    <p class="en-line">It was raining<strong>,</strong> so I took a taxi.</p>
    <hr/>
    <p><strong>' (apostrophe)</strong> — 줄임말 / 소유격</p>
    <p class="en-line">I'<strong>m</strong> tired. (= I am)</p>
    <p class="en-line">John<strong>'s</strong> book. (= 존의 책)</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 가장 중요한 규칙</div>
    <p><strong>모든 문장은 대문자로 시작해야 합니다.</strong></p>
    <p>❌ <s>i went</s> to school. → ✅ <strong>I</strong> went to school.</p>
    <p>❌ what time <s>is</s> it? → ✅ <strong>What</strong> time is it?</p>
    <hr/>
    <p><strong>"I" 는 항상 대문자입니다.</strong> 문장 어디에 있든 상관없이.</p>
    <p>❌ My friend and <s>i</s> went home. → ✅ My friend and <strong>I</strong> went home.</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">⭐ VCOP 체크리스트</div>
    <p>영어 문장을 쓸 때마다 자신에게 물어보세요:</p>
    <p>✅ <strong>V</strong>ocabulary: 더 좋은 단어를 사용했나요?</p>
    <p>✅ <strong>C</strong>onnectives: 두 문장을 연결할 수 있나요?</p>
    <p>✅ <strong>O</strong>peners: 매번 "I" 로 시작하지 않았나요?</p>
    <p>✅ <strong>P</strong>unctuation: 마침표, 콤마, 대문자가 정확한가요?</p>
  </div>`
];

// ============================================================
// Lesson groups - structure for the grouped Grammar tab
// ============================================================
const LESSON_GROUPS = [
  {
    title: '🌱 기초',
    titleEn: 'Basics',
    lessons: [
      {idx: 0, title: '1. 어순', subtitle: 'Word order'},
      {idx: 1, title: '2. 문장 구조', subtitle: 'Sentence parts'},
      {idx: 2, title: '3. 관사', subtitle: 'a / an / the'},
      {idx: 6, title: '4. 대명사', subtitle: 'Pronouns'},
      {idx: 7, title: '5. 단수와 복수', subtitle: 'Singular & plural'},
      {idx: 5, title: '6. be동사', subtitle: 'am / is / are'}
    ]
  },
  {
    title: '🔨 문장 만들기',
    titleEn: 'Building sentences',
    lessons: [
      {idx: 3, title: '7. 시제', subtitle: 'Present, past, continuous'},
      {idx: 8, title: '8. 미래 (will)', subtitle: 'Future tense'},
      {idx: 9, title: '9. 시간 표현', subtitle: 'Time words'},
      {idx: 4, title: '10. 전치사', subtitle: 'Prepositions'},
      {idx: 10, title: '11. 질문 만들기', subtitle: 'Asking questions'},
      {idx: 11, title: '12. 부정문', subtitle: 'Negatives'}
    ]
  },
  {
    title: '🌿 한 단계 더',
    titleEn: 'Going further',
    lessons: [
      {idx: 12, title: '13. 단순문 + 복합문', subtitle: 'Simple & compound'},
      {idx: 13, title: '14. VCOP', subtitle: 'V·C·O·P framework'}
    ]
  }
];

// ============================================================
// Daily tips - rotated based on day of year
// ============================================================
const DAILY_TIPS = [
  '매일 10분이 일주일에 한 번 1시간보다 효과적입니다. (10 min daily > 1 hour weekly)',
  '문장을 큰 소리로 읽으세요. 입으로 말하면 더 잘 기억됩니다.',
  '틀려도 괜찮아요. 실수는 학습의 중요한 부분입니다. (Mistakes help you learn!)',
  '잠자기 전 5분 복습은 기억력을 30% 향상시킵니다.',
  '한 단어가 아닌 전체 문장을 외우세요. 그래야 자연스럽게 말할 수 있습니다.',
  '오늘 배운 표현을 실제 상황에 적용해 보세요.',
  '같은 문장을 5번 따라 말하면, 입에 익숙해집니다.',
  '모르는 것이 있으면 표시하고 내일 다시 보세요.',
  '영어 노래나 영화도 학습에 도움이 됩니다.',
  '꾸준함이 가장 중요합니다. 매일 조금씩!'
];
