<script setup>
import { inject } from 'vue'
const navigate = inject('navigate')
</script>

<template>
  <footer v-reveal="'fade'" class="footer">
    <div class="container">
      <div class="row row-gap-lg">
        <!-- Brand -->
        <div class="col-12 col-md-4">
          <img src="/logo.png" alt="DailyMu" class="footer-logo" />
          <p class="footer-tagline">เพื่อนฮีลใจ ดูดวงด้วย AI</p>
          <div class="footer-social">
            <a href="#" class="social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#" class="social-btn" aria-label="LINE"><i class="fa-brands fa-line"></i></a>
          </div>
        </div>

        <!-- Links -->
        <div class="col-6 col-md-2">
          <h4 class="footer-heading">เมนู</h4>
          <ul class="footer-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#" @click.prevent="navigate('pricing')">Pricing</a></li>
            <li><a href="#download">Download</a></li>
          </ul>
        </div>

        <div class="col-6 col-md-3">
          <h4 class="footer-heading">ข้อมูล</h4>
          <ul class="footer-links">
            <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
            <li><a href="#">เงื่อนไขการใช้งาน</a></li>
            <li><a href="#">ติดต่อเรา</a></li>
          </ul>
        </div>

        <div class="col-12 col-md-3">
          <h4 class="footer-heading">ดาวน์โหลด</h4>
          <div class="footer-stores">
            <a href="#" class="store-mini">
              <i class="fa-brands fa-apple"></i> App Store
            </a>
            <a href="#" class="store-mini">
              <i class="fa-brands fa-google-play"></i> Google Play
            </a>
          </div>
        </div>
      </div>

      <div class="divider" style="margin: var(--space-6) 0;"></div>

      <p class="footer-copy">&copy; 2026 DailyMu (Muniverse). All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--space-12) 0 var(--space-6);
  border-top: 1px solid var(--border-default);
}
.footer-logo {
  height: 28px;
  margin-bottom: var(--space-2);
}
.footer-tagline {
  font-size: var(--caption-4-size);
  color: var(--fg-mid);
  margin-bottom: var(--space-4);
}

/* Social */
.footer-social {
  display: flex;
  gap: var(--space-2);
}
.social-btn {
  width: 36px; height: 36px;
  border-radius: var(--radius-full);
  background: var(--bg-subtle);
  border: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg-mid);
  font-size: 14px;
  text-decoration: none;
  transition: all 300ms var(--spring-bounce);
}
.social-btn:hover {
  color: var(--primary);
  border-color: var(--primary);
  transform: translateY(-2px);
}

/* Links */
.footer-heading {
  font-size: var(--label-4-size);
  font-weight: 700;
  color: var(--fg-high);
  margin-bottom: var(--space-3);
}
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.footer-links a {
  font-size: var(--caption-4-size);
  color: var(--fg-mid);
  text-decoration: none;
  transition: color 200ms var(--spring-gentle);
}
.footer-links a:hover {
  color: var(--primary);
}

/* Store mini buttons */
.footer-stores {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.store-mini {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  background: var(--bg-subtle);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-sm);
  font-size: var(--caption-4-size);
  font-weight: 700;
  color: var(--fg-high);
  text-decoration: none;
  transition: all 300ms var(--spring-bounce);
}
.store-mini:hover {
  border-color: var(--primary);
  transform: translateY(-1px);
}

.footer-copy {
  font-size: var(--caption-5-size);
  color: var(--fg-low);
  text-align: center;
}
</style>
