// ============================================================
// Jake's Chapter 10
// ============================================================

const JAKE_CH10 = `<div class="lesson-block info">
    <div class="lesson-block-header">🔗 관계사 (Relative Pronouns) 란?</div>
    <p>관계사는 두 문장을 <strong>하나로 연결</strong>하면서 명사에 대한 추가 정보를 줍니다. 가장 자주 쓰는 4가지: <strong>who, which, that, where</strong>.</p>
  </div>

  <p class="sub-label">관계사가 왜 필요한가요?</p>

  <div class="example-box">
    <p class="part-desc">❌ 두 개의 문장 (어색함):</p>
    <p class="en-line">I have a friend. <strong>She</strong> lives in Tokyo.</p>
    <hr/>
    <p class="part-desc">✅ 관계사로 합치기:</p>
    <p class="en-line">I have a friend <strong>who</strong> lives in Tokyo.</p>
    <p class="ko-line">저는 도쿄에 사는 친구가 있습니다.</p>
    <hr/>
    <p class="part-desc">→ "She" 대신 "who"를 사용해서 두 문장을 연결했습니다.</p>
  </div>

  <p class="sub-label">4가지 핵심 관계사:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">who — 사람을 가리킬 때</div>
    <p class="en-line">The man <strong>who</strong> lives next door is a doctor.</p>
    <p class="ko-line">옆집에 사는 남자는 의사입니다.</p>
    <hr/>
    <p class="en-line">She is the teacher <strong>who</strong> taught me English.</p>
    <p class="ko-line">그녀는 저에게 영어를 가르쳐 준 선생님입니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-verb">which — 사물을 가리킬 때</div>
    <p class="en-line">The book <strong>which</strong> is on the table is mine.</p>
    <p class="ko-line">테이블 위에 있는 책은 제 것입니다.</p>
    <hr/>
    <p class="en-line">I bought a car <strong>which</strong> uses very little fuel.</p>
    <p class="ko-line">저는 연료를 거의 사용하지 않는 차를 샀습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-obj">that — 사람이든 사물이든 모두 가능</div>
    <p class="part-desc">who와 which를 대체할 수 있습니다 (더 자주 사용됨)</p>
    <p class="en-line">The man <strong>that</strong> lives next door is a doctor.</p>
    <p class="en-line">The book <strong>that</strong> is on the table is mine.</p>
    <hr/>
    <p class="part-desc"><strong>특히:</strong> 사람 + 사물 둘 다 있을 때 that을 사용</p>
    <p class="en-line">I saw a girl and a dog <strong>that</strong> were running.</p>
    <p class="ko-line">저는 달리는 여자아이와 개를 봤습니다.</p>
  </div>

  <div class="part-card">
    <div class="part-tag wb-subj">where — 장소를 가리킬 때</div>
    <p class="en-line">This is the cafe <strong>where</strong> we first met.</p>
    <p class="ko-line">여기가 우리가 처음 만난 카페입니다.</p>
    <hr/>
    <p class="en-line">Seoul is the city <strong>where</strong> I was born.</p>
    <p class="ko-line">서울은 제가 태어난 도시입니다.</p>
  </div>

  <p class="sub-label">관계사 문장 만드는 단계:</p>

  <div class="part-card">
    <div class="part-tag wb-verb">단계별 예시</div>
    <p class="part-desc">두 문장을 합쳐봅시다:</p>
    <p class="en-line">1️⃣ I know a woman.</p>
    <p class="en-line">2️⃣ <strong>She</strong> speaks five languages.</p>
    <hr/>
    <p class="part-desc">두 문장에서 같은 사람(woman = she)을 찾으세요. → 그것을 관계사로 바꿉니다.</p>
    <p class="en-line">she (사람, 주어) → <strong>who</strong></p>
    <hr/>
    <p class="part-desc">관계사 문장을 첫 번째 문장에 넣습니다:</p>
    <p class="en-line">I know a woman <strong>who</strong> speaks five languages.</p>
    <p class="ko-line">저는 5개 언어를 말하는 여자를 압니다.</p>
  </div>

  <p class="sub-label">목적격 관계사 (생략 가능!):</p>

  <div class="part-card">
    <div class="part-tag wb-obj">목적어 자리의 관계사는 생략할 수 있습니다</div>
    <p class="en-line">The book <strong>(that)</strong> I bought is interesting.</p>
    <p class="ko-line">제가 산 책은 흥미롭습니다.</p>
    <hr/>
    <p class="en-line">The person <strong>(who/whom)</strong> I met yesterday is kind.</p>
    <p class="ko-line">제가 어제 만난 사람은 친절합니다.</p>
    <hr/>
    <p class="part-desc">→ 관계사가 목적어 역할일 때 (뒤에 주어가 있을 때) 생략 가능. 회화에서 자주 생략됩니다.</p>
  </div>

  <p class="sub-label">소유격 관계사 — whose:</p>

  <div class="part-card">
    <div class="part-tag wb-subj">whose = ~의 (소유)</div>
    <p class="en-line">I have a friend <strong>whose</strong> father is a famous singer.</p>
    <p class="ko-line">저는 아버지가 유명한 가수인 친구가 있습니다.</p>
    <hr/>
    <p class="en-line">That's the man <strong>whose</strong> car was stolen.</p>
    <p class="ko-line">저 사람이 차를 도난당한 그 남자입니다.</p>
  </div>

  <div class="lesson-block warn">
    <div class="lesson-block-header">⚠️ 자주 하는 실수</div>
    <p>❌ I have a friend <s>he</s> lives in Seoul. → ✅ I have a friend <strong>who</strong> lives in Seoul.</p>
    <p>❌ This is the book <s>what</s> I bought. → ✅ This is the book <strong>that</strong> I bought. (what 아니라 that!)</p>
    <p>❌ The place <s>which</s> I was born is Busan. → ✅ The place <strong>where</strong> I was born is Busan.</p>
    <p>사람 = who/that, 사물 = which/that, 장소 = where!</p>
  </div>

  <div class="lesson-block success">
    <div class="lesson-block-header">💡 Jake's 핵심 정리</div>
    <p>✅ <strong>who</strong> = 사람 + 주어 역할</p>
    <p>✅ <strong>which</strong> = 사물 + 주어/목적어 역할</p>
    <p>✅ <strong>that</strong> = 사람 / 사물 둘 다 (가장 안전한 선택)</p>
    <p>✅ <strong>where</strong> = 장소</p>
    <p>✅ <strong>whose</strong> = 소유 (~의)</p>
  </div>

  <!-- INTERACTIVE PRACTICE -->
  <div class="practice-block" data-practice-id="9"></div>`;
