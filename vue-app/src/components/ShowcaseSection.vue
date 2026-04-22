<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const features = [
  {
    title: 'ดูดวงรายวัน',
    desc: 'AI สรุปดวงประจำสัปดาห์ สีมงคลวันนี้ คำทำนายเชิงบวกที่อ่านแล้วรู้สึกดี ไม่ทำให้กังวล',
    image: '/screen-home.png',
    color: '#F4A0C4'
  },
  {
    title: 'ปฏิทินดวง',
    desc: 'ดูดวงย้อนหลังและล่วงหน้าผ่านปฏิทิน เห็นวันดี-วันระวัง ได้ในมุมมองเดียว วางแผนชีวิตง่ายขึ้น',
    image: '/screen-calendar-2.png',
    color: '#A8B4FB'
  },
  {
    title: 'เซียมซีออนไลน์',
    desc: 'ตั้งสมาธิ เขย่า แล้วดูดวงของคุณ เซียมซีดิจิทัลที่ตีความด้วย AI อ่านง่าย เข้าใจทันที',
    image: '/screen-siamsi.png',
    color: '#8DD4E8'
  },
  {
    title: 'ไพ่ทาโรต์',
    desc: 'เปิดไพ่ 3 ใบ สำรวจคำแนะนำด้านการงาน การเงิน ความรัก ตีความอย่างมีเหตุผลด้วย AI',
    image: '/screen-tarot-3.png',
    color: '#C4A8FB'
  }
]

const activeIndex = ref(0)
const DURATION = 5000
let timer = null
const progress = ref(0)
let animFrame = null
let startTime = 0

function startProgress() {
  startTime = performance.now()
  progress.value = 0
  cancelAnimationFrame(animFrame)
  function tick(now) {
    const elapsed = now - startTime
    progress.value = Math.min((elapsed / DURATION) * 100, 100)
    if (elapsed < DURATION) {
      animFrame = requestAnimationFrame(tick)
    } else {
      next()
    }
  }
  animFrame = requestAnimationFrame(tick)
}

function next() {
  activeIndex.value = (activeIndex.value + 1) % features.length
  startProgress()
}

function select(i) {
  activeIndex.value = i
  startProgress()
}

const activeImage = computed(() => features[activeIndex.value].image)

onMounted(() => {
  startProgress()
})

onUnmounted(() => {
  cancelAnimationFrame(animFrame)
  clearInterval(timer)
})
</script>

<template>
  <section class="showcase-section">
    <div class="container">
      <span class="section-tag">App Features</span>
      <h2 class="showcase-headline">ฟีเจอร์ที่ออกแบบมา<br>เพื่อคนรักดวง</h2>
    </div>

    <div class="container">
      <div class="showcase-grid">
        <!-- Left: Accordion -->
        <div class="accordion">
          <div
            v-for="(feat, i) in features"
            :key="i"
            class="accordion-item"
            :class="{ active: activeIndex === i }"
            @click="select(i)"
          >
            <div class="accordion-title-row">
              <span class="accordion-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="accordion-title" :style="{ '--feat-color': feat.color }">{{ feat.title }}</h3>
            </div>
            <div class="accordion-body" v-show="activeIndex === i">
              <p class="accordion-desc">{{ feat.desc }}</p>
            </div>
            <div class="accordion-line">
              <div
                class="accordion-progress"
                :style="{ width: activeIndex === i ? progress + '%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- Right: Phone visual -->
        <div class="showcase-visual">
          <div class="phone-frame">
            <transition name="fade" mode="out-in">
              <img
                :key="activeImage"
                :src="activeImage"
                :alt="features[activeIndex].title"
                class="phone-img"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.showcase-section {
  padding: var(--space-20) 0;
  background: var(--bg-surface);
  overflow: hidden;
}

.section-tag {
  display: inline-block;
  font-size: var(--label-5-size);
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: var(--space-4);
}

