<script setup>
const base = import.meta.env.BASE_URL
</script>

<template>
  <section v-reveal="'up'" class="hero">
    <div class="hero-blob"></div>

    <div class="container hero-inner">

      <!-- Review -->
      <div class="hero-review sr-child">
        <div class="review-stars">
          <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        </div>
        <p class="review-text">"เปิดอ่านทุกเช้า รู้สึกเหมือนมีเพื่อนให้กำลังใจ"</p>
      </div>

      <!-- Heading -->
      <h1 class="hero-h1 sr-child">ดูดวงที่ฮีลใจ<br>ด้วยพลัง <span class="h1-gradient">AI</span></h1>
      <p class="hero-sub sr-child">
        เช็คดวง สีมงคล เปิดไพ่ ทำนายฝัน ครบในแอปเดียว<br>
        ทุกคำทำนายอ่านแล้วรู้สึกดี แม้วันที่ดวงไม่เป็นใจ
      </p>

      <!-- Floating screenshots — 3 phones -->
      <div class="hero-phones sr-child">
        <img :src="`${base}screen-calendar.png`" alt="DailyMu ปฏิทิน" class="phone phone-side-left float-slow" />
        <img :src="`${base}screen-home.png`" alt="DailyMu หน้าหลัก" class="phone phone-center float" />
        <img :src="`${base}screen-tarot.png`" alt="DailyMu ไพ่ทาโรต์" class="phone phone-side-right float-slow" />
      </div>

      <!-- Floating snippet cards — Gleap exact style -->
      <div class="snippet snippet-1">
        <div class="snippet-float-wrap">
          <div class="snippet-card">
            <span class="snippet-tag tag-pink">ดวงรายวัน</span>
            <p class="snippet-text">วันนี้ดวงดี เหมาะเริ่มต้นสิ่งใหม่</p>
          </div>
          <img class="snippet-avatar" :src="`${base}avatar-3.png`" alt="" />
        </div>
      </div>

      <div class="snippet snippet-2">
        <div class="snippet-float-wrap">
          <div class="snippet-card">
            <span class="snippet-tag tag-violet">AI ตีความ</span>
            <p class="snippet-text">พลังงานวันนี้ดีมาก ลุยได้เลย!</p>
          </div>
          <img class="snippet-avatar" :src="`${base}avatar-2.png`" alt="" />
        </div>
      </div>

      <div class="snippet snippet-3">
        <div class="snippet-float-wrap">
          <div class="snippet-card">
            <span class="snippet-tag tag-green">สีมงคล</span>
            <p class="snippet-text">สีเขียวอ่อน ช่วยเสริมความสงบ</p>
          </div>
          <img class="snippet-avatar" :src="`${base}avatar-1.png`" alt="" />
        </div>
      </div>

      <!-- Snippet 4 — bottom left -->
      <div class="snippet snippet-4">
        <div class="snippet-float-wrap">
          <div class="snippet-card">
            <span class="snippet-tag tag-pink">ไพ่ทาโรต์</span>
            <p class="snippet-text">การงานวันนี้เปิดรับสิ่งใหม่</p>
          </div>
          <img class="snippet-avatar" :src="`${base}avatar-2.png`" alt="" />
        </div>
      </div>

      <!-- Dots -->
      <div class="deco deco-pink"></div>
      <div class="deco deco-violet"></div>

    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 140px 0 0;
  position: relative;
  overflow: hidden;
  background: var(--bg-surface);
}

.hero-blob {
  position: absolute;
  bottom: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 140%;
  height: 50%;
  border-radius: 50%;
  background: linear-gradient(180deg, var(--pink-50) 0%, var(--violet-50) 100%);
  pointer-events: none;
}
[data-theme="dark"] .hero-blob {
  background: linear-gradient(180deg, var(--pink-900) 0%, var(--violet-900) 100%);
}

.hero-inner { position: relative; z-index: 1; }

/* Review */
.hero-review { margin-bottom: var(--space-6); }
.review-stars {
  display: flex; justify-content: center; gap: 2px;
  margin-bottom: var(--space-2);
  color: #F8C135; font-size: 16px;
}
.review-text {
  font-size: var(--caption-3-size);
  color: var(--fg-mid);
  font-style: italic;
}

