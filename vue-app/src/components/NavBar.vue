<script setup>
import { inject, ref, onMounted, onUnmounted, watch } from 'vue'

const navigate = inject('navigate')
const currentPage = inject('currentPage')

const activeSection = ref('home')
const showInfoBar = ref(true)
const mobileMenuOpen = ref(false)

function mobileNavigate(action, arg) {
  mobileMenuOpen.value = false
  if (action === 'navigate') navigate(arg)
  else if (action === 'scroll') scrollTo(arg)
}

function scrollTo(id) {
  if (currentPage.value !== 'home') {
    navigate('home')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }
}

// Scroll spy
let observer = null
const sections = ['features', 'pricing', 'download']

function setupScrollSpy() {
  if (observer) observer.disconnect()
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, { threshold: 0.3, rootMargin: '-108px 0px -40% 0px' })

  setTimeout(() => {
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
  }, 200)
}

function handleScroll() {
  if (currentPage.value !== 'home') return
  const scrollY = window.scrollY
  const featuresEl = document.getElementById('features')
  if (!featuresEl) return
  if (scrollY < featuresEl.offsetTop - 200) {
    activeSection.value = 'home'
  }
}

onMounted(() => {
  setupScrollSpy()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
  window.removeEventListener('scroll', handleScroll)
})

watch(currentPage, () => {
  if (currentPage.value === 'home') {
    activeSection.value = 'home'
    setupScrollSpy()
  }
})
</script>

<template>
  <!-- Info bar — marquee -->
  <transition name="slide-info">
    <div v-if="showInfoBar" class="info-bar">
      <div class="marquee">
        <div class="marquee-content">
          <span>&#127881; DailyMu V1.5 — ระบบ Subscription ใหม่ Free / Plus ฿99 / Premium ฿299 พร้อมให้บริการแล้ว &#127881;</span>
          <span>&#10024; ดูดวงฮีลใจ ผสาน Thai Astrology + AI — ดาวน์โหลดฟรีวันนี้ &#10024;</span>
          <span>&#127881; DailyMu V1.5 — ระบบ Subscription ใหม่ Free / Plus ฿99 / Premium ฿299 พร้อมให้บริการแล้ว &#127881;</span>
          <span>&#10024; ดูดวงฮีลใจ ผสาน Thai Astrology + AI — ดาวน์โหลดฟรีวันนี้ &#10024;</span>
        </div>
      </div>
      <button class="info-close" @click="showInfoBar = false" aria-label="Close">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </transition>

  <!-- Navbar -->
  <nav class="navbar" :style="{ top: showInfoBar ? '36px' : '0' }">
    <div class="container navbar-inner">
      <!-- Left: Menu links -->
      <div class="navbar-left">
        <button class="nav-link" :class="{ active: currentPage === 'home' && activeSection === 'home' }" @click="navigate('home')">Home</button>
        <a href="#features" class="nav-link" :class="{ active: currentPage === 'home' && activeSection === 'features' }" @click.prevent="scrollTo('features')">Features</a>
        <a href="#pricing" class="nav-link" :class="{ active: currentPage === 'home' && activeSection === 'pricing' }" @click.prevent="scrollTo('pricing')">Pricing</a>
      </div>

      <!-- Center: Logo -->
      <a href="#" class="navbar-brand" @click.prevent="navigate('home')">
        <img src="/logo.png" alt="DailyMu" class="navbar-logo" />
      </a>

      <!-- Right: Store buttons -->
      <div class="navbar-right">
        <a href="#" class="store-pill store-ios">
          <i class="fa-brands fa-apple"></i> App Store
        </a>
        <a href="#" class="store-pill store-android">
          <i class="fa-brands fa-google-play"></i> Google Play
        </a>
      </div>

      <!-- Mobile: Hamburger button -->
      <button class="hamburger" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Menu">
        <i :class="mobileMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'"></i>
      </button>
    </div>

    <!-- Mobile menu dropdown -->
    <transition name="slide-menu">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <button class="mobile-link" :class="{ active: currentPage === 'home' && activeSection === 'home' }" @click="mobileNavigate('navigate', 'home')">Home</button>
        <a href="#features" class="mobile-link" :class="{ active: currentPage === 'home' && activeSection === 'features' }" @click.prevent="mobileNavigate('scroll', 'features')">Features</a>
        <a href="#pricing" class="mobile-link" :class="{ active: currentPage === 'home' && activeSection === 'pricing' }" @click.prevent="mobileNavigate('scroll', 'pricing')">Pricing</a>
        <div class="mobile-stores">
          <a href="#" class="store-pill store-ios"><i class="fa-brands fa-apple"></i> App Store</a>
          <a href="#" class="store-pill store-android"><i class="fa-brands fa-google-play"></i> Google Play</a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* ============================================================
   INFO BAR — Marquee
   ============================================================ */
