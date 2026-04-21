<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import HowItWorksSection from './components/HowItWorksSection.vue'
import ShowcaseSection from './components/ShowcaseSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import FooterSection from './components/FooterSection.vue'
import PricingPage from './components/PricingPage.vue'

const currentPage = ref('home')

function navigate(page) {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

provide('navigate', navigate)
provide('currentPage', currentPage)

const showScrollTop = ref(false)

function onScroll() {
  showScrollTop.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <NavBar />

  <template v-if="currentPage === 'home'">
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
    <ShowcaseSection />
    <PricingPage />
    <DownloadSection />
  </template>

  <FooterSection />

  <transition name="fade-btn">
    <div v-show="showScrollTop" class="scroll-top-wrap" @click="scrollToTop">
      <button class="scroll-top-btn" aria-label="Scroll to top">
        <i class="fa-solid fa-arrow-up"></i>
      </button>
      <span class="scroll-top-label">กลับไปด้านบน</span>
    </div>
  </transition>
</template>

<style scoped>
.scroll-top-wrap {
  position: fixed;
  bottom: 32px;
  right: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  cursor: pointer;
  z-index: 500;
  transition: transform 0.3s ease;
}
.scroll-top-wrap:hover {
  transform: translateY(-3px);
}
.scroll-top-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: var(--primary);
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(236, 89, 157, 0.3);
  transition: box-shadow 0.3s ease;
}
.scroll-top-wrap:hover .scroll-top-btn {
  box-shadow: 0 12px 32px rgba(236, 89, 157, 0.4);
}
.scroll-top-btn:active {
  transform: scale(0.95);
}
.scroll-top-label {
  font-family: var(--font-family-primary);
  font-size: var(--caption-4-size);
  font-weight: 400;
  color: var(--fg-mid);
}
.fade-btn-enter-active,
.fade-btn-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
