<template>
  <section class="py-24 px-10 bg-warm-white max-md:px-6 max-md:py-16 overflow-hidden site-animate" id="cool-services">
    <div class="reveal-stagger site-animate site-animate-delay-200">
      <div class="max-w-xl mb-16 relative">
        <div class="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#C9A84C] opacity-30"></div>
        
        <div class="text-[0.7rem] tracking-wider uppercase text-[#C9A84C] mb-4 flex items-center gap-3 relative z-10">
          <span class="block w-6 h-px bg-[#C9A84C]"></span>our expertise
        </div>
        <h2 class="font-playfair text-[clamp(2rem,3.8vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-[#1C1C1C] relative z-10">
          Services built around<br>your <em class="italic text-[#C9A84C]">narrative</em>.
        </h2>
        <p class="mt-6 text-[#555555] leading-relaxed font-normal max-w-lg relative z-10">
          From brand strategy to media coverage, every service we offer is rooted in a singular belief: your story is your most powerful asset.
        </p>
      </div>

      <div class="grid grid-cols-3 gap-6 max-md:grid-cols-1">

        <div class="reveal-card group relative bg-[#F4F2ED] border border-[#C9A84C]/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#C9A84C] hover:shadow-2xl hover:shadow-[#C9A84C]/10 hover:-translate-y-2 rounded-xl">
          <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-[#C9A84C]/5 leading-none transition-all duration-500 group-hover:text-[#C9A84C]/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
            01
          </div>
          
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C]">
              <svg class="w-7 h-7 stroke-[#C9A84C] group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            
            <h3 class="font-playfair text-[1.7rem] mb-4 text-[#1C1C1C] font-semibold">Storytelling Strategy</h3>
            <p class="text-[0.95rem] text-[#555555] leading-relaxed font-normal mb-8 transition-colors duration-300">
              Craft a compelling narrative to elevate your brand and engage your audience.
            </p>
          </div>
          
          <a href="/services" class="cool-cta-link inline-flex items-center gap-3 text-[0.75rem] tracking-widest uppercase text-[#C9A84C] no-underline font-bold transition-all duration-300 group-hover:text-[#1C1C1C] relative z-10">
            <span>Explore Strategy</span>
            <div class="relative w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center group-hover:border-[#1C1C1C]">
              <svg class="w-4 stroke-[#C9A84C] group-hover:stroke-[#1C1C1C] fill-none transition-transform duration-300 group-hover:translate-x-1" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>

          <div class="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none scale-110 group-hover:scale-100">
            <img :src="storytellingImage" alt="Creative Storytelling" class="object-cover w-full h-full" />
          </div>
          
          <div class="absolute inset-0 bg-[#C9A84C]/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </div>

        <div class="reveal-card group relative bg-[#F4F2ED] border border-[#C9A84C]/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#C9A84C] hover:shadow-2xl hover:shadow-[#C9A84C]/10 hover:-translate-y-2 rounded-xl" style="transition-delay: .1s">
          <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-[#C9A84C]/5 leading-none transition-all duration-500 group-hover:text-[#C9A84C]/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
            02
          </div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C]">
              <svg class="w-7 h-7 stroke-[#C9A84C] group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
            <h3 class="font-playfair text-[1.7rem] mb-4 text-[#1C1C1C] font-semibold">Media Relations</h3>
            <p class="text-[0.95rem] text-[#555555] leading-relaxed font-normal mb-8 transition-colors duration-300">
              Secure media coverage and exposure to enhance your brand visibility and reach.
            </p>
          </div>
          <a href="/services" class="cool-cta-link inline-flex items-center gap-3 text-[0.75rem] tracking-widest uppercase text-[#C9A84C] no-underline font-bold transition-all duration-300 group-hover:text-[#1C1C1C] relative z-10">
            <span>Get Featured</span>
            <div class="relative w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center group-hover:border-[#1C1C1C]">
              <svg class="w-4 stroke-[#C9A84C] group-hover:stroke-[#1C1C1C] fill-none transition-transform duration-300 group-hover:translate-x-1" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>
          
          <div class="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none scale-110 group-hover:scale-100">
            <img :src="mediaRelationsImage" alt="Success in the spotlight" class="object-cover w-full h-full" />
          </div>

          <div class="absolute inset-0 bg-[#C9A84C]/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </div>

        <div class="reveal-card group relative bg-[#F4F2ED] border border-[#C9A84C]/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#C9A84C] hover:shadow-2xl hover:shadow-[#C9A84C]/10 hover:-translate-y-2 rounded-xl" style="transition-delay: .2s">
          <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-[#C9A84C]/5 leading-none transition-all duration-500 group-hover:text-[#C9A84C]/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
            03
          </div>
          <div class="relative z-10">
            <div class="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C]">
              <svg class="w-7 h-7 stroke-[#C9A84C] group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
            </div>
            <h3 class="font-playfair text-[1.7rem] mb-4 text-[#1C1C1C] font-semibold">Digital Branding</h3>
            <p class="text-[0.95rem] text-[#555555] leading-relaxed font-normal mb-8 transition-colors duration-300">
              Build a strong online presence to connect with fans and amplify your brand message.
            </p>
          </div>
          <a href="/services" class="cool-cta-link inline-flex items-center gap-3 text-[0.75rem] tracking-widest uppercase text-[#C9A84C] no-underline font-bold transition-all duration-300 group-hover:text-[#1C1C1C] relative z-10">
            <span>Amplify Brand</span>
            <div class="relative w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center group-hover:border-[#1C1C1C]">
              <svg class="w-4 stroke-[#C9A84C] group-hover:stroke-[#1C1C1C] fill-none transition-transform duration-300 group-hover:translate-x-1" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </a>

          <div class="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none scale-110 group-hover:scale-100">
            <img :src="digitalBrandingImage" alt="A powerful reaction" class="object-cover w-full h-full" />
          </div>

          <div class="absolute inset-0 bg-[#C9A84C]/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }

.cool-cta-link span {
  position: relative;
}
.cool-cta-link span::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #1A1A1A;
  transition: width 0.3s ease-out;
}
.service-card.reveal-card.group:hover .cool-cta-link span::after {
  width: 100%;
}

.reveal-stagger .reveal-card {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.21, 0.6, 0.35, 1);
}

.visible .reveal-card {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

</style>

<script setup lang="ts">
import { onMounted } from 'vue'

const mediaRelationsImage = 'mediaRelations.webp' 
const storytellingImage = 'storyTelllingStrategy.webp' 
const digitalBrandingImage = 'digitalBranding.webp' 

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  setTimeout(() => {
    const container = document.querySelector('.reveal-stagger')
    if (container) {
      observer.observe(container)
    }
  }, 100)
})
</script>