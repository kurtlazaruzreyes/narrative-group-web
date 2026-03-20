<template>
  <div class="min-h-screen bg-[#F5F3F0] text-[#1A1A1A] selection:bg-[#C9A96E] selection:text-white">
    <div class="fixed inset-0 pointer-events-none opacity-[0.02] z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    <Navigation />

    <header class="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6">
      <div class="max-w-7xl mx-auto w-full">
        <div class="reveal-up">
           <span class="inline-block py-1 px-4 border border-[#C9A96E]/30 rounded-full text-[10px] uppercase tracking-[0.3em] mb-8 text-[#C9A96E] font-bold">
             Our Services
           </span>
           <h1 class="font-playfair text-6xl md:text-9xl font-black leading-[0.85] max-w-5xl mb-12 tracking-tighter">
            Crafting Your <br/>
            <span class="text-[#C9A96E] italic hover:tracking-normal transition-all duration-700 cursor-default">Story</span>
          </h1>
        </div>
        
        <div class="flex flex-wrap items-center gap-8 border-t border-black/10 pt-10 reveal-up delay-300">
          <p class="text-[11px] text-muted max-w-xs uppercase tracking-[0.25em] leading-relaxed opacity-70">
            Strategic frameworks for those <br/>who demand narrative excellence.
          </p>
          <div class="h-[1px] flex-grow bg-gradient-to-r from-black/20 to-transparent"></div>
          <button @click="scrollToServices" class="group flex items-center gap-3 bg-[#C9A96E] text-white px-8 py-4 font-playfair text-xs tracking-wider3 uppercase hover:bg-[#C9A96E]/90 transition-all duration-300">
            Explore Services
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>
      </div>
    </header>

    <main id="scroll-container">
      <section id="services" class="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
      <div class="grid lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-4 lg:sticky lg:top-40 h-fit reveal-up">
          <h3 class="text-xl mb-10 italic text-[#C9A96E] font-playfair">Measuring Success: Tangible Results</h3>
          <ul class="space-y-6">
            <li v-for="(pillar, i) in pillars" :key="i" 
                @click="scrollTo(i)"
                class="flex items-start gap-4 cursor-pointer group transition-all duration-500">
              <div class="w-2 h-2 mt-1.5 transition-all duration-500"
                   :class="activePillar === i ? 'bg-[#C9A96E] scale-125 rotate-45' : 'bg-black/10 group-hover:bg-[#C9A96E]/40'"></div>
              <span :class="activePillar === i ? 'text-[#C9A96E] translate-x-2' : 'text-muted'" 
                    class="text-base font-light leading-relaxed transition-all duration-500">
                {{ pillar.title }}
              </span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-8 space-y-48 pb-40">
          <div v-for="(pillar, i) in pillars" :key="i" 
               :data-index="i"
               class="pillar-block reveal-up">
            
            <div class="flex items-center gap-4 mb-10">
              <div class="w-12 h-px bg-[#C9A96E]"></div>
              <h2 class="text-3xl md:text-4xl text-[#1A1A1A] leading-tight font-playfair">
                {{ pillar.title }}
              </h2>
            </div>

            <p class="text-muted text-xl leading-relaxed mb-8 font-light max-w-2xl">
              {{ pillar.longDesc }}
            </p>

            <ul v-if="pillar.bullets" class="space-y-4 mb-16 max-w-2xl">
              <li v-for="(bullet, index) in pillar.bullets" :key="index" class="flex items-start gap-3">
                <div :class="activePillar === i ? 'bg-black scale-125' : 'bg-[#C9A96E] hover:bg-black hover:scale-125'" class="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-all duration-300 cursor-pointer"></div>
                <span :class="activePillar === i ? 'text-[#C9A96E]' : 'text-muted hover:text-[#C9A96E]'" class="text-lg leading-relaxed font-light transition-colors duration-300 cursor-pointer">{{ bullet }}</span>
              </li>
            </ul>

                      </div>
        </div>
      </div>
    </section>

    <section class="px-6 md:px-12 py-24 bg-[#F9F7F2]">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 text-center md:text-left">
          <p class="font-serif text-sm tracking-[0.3em] uppercase text-gold mb-6 font-semibold">
            Specializations
          </p>
          <h2 class="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none text-ink">
            Beyond <br class="hidden md:block" /> The Brief
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          <div 
            v-for="(spec, i) in specializations" 
            :key="i"
            class="group flex flex-col space-y-8"
          >
            <div class="relative aspect-square md:aspect-[16/10] overflow-hidden bg-ink">
              <img 
                :src="spec.img" 
                :alt="spec.title" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
              <div class="absolute top-6 left-6">
                <span class="text-6xl font-serif italic text-gold/80 opacity-50">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
            </div>

            <div class="max-w-xl">
              <h3 class="font-serif text-3xl md:text-4xl uppercase tracking-tight text-ink mb-4">
                {{ spec.title }}
              </h3>
              <div class="h-1 w-12 bg-gold mb-6 transition-all duration-500 group-hover:w-24"></div>
              <p class="text-ink/80 text-lg md:text-xl leading-relaxed font-light">
                {{ spec.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="px-8 md:px-20 py-32 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-20 items-start">

          <div class="lg:sticky lg:top-40 h-fit">
            <p class="font-playfair text-xs tracking-[0.3em] uppercase text-[#C9A96E] mb-4">The Process</p>
            <h2 class="font-playfair text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-8 text-[#1A1A1A]">
              From Chaos<br/>
              <span class="text-transparent" style="-webkit-text-stroke: 1px #1A1A1A;">To Clarity</span>
            </h2>
            <p class="text-muted text-lg leading-relaxed max-w-sm mb-10 font-light">
              Every client starts in a different place. Our process is designed to move you from narrative chaos to complete story control.
            </p>
            <button class="group flex items-center gap-3 border border-[#C9A96E]/40 text-[#C9A96E] px-8 py-4 font-playfair text-xs tracking-widest uppercase hover:bg-[#C9A96E] hover:text-white transition-all duration-500">
              Get a Quote
              <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>

          <div class="relative pt-10">
            <div class="absolute left-5 top-0 bottom-10 w-px bg-black/5">
              <div id="process-progress" class="w-full bg-[#C9A96E] origin-top scale-y-0 h-full transition-transform duration-300"></div>
            </div>

            <div
              v-for="(step, i) in processSteps"
              :key="i"
              :class="['process-step group relative pl-20 pb-24 last:pb-10 transition-opacity duration-500',
                      activeStep === i ? 'opacity-100' : 'opacity-40']"
              :data-step="i"
            >
              <div
                :class="['absolute left-0 top-0 w-11 h-11 border flex items-center justify-center transition-all duration-700 z-10 bg-white',
                        activeStep === i ? 'border-[#C9A96E] rotate-45' : 'border-black/10 rotate-0']"
              >
                <span :class="['font-playfair text-xs transition-all duration-500',
                              activeStep === i ? 'text-[#C9A96E] -rotate-45 scale-110 font-bold' : 'text-black/30']">
                  {{ String(i + 1).padStart(2, '0') }}
                </span>
              </div>

              <span class="font-playfair text-[10px] tracking-[0.2em] uppercase text-[#C9A96E] block mb-4">Phase {{ i + 1 }}</span>
              <h3 class="font-playfair text-2xl md:text-3xl uppercase tracking-tight mb-4 text-[#1A1A1A]">{{ step.title }}</h3>
              <p class="text-muted text-base md:text-lg leading-relaxed font-light max-w-md">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactSection />

    <FooterSection />
    </main>
  </div>
