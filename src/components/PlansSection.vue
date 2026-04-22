<script setup>
import { ref } from 'vue'

const billing = ref('monthly')

const plans = [
  {
    name: 'Free',
    price: { monthly: '0', yearly: '0' },
    period: { monthly: 'ตลอดไป', yearly: 'ตลอดไป' },
    subtitle: 'เริ่มต้นดูดวงฮีลใจ ฟีเจอร์หลักครบ',
    btnLabel: 'เริ่มใช้ฟรี',
    popular: false,
    cardBg: 'linear-gradient(160deg, var(--pink-50) 0%, #FFFFFF 100%)',
    features: [
      'โปรไฟล์ 1 คน',
      'ดูดวงรายวัน + สีมงคล',
      'Calendar 7 วัน',
      'เซียมซี 1 ครั้ง/วัน',
      'แชร์ 2 ครั้ง/วัน',
    ]
  },
  {
    name: 'Plus',
    price: { monthly: '99', yearly: '790' },
    period: { monthly: 'เดือน', yearly: 'ปี' },
    subtitle: 'สำหรับคนที่อยากรู้มากขึ้น ไม่มีโฆษณา',
    btnLabel: 'สมัคร Plus',
    popular: true,
    cardBg: null,
    features: [
      'ทุกอย่างใน Free',
      'โปรไฟล์ 3 คน',
      'Calendar 30 วัน',
      'เซียมซี 3 ครั้ง/วัน',
      'ไพ่ทาโรต์ 1 ครั้ง/วัน',
      'ทำนายฝัน 3 ครั้ง/วัน',
      'ไม่มีโฆษณา',
    ]
  },
  {
    name: 'Premium',
    price: { monthly: '299', yearly: '2,390' },
    period: { monthly: 'เดือน', yearly: 'ปี' },
    subtitle: 'ปลดล็อคทุกฟีเจอร์ ไม่จำกัด พร้อม AI',
    btnLabel: 'สมัคร Premium',
    popular: false,
    cardBg: 'linear-gradient(160deg, var(--violet-50) 0%, #FFFFFF 100%)',
    features: [
      'ทุกอย่างใน Plus',
      'โปรไฟล์ 5 คน',
      'Calendar ไม่จำกัด',
      'เซียมซี/ไพ่ทาโรต์/ทำนายฝัน ไม่จำกัด',
      'AI Summary & Chat',
      'แชร์ไม่จำกัด + Special Themes',
    ]
  }
]

// 3D tilt card interaction
function handleMouseMove(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8

  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`

  // Move shine overlay
  const shine = card.querySelector('.card-shine')
  if (shine) {
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.25) 0%, transparent 60%)`
    shine.style.opacity = '1'
  }

  // Move glow
  const glow = card.querySelector('.card-glow')
  if (glow) {
    glow.style.background = `radial-gradient(circle at ${x}px ${y}px, var(--primary-bg-subtle) 0%, transparent 70%)`
    glow.style.opacity = '1'
  }
}

function handleMouseLeave(e) {
  const card = e.currentTarget
  card.style.transform = ''

  const shine = card.querySelector('.card-shine')
  if (shine) shine.style.opacity = '0'

  const glow = card.querySelector('.card-glow')
  if (glow) glow.style.opacity = '0'
}

// Popular card uses different glow color
function handleMouseMovePop(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2

  const rotateX = ((y - centerY) / centerY) * -8
  const rotateY = ((x - centerX) / centerX) * 8

  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`

  const shine = card.querySelector('.card-shine')
  if (shine) {
    shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.35) 0%, transparent 60%)`
    shine.style.opacity = '1'
  }
}
</script>

