<template>
  <div class="page">
    <Navigation />

    <header class="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6">
      <div class="max-w-7xl mx-auto w-full">
        <div class="reveal-up">
           <span class="inline-block py-1 px-4 border border-[#C9A96E]/30 rounded-full text-[10px] uppercase tracking-[0.3em] mb-8 text-[#C9A96E] font-bold">
             Fractional HR Strategic Governance
           </span>
           <h1 class="font-playfair text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] max-w-4xl mb-12 tracking-tighter">
            Strategic governance:<br/>
            <span class="text-[#C9A96E] italic hover:tracking-normal transition-all duration-700 cursor-default">your business, elevated</span>
          </h1>
        </div>
        
        <div class="flex flex-wrap items-center gap-8 border-t border-black/10 pt-10 reveal-up delay-300">
          <p class="text-[11px] text-[#666666] max-w-2xl uppercase tracking-[0.25em] leading-relaxed opacity-70">
            Many small-to-mid-sized firms outgrow their operational foundation. You need C-Suite HR and strategic oversight without the full-time cost. The Narrative Group provides fractional expertise to bridge the gap between administrative tasks and executive leadership, ensuring your most valuable assets—your people and your entity structure—are protected and optimized.
          </p>
          <div class="h-[1px] flex-grow bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
        
      </div>
    </header>

    <div class="orn">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="px-6 md:px-12 py-24 bg-[#F9F7F2]">
      <div class="max-w-7xl mx-auto">
        <div class="mb-24 text-center md:text-left">
          <p class="font-serif text-sm tracking-[0.3em] uppercase text-[#C9A84C] mb-6 font-semibold">
            Client Profiles
          </p>
          <h2 class="font-serif text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none text-[#1C1C1C]">
            Who We Serve
          </h2>
        </div>

        <div class="flex flex-col lg:flex-row gap-8 lg:gap-16">
          <div 
            v-for="(profile, i) in profiles" 
            :key="i"
            class="group flex-1 flex flex-col space-y-8"
          >
            <div class="relative aspect-square md:aspect-[16/10] overflow-hidden bg-[#1C1C1C]">
              <img 
                :src="profile.image" 
                :alt="profile.title" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
              <div class="absolute top-6 left-6">
                <span class="text-6xl font-serif italic text-[#C9A84C]/80 opacity-50">{{ String(i + 1).padStart(2, '0') }}</span>
              </div>
            </div>

            <div class="max-w-xl">
              <h3 class="font-serif text-3xl md:text-4xl uppercase tracking-tight text-[#1C1C1C] mb-4">
                {{ profile.title }}
              </h3>
              <div class="h-1 w-12 bg-[#C9A84C] mb-6 transition-all duration-500 group-hover:w-24"></div>
              <p class="text-[#1C1C1C]/80 text-lg md:text-xl leading-relaxed font-light">
                {{ profile.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="orn cream">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="py-24 px-10 bg-[#F9F7F2] max-md:px-6 max-md:py-16 overflow-hidden">
      <div class="reveal-stagger">
        <div class="max-w-4xl mb-16 relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-[#C9A84C] opacity-30"></div>
          
          <div class="text-[0.7rem] tracking-wider uppercase text-[#C9A84C] mb-4 flex items-center gap-3 relative z-10">
            <span class="block w-6 h-px bg-[#C9A84C]"></span>Compliance & Governance
          </div>
          <h2 class="font-playfair text-[clamp(2rem,3.8vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-[#1C1C1C] relative z-10">
            Compliance isn't a task,<br>it's your company's <em class="italic text-[#C9A84C]">bedrock value</em>.
          </h2>
          <p class="mt-6 text-[#555555] leading-relaxed font-normal max-w-3xl relative z-10">
            Many businesses manage with software; elite businesses govern with a strategist. We take the "governance burden" off of principal's desk so they can return to being a founder.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6 max-md:grid-cols-1">

          <div class="reveal-card group relative bg-[#F4F2ED] border border-[#C9A84C]/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#C9A84C] hover:shadow-2xl hover:shadow-[#C9A84C]/10 hover:-translate-y-2 rounded-xl">
            <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-[#C9A84C]/5 leading-none transition-all duration-500 group-hover:text-[#C9A84C]/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
              01
            </div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C]">
                <svg class="w-7 h-7 stroke-[#C9A84C] group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              
              <h3 class="font-playfair text-[1.7rem] mb-4 text-[#1C1C1C] font-semibold">Professional Governance</h3>
              <p class="text-[0.95rem] text-[#555555] leading-relaxed font-normal mb-8 transition-colors duration-300">
                Our strategic oversight ensures your business operates with the same level of professionalism as your craft, protecting your assets and ensuring peace of mind.
              </p>
            </div>

            <div class="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none scale-110 group-hover:scale-100">
              <div class="w-full h-full bg-gradient-to-br from-[#C9A96E]/30 to-[#1A1A1A]/50">
                <img src="/stratigicOversight.webp" alt="Strategic Oversight" class="w-full h-full object-cover">
              </div>
            </div>
            
            <div class="absolute inset-0 bg-[#C9A84C]/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </div>

          <div class="reveal-card group relative bg-[#F4F2ED] border border-[#C9A84C]/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-[#C9A84C] hover:shadow-2xl hover:shadow-[#C9A84C]/10 hover:-translate-y-2 rounded-xl" style="transition-delay: .1s">
            <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-[#C9A84C]/5 leading-none transition-all duration-500 group-hover:text-[#C9A84C]/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
              02
            </div>
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-full border border-[#C9A84C] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#1C1C1C] group-hover:border-[#1C1C1C]">
                <svg class="w-7 h-7 stroke-[#C9A84C] group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 class="font-playfair text-[1.7rem] mb-4 text-[#1C1C1C] font-semibold">Executive-Level Strategy</h3>
              <p class="text-[0.95rem] text-[#555555] leading-relaxed font-normal mb-8 transition-colors duration-300">
                We provide strategic thinking and oversight that software alone cannot deliver, ensuring your business stays ahead of regulatory changes and compliance requirements.
              </p>
            </div>
            <div class="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-10 pointer-events-none scale-110 group-hover:scale-100">
              <div class="w-full h-full bg-gradient-to-br from-[#C9A96E]/30 to-[#1A1A1A]/50">
                <img src="/integratingHr.webp" alt="Integrating HR" class="w-full h-full object-cover">
              </div>
            </div>

            <div class="absolute inset-0 bg-[#C9A84C]/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </div>

        </div>
      </div>
    </section>
    
    <Cta/>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Navigation from '../components/Navigation.vue'
import FooterSection from '../components/FooterSection.vue'
import Cta from '../components/Cta.vue'

const profiles = [
  {
    title: 'The Prestige Boutique',
    desc: 'Firms built on elite, specialized talent (5–15 employees) like naval architecture, high-end interior design, or boutique law. They seek a governance layer as professional as their craft, worrying that a single compliance mistake will impact their trusted staff.',
    image: '/prestigeBoutique.webp'
  },
  {
    title: 'The Multi-Entity Architect',
    desc: 'Serial founders owning a "group" of distinct entities (real estate, financial services, consulting). They need to clean up jumbled HR records across LLCs to stack business credit or prepare for exit.',
    image: '/multiEntity.webp'
  },
  {
    title: 'The Growth-Phase Startup',
    desc: 'Tech or service startups (15–50 employees) in the "danger zone"—too big for DIY HR, too small for a full-time CPO. They face "compliance drift" from rapid scaling and need fractional leadership.',
    image: '/growthPhase.webp'
  }
]

onMounted(() => {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active')
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el))

  // Handle reveal-stagger animations
  const staggerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  setTimeout(() => {
    const container = document.querySelector('.reveal-stagger')
    if (container) {
      staggerObserver.observe(container)
    }
  }, 100)

  // Handle existing reveal animations for other sections
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    observer.observe(el)
  })
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600&family=Cinzel:wght@400;600&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }
.font-serif { font-family: 'Playfair Display', serif; }

.text-gold { color: #C9A96E; }
.text-ink { color: #1A1A1A; }
.text-muted { color: #666666; }
.text-muted-dark { color: #555555; }
.bg-cream { background-color: #F9F7F2; }
.bg-warm-white { background-color: #F9F7F2; }

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
.reveal-card.group:hover .cool-cta-link span::after {
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

.reveal-up {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal-up.active {
  opacity: 1;
  transform: translateY(0);
}

.delay-300 { transition-delay: 0.3s; }
.delay-500 { transition-delay: 0.5s; }

.page {
  --gold: #C9A84C;
  --gold-l: #E8C97A;
  --gold-d: #9A7A2E;
  --gold-bg: rgba(201, 168, 76, 0.07);
  --gold-bd: rgba(201, 168, 76, 0.28);
  --ink: #1C1C1C;
  --ink2: #464646;
  --ink3: #888888;
  --white: #ffffff;
  --off: #FAFAF8;
  --cream: #F4F2ED;
  --bd: rgba(0, 0, 0, 0.09);
  background: var(--white);
  font-family: 'Montserrat', sans-serif;
  color: var(--ink);
  width: 100%;
  overflow-x: hidden;
}

/* SCROLL REVEAL */
.reveal {
  opacity: 0;
  transform: translateY(26px);
  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal.in {
  opacity: 1;
  transform: translateY(0);
}
.reveal-left {
  opacity: 0;
  transform: translateX(-26px);
  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-left.in {
  opacity: 1;
  transform: translateX(0);
}
.reveal-right {
  opacity: 0;
  transform: translateX(26px);
  transition: opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), transform 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}
.reveal-right.in {
  opacity: 1;
  transform: translateX(0);
}
.d1 { transition-delay: 0.12s; }
.d2 { transition-delay: 0.22s; }
.d3 { transition-delay: 0.32s; }

/* HERO */
.hero-sec {
  padding: 3rem 2rem 2rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid var(--bd);
}
.eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 0.72rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold);
  display: block;
  margin-bottom: 1.2rem;
}
.gold-eye {
  color: var(--gold);
}
.h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(3rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 1.2;
  color: var(--ink);
  margin-bottom: 1.35rem;
  transition: text-shadow 0.3s ease, filter 0.3s ease;
}
.h1:hover {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25),
               0 0 8px rgba(201, 168, 76, 0.25);
  filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))
          blur(0.5px);
}
.gold-italic {
  display: block;
  font-style: italic;
  background: linear-gradient(135deg, var(--gold-l), var(--gold), var(--gold-d));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.4;
  font-weight: 700;
  padding-bottom: 0.3em;
  margin-bottom: 0.5em;
  position: relative;
  transition: filter 0.3s ease;
}
.gold-italic:hover {
  filter: drop-shadow(0.5px 0.5px 1px rgba(0, 0, 0, 0.1))
          drop-shadow(0 0 6px rgba(201, 168, 76, 0.15))
          blur(0.3px);
}
.body-text {
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--ink2);
  max-width: 660px;
  margin-bottom: 2.2rem;
}

/* BUTTON */
.btn-primary {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, var(--gold-l), var(--gold), var(--gold-d));
  color: #fff;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  position: relative;
  overflow: hidden;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s;
}
.btn-primary::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0);
  transition: background 0.18s;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 22px rgba(201, 168, 76, 0.35);
}
.btn-primary:active {
  transform: scale(0.97) translateY(0);
  box-shadow: none;
}
.btn-primary:active::after {
  background: rgba(255, 255, 255, 0.15);
}

/* DIVIDER */
.orn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 2rem;
  background: transparent;
}
.orn.cream {
  background: transparent;
}
.orn span:first-child,
.orn span:last-child {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--gold-bd) 50%, var(--gold-d));
}
.orn span:last-child {
  transform: scaleX(-1);
}
.dia {
  color: var(--gold);
  font-size: 0.44rem;
  flex-shrink: 0;
}