</template>

<script setup lang="ts">
import { h, ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import Navigation from '../components/Navigation.vue'
import FooterSection from '../components/FooterSection.vue'
import ContactSection from '../components/Cta.vue'

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);

  const textBlocks = gsap.utils.toArray<HTMLElement>('.pillar-text-block');
  
  textBlocks.forEach((block: HTMLElement, i: number) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top 40%",
      end: "bottom 40%",
      onEnter: () => { activePillar.value = i },
      onEnterBack: () => { activePillar.value = i },
    });
    
    gsap.from(block, {
      opacity: 0,
      x: -30,
      duration: 0.8,
      scrollTrigger: {
        trigger: block,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });
  });
});

const IconBlueprint = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' })
])
const IconMic = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' })
])
const IconGlobe = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })
])
const IconShield = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '1.5', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
])

interface ServiceItem {
  label: string
  desc: string
}
interface Service {
  title: string
  icon: () => ReturnType<typeof h>
  items: ServiceItem[]
}

const coreServices: Service[] = [
  {
    title: 'Narrative Architecture & Strategy',
    icon: IconBlueprint,
    items: [
      { label: 'Core Messaging', desc: "Developing your brand's unique voice and positioning." },
      { label: 'Executive Presence', desc: 'Tailoring your personal narrative to align with your professional goals.' },
      { label: 'Story Audits', desc: 'Analyzing your current public perception and identifying gaps.' },
    ],
  },
  {
    title: 'High-Impact Media Relations',
    icon: IconMic,
    items: [
      { label: 'Strategic Placements', desc: 'Securing features in tier-one business, lifestyle, and industry publications.' },
      { label: 'Thought Leadership', desc: 'Positioning you as an expert through op-eds, articles, and speaking engagements.' },
      { label: 'Press Kit Development', desc: 'Creating professional, media-ready assets for your brand.' },
    ],
  },
  {
    title: 'Digital Brand Ecosystems',
    icon: IconGlobe,
    items: [
      { label: 'Social Architecture', desc: 'Content strategies for LinkedIn, Instagram, and X.' },
      { label: 'Content Creation', desc: 'Producing high-quality visual and written assets that tell your story.' },
      { label: 'Reputation Management', desc: 'Proactively monitoring and shaping your digital search results.' },
    ],
  },
  {
    title: 'Reputation Protection & Crisis Response',
    icon: IconShield,
    items: [
      { label: 'Crisis Communication', desc: 'Rapid response planning to protect your brand during challenges.' },
      { label: 'Risk Assessment', desc: 'Identifying potential narrative vulnerabilities before they become issues.' },
      { label: 'Transition Strategy', desc: 'Navigating major shifts such as career changes or company pivots.' },
    ],
  },
]

