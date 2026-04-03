<template>
  <section id="hero" class="min-h-screen relative flex items-center justify-center overflow-hidden bg-white text-[#1A1A1A] site-animate">
    
    <div class="rain-wrapper absolute inset-0 z-0 opacity-[0.15]">
      <div class="rain-container"></div>
    </div>

    <div class="container mx-auto px-6 py-20 relative z-10 flex flex-col items-center text-center site-animate site-animate-delay-200">
      
      <div class="reveal reveal-up flex items-center justify-center gap-4 mb-8">
        <span class="h-[1px] w-12 bg-[#C9A84C] origin-left scale-x-animation"></span>
        <span class="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold text-[#C9A84C]">
          The Narrative Group
        </span>
        <span class="h-[1px] w-12 bg-[#C9A84C] origin-right scale-x-animation"></span>
      </div>

      <h1 class="homepage-title reveal reveal-up font-playfair text-[clamp(2.5rem,8vw,5.5rem)] font-black leading-[1.1] tracking-tight text-[#1A1A1A] site-animate site-animate-delay-300" style="transition-delay: 0.1s">
        Every brand has a <br />
        <span class="italic text-[#C9A84C] relative inline-block">
          story
          <svg class="absolute -bottom-2 left-0 w-full h-3 text-[#C9A84C]/30 path-animation" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" stroke-width="2" />
          </svg>
        </span>
        worth telling.
      </h1>

      <p class="reveal reveal-up mt-10 text-lg md:text-xl leading-relaxed text-[#4A4A4A] max-w-2xl font-light" style="transition-delay: 0.2s">
        We apply the high-stakes discipline of <span class="font-semibold text-[#1A1A1A]">Sports PR</span> to global leaders and creators to craft narratives that move the world.
      </p>

      <div class="reveal reveal-up flex flex-wrap justify-center gap-6 mt-12 site-animate site-animate-delay-500" style="transition-delay: 0.3s">
        <a href="/contact" class="group relative px-10 py-5 bg-[#1A1A1A] text-white overflow-hidden rounded-full transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <span class="relative z-10 uppercase text-xs tracking-widest font-bold">Start Your Narrative</span>
          <div class="absolute inset-0 bg-[#C9A84C] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </a>
        <a href="/services" class="group px-10 py-5 border border-[#1A1A1A]/10 rounded-full uppercase text-xs tracking-widest font-bold hover:border-[#C9A84C] transition-all duration-500">
          <span class="group-hover:text-[#C9A84C] transition-colors">Our Expertise</span>
        </a>
      </div>
    </div>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
      <div class="w-[22px] h-[35px] border-2 border-[#1A1A1A] rounded-full relative">
        <div class="w-1 h-1 bg-[#1A1A1A] rounded-full absolute left-1/2 -translate-x-1/2 top-2 scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible')
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }

.rain-wrapper {
  mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
}

.rain-container {
  position: absolute;
  inset: 0;
  --c: #C9A84C; 
  background-color: transparent;
  background-image: 
    radial-gradient(2px 80px at 10px 100px, var(--c), #0000),
    radial-gradient(2px 80px at 200px 150px, var(--c), #0000),
    radial-gradient(1.5px 1.5px at 100px 50px, var(--c) 100%, #0000 150%),
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

.reveal {
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal-up { transform: translateY(40px); }
.reveal.visible { opacity: 1; transform: translate(0,0); }

.scroll-dot { animation: scrollAnim 2s infinite; }
@keyframes scrollAnim {
  0% { transform: translate(-50%, 0); opacity: 1; }
  100% { transform: translate(-50%, 15px); opacity: 0; }
}

.path-animation {
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  transition: stroke-dashoffset 2s ease 0.6s;
}
.visible .path-animation { stroke-dashoffset: 0; }

.scale-x-animation {
  transform: scaleX(0);
  transition: transform 1s ease 0.2s;
}
.visible .scale-x-animation { transform: scaleX(1); }
</style>