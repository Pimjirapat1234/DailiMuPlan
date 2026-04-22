<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const steps = [
  { num: '01', title: 'ดาวน์โหลดแอป', desc: 'โหลดฟรีได้ทั้ง iOS และ Android ใช้เวลาไม่ถึงนาที' },
  { num: '02', title: 'กรอกวันเกิด', desc: 'ใส่วันเกิดและเวลาเกิด (ถ้ามี) เพื่อให้ดวงแม่นยำที่สุด' },
  { num: '03', title: 'รับกำลังใจทุกเช้า', desc: 'เปิดแอปดูดวงพร้อมสีมงคล AI สรุปให้ อ่านแล้วรู้สึกดี' },
]

const sectionRef = ref(null)
const animKey = ref(0)
let observer = null
let loopTimer = null

function startLoop() {
  animKey.value++
  loopTimer = setInterval(() => {
    animKey.value++
  }, 5000)
}

function stopLoop() {
  if (loopTimer) {
    clearInterval(loopTimer)
    loopTimer = null
  }
}

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      startLoop()
    } else {
      stopLoop()
    }
  }, { threshold: 0.3 })
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => {
  if (observer) observer.disconnect()
  stopLoop()
})
</script>

<template>
  <section v-reveal="'up'" class="how-section" ref="sectionRef">
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
          <!-- Odometer number -->
          <div class="step-num-wrap" :key="'num-' + i + '-' + animKey">
            <div
              v-for="(digit, d) in step.num.split('')"
              :key="d"
              class="digit-slot"
            >
              <div
                class="digit-reel reel-animate"
                :style="{
                  '--target': digit,
                  '--delay': (i * 0.15 + d * 0.08) + 's'
                }"
              >
                <span v-for="n in 10" :key="n">{{ n - 1 }}</span>
              </div>
            </div>
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
  padding: var(--space-10) var(--space-6);
  background: var(--bg-elevated);
  border-radius: var(--radius-xl);
  position: relative;
  transition: transform 400ms var(--spring-bounce),
              box-shadow 400ms var(--spring-smooth);
}
.step-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
}

/* Odometer */
.step-num-wrap {
  display: flex;
  justify-content: center;
  gap: 2px;
  margin-bottom: var(--space-6);
  height: 72px;
  overflow: hidden;
}

.digit-slot {
  width: 40px;
  height: 72px;
  overflow: hidden;
  position: relative;
}

.digit-reel {
  display: flex;
  flex-direction: column;
  animation: reelSpin 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--delay);
}

@keyframes reelSpin {
  0% { transform: translateY(0); }
  100% { transform: translateY(calc(var(--target) * -72px)); }
}

.digit-reel span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  font-size: 64px;
  font-weight: 800;
  background: linear-gradient(135deg, var(--pink-400) 0%, var(--violet-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.15;
  line-height: 1;
  flex-shrink: 0;
}

.step-title {
  font-size: var(--heading-5-size);
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-3);
}
.step-desc {
  font-size: var(--caption-3-size);
  line-height: 1.6;
  color: var(--fg-mid);
  max-width: 260px;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .steps-row { grid-template-columns: 1fr; max-width: 360px; margin: 0 auto; }
}
</style>