interface Spec {
  title: string
  desc: string
  img: string
}

const specializations: Spec[] = [
  {
    title: 'Sponsorship & Partnership Narrative',
    desc: 'Craft compelling partnership stories that make sponsors see you as a strategic storytelling asset.',
    img: 'sponsorshipPartnership.webp',
  },
  {
    title: 'Endorsement Deal Positioning',
    desc: "Ensure you're the obvious choice. Build partnerships that reinforce your narrative and create compound value.",
    img: 'endorsemntDeal.webp',
  },
  {
    title: 'Public Image Architecture',
    desc: 'Intentional reputation building. Identify key themes you want to be known for and reinforce them authentically.',
    img: 'publicImage.webp',
  },
  {
    title: 'Crisis Narrative Management',
    desc: 'Authentic, strategic communication that acknowledges reality while protecting your long-term narrative goals.',
    img: 'crisisNarrative.webp',
  },
]

interface ProcessStep {
  title: string
  desc: string
}

const processSteps: ProcessStep[] = [
  {
    title: 'Discovery & Assessment',
    desc: 'We dive deep into your current narrative position, identifying what\'s working, what\'s not, and what opportunities exist for strategic storytelling.',
  },
  {
    title: 'Strategy Development',
    desc: 'Based on our assessment, we develop a comprehensive narrative strategy that aligns with your goals, values, and market position.',
  },
  {
    title: 'Implementation & Amplification',
    desc: 'We execute your narrative strategy across all relevant channels, ensuring consistent, strategic messaging that reinforces your desired story.',
  },
  {
    title: 'Monitoring & Optimization',
    desc: 'Narrative control is ongoing. We continuously monitor how your story is received and make strategic adjustments to maximize impact.',
  },
]

