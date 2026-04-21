<template>
  <section v-reveal="'right'" class="download-section" id="download">
    <div class="container">
      <div class="row row-gap-lg">
        <div class="col-12 col-md-8">

          <span class="section-tag sr-child">Download</span>

          <h2 class="dl-title sr-child">
            ดาวน์โหลด
            <img src="/logo.png" alt="DailyMu" class="dl-logo" /><br>
            ได้ทั้ง iOS และ Android
          </h2>

          <p class="dl-desc sr-child">
            เริ่มต้นดูดวงฮีลใจวันนี้ ดาวน์โหลดฟรี แล้วพบกับเพื่อนที่เข้าใจคุณทุกเช้า
          </p>

          <div class="row row-gap-md sr-child" style="margin-bottom: var(--space-8);">
            <div class="col-12 col-sm-6 col-md-5">
              <a href="#" class="store-btn">
                <i class="fa-brands fa-apple store-icon"></i>
                <div class="store-text">
                  <span class="store-label">Download on the</span>
                  <span class="store-name">App Store</span>
                </div>
              </a>
            </div>
            <div class="col-12 col-sm-6 col-md-5">
              <a href="#" class="store-btn">
                <i class="fa-brands fa-google-play store-icon"></i>
                <div class="store-text">
                  <span class="store-label">GET IT ON</span>
                  <span class="store-name">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          <div class="qr-row sr-child">
            <div class="qr-box"><i class="fa-solid fa-qrcode"></i></div>
            <span class="qr-text">สแกนเพื่อดาวน์โหลด</span>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.download-section {
  padding: var(--space-20) 0;
  background: var(--violet-50);
}
[data-theme="dark"] .download-section {
  background: var(--violet-900);
}

.section-tag {
  display: inline-block;
  font-size: var(--label-5-size);
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: var(--space-5);
}
.dl-title {
  font-size: clamp(32px, 4vw, var(--heading-2-size));
  line-height: 1.15;
  font-weight: 800;
  color: var(--fg-high);
  margin-bottom: var(--space-4);
}
.dl-logo {
  height: 44px;
  width: auto;
  object-fit: contain;
  vertical-align: middle;
  margin: 0 var(--space-2);
}
.dl-desc {
  font-size: var(--caption-1-size);
  line-height: 1.6;
  color: var(--fg-mid);
  margin-bottom: var(--space-10);
}

.store-btn {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-5) var(--space-6);
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: inherit;
  width: 100%;
  transition: all 400ms var(--spring-bounce);
}
.store-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0,0,0,0.08);
}
.store-icon {
  font-size: 28px;
  color: var(--fg-high);
  flex-shrink: 0;
  width: 32px;
  text-align: center;
}
.store-text { display: flex; flex-direction: column; }
.store-label {
  font-size: var(--caption-5-size);
  color: var(--fg-low);
}
.store-name {
  font-size: var(--label-1-size);
  font-weight: 700;
  color: var(--fg-high);
}

.qr-row {
  display: flex;
  align-items: center;
  gap: var(--space-4);
}
.qr-box {
  width: 56px; height: 56px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-md);
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  color: var(--fg-low);
}
.qr-text {
  font-size: var(--caption-3-size);
  color: var(--fg-low);
}

</style>
