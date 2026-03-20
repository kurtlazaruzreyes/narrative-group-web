<template>
  <div class="min-h-screen bg-[#F9F7F2] text-[#1A1A1A] selection:bg-[#C9A96E] selection:text-white">
    <div class="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

    <Navigation />

    <main id="scroll-container">
      <header class="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center pt-16 pb-12 md:pt-20 md:pb-20 px-4 md:px-6">
        <div class="max-w-7xl mx-auto w-full">
          <div class="reveal-up">
             <span class="inline-block py-1 px-4 border border-[#C9A96E]/30 rounded-full text-[10px] uppercase tracking-[0.3em] mb-6 md:mb-8 text-[#C9A96E] font-bold">
               About Us
             </span>
             <h1 class="font-playfair text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.85] md:leading-[0.9] max-w-4xl md:max-w-5xl mb-8 md:mb-12 tracking-tighter">
              Crafting Your <br class="hidden md:block"/>
              <span class="text-[#C9A96E] italic hover:tracking-normal transition-all duration-700 cursor-default">Narrative</span>
            </h1>
          </div>
          
          <div class="flex flex-wrap items-center gap-4 md:gap-8 border-t border-black/10 pt-6 md:pt-10 reveal-up delay-300">
            <p class="text-[10px] md:text-[11px] text-muted max-w-xs md:max-w-sm uppercase tracking-[0.25em] leading-relaxed opacity-70">
              Strategic Storytelling for those <br class="hidden md:block"/>shaping the global conversation.
            </p>
            <div class="h-[1px] flex-grow bg-gradient-to-r from-black/20 to-transparent"></div>
          </div>
        </div>
      </header>

      <section class="py-16 md:py-24 lg:py-40 bg-[#F9F7F2] text-[#1A1A1A] px-4 md:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 md:mb-24 reveal-up">
            <h2 class="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 font-playfair text-center md:text-left">Who we <span class="italic text-[#C9A96E]">Partner With</span></h2>
            <p class="text-[#C9A96E]/60 uppercase tracking-[0.4em] text-[10px] text-center md:text-left">High-Stakes Architecture</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5">
            <div v-for="partner in partners" :key="partner.role" 
                 class="bg-white p-6 md:p-8 lg:p-12 hover:bg-[#C9A96E] transition-all duration-700 cursor-default group">
              <span class="text-3xl md:text-4xl mb-6 md:mb-10 block filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:-translate-y-2">
                {{ partner.icon }}
              </span>
              <h3 class="text-xl md:text-2xl mb-2 font-playfair">{{ partner.role }}</h3>
              <p class="text-xs md:text-sm uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                {{ partner.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-24 lg:py-32 px-4 md:px-6 max-w-7xl mx-auto border-t border-black/5">
        <div class="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">
          
          <div class="lg:col-span-4 lg:sticky lg:top-32 h-fit reveal-up">
            <h3 class="text-lg md:text-xl mb-6 md:mb-10 italic text-[#C9A96E] font-playfair">Measuring Success: Tangible Results</h3>
            <ul class="space-y-4 md:space-y-6">
              <li v-for="(pillar, i) in pillars" :key="i" 
                  @click="scrollTo(i)"
                  class="flex items-start gap-3 md:gap-4 cursor-pointer group transition-all duration-500">
                <div class="w-2 h-2 mt-1.5 transition-all duration-500"
                     :class="activePillar === i ? 'bg-[#C9A96E] scale-125 rotate-45' : 'bg-black/10 group-hover:bg-[#C9A96E]/40'"></div>
                <span :class="activePillar === i ? 'text-[#C9A96E] translate-x-2' : 'text-muted'" 
                      class="text-sm md:text-base font-light leading-relaxed transition-all duration-500">
                  {{ pillar.title }}
                </span>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-8 space-y-24 md:space-y-32 lg:space-y-48 pb-20 md:pb-32 lg:pb-40">
            <div v-for="(pillar, i) in pillars" :key="i" 
                 :data-index="i"
                 class="pillar-block reveal-up">
              
              <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-10">
                <div class="w-8 md:w-12 h-px bg-[#C9A96E]"></div>
                <h2 class="text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] leading-tight font-playfair">
                  {{ pillar.title }}
                </h2>
              </div>

              <p class="text-muted text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-light max-w-2xl">
                {{ pillar.longDesc }}
              </p>

              <ul v-if="pillar.bullets" class="space-y-3 md:space-y-4 mb-12 md:mb-16 max-w-2xl">
                <li v-for="(bullet, index) in pillar.bullets" :key="index" class="flex items-start gap-2 md:gap-3">
                  <div class="w-1.5 h-1.5 bg-[#C9A96E] rounded-full mt-2 flex-shrink-0"></div>
                  <span class="text-muted text-base md:text-lg leading-relaxed font-light">{{ bullet }}</span>
                </li>
              </ul>

              <div class="group transition-colors duration-700">
                
                <div v-if="pillar.type === 'curve'" class="space-y-8 md:space-y-12">
                  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end border-b border-black/5 pb-3 md:pb-4 gap-2">
                    <span class="text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Product Adoption Curve</span>
                    <span class="text-[9px] md:text-[10px] text-[#C9A96E] italic">Adoption Rate %</span>
                  </div>
                  
                  <div class="relative h-32 md:h-40 lg:h-48 w-full">
                    <svg viewBox="0 0 800 200" class="w-full h-full overflow-visible">
                      <path d="M0,180 C100,180 250,20 400,20 C550,20 700,180 800,180" 
                            fill="none" 
                            stroke="#C9A96E" 
                            stroke-width="2.5" 
                            class="curve-path" />
                      
                      <line x1="120" y1="20" x2="120" y2="180" stroke="black" stroke-opacity="0.05" />
                      <line x1="280" y1="20" x2="280" y2="180" stroke="black" stroke-opacity="0.05" />
                      <line x1="520" y1="20" x2="520" y2="180" stroke="black" stroke-opacity="0.05" />
                      <line x1="680" y1="20" x2="680" y2="180" stroke="black" stroke-opacity="0.05" />
                    </svg>
                    
                    <div class="flex flex-wrap justify-between mt-4 md:mt-6 px-2">
                      <div v-for="label in ['Innovative', 'Early Adopters', 'Early Majority', 'Late Majority', 'Latecomers']" 
                           :key="label" class="text-[8px] md:text-[9px] uppercase tracking-tighter text-muted/60 text-center w-1/5 px-1">
                        <div class="break-words">{{ label }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta/>
      <FooterSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import FooterSection from '../components/FooterSection.vue'
import Cta from '../components/Cta.vue'

const activePillar = ref(0)

const pillars = [
  { 
    title: 'Narrative Authority & Sentiment', 
    longDesc: 'We track how the conversation around you shifts through key metrics:',
    bullets: [
      'Share of Voice: How often are you mentioned compared to competitors in your industry?',
      'Sentiment Analysis: Moving the needle from neutral or negative to positive, ensuring the public perceives you as a leader, not just a participant.',
      'Key Message Adherence: Ensuring that when the media talks about you, they are using the language and "story pillars" we\'ve established.'
    ],
    type: 'visual'
  },
  { 
    title: 'Strategic Audience Growth', 
    longDesc: 'Growth is meaningless without alignment. We focus on reaching the people who actually move the needle for your goals.',
    bullets: [
      'High-Value Network Expansion: Tracking engagement from industry peers, investors, and decision-makers rather than just "likes."',
      'Conversion and Lead Gen: For brands and founders, we measure how our storytelling translates into website traffic, newsletter sign-ups, or partnership inquiries.',
    ],
    type: 'visual'
  },
  { 
    title: 'Media Quality Over Quantity', 
    longDesc: 'One feature in a respected industry journal (like Forbes, Fast Company, or TechCrunch) is worth more than a hundred low-tier mentions.',
    bullets: [
      'Tier-1 Placements: Securing features in outlets that provide instant credibility to your brand.',
      'Thought Leadership: Measuring the success of op-eds, speaking engagements, and panel invitations that position you as an expert.',
    ],
    type: 'visual'
  },
  { 
    title: 'The "Bottom Line" Results', 
    longDesc: 'Ultimately, we measure success by your ability to own your time and your reputation. * Crisis Mitigation: The silence we maintain is often as important as the noise we make.',
    bullets: [
      'Legacy Positioning: Success is defined by your brand\'s strength five years from now, not just five days from now.',
    ],
    type: 'visual'
  }
]

const partners = [
  { icon: '🔭', role: 'Visionaries', desc: 'Founders & Executives' },
  { icon: '🌍', role: 'Challengers', desc: 'Non-Profits & NGOs' },
  { icon: '🏆', role: 'Athletes', desc: 'Sports Organizations' },
  { icon: '🎨', role: 'Creatives', desc: 'Culture Shapers' },
]

const scrollTo = (index: number) => {
  const elements = document.querySelectorAll('.pillar-block')
  if (elements[index]) {
    elements[index].scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}

onMounted(() => {
  const pillarObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activePillar.value = parseInt(entry.target.getAttribute('data-index') || '0')
      }
    })
  }, { 
    threshold: 0.4,
    rootMargin: "-10% 0px -20% 0px" 
  })

  document.querySelectorAll('.pillar-block').forEach((el) => pillarObserver.observe(el))

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el))
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }

.reveal-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-up.active {
  opacity: 1;
  transform: translateY(0);
}

.curve-path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  transition: stroke-dashoffset 3s ease-in-out;
}

.pillar-block.active .curve-path {
  stroke-dashoffset: 0;
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #F9F7F2;
}
::-webkit-scrollbar-thumb {
  background: #C9A96E;
}
</style>