/* SECTIONS */
.section {
  padding: 3rem 2rem;
}
.section.white {
  background: var(--white);
}
.section.cream {
  background: var(--cream);
}
.inner {
  max-width: 1100px;
  margin: 0 auto;
}
.h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.7rem;
}
.sec-sub {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.75;
  max-width: 720px;
  margin-bottom: 2rem;
}
.hint {
  color: var(--gold-d);
  font-size: 0.95rem;
}
.cta-center {
  text-align: center;
  margin-top: 2rem;
}

/* PROFILES */
.profiles {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: var(--bd);
}
.profile {
  background: var(--white);
  padding: 1.75rem;
  display: flex;
  align-items: flex-start;
  gap: 1.35rem;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background 0.25s;
}
.profile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--gold-d), var(--gold-l));
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.profile::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, var(--gold-d), var(--gold-l), var(--gold-d));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s 0.05s cubic-bezier(0.4, 0, 0.2, 1);
}
.profile:hover {
  background: var(--off);
}
.profile:hover::before,
.profile:hover::after {
  transform: scale(1);
}
.profile:active {
  transform: scale(0.998);
}
.profile-icon {
  width: 42px;
  height: 42px;
  border: 1px solid var(--gold-bd);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  flex-shrink: 0;
  transition: background 0.25s, transform 0.2s;
}
.profile:hover .profile-icon {
  background: var(--gold-bg);
  transform: scale(1.08);
}
.profile-body {
  flex: 1;
}
.profile-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--ink2);
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  transition: color 0.25s;
}
.profile:hover .profile-title {
  color: var(--ink);
}
.profile-desc {
  font-size: 1.15rem;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.7;
}
.profile-num {
  font-family: 'Cinzel', serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: rgba(201, 168, 76, 0.15);
  position: absolute;
  right: 1.25rem;
  top: 1.1rem;
  transition: color 0.25s, transform 0.25s;
  line-height: 1;
}
.profile:hover .profile-num {
  color: rgba(201, 168, 76, 0.4);
  transform: scale(1.15);
}