interface Pillar {
  title: string
  longDesc: string
  bullets?: string[]
  type: string
}

const pillars: Pillar[] = [
  {
    title: 'Narrative Architecture & Strategy',
    longDesc: 'We build comprehensive narrative frameworks that position you as the authoritative voice in your field. Every word, image, and interaction is meticulously crafted to reinforce your core message.',
    bullets: [
      'Strategic positioning that differentiates you from competitors',
      'Brand voice development that resonates with your target audience',
      'Long-term narrative planning for sustainable growth'
    ],
    type: 'curve'
  },
  {
    title: 'High-Impact Media Relations',
    longDesc: 'Secure premium media placements that amplify your message to the right audiences at the right time. Our media strategy ensures you get the coverage that drives results.',
    bullets: [
      'Tier-one publication placements across business and lifestyle media',
      'Thought leadership positioning through op-eds and expert commentary',
      'Media training and preparation for maximum impact'
    ],
    type: 'interface'
  },
  {
    title: 'Digital Brand Ecosystems',
    longDesc: 'Create cohesive digital experiences that tell your story across all platforms. From social media to your website, we ensure every touchpoint reinforces your narrative.',
    bullets: [
      'Multi-platform content strategy and execution',
      'Professional visual assets and brand materials',
      'Reputation monitoring and proactive digital presence management'
    ],
    type: 'interface'
  },
  {
    title: 'Reputation Protection & Crisis Response',
    longDesc: 'When challenges arise, your narrative becomes your shield. We prepare crisis communication strategies that protect your reputation while maintaining your core message.',
    bullets: [
      'Pre-crisis narrative preparation and vulnerability assessment',
      'Rapid response planning for any scenario',
      'Long-term reputation recovery and rebuilding strategies'
    ],
    type: 'interface'
  }
]

const activePillar = ref(0)
const activeStep = ref(0)

function scrollTo(index: number): void {
  activePillar.value = index
  const element = document.querySelector(`[data-index="${index}"]`)
  if (element) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: element, offsetY: 100 },
      ease: 'power2.inOut'
    })
  }
}

const gridBg = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
  backgroundSize: '60px 60px',
}

function scrollToServices(): void {
  gsap.to(window, {
    duration: 1,
    scrollTo: '#services',
    ease: 'power2.inOut'
  })
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
  
  pillars.forEach((_, index) => {
    ScrollTrigger.create({
      trigger: `[data-index="${index}"]`,
      start: 'top 50%',
      end: 'bottom 50%',
      onEnter: () => {
        activePillar.value = index
      },
      onEnterBack: () => {
        activePillar.value = index
      },
      markers: false
    })
  })
  
  processSteps.forEach((_, index) => {
    ScrollTrigger.create({
      trigger: `[data-step="${index}"]`,
      start: 'top 60%',
      end: 'bottom 40%',
      onEnter: () => {
        activeStep.value = index
        const progressBar = document.getElementById('process-progress')
        if (progressBar) {
          gsap.to(progressBar, {
            scaleY: (index + 1) / processSteps.length,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      },
      onEnterBack: () => {
        activeStep.value = index
        const progressBar = document.getElementById('process-progress')
        if (progressBar) {
          gsap.to(progressBar, {
            scaleY: (index + 1) / processSteps.length,
            duration: 0.3,
            ease: 'power2.out'
          })
        }
      },
      markers: false
    })
  })
  
  gsap.utils.toArray<Element>('.pillar-block').forEach((block: Element, index: number) => {
    gsap.from(block, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: block,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill())
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

* { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: #0A0A0A;
}

.font-display { font-family: 'Playfair Display', serif; }
.font-body    { font-family: 'DM Sans', sans-serif; }

.text-stroke {
  -webkit-text-stroke: 1px #0d0d0d;
  color: transparent;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fadeUp {
  animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.perspective-1000 {
  perspective: 1000px;
}

.pillar-card {
  transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, opacity;
}

.pillar-card.opacity-0 {
  transform: translateY(40px) rotateX(-5deg) scale(0.95);
}

</style>
