<template>
  <div class="page" ref="pageRef">
    <Navigation />
    <div class="content-wrapper">      
      <div class="content-column">

    <header class="relative min-h-[90vh] flex items-center pt-20 pb-20 px-6">
      <div class="max-w-7xl mx-auto w-full">
        <div class="reveal-up">
           <span class="inline-block py-1 px-4 border border-[#C9A96E]/30 rounded-full text-[10px] uppercase tracking-[0.3em] mb-8 text-[#C9A96E] font-bold">
             Football Intelligence
           </span>
           <h1 class="font-playfair text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] max-w-4xl mb-12 tracking-tighter">
            Beyond the <br/>
            <span class="text-[#C9A96E] italic hover:tracking-normal transition-all duration-700 cursor-default">Strategic football intelligence</span>
          </h1>
        </div>
        
        <div class="flex flex-wrap items-center gap-8 border-t border-black/10 pt-10 reveal-up delay-300">
          <p class="text-[11px] text-muted max-w-2xl uppercase tracking-[0.25em] leading-relaxed opacity-70">
            Welcome to The Narrative Group, your 'special ops' team for advanced NFL roster strategy. We transform guesswork into quantifiable advantage, providing front offices, owners, and coaching staffs with cutting-edge intelligence needed to dominate the field and the balance sheet. Discover how our quantitative approach redefines success.
          </p>
          <div class="h-[1px] flex-grow bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
      </div>
    </header>

    <div class="orn">
      <span></span><span class="dia">◆</span><span></span>
    </div>

          <section class="py-32 px-6 max-w-7xl mx-auto border-t border-black/5">
      <div class="grid lg:grid-cols-12 gap-16">
        
        <div class="lg:col-span-4 lg:sticky lg:top-40 h-fit reveal-up">
          <h3 class="text-xl mb-10 italic text-[#C9A96E] font-playfair">Four Distinct Products</h3>
          <ul class="space-y-6">
            <li v-for="(item, i) in navItems" :key="item.id" 
                @click="scrollToSection(item.id)"
                class="flex items-start gap-4 cursor-pointer group transition-all duration-500">
              <div class="w-2 h-2 mt-1.5 transition-all duration-500"
                   :class="activeSection === item.id ? 'bg-[#C9A96E] scale-125 rotate-45' : 'bg-black/10 group-hover:bg-[#C9A96E]/40'"></div>
              <span :class="activeSection === item.id ? 'text-[#C9A96E] translate-x-2' : 'text-[#2A2A2A]'" 
                    class="text-base font-light leading-relaxed transition-all duration-500">
                {{ item.title }}
              </span>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-8 space-y-48 pb-40">
          <div id="intelligence-solutions" class="pillar-block reveal-up">
            
            <div class="flex items-center gap-4 mb-10">
              <div class="w-12 h-px bg-[#C9A96E]"></div>
              <h2 class="text-3xl md:text-4xl text-[#1A1A1A] leading-tight font-playfair">
                Our intelligence solutions
              </h2>
            </div>

            <p class="text-[#2A2A2A] text-xl leading-relaxed mb-8 font-light max-w-2xl">
              The Football Intelligence Division provides four distinct strategic products designed to eliminate guesswork from the front office.
            </p>

            <div class="space-y-4">
              <div v-for="(p, i) in solutions" :key="p.id" class="border border-black/5 bg-white rounded-lg overflow-hidden">
                <div 
                  @click="toggleAccordion('solutions', i)"
                  class="p-6 cursor-pointer group transition-all duration-300">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <span class="text-2xl font-light text-[#C9A96E]/60">{{ String(i + 1).padStart(2, '0') }}</span>
                      <div>
                        <h3 class="text-lg font-playfair mb-1">{{ p.name }}</h3>
                        <p class="text-sm text-[#2A2A2A]/60">{{ p.abbr }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="flex gap-2">
                        <span v-for="t in p.tags" :key="t" class="text-xs px-2 py-1 bg-[#C9A96E]/10 text-[#C9A96E] rounded-full">
                          {{ t }}
                        </span>
                      </div>
                      <span class="text-xl transition-transform duration-300" :class="expandedAccordions['solutions']?.includes(i) ? 'rotate-45' : ''">+</span>
                    </div>
                  </div>
                </div>
                
                <div v-show="expandedAccordions['solutions']?.includes(i)" class="px-6 pb-6 border-t border-black/5">
                  <p class="text-[#2A2A2A] leading-relaxed mb-6">{{ p.intro }}</p>
                  <div class="ps-row">
                    <div class="ps-col ps-a">
                      <span class="ps-lbl">{{ p.labelA }}</span>
                      <p class="ps-txt" :data-text="p.textA">{{ p.textA }}</p>
                    </div>
                    <div class="ps-col ps-b">
                      <span class="ps-lbl">{{ p.labelB }}</span>
                      <p class="ps-txt" :data-text="p.textB">{{ p.textB }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="draft-capital-waste" class="pillar-block reveal-up">
            
            <div class="flex items-center gap-4 mb-10">
              <div class="w-12 h-px bg-[#C9A96E]"></div>
              <h2 class="text-3xl md:text-4xl text-[#1A1A1A] leading-tight font-playfair">
                Mitigating draft capital waste
              </h2>
            </div>

            <p class="text-muted text-xl leading-relaxed mb-8 font-light max-w-2xl">
              Four frameworks to eliminate wasted draft capital from your front office strategy.
            </p>

            <div class="space-y-4">
              <div v-for="(p, i) in mitigation" :key="p.id" class="border border-black/5 bg-[#F9F7F2] rounded-lg overflow-hidden">
                <div 
                  @click="toggleAccordion('mitigation', i)"
                  class="p-6 cursor-pointer group transition-all duration-300">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <span class="text-2xl font-light text-[#C9A96E]/60">{{ String(i + 1).padStart(2, '0') }}</span>
                      <div>
                        <h3 class="text-lg font-playfair mb-1">{{ p.name }}</h3>
                        <p class="text-sm text-[#2A2A2A]/60">{{ p.abbr }}</p>
                      </div>
                    </div>
                    <span class="text-xl transition-transform duration-300" :class="expandedAccordions['mitigation']?.includes(i) ? 'rotate-45' : ''">+</span>
                  </div>
                </div>
                
                <div v-show="expandedAccordions['mitigation']?.includes(i)" class="px-6 pb-6 border-t border-black/5">
                  <p class="text-[#2A2A2A] leading-relaxed mb-6">{{ p.intro }}</p>
                  
                  <template v-if="p.table">
                    <table class="audit-table">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Description</th>
                          <th>FID Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Pillar Assets</td>
                          <td>High-scarcity, high-synergy players.</td>
                          <td class="act-buy">Strong Buy: Commit capital here.</td>
                        </tr>
                        <tr>
                          <td>Market Bubbles</td>
                          <td>High-hype, low-synergy specialists.</td>
                          <td class="act-sell">Liquidate: Trade down/out.</td>
                        </tr>
                        <tr>
                          <td>Efficiency Fillers</td>
                          <td>Low-cost, high-IQ role players.</td>
                          <td class="act-target">Target: Acquire via mid-rounds.</td>
                        </tr>
                        <tr>
                          <td>Red Flags</td>
                          <td>High-cost, infrastructure-dependent talent.</td>
                          <td class="act-avoid">Avoid: Capital better spent elsewhere.</td>
                        </tr>
                      </tbody>
                    </table>
                  </template>
                  <template v-else>
                    <div class="ps-row">
                      <div class="ps-col ps-a">
                        <span class="ps-lbl">{{ p.labelA }}</span>
                        <p class="ps-txt" :data-text="p.textA">{{ p.textA }}</p>
                      </div>
                      <div class="ps-col ps-b">
                        <span class="ps-lbl">{{ p.labelB }}</span>
                        <p class="ps-txt" :data-text="p.textB">{{ p.textB }}</p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>

          <div id="contract-roi" class="pillar-block reveal-up">
            
            <div class="flex items-center gap-4 mb-10">
              <div class="w-12 h-px bg-[#C9A96E]"></div>
              <h2 class="text-3xl md:text-4xl text-[#1A1A1A] leading-tight font-playfair">
                Maximizing contract ROI
              </h2>
            </div>

            <p class="text-muted text-xl leading-relaxed mb-8 font-light max-w-2xl">
              Four frameworks protecting every dollar committed in free agency.
            </p>

            <div class="space-y-4">
              <div v-for="(p, i) in roi" :key="p.id" class="border border-black/5 bg-white rounded-lg overflow-hidden">
                <div 
                  @click="toggleAccordion('roi', i)"
                  class="p-6 cursor-pointer group transition-all duration-300">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <span class="text-2xl font-light text-[#C9A96E]/60">{{ String(i + 1).padStart(2, '0') }}</span>
                      <div>
                        <h3 class="text-lg font-playfair mb-1">{{ p.name }}</h3>
                        <p class="text-sm text-[#2A2A2A]/60">{{ p.abbr }}</p>
                      </div>
                    </div>
                    <span class="text-xl transition-transform duration-300" :class="expandedAccordions['roi']?.includes(i) ? 'rotate-45' : ''">+</span>
                  </div>
                </div>
                
                <div v-show="expandedAccordions['roi']?.includes(i)" class="px-6 pb-6 border-t border-black/5">
                  <p class="text-[#2A2A2A] leading-relaxed mb-6">{{ p.intro }}</p>
                  <div class="ps-row">
                    <div class="ps-col ps-a">
                      <span class="ps-lbl">{{ p.labelA }}</span>
                      <p class="ps-txt" :data-text="p.textA">{{ p.textA }}</p>
                    </div>
                    <div class="ps-col ps-b">
                      <span class="ps-lbl">{{ p.labelB }}</span>
                      <p class="ps-txt" :data-text="p.textB">{{ p.textB }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="system-compatibility" class="pillar-block reveal-up">
            
            <div class="flex items-center gap-4 mb-10">
              <div class="w-12 h-px bg-[#C9A96E]"></div>
              <h2 class="text-3xl md:text-4xl text-[#1A1A1A] leading-tight font-playfair">
                Optimizing system compatibility
              </h2>
            </div>

            <p class="text-muted text-xl leading-relaxed mb-8 font-light max-w-2xl">
              Three frameworks ensuring roster and coaching staff operate in perfect alignment.
            </p>

            <div class="space-y-4">
              <div v-for="(p, i) in optimization" :key="p.id" class="border border-black/5 bg-[#F9F7F2] rounded-lg overflow-hidden">
                <div 
                  @click="toggleAccordion('optimization', i)"
                  class="p-6 cursor-pointer group transition-all duration-300">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-4">
                      <span class="text-2xl font-light text-[#C9A96E]/60">{{ String(i + 1).padStart(2, '0') }}</span>
                      <div>
                        <h3 class="text-lg font-playfair mb-1">{{ p.name }}</h3>
                        <p class="text-sm text-[#2A2A2A]/60">{{ p.abbr }}</p>
                      </div>
                    </div>
                    <span class="text-xl transition-transform duration-300" :class="expandedAccordions['optimization']?.includes(i) ? 'rotate-45' : ''">+</span>
                  </div>
                </div>
                
                <div v-show="expandedAccordions['optimization']?.includes(i)" class="px-6 pb-6 border-t border-black/5">
                  <p class="text-[#2A2A2A] leading-relaxed mb-6">{{ p.intro }}</p>
                  <div class="ps-row">
                    <div class="ps-col ps-a">
                      <span class="ps-lbl">{{ p.labelA }}</span>
                      <p class="ps-txt" :data-text="p.textA">{{ p.textA }}</p>
                    </div>
                    <div class="ps-col ps-b">
                      <span class="ps-lbl">{{ p.labelB }}</span>
                      <p class="ps-txt" :data-text="p.textB">{{ p.textB }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-16 text-center">
              <button @click="$emit('navigate', 'home')" class="btn-primary">
                Request a sample intelligence brief
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

      </div>
    </div>

    <div class="orn">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="py-24 px-10 bg-warm-white max-md:px-6 max-md:py-16 overflow-hidden" id="mission-section">
      <div class="reveal-stagger">
        <div class="max-w-4xl mb-16 relative">
          <div class="absolute -top-10 -left-10 w-40 h-40 border-l border-t border-gold opacity-30"></div>
          
          <div class="text-[0.7rem] tracking-wider uppercase text-gold mb-4 flex items-center gap-3 relative z-10">
            <span class="block w-6 h-px bg-gold"></span>Our Mission
          </div>
          <h2 class="font-playfair text-[clamp(2rem,3.8vw,3.6rem)] font-extrabold leading-[1.05] tracking-tight text-ink relative z-10">
            Redefining success through<br><em class="italic text-gold">data</em>.
          </h2>
          <p class="mt-6 text-muted-dark leading-relaxed font-normal max-w-3xl relative z-10">
            In the high-stakes world of the NFL, every decision counts. The Narrative Group provides analytical depth and strategic foresight to turn potential into performance, ensuring your investments yield maximum returns. Let us empower your team with unmatched football intelligence.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6 max-md:grid-cols-1">

          <div class="reveal-card group relative bg-cream border border-gold/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-gold hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 rounded-xl">
            <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-gold/5 leading-none transition-all duration-500 group-hover:text-gold/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
              01
            </div>
            
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-ink group-hover:border-ink">
                <svg class="w-7 h-7 stroke-gold group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              
              <h3 class="font-playfair text-[1.7rem] mb-4 text-ink font-semibold">Unlocking strategic advantage</h3>
              <p class="text-[0.95rem] text-muted-dark leading-relaxed font-normal mb-8 transition-colors duration-300">
                For NFL General Managers and Front Office Executives, our quantitative strategies move beyond traditional scouting. We leverage Scarcity Modeling to identify undervalued assets and optimal trading opportunities, transforming your draft strategy from a gamble to a calculated portfolio investment. Reduce the "bust factor" and build a sustainable winning roster.
              </p>
            </div>

            <div class="absolute inset-0 bg-gold/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </div>

          <div class="reveal-card group relative bg-cream border border-gold/15 p-10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-gold hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 rounded-xl" style="transition-delay: .1s">
            <div class="absolute -top-2 -right-2 font-playfair text-[9rem] font-black text-gold/5 leading-none transition-all duration-500 group-hover:text-gold/10 group-hover:-translate-y-4 group-hover:-translate-x-4 pointer-events-none">
              02
            </div>
            <div class="relative z-10">
              <div class="w-16 h-16 rounded-full border border-gold flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:bg-ink group-hover:border-ink">
                <svg class="w-7 h-7 stroke-gold group-hover:stroke-white fill-none" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 class="font-playfair text-[1.7rem] mb-4 text-ink font-semibold">Optimizing your investment & team synergy</h3>
              <p class="text-[0.95rem] text-muted-dark leading-relaxed font-normal mb-8 transition-colors duration-300">
                For NFL Owners and Head Coaches, our insights ensure every dollar and every player contributes maximally. Our Behavioral Performance Baseline (BPB) protects against low ROI on guaranteed contracts, while Structural Synergy Analysis (SSA) guarantees system compatibility, ensuring your talented roster performs as a cohesive, dominant unit. This is about building a legacy, not just a team.
              </p>
            </div>
            
            <div class="absolute inset-0 bg-gold/[0.03] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </div>

        </div>
      </div>
    </section>
    <Cta/>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Navigation from '../components/Navigation.vue'
import FooterSection from '../components/FooterSection.vue'
import Cta from '../components/Cta.vue'

const pageRef = ref<HTMLElement | null>(null)
const activeSection = ref('intelligence-solutions')
const expandedAccordions = ref<Record<string, number[]>>({
  solutions: [],
  mitigation: [],
  roi: [],
  optimization: []
})

defineEmits(['navigate'])

// Toggle accordion function
const toggleAccordion = (section: string, index: number) => {
  const current = expandedAccordions.value[section] || []
  if (current.includes(index)) {
    expandedAccordions.value[section] = current.filter(i => i !== index)
  } else {
    expandedAccordions.value[section] = [...current, index]
  }
}

// Navigation items configuration
const navItems = [
  { id: 'intelligence-solutions', title: 'Our intelligence solutions' },
  { id: 'draft-capital-waste', title: 'Mitigating draft capital waste' },
  { id: 'contract-roi', title: 'Maximizing contract ROI' },
  { id: 'system-compatibility', title: 'Optimizing system compatibility' }
]

// Scroll to section
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

// IntersectionObserver for scrollspy
let observer: IntersectionObserver | null = null
let heroObserver: IntersectionObserver | null = null

onMounted(() => {
  const pillarObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id
        if (sectionId) {
          activeSection.value = sectionId
        }
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

  // Add reveal stagger animation
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
})

onUnmounted(() => {
  // Clean up observers if needed
})

const solutions = [
  {
    id: 'nim',
    name: 'The NIM Roster Audit (Narrative Intelligence Matrix)',
    abbr: 'Narrative Intelligence Matrix',
    tags: ['Cap Analysis', 'Asset Volatility', 'Win-Share ROI'],
    intro: 'A comprehensive diagnostic of your current 53-man roster and practice squad through the lens of asset volatility.',
    labelA: 'The Solution',
    textA: 'We identify "Value Traps"—players whose salary cap hit far exceeds their projected "Structural Synergy" score.',
    labelB: 'The Outcome',
    textB: 'A prioritized liquidation and acquisition roadmap to re-balance the roster for maximum Win-Share ROI.',
  },
  {
    id: 'draft',
    name: 'Draft Capital Engineering',
    abbr: 'Scarcity Modeling & Trade-Down Strategy',
    tags: ['Draft Modeling', 'Scarcity Analysis'],
    intro: 'Moving beyond traditional "Trade Value Charts," we apply Scarcity Modeling to your draft board.',
    labelA: 'The Solution',
    textA: 'We quantify "Market Desperation" of other teams. If the league is overvaluing a specific position (e.g., Quarterback or Edge) in a weak year, we engineer trade-down scenarios to accumulate "Blue Chip" pillars.',
    labelB: 'The Outcome',
    textB: 'Maximizing the hit rate per dollar spent on rookie contracts.',
  },
  {
    id: 'env',
    name: 'Environmental Delta Analysis (The "Bounce-Back" Report)',
    abbr: 'Physical Decay vs. Infrastructure-Induced Decline',
    tags: ['Veteran Value', 'Redemption Candidates'],
    intro: 'We identify undervalued veteran talent by separating Physical Decay from Infrastructure-Induced Decline.',
    labelA: 'The Solution',
    textA: 'We analyze how a player\'s metrics change when their surrounding "System Synergy" fails. This identifies "Redemption" candidates who are likely to see a 30–50% performance spike in your specific scheme.',
    labelB: 'The Outcome',
    textB: 'High-impact veteran signings at "Mid-Tier" market prices.',
  },
  {
    id: 'scheme',
    name: 'Scheme-Sync Integration',
    abbr: 'Coaching Transition Intelligence',
    tags: ['Coaching Transitions', 'Net Skillset'],
    intro: 'Intelligence specifically for coaching transitions. We evaluate whether your current roster\'s "Net Skillset" is mathematically compatible with a new coordinator\'s playbook.',
    labelA: 'The Solution',
    textA: 'We identify "Friction Points" where your most expensive assets are being asked to perform tasks outside their high-efficiency baseline.',
    labelB: 'The Outcome',
    textB: 'Drastically reducing the "learning curve" time during coaching changes and preventing expensive scheme-mismatch busts.',
  },
]

const mitigation = [
  {
    id: 'm1',
    name: 'Identifying the "Hype Inflation" Gap',
    abbr: 'Scarcity Modeling & Inflation Delta',
    intro: 'Draft capital is wasted when a team uses a high-value pick on a player whose market perceived value is driven by scarcity rather than actual projected utility.',
    labelA: 'The Problem',
    textA: 'Teams "reach" for a Tier-2 Quarterback because they are desperate, essentially paying a Tier-1 price for a mid-tier asset.',
    labelB: 'The FID Solution',
    textB: 'We use Scarcity Modeling to quantify the "Inflation Delta." If our metrics show that the talent drop-off between Pick 10 and Pick 40 is negligible for a specific position, we advise a "Trade-Down Engineering" approach to turn one overvalued asset into multiple high-probability pillars.',
  },
  {
    id: 'm2',
    name: 'Eliminating "System Mismatch" (The SSA Filter)',
    abbr: 'Structural Synergy Analysis',
    intro: 'A pick is "wasted" if a player\'s skills are negated by the team\'s scheme.',
    labelA: 'The Problem',
    textA: 'Selecting a "Man-Coverage" specialist for a "Zone-Heavy" defensive coordinator.',
    labelB: 'The FID Solution',
    textB: 'Through Structural Synergy Analysis (SSA), we ensure the draft pick acts as a Force Multiplier. We calculate how much the new asset improves the performance of the current roster. If the "Synergy Gain" is low, the pick is considered a waste of capital, regardless of how "talented" the player is.',
  },
  {
    id: 'm3',
    name: 'Calculating the "Replacement Value" Baseline',
    abbr: 'Behavioral Performance Baseline (BPB)',
    intro: 'Teams often waste capital by drafting players to fill "perceived" holes that could have been filled more cheaply through veteran acquisition.',
    labelA: 'The Problem',
    textA: 'Using a 2nd-round pick on a player who provides the same metrics as a "Redemption Veteran" available for league minimum.',
    labelB: 'The FID Solution',
    textB: 'Our Behavioral Performance Baseline (BPB) identifies "Infrastructure-Dependent" veterans. If we can find a veteran with a 40% bounce-back potential, we can save that 2nd-round draft pick to use on a high-scarcity position, effectively "doubling" the value of the team\'s capital.',
  },
  {
    id: 'm4',
    name: 'The "Draft Capital Waste" Audit — Quadrant Analysis',
    abbr: 'Four-quadrant pick categorization framework',
    intro: 'How we categorize every pick for Front Offices:',
    table: true,
  },
]

const roi = [
  {
    id: 'r1',
    name: 'Identifying "Infrastructure-Dependent" Value',
    abbr: 'Behavioral Performance Baseline (BPB)',
    intro: 'The biggest drain on ROI is the "Superstar Premium"—paying top-of-market rates for a player whose success was actually a product of the team around him.',
    labelA: 'The Process',
    textA: 'We use Behavioral Performance Baseline (BPB) to strip away the "noise." We calculate how much of a player\'s production was "Self-Generated" vs. "System-Generated."',
    labelB: 'The Result',
    textB: 'We identify players who will maintain high production even if the supporting cast changes, ensuring the contract remains an asset rather than a liability.',
  },
  {
    id: 'r2',
    name: 'The "Bounce-Back" Arbitrage',
    abbr: 'Environmental Delta Analysis',
    intro: 'ROI is highest when you acquire an undervalued asset that is primed for a performance surge.',
    labelA: 'The Process',
    textA: 'Our Environmental Delta Analysis identifies veteran athletes whose metrics plummeted due to poor coaching or scheme mismatch, not physical decay.',
    labelB: 'The Result',
    textB: 'We help teams sign "Redemption Veterans" to mid-tier contracts that yield Pro-Bowl level production. This is the ultimate "ROI hack" in a hard-cap league.',
  },
  {
    id: 'r3',
    name: 'Avoiding the "Sunk Cost" Trap',
    abbr: 'Predictive Decay Modeling',
    intro: 'Contract ROI isn\'t just about who you sign; it\'s about when you move on.',
    labelA: 'The Process',
    textA: 'We provide Predictive Decay Modeling. We analyze behavioral and physical data points to project the exact window where a player\'s "Cost-per-Snap" begins to exceed their "Win-Share" contribution.',
    labelB: 'The Result',
    textB: 'Teams can trade assets at their peak value (The "Sell High" window) before the contract becomes "untradeable" dead weight on the cap.',
  },
  {
    id: 'r4',
    name: 'Structural Synergy as a Cost-Saver',
    abbr: 'Collective Efficiency Modeling',
    intro: 'When the "system" is the star, individual contracts become more manageable.',
    labelA: 'The Process',
    textA: 'By using Structural Synergy Analysis (SSA), we show teams how to build units (like an Offensive Line or Secondary) where the collective efficiency is greater than the sum of the individual salaries.',
    labelB: 'The Result',
    textB: 'You don\'t need five $20M players if you have five $8M players who are mathematically optimized to work together. This frees up "Cap Alpha" to spend on high-scarcity pillars.',
  },
]

const optimization = [
  {
    id: 'o1',
    name: 'The Force-Multiplier Algorithm',
    abbr: 'Structural Synergy Analysis (SSA)',
    intro: 'Most scouting reports are individualistic (e.g., "He is fast," "He is strong"). Our Structural Synergy Analysis (SSA) is relational.',
    labelA: 'The Problem',
    textA: 'A team signs a high-priced pass rusher but lacks interior presence to prevent the QB from stepping up in the pocket, neutralizing the new asset\'s speed.',
    labelB: 'The FID Solution',
    textB: 'We calculate the Synergy Coefficient. We model how a new acquisition affects the metrics of existing ten players. We only recommend "System-Optimized" moves where the new player acts as a force multiplier for the current roster.',
  },
  {
    id: 'o2',
    name: 'Behavioral Blueprinting',
    abbr: 'Cognitive Scheme Mapping',
    intro: 'System compatibility isn\'t just about physical traits; it\'s about cognitive load.',
    labelA: 'The Problem',
    textA: 'A veteran is moved from a "Read-and-React" defense to an "Aggressive-Stunt" defense. The mental friction of unlearning a decade of instincts causes a performance dip that looks like physical aging.',
    labelB: 'The FID Solution',
    textB: 'We perform Cognitive Scheme Mapping. We match a player\'s career-long behavioral baselines with the specific mental demands of the new coaching staff\'s playbook.',
  },
  {
    id: 'o3',
    name: 'Metric-Based Coaching Alignment',
    abbr: 'Infrastructure Audit & Scheme-Sync',
    intro: 'We help front offices ensure the "Chef" (the Coach) is compatible with the "Ingredients" (the Roster).',
    labelA: 'The Problem',
    textA: 'A GM builds a roster of "Clean-Pocket" technical linemen, but the Head Coach runs a "Power-Gap" scheme that requires raw bulk.',
    labelB: 'The FID Solution',
    textB: 'We provide an Infrastructure Audit. We quantify the "Net Skillset" of the roster and compare it to the coach\'s historical play-calling metrics. If there is a "Scheme-Sync" mismatch, we provide a corrective roadmap before the season begins.',
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Montserrat:wght@300;400;500;600&family=Cinzel:wght@400;600&display=swap');

.page {
  background: #F9F7F2;
  color: #1A1A1A;
  font-family: 'Montserrat', sans-serif;
}

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

.text-muted {
  color: #2A2A2A;
}

/* HERO */
header {
  background: #F9F7F2;
}

.delay-300 {
  transition-delay: 0.3s;
}

/* BUTTON */
.btn-primary {
  font-family: 'Cinzel', serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.9rem 2rem;
  background: linear-gradient(135deg, #E8C97A, #C9A96E, #9A7A2E);
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

/* ORNAMENTAL DIVIDER */
.orn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 5rem;
  background: #FAFAF8;
}
.orn.cream {
  background: #F9F7F2;
}
.orn span:first-child,
.orn span:last-child {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(201, 168, 76, 0.28) 50%, #9A7A2E);
}
.orn span:last-child {
  transform: scaleX(-1);
}
.dia {
  color: #C9A96E;
  font-size: 0.44rem;
  flex-shrink: 0;
}

/* SECTIONS */
.section {
  padding: 4rem 5rem;
}
.section.white {
  background: #F9F7F2;
}
.section.cream {
  background: #ffffff;
}
.inner {
  max-width: 1100px;
  margin: 0 auto;
}
.h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  font-weight: 300;
  color: #1A1A1A;
  margin-bottom: 0.7rem;
}
.sec-sub {
  font-size: 1.2rem;
  font-weight: 300;
  color: rgba(26, 26, 26, 0.6);
  line-height: 1.8;
  max-width: 680px;
  margin-bottom: 2rem;
}
.cta-center {
  text-align: center;
  margin-top: 2rem;
}

/* CONCLUSION GRID */
.conclusion-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 3rem 0;
}
.conclusion-card {
  padding: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.09);
  border-radius: 8px;
}
.cc-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #C9A96E;
  margin-bottom: 1rem;
}
.cc-desc {
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(26, 26, 26, 0.7);
}

/* NEW CARD DESIGN STYLES */
.reveal-stagger .reveal-card {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition: opacity 0.8s ease-out, transform 0.8s cubic-bezier(0.21, 0.6, 0.35, 1);
}

.reveal-stagger.visible .reveal-card {
  opacity: 1 !important;
  transform: translateY(0) scale(1) !important;
}

.cool-cta-link {
  position: relative;
}

.cool-cta-link span::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #1A1A1A;
  transition: width 0.3s ease-out;
}
.cool-cta-link:hover span::after {
  width: 100%;
}

/* PS COLUMNS */
.ps-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
.ps-a {
  background: #F4F2ED;
  border-left: 2px solid rgba(0, 0, 0, 0.07);
}
.ps-b {
  background: rgba(201, 168, 76, 0.07);
  border-left: 2px solid #9A7A2E;
}
.ps-lbl {
  font-family: 'Playfair Display', serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
  display: block;
  margin-bottom: 0.45rem;
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.ps-a .ps-lbl {
  color: rgba(26, 26, 26, 0.6);
}
.ps-b .ps-lbl {
  color: #C9A96E;
}
.ps-txt {
  font-size: 1.25rem;
  font-weight: 400;
  color: transparent;
  line-height: 1.7;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  right: 1.25rem;
  white-space: normal;
  overflow: hidden;
  max-height: 0;
}

.ps-col:hover .ps-txt {
  opacity: 1;
  transform: translateY(0);
  position: static;
  max-height: 200px;
  animation: fadeInText 0.8s ease-out;
}

.ps-col:hover .ps-txt::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  color: rgba(26, 26, 26, 0.6);
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.7;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 1s steps(8, end) forwards, fadeInTyping 0.8s ease-out 0.3s forwards;
  white-space: normal;
}

@keyframes fadeInText {
  0% {
    opacity: 0;
    transform: translateY(-10px);
    max-height: 0;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    max-height: 200px;
  }
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes fadeInTyping {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.ps-col {
  padding: 1rem 1.25rem;
  transition: transform 0.2s;
  position: relative;
}
.ps-col:hover {
  transform: translateX(2px);
}
.ps-col:hover .ps-lbl {
  opacity: 0;
  transform: translateY(-5px);
}

/* AUDIT TABLE */
.audit-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin-top: 0.75rem;
}
.audit-table thead {
  background: #1A1A1A;
}
.audit-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-family: 'Cinzel', serif;
  font-size: 0.5rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #C9A96E;
  font-weight: 400;
}
.audit-table td {
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  color: rgba(26, 26, 26, 0.6);
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  transition: background 0.15s;
}
.audit-table tbody tr:hover td {
  background: #FAFAF8;
}
.act-buy { color: #1a6b3a; font-weight: 500; }
.act-sell { color: #991b1b; font-weight: 500; }
.act-target { color: #1e40af; font-weight: 500; }
.act-avoid { color: #991b1b; font-weight: 500; }
</style>