.showcase-headline {
  font-size: clamp(32px, 4vw, var(--heading-2-size));
  line-height: 1.15;
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-16);
}

/* Grid */
.showcase-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

/* Accordion */
.accordion {
  display: flex;
  flex-direction: column;
}

.accordion-item {
  cursor: pointer;
  padding: var(--space-6) 0;
  position: relative;
}

.accordion-title-row {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.accordion-num {
  font-size: var(--heading-3-size);
  font-weight: 800;
  line-height: 1;
  color: var(--violet-100);
  user-select: none;
  flex-shrink: 0;
  transition: all 0.4s ease;
}
[data-theme="dark"] .accordion-num {
  color: var(--violet-800);
}
.accordion-item.active .accordion-num {
  background: linear-gradient(135deg, var(--pink-400) 0%, var(--violet-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.accordion-title {
  font-size: clamp(18px, 2vw, var(--heading-5-size));
  font-weight: 800;
  color: var(--fg-low);
  transition: color 0.4s ease;
  line-height: 1.3;
}

.accordion-item.active .accordion-title {
  background: linear-gradient(135deg, var(--pink-400) 0%, var(--violet-400) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.accordion-item:hover:not(.active) .accordion-title {
  color: var(--fg-mid);
}

.accordion-body {
  overflow: hidden;
  animation: slideDown 0.4s ease forwards;
}

@keyframes slideDown {
  from { opacity: 0; max-height: 0; margin-top: 0; }
  to { opacity: 1; max-height: 120px; margin-top: var(--space-3); }
}

.accordion-desc {
  font-size: var(--caption-3-size);
  line-height: 1.6;
  color: var(--fg-mid);
  max-width: 440px;
}

/* Progress line */
.accordion-line {
  height: 2px;
  background: var(--border-default);
  margin-top: var(--space-6);
  border-radius: 2px;
  overflow: hidden;
}

.accordion-progress {
  height: 100%;
  background: var(--primary);
  border-radius: 2px;
  transition: width 0.05s linear;
}

/* Phone visual */
.showcase-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Cloud BG behind phone */
.showcase-visual::before {
  content: '';
  position: absolute;
  width: 140%;
  height: 120%;
  top: -10%;
  left: -20%;
  border-radius: 50%;
  width: 420px;
  height: 420px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background:
    radial-gradient(circle at 35% 35%, rgba(244, 155, 196, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 65% 30%, rgba(170, 175, 253, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 50% 65%, rgba(141, 212, 232, 0.35) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 70%);
  filter: blur(30px);
  pointer-events: none;
  z-index: 0;
  animation: cloudFloat 8s ease-in-out infinite;
}

@keyframes cloudFloat {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, calc(-50% - 8px)) scale(1.03); }
}

.phone-frame {
  width: 280px;
  background: var(--bg-card);
  border: 2px solid var(--border-default);
  border-radius: 40px;
  overflow: hidden;
  box-shadow:
    0 24px 80px rgba(0,0,0,0.08),
    0 8px 24px rgba(0,0,0,0.04);
  aspect-ratio: 9 / 19.5;
  position: relative;
  z-index: 1;
}

[data-theme="dark"] .phone-frame {
  box-shadow:
    0 24px 80px rgba(0,0,0,0.3),
    0 8px 24px rgba(0,0,0,0.2);
}

.phone-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Fade transition */
.fade-enter-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: scale(1.02);
}
.fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

/* Responsive */
@media (max-width: 767px) {
  .showcase-section {
    padding: var(--space-12) 0;
  }
  .showcase-headline {
    font-size: 28px;
    margin-bottom: var(--space-10);
  }
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
  .showcase-visual {
    order: -1;
  }
  .showcase-visual::before {
    width: 280px;
    height: 280px;
  }
  .phone-frame {
    width: 200px;
  }
  .accordion-num {
    font-size: var(--heading-5-size);
  }
  .accordion-title {
    font-size: 16px;
  }
  .accordion-item {
    padding: var(--space-4) 0;
  }
}
</style>
