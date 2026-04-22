<script setup>
import { reactive } from 'vue'

const faqs = reactive([
  { q: 'สมัครสมาชิกแล้วยกเลิกได้ไหม?', a: 'ได้เลย สามารถยกเลิกได้ตลอดเวลาผ่านหน้าเว็บจัดการสมาชิก โดยจะยังใช้งานได้จนครบรอบบิลปัจจุบัน', open: false },
  { q: 'ชำระเงินผ่านช่องทางไหนได้บ้าง?', a: 'รองรับบัตรเครดิต/เดบิตและ PromptPay ผ่านหน้าเว็บภายนอก (ตาม Apple Guidelines)', open: false },
  { q: 'ถ้า downgrade ข้อมูลจะหายไหม?', a: 'ไม่หาย ข้อมูลทั้งหมดยังเก็บไว้ แต่จะถูกจำกัดการเข้าถึงตาม tier ใหม่', open: false },
  { q: 'รายปีประหยัดกว่าเท่าไหร่?', a: 'Plus รายปี ฿1,390 และ Premium รายปี ฿3,290 ประหยัดเทียบกับจ่ายรายเดือน', open: false },
  { q: 'ระบบ subscription sync ทำงานอย่างไร?', a: 'แอปจะ sync สถานะอัตโนมัติเมื่อเปิดแอป, resume จาก background, ได้รับ deep link หรือ pull-to-refresh', open: false },
])
function toggleFaq(i) { faqs[i].open = !faqs[i].open }
</script>