<template>
  <section v-reveal="'up'" class="plans-section" id="plans">
    <div class="container">

      <!-- Header -->
      <div class="plans-header">
        <h2 class="plans-title sr-child">เลือกแพลนที่เหมาะกับคุณ</h2>
        <p class="plans-desc sr-child">ไม่มีสัญญาผูกมัด ยกเลิกได้ตลอดเวลา</p>

        <div class="billing-toggle sr-child">
          <button
            class="toggle-btn"
            :class="{ active: billing === 'monthly' }"
            @click="billing = 'monthly'"
          >รายเดือน</button>
          <button
            class="toggle-btn"
            :class="{ active: billing === 'yearly' }"
            @click="billing = 'yearly'"
          >รายปี</button>
        </div>
      </div>

      <!-- Plan cards -->
      <div class="row row-gap-lg align-stretch row-center">
        <div
          v-for="(plan, index) in plans"
          :key="plan.name"
          class="col-12 col-md-4"
        >
          <div
            class="plan-card tilt-card sr-child-scale"
            :class="{ popular: plan.popular }"
            :style="{
              transitionDelay: (index * 0.12) + 's',
              background: plan.cardBg && !plan.popular ? plan.cardBg : undefined
            }"
            @mousemove="plan.popular ? handleMouseMovePop($event) : handleMouseMove($event)"
            @mouseleave="handleMouseLeave"
          >
            <!-- Shine overlay -->
            <div class="card-shine"></div>
            <!-- Glow overlay -->
            <div v-if="!plan.popular" class="card-glow"></div>

            <!-- Popular badge -->
            <div v-if="plan.popular" class="popular-badge">MOST POPULAR</div>

            <!-- Price -->
            <div class="plan-price">
              <span class="price-symbol">&#3647;</span>
              <span class="price-amount">{{ plan.price[billing] }}</span>
              <span class="price-period">/{{ plan.period[billing] }}</span>
            </div>

            <!-- Name -->
            <h3 class="plan-name">{{ plan.name }}</h3>

            <!-- Subtitle -->
            <p class="plan-subtitle">{{ plan.subtitle }}</p>

            <!-- Features -->
            <ul class="plan-features">
              <li v-for="feat in plan.features" :key="feat">
                <span class="check-icon">
                  <i class="fa-solid fa-circle-check"></i>
                </span>
                {{ feat }}
              </li>
            </ul>

            <!-- CTA -->
            <a href="#download" class="plan-btn" :class="{ 'btn-popular': plan.popular }">
              {{ plan.btnLabel }}
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.plans-section {
  padding: var(--space-20) 0;
}

/* --- Header --- */
.plans-header {
  text-align: center;
  margin-bottom: var(--space-12);
}
.plans-title {
  font-size: var(--heading-2-size);
  line-height: var(--heading-2-lh);
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-2);
}
.plans-desc {
  font-size: var(--caption-2-size);
  line-height: var(--caption-2-lh);
  color: var(--fg-mid);
  margin-bottom: var(--space-8);
}

/* --- Billing toggle --- */
.billing-toggle {
  display: inline-flex;
  background: var(--bg-subtle);
  border-radius: var(--radius-full);
  padding: var(--space-1);
}
.toggle-btn {
  font-family: var(--font-family-primary);
  font-size: var(--label-4-size);
  font-weight: 700;
  padding: var(--space-2) var(--space-6);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  background: transparent;
  color: var(--fg-mid);
  transition: all 350ms var(--spring-bounce);
}
.toggle-btn.active {
  background: var(--primary);
  color: #FFFFFF;
  box-shadow: 0 4px 12px rgba(236,89,157,0.3);
}
.toggle-btn:not(.active):hover {
  color: var(--fg-high);
}

/* ============================================================
   3D TILT CARD
   ============================================================ */
.tilt-card {
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99),
              box-shadow 400ms var(--spring-smooth);
}
.tilt-card:hover {
  box-shadow: 0 24px 48px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.08);
}
.tilt-card.popular:hover {
  box-shadow: 0 24px 56px rgba(236,89,157,0.2), 0 8px 16px rgba(236,89,157,0.1);
}

/* Shine layer — follows cursor */
.card-shine {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: opacity 300ms var(--spring-gentle);
  border-radius: inherit;
}

