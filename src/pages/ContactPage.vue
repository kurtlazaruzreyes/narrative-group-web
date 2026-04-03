<template>
  <div class="app-container">
    <Navigation />

    <section class="contact-page-spacing min-h-screen bg-white flex items-center justify-center px-6 py-20 max-md:pt-32 relative overflow-hidden" id="contact">
      
      <div class="rain-wrapper absolute inset-0 z-0 opacity-[0.15]">
        <div class="rain-container"></div>
      </div>

      <div class="max-w-6xl w-full grid grid-cols-2 gap-32 max-md:grid-cols-1 max-md:gap-16 relative z-10">
        <div>
          <div class="reveal text-[0.7rem] tracking-wider6 uppercase text-[#C9A84C] mb-5 flex items-center gap-3">
            <span class="block w-6 h-px bg-[#C9A84C]"></span>Contact details
          </div>
          <h2 class="reveal font-playfair text-[clamp(2.5rem,4vw,4rem)] font-extrabold leading-[1.1] tracking-tight mt-4" style="transition-delay:.1s">
            Let's<br><em class="italic text-[#C9A84C]">connect</em>
          </h2>
          <p class="reveal mt-8 text-zinc-600 leading-relaxed font-light text-lg" style="transition-delay:.2s">
            We're here to help you craft your narrative. Reach out through any of the channels below.
          </p>
        </div>

        <div class="reveal flex flex-col gap-6" style="transition-delay:.2s">
          <div class="flex flex-col gap-2">
            <label class="text-[0.72rem] tracking-wider3 uppercase text-zinc-500">Your name</label>
            <input type="text" placeholder="Jane Smith" class="border border-zinc-200 bg-zinc-50/30 px-5 py-4 text-[0.95rem] text-zinc-900 font-dm outline-none focus:border-[#C9A84C] focus:bg-white transition-all duration-300 rounded-lg">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-[0.72rem] tracking-wider3 uppercase text-zinc-500">Email address</label>
            <input type="email" placeholder="jane@company.com" class="border border-zinc-200 bg-zinc-50/30 px-5 py-4 text-[0.95rem] text-zinc-900 font-dm outline-none focus:border-[#C9A84C] focus:bg-white transition-all duration-300 rounded-lg">
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-[0.72rem] tracking-wider3 uppercase text-zinc-500">Message</label>
            <textarea placeholder="Tell us about your brand and what you're looking to achieve…" class="border border-zinc-200 bg-zinc-50/30 px-5 py-4 text-[0.95rem] text-zinc-900 font-dm outline-none focus:border-[#C9A84C] focus:bg-white transition-all duration-300 resize-none min-h-[140px] rounded-lg"></textarea>
          </div>
          <button class="w-full py-4 bg-zinc-900 text-white text-[0.82rem] tracking-wider3 uppercase font-dm hover:bg-[#C9A84C] hover:text-zinc-900 transition-all duration-300 cursor-pointer border-none rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Send message
          </button>
        </div>
      </div>
    </section>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import FooterSection from '../components/FooterSection.vue'

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.12 })

  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el)
    })
  }, 100)

  requestAnimationFrame(() => {
    document.querySelectorAll('section:first-child .reveal').forEach(el => {
      el.classList.add('visible')
    })
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Rain Effect Styles */
.rain-container {
  --c: #C9A84C;
  position: absolute;
  inset: 0;
  
  background-image: 
    radial-gradient(2px 80px at 20px 30px, var(--c), #0000),
    radial-gradient(2px 80px at 40px 70px, var(--c), #0000),
    radial-gradient(2px 80px at 50px 160px, var(--c), #0000),
    radial-gradient(2px 80px at 130px 40px, var(--c), #0000),
    radial-gradient(2px 80px at 80px 80px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 70px 77px, var(--c) 100%, #0000 150%),
    radial-gradient(2px 80px at 120px 112px, var(--c), #0000),
    radial-gradient(2px 80px at 140px 180px, var(--c), #0000),
    radial-gradient(2px 80px at 180px 60px, var(--c), #0000),
    radial-gradient(2px 80px at 200px 140px, var(--c), #0000),
    radial-gradient(2px 80px at 260px 80px, var(--c), #0000),
    radial-gradient(2px 80px at 320px 120px, var(--c), #0000),
    radial-gradient(2px 80px at 350px 252px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 150px 126px, var(--c) 100%, #0000 150%),
    radial-gradient(2px 80px at 500px 150px, var(--c), #0000),
    radial-gradient(2px 80px at 650px 253px, var(--c), #0000),
    radial-gradient(2px 80px at 800px 204px, var(--c), #0000),
    radial-gradient(2px 80px at 950px 134px, var(--c), #0000),
    radial-gradient(2px 80px at 1100px 179px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 400px 89.5px, var(--c) 100%, #0000 150%),
    radial-gradient(2px 80px at 1250px 299px, var(--c), #0000),
    radial-gradient(2px 80px at 1400px 215px, var(--c), #0000);
  
  background-size: 
    400px 300px, 400px 400px, 400px 300px, 
    500px 500px, 500px 500px, 600px 400px,
    450px 550px, 400px 450px, 500px 400px,
    550px 500px, 400px 350px, 600px 600px, 500px 500px;
    
  animation: rain-fall 20s linear infinite;
}

.rain-container::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(ellipse 1px 1px at 1px 50%, #C9A84C 0, #0000 100%);
  background-size: 60px 20px;
  opacity: 0.2;
}

@keyframes rain-fall {
  0% { background-position: 0% 0%; }
  100% { background-position: 20px 1000px; }
}
</style>
