<script setup>
const testimonials = [
  {
    stars: 5,
    quote: 'เปิดอ่านทุกเช้า รู้สึกเหมือนมีเพื่อนให้กำลังใจ AI สรุปให้ตรงใจมาก',
    name: 'พิม ภัทรชนก',
    age: 24,
    zodiac: 'ราศีกันย์',
    initial: 'w',
    color: '#7C6BF0',
  },
  {
    stars: 5,
    quote: 'ทุกคำทำนายอ่านแล้วรู้สึกดี แม้วันที่ดวงไม่เป็นใจ — ฮีลใจจริง ๆ ค่ะ',
    name: 'นนท์ พีรวิชญ์',
    age: 28,
    zodiac: 'ราศีเมษ',
    initial: 'u',
    color: '#4ABFCF',
  },
  {
    stars: 5,
    quote: 'ชอบที่มีเซียมซีและปาจื่อในแอปเดียว ไม่ต้องโหลดหลายแอปเหมือนเมื่อก่อน',
    name: 'ฟ้า ธนพร',
    age: 31,
    zodiac: 'ราศีพฤษภ',
    initial: 'w',
    color: '#4ABFCF',
  },
  {
    stars: 5,
    quote: 'AI สรุปพลังงานประจำวันแม่นจริง เตรียมตัวรับมือกับวันได้ดีขึ้น',
    name: 'โจ้ จิรายุ',
    age: 35,
    zodiac: 'ราศีสิงห์',
    initial: 'จ',
    color: '#F06B8E',
  },
  {
    stars: 5,
    quote: 'ฟีเจอร์ทำนายฝันใช้ดีมาก ฝันแปลก ๆ ก็ดีความได้สบาย ไม่ต้องไปค้นเอง',
    name: 'แก้ม ทัญญาณัฐ',
    age: 22,
    zodiac: 'ราศีมีน',
    initial: 'ก',
    color: '#F06B8E',
  },
  {
    stars: 5,
    quote: 'ดีไซน์น่ารัก ใช้แล้วผ่อนคลาย ไม่กดดัน เหมือนแอปดูดวงเครียด ๆ ทั่วไป',
    name: 'อิ๊ง อนัญญา',
    age: 27,
    zodiac: 'ราศีตุลย์',
    initial: 'อ',
    color: '#4ABFCF',
  },
]
</script>

<template>
  <section class="testimonials" id="testimonials">
    <div v-reveal="'up'" class="container">
      <span class="section-tag sr-child">TESTIMONIALS</span>
      <h2 class="section-title sr-child">เสียงจาก <span class="highlight">ผู้ใช้จริง</span></h2>
      <p class="section-sub sr-child">100,000+ คนใช้ Daily MU เริ่มต้นวันใหม่ของพวกเขาทุกเช้า</p>

      <div class="testimonials-grid sr-child">
        <div v-for="(t, i) in testimonials" :key="i" class="testimonial-card">
          <div class="stars">
            <i v-for="s in t.stars" :key="s" class="fa-solid fa-star"></i>
          </div>
          <p class="quote">"{{ t.quote }}"</p>
          <div class="user-info">
            <div class="avatar" :style="{ background: t.color }">
              {{ t.initial }}
            </div>
            <div class="user-meta">
              <span class="user-name">{{ t.name }}</span>
              <span class="user-detail">{{ t.age }} ปี · {{ t.zodiac }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  padding: 100px 0;
  background: var(--bg-page);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.section-tag {
  display: inline-block;
  font-family: var(--font-family-primary);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 16px;
}

.section-title {
  font-family: var(--font-family-primary);
  font-size: 40px;
  font-weight: 800;
  color: var(--fg-high);
  margin: 0 0 12px;
  line-height: 1.3;
}

.section-title .highlight {
  background: linear-gradient(135deg, #EC599D, #A855F7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-sub {
  font-family: var(--font-family-primary);
  font-size: 17px;
  color: var(--fg-low);
  margin: 0 0 56px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  text-align: left;
}

.testimonial-card {
  background: var(--bg-card);
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.06);
}

.stars {
  display: flex;
  gap: 4px;
}

.stars i {
  color: #F5A623;
  font-size: 15px;
}

.quote {
  font-family: var(--font-family-primary);
  font-size: 15px;
  line-height: 1.7;
  color: var(--fg-high);
  margin: 0;
  flex: 1;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: var(--font-family-primary);
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
}

.user-meta {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.user-name {
  font-family: var(--font-family-primary);
  font-size: 14px;
  font-weight: 700;
  color: var(--fg-high);
}

.user-detail {
  font-family: var(--font-family-primary);
  font-size: 14px;
  color: var(--fg-low);
}

@media (max-width: 768px) {
  .testimonials {
    padding: 48px 0;
  }
  .section-title {
    font-size: 28px;
  }
  .section-sub {
    font-size: 14px;
    margin: 0 0 32px;
  }
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .testimonial-card {
    padding: 20px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