/* COMPLIANCE */
.comp-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.comp-card {
  background: var(--white);
  border: 1px solid var(--bd);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: background 0.25s, transform 0.22s, box-shadow 0.25s;
}
.comp-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, var(--gold-d), var(--gold-l), var(--gold-d));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.comp-card:hover {
  background: var(--off);
  transform: translateY(-2px);
  box-shadow: 0 5px 18px rgba(201, 168, 76, 0.1);
  border-color: var(--gold-bd);
}
.comp-card:hover::before {
  transform: scaleX(1);
}
.comp-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--ink);
  margin-bottom: 0.55rem;
}
.comp-desc {
  font-size: 1.15rem;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.7;
  margin-bottom: 1rem;
}
.comp-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.comp-item {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 1.15rem;
  font-weight: 300;
  color: var(--ink2);
  transition: transform 0.2s, color 0.2s;
}
.comp-item:hover {
  transform: translateX(3px);
  color: var(--ink);
}
.cdot {
  color: var(--gold);
  font-size: 0.36rem;
  margin-top: 0.44rem;
  flex-shrink: 0;
}

/* FINAL CARD */
.final-card {
  background: var(--ink);
  padding: 2.5rem;
  margin: 1.25rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
}
.final-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, var(--gold-d), var(--gold-l), var(--gold-d));
}
.final-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 26px rgba(0, 0, 0, 0.2);
}
.final-title {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 0.55rem;
}
.final-sub {
  font-size: 1.15rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
}

/* CTA BAND */
.cta-band {
  background: var(--ink);
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 600;
  color: #fff;
  margin: 0.35rem 0 0.55rem 0;
}
.cta-sub {
  font-size: 1.15rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.65;
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero-sec {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .section {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .orn {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .cta-band {
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    text-align: center;
  }
  .comp-grid {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 961px) {
  .hero-sec {
    padding: 3rem 4rem 2rem 4rem;
  }
  .section {
    padding: 3rem 4rem;
  }
  .orn {
    padding: 1.75rem 4rem;
  }
  .cta-band {
    padding: 3rem 4rem;
  }
}
</style>
