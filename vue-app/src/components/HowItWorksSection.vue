<script setup>
const steps = [
  {
    num: '01',
    icon: 'fa-solid fa-mobile-screen',
    title: 'ดาวน์โหลดแอป',
    desc: 'โหลดฟรีได้ทั้ง iOS และ Android ใช้เวลาไม่ถึงนาที',
  },
  {
    num: '02',
    icon: 'fa-solid fa-user-pen',
    title: 'กรอกวันเกิด',
    desc: 'ใส่วันเกิดและเวลาเกิด (ถ้ามี) เพื่อให้ดวงแม่นยำที่สุด',
  },
  {
    num: '03',
    icon: 'fa-solid fa-heart',
    title: 'รับกำลังใจทุกเช้า',
    desc: 'เปิดแอปดูดวงพร้อมสีมงคล AI สรุปให้ อ่านแล้วรู้สึกดี',
  },
]
</script>

<template>
  <section v-reveal="'up'" class="how-section">
    <div class="container">
      <div class="how-header">
        <span class="section-tag sr-child">How It Works</span>
        <h2 class="how-title sr-child">เริ่มต้นง่ายๆ 3 ขั้นตอน</h2>
      </div>

      <div class="steps-row">
        <div
          v-for="(step, i) in steps"
          :key="step.num"
          class="step-card sr-child"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        >
          <div class="step-num">{{ step.num }}</div>
          <div class="step-icon">
            <i :class="step.icon"></i>
          </div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.how-section {
  padding: var(--space-20) 0;
  background: var(--violet-50);
}
[data-theme="dark"] .how-section {
  background: var(--violet-900);
}

.how-header {
  text-align: center;
  margin-bottom: var(--space-12);
}
.section-tag {
  display: inline-block;
  font-size: var(--label-5-size);
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: var(--space-3);
}
.how-title {
  font-size: clamp(32px, 4vw, var(--heading-2-size));
  line-height: 1.15;
  font-weight: 800;
  color: var(--fg-high);
}

.steps-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}

.step-card {
  text-align: center;
  padding: var(--space-8) var(--space-5);
  background: var(--bg-elevated);
  border-radius: var(--radius-xl);
  position: relative;
  transition: transform 400ms var(--spring-bounce);
}
.step-card:hover {
  transform: translateY(-4px);
}

.step-num {
  font-size: 56px;
  font-weight: 800;
  color: var(--secondary);
  opacity: 0.1;
  position: absolute;
  top: var(--space-4);
  right: var(--space-5);
  line-height: 1;
}
.step-icon {
  width: 56px; height: 56px;
  border-radius: var(--radius-full);
  background: var(--secondary);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin: 0 auto var(--space-5);
}
.step-title {
  font-size: var(--label-1-size);
  font-weight: 700;
  color: var(--fg-high);
  margin-bottom: var(--space-2);
}
.step-desc {
  font-size: var(--caption-3-size);
  line-height: var(--caption-3-lh);
  color: var(--fg-mid);
  max-width: 260px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .steps-row { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
}
</style>
