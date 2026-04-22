<script setup>
import { inject } from 'vue'
const navigate = inject('navigate')
</script>

<template>
  <footer v-reveal="'fade'" class="footer">
    <div class="container">
      <div class="footer-top">
        <!-- Brand -->
        <div class="footer-brand">
          <img src="/logo.png" alt="DailyMu" class="footer-logo" />
          <p class="footer-tagline">เพื่อนฮีลใจ ดูดวงด้วย AI — เช็คดวง สีมงคล เปิดไพ่<br>ทำนายฝัน ครบในแอปเดียว ทุกคำทำนายอ่านแล้วรู้สึกดี</p>
          <div class="footer-social">
            <a href="#" class="social-btn" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#" class="social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="social-btn" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
            <a href="#" class="social-btn" aria-label="LINE"><i class="fa-brands fa-line"></i></a>
          </div>
        </div>

        <!-- Links -->
        <div class="footer-links-grid">
          <div class="footer-col">
            <h4 class="footer-heading">เมนู</h4>
            <ul class="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-heading">ข้อมูล</h4>
            <ul class="footer-links">
              <li><a href="#">นโยบายความเป็นส่วนตัว</a></li>
              <li><a href="#">เงื่อนไขการใช้งาน</a></li>
              <li><a href="#">ติดต่อเรา</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <p class="footer-copy">&copy; 2026 DailyMu (Muniverse). All rights reserved.</p>
        <div class="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: var(--space-16) 0 var(--space-8);
  background: var(--bg-surface);
  border-top: 1px solid var(--border-default);
}

/* Top section */
.footer-top {
  display: flex;
  justify-content: space-between;
  gap: var(--space-16);
  margin-bottom: var(--space-10);
}

/* Brand */
.footer-brand {
  max-width: 480px;
}
.footer-logo {
  height: 32px;
  width: fit-content;
  margin-bottom: var(--space-5);
}
.footer-tagline {
  font-size: var(--caption-3-size);
  line-height: 1.6;
  color: var(--fg-mid);
  margin-bottom: var(--space-6);
}

/* Social — icon only, no circle */
.footer-social {
  display: flex;
  gap: var(--space-4);
}
.social-btn {
  color: var(--fg-high);
  font-size: 18px;
  text-decoration: none;
  transition: color 200ms, transform 300ms var(--spring-bounce);
  display: flex;
  align-items: center;
}
.social-btn:hover {
  color: var(--primary);
  transform: translateY(-2px);
}

/* Links grid */
.footer-links-grid {
  display: flex;
  gap: var(--space-8);
  flex-shrink: 0;
}
.footer-heading {
  font-size: var(--label-3-size);
  font-weight: 700;
  color: var(--fg-high);
  margin-bottom: var(--space-4);
}
.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}
.footer-links a {
  font-size: var(--caption-3-size);
  color: var(--fg-mid);
  text-decoration: none;
  transition: color 200ms;
  white-space: nowrap;
}
.footer-links a:hover {
  color: var(--fg-high);
}

/* Divider */
.footer-divider {
  height: 1px;
  background: var(--border-default);
  margin-bottom: var(--space-6);
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-copy {
  font-size: var(--caption-4-size);
  color: var(--fg-low);
}
.footer-bottom-links {
  display: flex;
  gap: var(--space-6);
}
.footer-bottom-links a {
  font-size: var(--caption-4-size);
  color: var(--fg-low);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color 200ms;
}
.footer-bottom-links a:hover {
  color: var(--fg-high);
}

@media (max-width: 767px) {
  .footer-top {
    flex-direction: column;
    gap: var(--space-8);
  }
  .footer-links-grid {
    gap: var(--space-10);
  }
  .footer-bottom {
    flex-direction: column;
    gap: var(--space-3);
    text-align: center;
  }
}
</style>