<template>
  <div class="pricing-page" id="pricing">

    <!-- Header -->
    <section v-reveal="'up'" class="pricing-hero">
      <div class="container pricing-hero-inner">
        <span class="pricing-tag sr-child">Pricing</span>
        <h1 class="pricing-h1 sr-child">เริ่มต้นฟรี<br>อัปเกรดเมื่อพร้อม</h1>
        <p class="pricing-sub sr-child">ไม่มีค่าใช้จ่ายแอบแฝง ยกเลิกได้ทุกเมื่อ</p>
      </div>
    </section>

    <!-- Plans container -->
    <section v-reveal="'up'" class="plans-section">
      <div class="container">
        <div class="plans-box sr-child">

          <!-- FREE -->
          <div class="plan-col">
            <div class="plan-top">
              <p class="plan-name">DailyMu</p>

              <div class="plan-price-row">
                <span class="plan-price">฿0</span>
                <span class="plan-per">/ เดือน</span>
              </div>
              <p class="plan-desc">โหราศาสตร์ไทย (จำกัด)</p>

            </div>

            <div class="plan-divider"></div>

            <div class="plan-features">
              <div class="feat-group">
                <h4 class="feat-heading">ดูดวง</h4>
                <p>ดูดวงรายวัน + สีมงคล</p>
                <p>Calendar ย้อนหลัง 7 วัน</p>
                <p>โปรไฟล์ 1 คน</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">Fortune Engines</h4>
                <p>เซียมซี 1 ครั้ง/วัน</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">อื่นๆ</h4>
                <p>แชร์ 2 ครั้ง/วัน</p>
                <p>มีโฆษณา</p>
              </div>
            </div>
          </div>

          <!-- PLUS -->
          <div class="plan-col col-border">
            <div class="plan-top">
              <p class="plan-name"><i class="fa-solid fa-wand-magic-sparkles plan-name-icon"></i> DailyMu Plus</p>

              <div class="plan-price-row">
                <span class="plan-price">฿149</span>
                <span class="plan-per">/ เดือน</span>
              </div>
              <p class="plan-desc">ครบ 2 ศาสตร์ ไทย + ปาจื่อ ไม่มีโฆษณา</p>

            </div>

            <div class="plan-divider"></div>

            <div class="plan-features">
              <div class="feat-group">
                <h4 class="feat-heading">ดูดวง</h4>
                <p>ดูดวงรายวัน + สีมงคล</p>
                <p>Calendar ย้อนหลัง 14 วัน</p>
                <p>โปรไฟล์ 2 คน</p>
                <p>ไทย + ปาจื่อ ครบทั้งคู่</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">Fortune Engines</h4>
                <p>เซียมซี 3 ครั้ง/วัน</p>
                <p>ไพ่ทาโรต์ 2 ครั้ง/วัน</p>
                <p>ทำนายฝัน 5 ครั้ง/วัน</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">อื่นๆ</h4>
                <p>ไม่มีโฆษณา</p>
                <p>แชร์ 5 ครั้ง/วัน</p>
              </div>
            </div>
          </div>

          <!-- PREMIUM -->
          <div class="plan-col col-border">
            <div class="plan-top">
              <p class="plan-name"><i class="fa-solid fa-gem plan-name-icon"></i> DailyMu Premium</p>

              <div class="plan-price-row">
                <span class="plan-price">฿349</span>
                <span class="plan-per">/ เดือน</span>
              </div>
              <p class="plan-desc">ปลดล็อคทุกฟีเจอร์ ทั้ง 2 ศาสตร์ไม่จำกัด พร้อม AI</p>

            </div>

            <div class="plan-divider"></div>

            <div class="plan-features">
              <div class="feat-group">
                <h4 class="feat-heading">ดูดวง</h4>
                <p>ดูดวงรายวัน + สีมงคล</p>
                <p>Calendar ไม่จำกัด</p>
                <p>โปรไฟล์ 5 คน</p>
                <p>โหราศาสตร์ไทย + ปาจื่อ</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">Fortune Engines</h4>
                <p>เซียมซี ไม่จำกัด</p>
                <p>ไพ่ทาโรต์ ไม่จำกัด</p>
                <p>ทำนายฝัน ไม่จำกัด</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">AI & Reports</h4>
                <p>AI Summary</p>
                <p>AI Chat</p>
                <p>Weekly / Monthly Reports</p>
              </div>
              <div class="feat-group">
                <h4 class="feat-heading">อื่นๆ</h4>
                <p>ไม่มีโฆษณา</p>
                <p>แชร์ไม่จำกัด + Special Themes</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section v-reveal="'up'" class="faq-section">
      <div class="container">
        <div>
          <div>
            <h2 class="faq-title sr-child">Pricing FAQ</h2>
            <div class="faq-list">
              <div
                v-for="(faq, i) in faqs"
                :key="i"
                class="faq-item sr-child"
                :class="{ open: faq.open }"
                :style="{ transitionDelay: (i * 0.04) + 's' }"
                @click="toggleFaq(i)"
              >
                <div class="faq-q">
                  <span>{{ faq.q }}</span>
                  <i class="fa-solid fa-plus faq-icon"></i>
                </div>
                <div class="faq-a"><p>{{ faq.a }}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
.pricing-page {
  background: linear-gradient(180deg, var(--violet-50) 0%, var(--pink-50) 100%);
}
[data-theme="dark"] .pricing-page {
  background: linear-gradient(180deg, var(--violet-900) 0%, var(--pink-900) 100%);
}

/* ============================================================
   HERO — centered, simple
   ============================================================ */
.pricing-hero {
  text-align: center;
  padding: var(--space-16) 0 var(--space-10);
}
.pricing-tag {
  display: inline-block;
  font-size: var(--label-5-size);
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: var(--space-3);
}
.pricing-h1 {
  font-size: clamp(32px, 4vw, var(--heading-2-size));
  line-height: 1.15;
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-3);
}
.pricing-sub {
  font-size: var(--caption-2-size);
  color: var(--fg-mid);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.5;
}

/* ============================================================
   PLANS BOX — single container, 3 columns, vertical dividers
   ============================================================ */
.plans-section {
  padding: 0 0 var(--space-12);
}

.plans-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
}

