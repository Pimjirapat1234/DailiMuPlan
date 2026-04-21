<script setup>
const features = [
  {
    icon: 'fa-solid fa-sun',
    title: 'ดวงรายวัน + สีมงคล',
    desc: 'เช็คดวงทุกเช้าพร้อมสีมงคลประจำวัน ใช้ภาษาฮีลใจ ไม่ทำให้กังวล',
    color: 'var(--primary)'
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'AI ตีความอัจฉริยะ',
    desc: 'สรุปดวงด้วย AI ที่เข้าใจบริบท อธิบายได้อย่างมีเหตุผล',
    color: 'var(--secondary)'
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'เซียมซี ไพ่ทาโรต์ ทำนายฝัน',
    desc: '3 Fortune Engine ในแอปเดียว เปิดได้ทุกวัน คำตีความเชื่อมกับดวงรายวัน',
    color: 'var(--info)'
  },
  {
    icon: 'fa-solid fa-calendar-days',
    title: 'ปฏิทินดวงชะตา',
    desc: 'ดูดวงย้อนหลังและล่วงหน้า วางแผนวันสำคัญด้วยข้อมูลจากดาว',
    color: 'var(--success)'
  },
  {
    icon: 'fa-solid fa-yin-yang',
    title: '2 ระบบดวงในแอปเดียว',
    desc: 'Thai Astrology + BaZi (ปาจื่อ) ครอบคลุมกว่าแอปอื่นที่มีแค่ระบบเดียว',
    color: 'var(--violet-400)'
  },
  {
    icon: 'fa-solid fa-share-nodes',
    title: 'แชร์การ์ดดวงสวยๆ',
    desc: 'สร้างการ์ดดวงประจำวันแชร์ให้เพื่อน พร้อม Special Themes สำหรับสมาชิก',
    color: 'var(--pink-400)'
  },
]

function handleTilt(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -10
  const rotateY = ((x - centerX) / centerX) * 10

  card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`

  const shine = card.querySelector('.card-shine')
  if (shine) {
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.3) 0%, transparent 60%)`
    shine.style.opacity = '1'
  }
}

function resetTilt(e) {
  const card = e.currentTarget
  card.style.transform = ''
  const shine = card.querySelector('.card-shine')
  if (shine) shine.style.opacity = '0'
}
</script>

<template>
  <section v-reveal="'up'" class="features-section" id="features">
    <div class="container">
      <div class="features-header">
        <span class="section-tag sr-child">Features</span>
        <h2 class="features-title sr-child">ทำไมต้อง DailyMu?</h2>
        <p class="features-desc sr-child">ไม่ใช่แค่ดูดวง แต่คือเพื่อนที่เข้าใจคุณทุกเช้า</p>
      </div>

      <div class="features-grid">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="feat-card tilt-card sr-child"
          :style="{ transitionDelay: (i * 0.06) + 's' }"
          @mousemove="handleTilt($event)"
          @mouseleave="resetTilt($event)"
        >
          <div class="card-shine"></div>
          <div class="feat-icon" :style="{ color: feat.color }">
            <i :class="feat.icon"></i>
          </div>
          <h3 class="feat-title">{{ feat.title }}</h3>
          <p class="feat-desc">{{ feat.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.features-section {
  padding: var(--space-20) 0;
  background: var(--bg-surface);
}

.features-header {
  text-align: center;
  margin-bottom: var(--space-12);
}
.section-tag {
  display: inline-block;
  font-size: var(--label-5-size);
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: var(--space-3);
}
.features-title {
  font-size: clamp(32px, 4vw, var(--heading-2-size));
  line-height: 1.15;
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-2);
}
.features-desc {
  font-size: var(--caption-2-size);
  color: var(--fg-mid);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
}

.feat-card {
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-6);
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 500ms cubic-bezier(0.03, 0.98, 0.52, 0.99),
              box-shadow 500ms var(--spring-smooth);
  cursor: default;
}
.feat-card:hover {
  box-shadow: 0 20px 48px rgba(0,0,0,0.1);
}

/* Shine overlay */
.card-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 300ms;
  border-radius: inherit;
}

.feat-icon, .feat-title, .feat-desc {
  position: relative;
  z-index: 2;
}

@media (max-width: 767px) {
  .feat-card {
    transform: none !important;
  }
  .card-shine { display: none; }
}

.feat-icon {
  font-size: 24px;
  margin-bottom: var(--space-5);
}
.feat-title {
  font-size: var(--label-1-size);
  line-height: var(--label-1-lh);
  font-weight: 700;
  color: var(--fg-high);
  margin-bottom: var(--space-2);
}
.feat-desc {
  font-size: var(--caption-3-size);
  line-height: var(--caption-3-lh);
  color: var(--fg-mid);
}

@media (max-width: 767px) {
  .features-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 479px) {
  .features-grid { grid-template-columns: 1fr; }
}
</style>