/* Glow layer — soft color under cursor */
.card-glow {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  opacity: 0;
  transition: opacity 400ms var(--spring-gentle);
  border-radius: inherit;
}

/* Ensure content is above shine/glow */
.plan-price, .plan-name, .plan-subtitle, .plan-features, .plan-btn, .popular-badge {
  position: relative;
  z-index: 3;
}

/* --- Plan card base --- */
.plan-card {
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: var(--space-8) var(--space-6);
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Popular card — soft pink gradient */
.plan-card.popular {
  background: linear-gradient(160deg, var(--pink-200) 0%, var(--pink-100) 40%, var(--pink-50) 100%);
  border-color: var(--pink-200);
  color: var(--fg-high);
  box-shadow: 0 12px 40px rgba(236,89,157,0.12);
}

/* Popular badge */
.popular-badge {
  position: absolute;
  top: var(--space-5);
  right: var(--space-5);
  background: var(--primary);
  color: #FFFFFF;
  font-size: var(--caption-5-size);
  font-weight: 700;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  letter-spacing: 0.5px;
}

/* --- Price --- */
.plan-price {
  display: flex;
  align-items: baseline;
  gap: 2px;
  margin-bottom: var(--space-4);
}
.price-symbol {
  font-size: var(--label-1-size);
  font-weight: 800;
  color: var(--fg-high);
}
.price-amount {
  font-size: var(--heading-1-size);
  line-height: 1;
  font-weight: 800;
  color: var(--fg-high);
}
.price-period {
  font-size: var(--caption-3-size);
  color: var(--fg-mid);
  margin-left: var(--space-1);
}
.plan-card.popular .price-symbol,
.plan-card.popular .price-amount {
  color: var(--primary);
}
.plan-card.popular .price-period {
  color: var(--pink-600);
}

/* --- Name --- */
.plan-name {
  font-size: var(--heading-4-size);
  line-height: var(--heading-4-lh);
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-2);
}
.plan-card.popular .plan-name {
  color: var(--pink-800);
}

/* --- Subtitle --- */
.plan-subtitle {
  font-size: var(--caption-4-size);
  line-height: var(--caption-4-lh);
  color: var(--fg-mid);
  margin-bottom: var(--space-6);
}
.plan-card.popular .plan-subtitle {
  color: var(--pink-600);
}

/* --- Features --- */
.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
  flex: 1;
}
.plan-features li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-2);
  font-size: var(--caption-3-size);
  line-height: var(--caption-3-lh);
  color: var(--fg-mid);
}
.plan-card.popular .plan-features li {
  color: var(--pink-700);
}
.check-icon {
  flex-shrink: 0;
  font-size: 16px;
  color: var(--secondary);
  margin-top: 3px;
}
.plan-card.popular .check-icon {
  color: var(--primary);
}

/* --- CTA Button --- */
.plan-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  font-family: var(--font-family-primary);
  font-size: var(--label-3-size);
  font-weight: 700;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 400ms var(--spring-bounce);
  background: var(--bg-subtle);
  color: var(--fg-high);
}
.plan-btn:hover {
  background: var(--secondary);
  color: #FFFFFF;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(114,121,251,0.3);
}
.plan-btn:active {
  transform: translateY(0) scale(0.97);
  transition-duration: 150ms;
}
.plan-btn.btn-popular {
  background: var(--primary);
  color: #FFFFFF;
}
.plan-btn.btn-popular:hover {
  background: var(--primary-pressed);
  color: #FFFFFF;
  box-shadow: 0 6px 24px rgba(236,89,157,0.4);
}

@media (max-width: 767px) {
  .plans-title {
    font-size: var(--heading-3-size);
    line-height: var(--heading-3-lh);
  }
  /* Disable tilt on mobile */
  .tilt-card {
    transform: none !important;
  }
  .card-shine, .card-glow {
    display: none;
  }
}
</style>