.plan-col {
  padding: var(--space-10) var(--space-8);
}
.col-border {
  border-left: 1px solid var(--border-default);
}

/* Top section — name, price, desc, cta */
.plan-top {
  margin-bottom: 0;
}

.plan-name {
  font-size: var(--label-3-size);
  font-weight: 400;
  color: var(--fg-high);
  margin-bottom: var(--space-8);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.plan-name-icon {
  font-size: 14px;
  color: var(--fg-low);
}

.plan-price-row {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  margin-bottom: var(--space-2);
}
.plan-price {
  font-size: clamp(32px, 3vw, 40px);
  font-weight: 700;
  color: var(--fg-high);
  line-height: 1;
}
.plan-per {
  font-size: var(--caption-3-size);
  color: var(--fg-low);
}

.plan-desc {
  font-size: var(--caption-3-size);
  line-height: 1.5;
  color: var(--fg-mid);
  margin-bottom: var(--space-6);
}

/* CTA buttons */
.plan-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 var(--space-8);
  font-family: var(--font-family-primary);
  font-size: var(--label-4-size);
  font-weight: 700;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: all 300ms var(--spring-bounce);
  margin-bottom: 0;
}
.cta-filled {
  background: var(--secondary);
  color: #FFFFFF;
  border: none;
}
.cta-filled:hover {
  background: var(--secondary-pressed);
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(114,121,251,0.25);
}
.cta-outline {
  background: transparent;
  color: var(--fg-high);
  border: 1.5px solid var(--border-default);
}
.cta-outline:hover {
  border-color: var(--fg-mid);
  transform: translateY(-1px);
}

/* Divider between top and features */
.plan-divider {
  height: 1px;
  background: var(--border-default);
  margin: var(--space-8) 0;
}

/* Feature groups */
.plan-features {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}
.feat-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}
.feat-heading {
  font-size: var(--label-4-size);
  font-weight: 700;
  color: var(--fg-high);
  margin-bottom: var(--space-1);
}
.feat-group p {
  font-size: var(--caption-3-size);
  line-height: 1.6;
  color: var(--fg-mid);
  margin: 0;
}

/* ============================================================
   FAQ
   ============================================================ */
.faq-section {
  padding: var(--space-12) 0 var(--space-20);
}
.faq-title {
  font-size: var(--heading-4-size);
  font-weight: 700;
  color: var(--fg-high);
  margin-bottom: var(--space-8);
}
.faq-list {
  display: flex;
  flex-direction: column;
}
.faq-item {
  border-bottom: 1px solid rgba(255,255,255,0.6);
  cursor: pointer;
  transition: background 200ms;
}
.faq-item:first-child {
  border-top: 1px solid rgba(255,255,255,0.6);
}
.faq-item:hover {
  background: rgba(255,255,255,0.45);
  border-radius: var(--radius-sm);
}
.faq-q {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  font-size: var(--label-3-size);
  font-weight: 700;
  color: var(--fg-high);
}
.faq-icon {
  font-size: 14px;
  color: var(--fg-low);
  flex-shrink: 0;
  transition: transform 400ms var(--spring-bounce);
}
.faq-item.open .faq-icon {
  transform: rotate(45deg);
}
.faq-a {
  max-height: 0;
  overflow: hidden;
  transition: max-height 500ms var(--spring-smooth),
              padding 300ms var(--spring-gentle);
}
.faq-item.open .faq-a {
  max-height: 200px;
  padding-bottom: var(--space-5);
}
.faq-a p {
  font-size: var(--caption-3-size);
  line-height: 1.6;
  color: var(--fg-mid);
  margin: 0;
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 767px) {
  .pricing-h1 { font-size: 36px; }
  .plans-box {
    grid-template-columns: 1fr;
  }
  .col-border {
    border-left: none;
    border-top: 1px solid var(--border-default);
  }
  .plan-col {
    padding: var(--space-8) var(--space-6);
  }
}
</style>
