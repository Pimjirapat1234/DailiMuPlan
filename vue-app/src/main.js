import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)

// v-reveal directive — auto-animate elements on scroll
app.directive('reveal', {
  mounted(el, binding) {
    const type = binding.value || 'up' // up, scale, left, right, fade
    el.classList.add('section-reveal', `sr-${type}`)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const children = el.querySelectorAll('.sr-child, .sr-child-scale')
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.08}s`
          })
          requestAnimationFrame(() => {
            el.classList.add('sr-visible')
          })
        } else {
          // Reset when out of view so it replays on re-enter
          el.classList.remove('sr-visible')
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' })

    observer.observe(el)
    el._revealObserver = observer
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect()
  }
})

app.mount('#app')

// Also observe static .reveal / .reveal-scale classes
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })

setTimeout(() => {
  document.querySelectorAll('.reveal, .reveal-scale').forEach(el => {
    revealObserver.observe(el)
  })
}, 100)
