<template>
  <div class="app-container">
    <Navigation />
    
    <main>
      <HeroSection />
      <MarqueeSection />
      <what />
      <FAQSection />
      <contactSection />
    </main>
    
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import Navigation from './Navigation.vue'
import HeroSection from '../pages/HeroSection.vue'
import MarqueeSection from './MarqueeSection.vue'
import what from './what.vue'
import FAQSection from './FAQSection.vue'
import contactSection from './Cta.vue'
import FooterSection from './FooterSection.vue'

</script>
