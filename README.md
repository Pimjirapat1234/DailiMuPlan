# DailyMu — Landing Page Website

Marketing landing page for **DailyMu**, an AI-powered daily horoscope and fortune-telling mobile app (iOS + Android).

## Tech Stack

- **Vue 3** (Composition API with `<script setup>`)
- **Vite 8** (build tool & dev server)
- **Font Awesome 6** (icons)
- **LINE Seed Sans TH** (Thai web font)

## Project Structure

```
├── index.html                  # Entry point
├── src/
│   ├── main.js                 # Vue app bootstrap
│   ├── App.vue                 # Root component with page routing
│   ├── style.css               # Global styles & design tokens
│   └── components/
│       ├── NavBar.vue          # Navigation bar
│       ├── HeroSection.vue     # Hero banner
│       ├── FeaturesSection.vue # Feature highlights
│       ├── HowItWorksSection.vue
│       ├── ShowcaseSection.vue # App screenshots showcase
│       ├── PricingPage.vue     # Pricing plans & billing toggle
│       ├── PlansSection.vue    # Plan details
│       ├── TestimonialsSection.vue
│       ├── DownloadSection.vue # Download CTA
│       └── FooterSection.vue
├── public/images/              # Static assets
│   ├── avatars/                # Testimonial avatars
│   ├── icons/                  # Favicon, Google Play icon
│   ├── logos/                  # DailyMu logo
│   └── screens/                # App screenshots
├── wiki/                       # Project documentation
│   ├── prd.md                  # Product Requirements Document
│   └── dailymu-design-system-preview.html
└── vite.config.js              # Vite config (GitHub Pages base path)
```

## Getting Started

```bash
npm install
npm run dev
```

## Build & Deploy

The site is configured for deployment to **GitHub Pages** at `/DailiMuPlan/`.

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```