.info-bar {
  background: linear-gradient(135deg, #FDEEF5 0%, #F1F2FF 50%, #E6F6FC 100%);
  color: #6A6E83;
  font-size: var(--caption-4-size);
  font-weight: 400;
  height: 36px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: calc(var(--z-sticky) + 1);
}
.info-close {
  position: absolute;
  right: var(--space-3);
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  color: var(--fg-mid);
  font-size: 12px;
  cursor: pointer;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 200ms;
}
.info-close:hover {
  background: rgba(255, 255, 255, 0.9);
  color: var(--fg-high);
}
.slide-info-leave-active {
  transition: height 300ms var(--spring-smooth), opacity 200ms;
}
.slide-info-leave-to {
  height: 0;
  opacity: 0;
}
.marquee {
  width: 100%;
  overflow: hidden;
}
.marquee-content {
  display: flex;
  gap: var(--space-16);
  white-space: nowrap;
  animation: marqueeScroll 30s linear infinite;
}
.marquee-content span {
  flex-shrink: 0;
  padding: 0 var(--space-8);
}
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar {
  position: fixed;
  top: 36px;
  transition: top 300ms var(--spring-smooth);
  left: 0; right: 0;
  z-index: var(--z-sticky);
  background: var(--bg-elevated);
  border-bottom: 1px solid var(--border-default);
  backdrop-filter: blur(16px);
}
.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* Left — menu links */
.navbar-left {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  flex: 1;
}
.nav-link {
  font-family: var(--font-family-primary);
  font-size: var(--label-3-size);
  font-weight: 700;
  color: var(--fg-mid);
  text-decoration: none;
  padding: var(--space-2) 0;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  transition: color 250ms var(--spring-gentle);
}
.nav-link:hover { color: var(--fg-high); }
.nav-link.active {
  color: var(--fg-high);
}
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: var(--space-3);
  right: var(--space-3);
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

/* Center — logo */
.navbar-brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.navbar-logo {
  height: 30px;
  width: auto;
  object-fit: contain;
}

/* Right — store pills */
.navbar-right {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex: 1;
  justify-content: flex-end;
}
.store-pill {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-family: var(--font-family-primary);
  font-size: var(--label-4-size);
  font-weight: 700;
  text-decoration: none;
  transition: all 350ms var(--spring-bounce);
  background: var(--gray-700);
  color: #FFFFFF;
}
.store-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}
.store-pill i {
  font-size: 16px;
}

/* Hamburger — hidden on desktop */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  color: var(--fg-high);
  cursor: pointer;
  padding: var(--space-2);
  transition: color 200ms;
}
.hamburger:hover { color: var(--primary); }

/* Mobile menu dropdown */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: var(--space-4) var(--space-6) var(--space-6);
  background: var(--bg-elevated);
  border-top: 1px solid var(--border-default);
}
.mobile-link {
  font-family: var(--font-family-primary);
  font-size: var(--label-2-size);
  font-weight: 700;
  color: var(--fg-mid);
  text-decoration: none;
  padding: var(--space-3) 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  transition: color 200ms;
}
.mobile-link:hover,
.mobile-link.active { color: var(--primary); }
.mobile-stores {
  display: flex;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

/* Slide transition */
.slide-menu-enter-active {
  transition: max-height 300ms var(--spring-smooth), opacity 200ms;
}
.slide-menu-leave-active {
  transition: max-height 200ms ease, opacity 150ms;
}
.slide-menu-enter-from,
.slide-menu-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.slide-menu-enter-to {
  max-height: 300px;
  opacity: 1;
}

@media (max-width: 767px) {
  .navbar-left { display: none; }
  .navbar-right { display: none; }
  .hamburger { display: block; }
  .mobile-menu { display: flex; }
  .navbar-brand {
    position: static;
    transform: none;
  }
  .navbar-inner {
    height: 56px;
  }
}
</style>
