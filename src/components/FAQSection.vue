<template>
  <section class="py-32 px-16 bg-[#F4F2ED] max-md:px-6 max-md:py-20" id="faq">
    <div class="reveal flex justify-between items-end mb-16 max-md:flex-col max-md:items-start max-md:gap-4">
      <div>
        <div class="text-[0.7rem] tracking-wider6 uppercase text-[#C9A84C] mb-5 flex items-center gap-3">
          <span class="block w-6 h-px bg-[#C9A84C]"></span>Common questions
        </div>
        <h2 class="font-playfair text-[clamp(2rem,3.5vw,3.4rem)] font-extrabold leading-[1.1] tracking-tight">
          Frequently<br><em class="italic text-[#C9A84C]">asked</em>
        </h2>
      </div>
      <p class="max-w-xs text-[#666666] text-[0.95rem] leading-relaxed font-light">Everything you need to know about working with The Narrative Group.</p>
    </div>

    <div class="reveal flex flex-col" style="transition-delay:.1s">

      <div class="faq-item border-t border-[#1C1C1C]/10" :class="{ open: openItems.includes(0) }">
        <div class="faq-q flex justify-between items-center py-7 cursor-pointer font-playfair text-[1.15rem] hover:text-[#C9A84C] transition-colors" @click="toggleItem(0)">
          How can The Narrative Group help me improve my public image?
          <div class="faq-icon relative w-6 h-6 flex-shrink-0 ml-8"></div>
        </div>
        <div class="faq-a text-[#666666] text-[0.95rem] leading-[1.75] font-light">The Narrative Group offers personalized storytelling strategies to enhance your brand and engage your audience.</div>
      </div>

      <div class="faq-item border-t border-[#1C1C1C]/10" :class="{ open: openItems.includes(1) }">
        <div class="faq-q flex justify-between items-center py-7 cursor-pointer font-playfair text-[1.15rem] hover:text-[#C9A84C] transition-colors" @click="toggleItem(1)">
          What sets The Narrative Group apart from other PR agencies?
          <div class="faq-icon relative w-6 h-6 flex-shrink-0 ml-8"></div>
        </div>
        <div class="faq-a text-[#666666] text-[0.95rem] leading-[1.75] font-light">Our 'Narrative-First' approach. Whether it's a professional athlete or a scaling tech company, we believe every brand's success is rooted in the story they tell. We apply the high-stakes discipline of sports PR to the broader world of business and branding.</div>
      </div>

      <div class="faq-item border-t border-[#1C1C1C]/10" :class="{ open: openItems.includes(2) }">
        <div class="faq-q flex justify-between items-center py-7 cursor-pointer font-playfair text-[1.15rem] hover:text-[#C9A84C] transition-colors" @click="toggleItem(2)">
          How do I get started with The Narrative Group?
          <div class="faq-icon relative w-6 h-6 flex-shrink-0 ml-8"></div>
        </div>
        <div class="faq-a text-[#666666] text-[0.95rem] leading-[1.75] font-light">Simply contact us to schedule a consultation and start shaping your public story with The Narrative Group.</div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const openItems = ref<number[]>([])

const toggleItem = (index: number) => {
  const isOpen = openItems.value.includes(index)
  if (isOpen) {
    openItems.value = openItems.value.filter(i => i !== index)
  } else {
    openItems.value = [index] 
  }
}

onMounted(() => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.12 })

  setTimeout(() => {
    document.querySelectorAll('#faq .reveal').forEach(el => {
      observer.observe(el)
    })
  }, 100)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }

.faq-a { 
  max-height: 0; 
  overflow: hidden; 
  transition: max-height .4s ease, padding .3s; 
}
.faq-item.open .faq-a { 
  max-height: 300px; 
  padding-bottom: 1.8rem; 
}
.faq-item.open .faq-q { 
  color: #c9a84c; 
}
.faq-icon::before, .faq-icon::after {
  content: ''; 
  position: absolute; 
  background: currentColor;
  transition: transform .3s, opacity .3s;
}
.faq-icon::before { 
  width: 12px; 
  height: 1px; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%,-50%); 
}
.faq-icon::after  { 
  width: 1px; 
  height: 12px; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%,-50%); 
}
.faq-item.open .faq-icon::after { 
  transform: translate(-50%,-50%) rotate(90deg); 
  opacity: 0; 
}
</style>