/* Heading */
.hero-h1 {
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.15;
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-4);
}
.h1-gradient {
  background: linear-gradient(135deg, var(--pink-400) 0%, var(--violet-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-sub {
  font-size: var(--caption-2-size);
  line-height: 1.6;
  color: var(--fg-mid);
  margin-bottom: var(--space-8);
  max-width: 520px;
  margin-left: auto; margin-right: auto;
}

/* CTA */
.hero-cta { margin-bottom: var(--space-12); }
.cta-btn {
  display: inline-flex; align-items: center; gap: var(--space-2);
  padding: var(--space-4) var(--space-10);
  background: var(--primary); color: #FFFFFF;
  font-family: var(--font-family-primary);
  font-size: var(--label-2-size); font-weight: 700;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all 400ms var(--spring-bounce);
}
.cta-btn:hover {
  background: var(--primary-pressed);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 12px 32px rgba(236,89,157,0.35);
}

/* Phones — 3 screenshots */
.hero-phones {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: var(--space-4);
  margin-bottom: -80px;
}
.phone {
  border-radius: 28px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.1);
  object-fit: cover;
}
.phone-center {
  width: 260px;
  z-index: 3;
  position: relative;
}
.phone-side-left {
  width: 210px;
  z-index: 1;
  opacity: 0.85;
  transform: rotate(-5deg) translateY(20px);
}
.phone-side-right {
  width: 210px;
  z-index: 2;
  opacity: 0.85;
  transform: rotate(5deg) translateY(20px);
}

/* Floating snippet cards — Gleap exact style */
.snippet {
  position: absolute;
  z-index: 4;
  max-width: 210px;
}
.snippet-float-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  animation: snippetFloat 4s var(--spring-gentle) infinite;
}
.snippet-2 .snippet-float-wrap { animation-duration: 5s; animation-delay: 0.5s; }
.snippet-3 .snippet-float-wrap { animation-duration: 4.5s; animation-delay: 1s; }

@keyframes snippetFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
/* Card part */
.snippet-card {
  background: #FFFFFF;
  border-radius: var(--radius-lg);
  padding: var(--space-3) var(--space-4);
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
  text-align: left;
  width: 100%;
}
.snippet-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  padding: 2px 9px;
  border-radius: var(--radius-full);
  margin-bottom: var(--space-1);
}
.tag-pink { background: var(--pink-100); color: var(--pink-600); }
.tag-violet { background: var(--violet-100); color: var(--violet-600); }
.tag-green { background: #E1F2E0; color: #559652; }

.snippet-text {
  font-size: 13px;
  color: var(--fg-mid);
  line-height: 1.4;
}
/* Avatar below card */
.snippet-avatar {
  width: 45px; height: 45px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--bg-subtle);
  border: 2px solid #FFFFFF;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.snippet-1 {
  top: 16%;
  left: 4%;
  transform: rotate(-22deg);
}
.snippet-2 {
  top: 18%;
  right: 3%;
  transform: rotate(18deg);
}
.snippet-3 {
  bottom: 34%;
  right: 1%;
  transform: rotate(-15deg);
}

.snippet-4 {
  bottom: 44%;
  left: 2%;
  transform: rotate(5deg);
}
.snippet-4 .snippet-float-wrap { animation-duration: 4.2s; animation-delay: 1.5s; }

/* Dots */
.deco {
  position: absolute; border-radius: 50%; pointer-events: none;
}
.deco-pink {
  width: 48px; height: 48px;
  background: var(--pink-200);
  top: 15%; right: 8%;
  animation: floatGentle 4s var(--spring-gentle) infinite;
}
.deco-violet {
  width: 24px; height: 24px;
  background: var(--violet-200);
  top: 30%; left: 6%;
  animation: floatSlow 6s var(--spring-gentle) infinite;
}
@keyframes floatGentle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes floatSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (max-width: 767px) {
  .hero { padding: 120px 0 0; }
  .hero-h1 { font-size: 32px; }
  .phone-center { width: 190px; }
  .phone-side-left, .phone-side-right { width: 150px; }
  .hero-phones { gap: var(--space-2); margin-bottom: -40px; }
  .deco, .snippet { display: none !important; }
}
</style>
