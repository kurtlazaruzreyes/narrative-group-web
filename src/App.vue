<template>
  <div class="app-container">
    <nav class="nav-container">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-4">
            <div class="nav-logo">
              <img src="/ng-logo-only-gold.png" alt="The Narrative Group" class="footer-logo">
            </div>
            <span class="nav-brand">The Narrative Group</span>
          </div>
          <div class="nav-tabs">
            <router-link
              v-for="tab in tabs"
              :key="tab.id"
              :to="tab.path"
              custom
              v-slot="{ navigate, isActive }"
            >
              <button
                @click="navigate"
                :class="[
                  'nav-tab',
                  isActive ? 'nav-tab-active' : 'nav-tab-inactive'
                ]"
              >
                {{ tab.label }}
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main id="main-content" class="main-content">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <footer class="footer">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <img src="/ng-logo-only-gold.png" alt="The Narrative Group" class="footer-logo">
              <h3 class="footer-brand">The Narrative Group</h3>
            </div>
            <p class="text-gray-400">Crafting narratives that build brands, connect communities, and move people.</p>
          </div>
          <div>
            <h3 class="footer-section-title">Our Services</h3>
            <ul class="space-y-2 text-gray-400">
              <li><router-link to="/services" class="footer-link">Storytelling Strategy</router-link></li>
              <li><router-link to="/services" class="footer-link">Media Relations</router-link></li>
              <li><router-link to="/services" class="footer-link">Digital Branding</router-link></li>
            </ul>
          </div>
          <div>
            <h3 class="footer-section-title">Connect</h3>
            <div class="flex flex-col space-y-4">
              <a href="mailto:info@narrativegroup.com" class="social-link">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span class="social-text">Email: info@narrativegroup.com</span>
              </a>
              <a href="tel:+1702-969-4220" class="social-link">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="social-text">Phone: +1 (702) 969-4220</span>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2026-2027 The Narrative Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const tabs = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About Us', path: '/about' },
  { id: 'services', label: 'Our Services', path: '/services' },
  { id: 'football', label: 'Football Intelligence', path: '/football' },
  { id: 'hr', label: 'Fractional HR', path: '/hr' },
  { id: 'hoops', label: 'Hoops Intelligence', path: '/hoops' },
  { id: 'contact', label: 'Contact', path: '/contact' }
]
</script>

<style lang="css" scoped>
/* Navigation Styles */
.nav-container {
  position: sticky;
  top: 0;
  z-index: 50;
  background: linear-gradient(to right, rgb(17 24 39), rgb(31 41 55), rgb(17 24 39));
  backdrop-filter: blur(16px);
  border-bottom: 1px solid rgb(55 65 81);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.nav-logo {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.nav-logo img {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.nav-brand {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(255 255 255);
}

.nav-tabs {
  display: flex;
  gap: 0.25rem;
}

.nav-tab {
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.nav-tab-active {
  background: linear-gradient(to right, rgb(251 191 36), rgb(217 119 6));
  color: rgb(17 24 39);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transform: scale(1.05);
}

.nav-tab-inactive {
  color: rgb(209 213 219);
}

.nav-tab-inactive:hover {
  color: rgb(255 255 255);
  background-color: rgb(31 41 55);
}

/* Main Content Styles */
.main-content {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
}

@media (min-width: 640px) {
  .main-content {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .main-content {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

/* Footer Styles */
.footer {
  background: linear-gradient(to bottom right, rgb(17 24 39), rgb(31 41 55), rgb(17 24 39));
  color: rgb(255 255 255);
  padding-top: 3rem;
  padding-bottom: 3rem;
  border-top: 1px solid rgb(55 65 81);
}

.footer-logo {
  width: 4rem;
  height: 4rem;
  object-fit: contain;
}

.footer-brand {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
}

.footer-section-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.footer-link {
  color: rgb(156 163 175);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-decoration: none;
}

.footer-link:hover {
  color: rgb(255 255 255);
}

.social-link {
  color: rgb(156 163 175);
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

@media (max-width: 640px) {
  .social-link {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
    text-align: left;
  }
}

.social-link:hover, .social-text:hover {
  color: rgb(251 191 36);
  text-decoration: underline;
}

.social-text {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(255 255 255);
}

/* Transition Styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Layout Styles */
.app-container {
  min-height: 100vh;
  background: linear-gradient(to bottom right, rgb(248 250 252), rgb(255 255 255), rgb(239 246 255));
}

.max-w-7xl {
  max-width: 80rem;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.sm\:px-6 {
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

.lg\:px-8 {
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.py-12 {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.h-16 {
  height: 4rem;
}

.space-x-1 > * + * {
  margin-left: 0.25rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-8 > * + * {
  margin-top: 2rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.md\:grid-cols-3 {
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.gap-8 {
  gap: 2rem;
}

.border-t {
  border-top-width: 1px;
}

.border-gray-700 {
  border-color: rgb(55 65 81);
}

.text-center {
  text-align: center;
}

.text-gray-400 {
  color: rgb(156 163 175);
}

.text-white {
  color: rgb(255 255 255);
}

.font-semibold {
  font-weight: 600;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus-not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

.focus-absolute {
  position: absolute;
}

.focus-top-4 {
  top: 1rem;
}

.focus-left-4 {
  left: 1rem;
}

.skip-link {
  background: linear-gradient(to right, rgb(37 99 235), rgb(79 70 229));
  color: rgb(255 255 255);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.skip-link:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
