<template>
  <div class="page" ref="pageRef">
    <div class="content-wrapper">
      <nav class="sticky-nav" :class="{ 'nav-visible': showNav }" v-if="showNav || isTransitioning">
        <div class="nav-label">Four Distinct Products</div>
        <div class="nav-items">
          <div 
            v-for="(item, index) in navItems" 
            :key="item.id"
            class="nav-item"
            :class="{ active: activeSection === item.id }"
            :style="{ transitionDelay: showNav ? `${index * 0.1}s` : '0s' }"
            @click="scrollToSection(item.id)"
          >
            <span class="nav-bullet" v-if="activeSection === item.id">■</span>
            <span class="nav-diamond">◆</span>
            <span class="nav-title">{{ item.title }}</span>
          </div>
        </div>
      </nav>
      
      <div class="content-column">

    <section class="hero-sec" ref="heroRef">
      <div class="reveal">
        <span class="eyebrow">NFL Strategic Division</span>
      </div>
      <div class="reveal d1">
        <h1 class="h1">Beyond the ordinary:<span class="gold-italic">Strategic football intelligence</span></h1>
      </div>
      <div class="reveal d2">
        <p class="body-text">Welcome to The Narrative Group, your 'special ops' team for advanced NFL roster strategy. We transform guesswork into quantifiable advantage, providing front offices, owners, and coaching staffs with cutting-edge intelligence needed to dominate the field and the balance sheet. Discover how our quantitative approach redefines success.</p>
      </div>
      <div class="reveal d3">
        <button @click="$emit('navigate', 'home')" class="btn-primary">
          Discover our edge
          <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </section>

    <div class="orn">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="section white scrollspy-section" id="intelligence-solutions">
      <div class="inner">
        <div class="reveal">
          <span class="eyebrow">Four Distinct Products</span>
          <h2 class="h2">Our intelligence solutions</h2>
          <p class="sec-sub">The Football Intelligence Division provides four distinct strategic products designed to eliminate guesswork from the front office.</p>
        </div>
        <div class="accordion reveal d1">
          <div class="acc-item" v-for="(p, i) in solutions" :key="p.id">
            <div class="acc-head">
              <span class="acc-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="acc-tw">
                <div class="acc-name">{{ p.name }}</div>
                <span class="acc-abbr">{{ p.abbr }}</span>
              </div>
              <div class="acc-tags">
                <span class="atag" v-for="t in p.tags" :key="t">{{ t }}</span>
              </div>
              <span class="acc-arr">+</span>
            </div>
            <div class="acc-body">
              <p class="acc-intro">{{ p.intro }}</p>
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
    </section>

    <div class="orn cream">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="section cream scrollspy-section" id="draft-capital-waste">
      <div class="inner">
        <div class="reveal">
          <span class="eyebrow">Draft Intelligence</span>
          <h2 class="h2">Mitigating draft capital waste</h2>
          <p class="sec-sub">Four frameworks to eliminate wasted draft capital from your front office strategy.</p>
        </div>
        <div class="accordion reveal d1">
          <div class="acc-item acc-cream" v-for="(p, i) in mitigation" :key="p.id">
            <div class="acc-head">
              <span class="acc-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="acc-tw">
                <div class="acc-name">{{ p.name }}</div>
                <span class="acc-abbr">{{ p.abbr }}</span>
              </div>
              <span class="acc-arr">+</span>
            </div>
            <div class="acc-body">
              <p class="acc-intro">{{ p.intro }}</p>
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
    </section>

    <div class="orn">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="section white scrollspy-section" id="contract-roi">
      <div class="inner">
        <div class="reveal">
          <span class="eyebrow">Contract Intelligence</span>
          <h2 class="h2">Maximizing contract ROI</h2>
          <p class="sec-sub">Four frameworks protecting every dollar committed in free agency.</p>
        </div>
        <div class="accordion reveal d1">
          <div class="acc-item" v-for="(p, i) in roi" :key="p.id">
            <div class="acc-head">
              <span class="acc-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="acc-tw">
                <div class="acc-name">{{ p.name }}</div>
                <span class="acc-abbr">{{ p.abbr }}</span>
              </div>
              <span class="acc-arr">+</span>
            </div>
            <div class="acc-body">
              <p class="acc-intro">{{ p.intro }}</p>
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
    </section>

    <div class="orn cream">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="section cream scrollspy-section" id="system-compatibility">
      <div class="inner">
        <div class="reveal">
          <span class="eyebrow">System Intelligence</span>
          <h2 class="h2">Optimizing system compatibility</h2>
          <p class="sec-sub">Three frameworks ensuring roster and coaching staff operate in perfect alignment.</p>
        </div>
        <div class="accordion reveal d1">
          <div class="acc-item acc-cream" v-for="(p, i) in optimization" :key="p.id">
            <div class="acc-head">
              <span class="acc-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <div class="acc-tw">
                <div class="acc-name">{{ p.name }}</div>
                <span class="acc-abbr">{{ p.abbr }}</span>
              </div>
              <span class="acc-arr">+</span>
            </div>
            <div class="acc-body">
              <p class="acc-intro">{{ p.intro }}</p>
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
        <div class="reveal d2 cta-center">
          <button @click="$emit('navigate', 'home')" class="btn-primary">
            Request a sample intelligence brief
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

    <div class="orn">
      <span></span><span class="dia">◆</span><span></span>
    </div>

    <section class="section white">
      <div class="inner">
        <div class="reveal">
          <span class="eyebrow">Our Mission</span>
          <h2 class="h2">Redefining success through data</h2>
          <p class="sec-sub">In the high-stakes world of the NFL, every decision counts. The Narrative Group provides analytical depth and strategic foresight to turn potential into performance, ensuring your investments yield maximum returns. Let us empower your team with unmatched football intelligence.</p>
        </div>
        <div class="conclusion-grid">
          <div class="conclusion-card reveal-left d1">
            <h3 class="cc-title">Unlocking strategic advantage</h3>
            <p class="cc-desc">For NFL General Managers and Front Office Executives, our quantitative strategies move beyond traditional scouting. We leverage Scarcity Modeling to identify undervalued assets and optimal trading opportunities, transforming your draft strategy from a gamble to a calculated portfolio investment. Reduce the "bust factor" and build a sustainable winning roster.</p>
          </div>
          <div class="conclusion-card reveal-right d1">
            <h3 class="cc-title">Optimizing your investment & team synergy</h3>
            <p class="cc-desc">For NFL Owners and Head Coaches, our insights ensure every dollar and every player contributes maximally. Our Behavioral Performance Baseline (BPB) protects against low ROI on guaranteed contracts, while Structural Synergy Analysis (SSA) guarantees system compatibility, ensuring your talented roster performs as a cohesive, dominant unit. This is about building a legacy, not just a team.</p>
          </div>
        </div>
        <div class="reveal d2 cta-center">
          <button @click="$emit('navigate', 'contact')" class="btn-primary">
            Schedule a consultation
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>

      </div>
    </div>
    <div class="cta-band">
      <div class="reveal-left">
        <span class="eyebrow gold-eye">Private Briefing</span>
        <h2 class="cta-title">Ready to command the field?</h2>
        <p class="cta-sub">Schedule a confidential intelligence briefing with the Narrative Football Division.</p>
      </div>
      <div class="reveal-right">
        <button @click="$emit('navigate', 'contact')" class="btn-primary">
          Request a Private Briefing
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const pageRef = ref<HTMLElement | null>(null)
const activeSection = ref('intelligence-solutions')
const showNav = ref(false)
const isTransitioning = ref(false)
const heroRef = ref<HTMLElement | null>(null)

const checkScreenSize = () => {
  showNav.value = window.innerWidth >= 768
}

defineEmits(['navigate'])

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
  // Check screen size initially
  checkScreenSize()
  
  // Add resize listener
  window.addEventListener('resize', checkScreenSize)
  
  if (heroRef.value) {
    heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const shouldShow = !entry.isIntersecting && window.innerWidth >= 768
          if (shouldShow !== showNav.value) {
            isTransitioning.value = true
            showNav.value = shouldShow
            setTimeout(() => {
              isTransitioning.value = false
            }, 600) 
          }
        })
      },
      {
        rootMargin: '-80px 0px 0px 0px', 
        threshold: 0
      }
    )
    heroObserver.observe(heroRef.value)
  }
  
  const sections = document.querySelectorAll('.scrollspy-section')
  
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id
          if (sectionId) {
            activeSection.value = sectionId
          }
        }
      })
    },
    {
      rootMargin: '-120px 0px -50% 0px',
      threshold: 0
    }
  )
  
  sections.forEach((section) => {
    observer?.observe(section)
  })
  
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          revealObserver.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12 }
  )
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
    revealObserver.observe(el)
  })
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (heroObserver) {
    heroObserver.disconnect()
  }
  window.removeEventListener('resize', checkScreenSize)
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
  padding: 5rem 5rem 4rem 5rem;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 1px solid var(--bd);
}

.eyebrow {
  font-family: 'Cinzel', serif;
  font-size: 0.58rem;
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
  line-height: 1.85;
  color: var(--ink2);
  max-width: 640px;
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

/* ORNAMENTAL DIVIDER */
.orn {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.75rem 5rem;
  background: var(--off);
}
.orn.cream {
  background: var(--white);
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
  padding: 4rem 5rem;
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
  font-weight: 300;
  color: var(--ink);
  margin-bottom: 0.7rem;
}
.sec-sub {
  font-size: 1.2rem;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.8;
  max-width: 680px;
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

/* ACCORDION */
.accordion {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--bd);
}
.acc-item {
  border-bottom: 1px solid var(--bd);
  background: var(--white);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s, box-shadow 0.3s;
}
.acc-item.acc-cream {
  background: var(--white);
}
.acc-item:last-child {
  border-bottom: none;
}
.acc-item::before {
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
.acc-item:hover {
  background: var(--off);
  border-left: 3px solid var(--gold);
  box-shadow: inset 4px 0 14px rgba(201, 168, 76, 0.05);
}
.acc-item:hover::before {
  transform: scaleX(1);
}

.acc-head {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  padding: 1.4rem 1.6rem;
}
.acc-num {
  font-family: 'Cinzel', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: rgba(201, 168, 76, 0.25);
  min-width: 32px;
  line-height: 1;
  transition: color 0.3s, font-size 0.3s, transform 0.3s;
  flex-shrink: 0;
}
.acc-item:hover .acc-num {
  color: var(--gold);
  font-size: 1.6rem;
  transform: scale(1.05);
}
.acc-tw {
  flex: 1;
}
.acc-name {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--ink2);
  line-height: 1.3;
  transition: color 0.25s;
}
.acc-item:hover .acc-name {
  color: var(--ink);
}
.acc-abbr {
  font-family: 'Cinzel', serif;
  font-size: 0.48rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: transparent;
  margin-top: 0.18rem;
  display: block;
  transition: color 0.25s, transform 0.25s;
  transform: translateY(-3px);
}
.acc-item:hover .acc-abbr {
  color: var(--gold);
  opacity: 0.7;
  transform: translateY(0);
}
.acc-tags {
  display: flex;
  gap: 0.3rem;
  flex-wrap: nowrap;
  overflow: hidden;
  flex-shrink: 0;
  opacity: 0;
  transition: opacity 0.25s;
}
.acc-item:hover .acc-tags {
  opacity: 1;
}
.atag {
  font-family: 'Cinzel', serif;
  font-size: 0.46rem;
  letter-spacing: 0.07em;
  padding: 0.18rem 0.55rem;
  border: 1px solid var(--gold-bd);
  color: var(--gold);
  text-transform: uppercase;
  background: var(--gold-bg);
  white-space: nowrap;
}
.acc-arr {
  font-size: 0.95rem;
  color: rgba(201, 168, 76, 0.25);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), color 0.25s;
  flex-shrink: 0;
  font-weight: 300;
}
.acc-item:hover .acc-arr {
  transform: rotate(45deg);
  color: var(--gold);
}
.acc-body {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s 0.05s;
  padding: 0 1.6rem 0 4rem;
}
.acc-item:hover .acc-body {
  max-height: 480px;
  opacity: 1;
  padding-bottom: 1.4rem;
}
.acc-intro {
  font-size: 1.15rem;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.8;
  margin-bottom: 1rem;
}

/* PS COLUMNS */
.ps-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.85rem;
}
.ps-a {
  background: var(--cream);
  border-left: 2px solid rgba(0, 0, 0, 0.07);
}
.ps-b {
  background: var(--gold-bg);
  border-left: 2px solid var(--gold-d);
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
  color: var(--ink2);
}
.ps-b .ps-lbl {
  color: var(--gold);
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
  color: var(--ink2);
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
  border: 1px solid var(--bd);
  margin-top: 0.75rem;
}
.audit-table thead {
  background: var(--ink);
}
.audit-table th {
  padding: 0.75rem 1rem;
  text-align: left;
  font-family: 'Cinzel', serif;
  font-size: 0.5rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 400;
}
.audit-table td {
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--ink2);
  border-bottom: 1px solid var(--bd);
  transition: background 0.15s;
}
.audit-table tbody tr:hover td {
  background: var(--off);
}
.act-buy { color: #1a6b3a; font-weight: 500; }
.act-sell { color: #991b1b; font-weight: 500; }
.act-target { color: #1e40af; font-weight: 500; }
.act-avoid { color: #991b1b; font-weight: 500; }

/* CONCLUSION */
.conclusion-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
  margin: 1.5rem 0;
}
.conclusion-card {
  background: var(--cream);
  border: 1px solid var(--bd);
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: background 0.25s, transform 0.22s, box-shadow 0.25s;
}
.conclusion-card::before {
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
.conclusion-card:hover {
  background: var(--off);
  transform: translateY(-2px);
  box-shadow: 0 5px 18px rgba(201, 168, 76, 0.1);
}
.conclusion-card:hover::before {
  transform: scaleX(1);
}
.cc-title {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--ink);
  margin-bottom: 0.6rem;
}
.cc-desc {
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--ink2);
  line-height: 1.75;
}

/* CTA BAND */
.cta-band {
  background: var(--ink);
  padding: 3.5rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}
.cta-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  font-weight: 300;
  color: #fff;
  margin: 0.35rem 0 0.55rem 0;
}
.cta-sub {
  font-size: 0.8rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.7;
}

/* SCROLLSPY NAVIGATION */
.content-wrapper {
  display: flex;
  gap: 2rem;
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

.content-column {
  flex: 2;
  max-width: 100%;
}

.sticky-nav {
  width: 320px;
  position: sticky;
  top: 80px;
  height: fit-content;
  padding-top: 2rem;
  margin-left: 0;
  opacity: 0;
  transform: translateX(-20px);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.sticky-nav.nav-visible {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.nav-label {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1.5rem;
  display: block;
}

.nav-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0;
  transform: translateY(10px);
}

.nav-visible .nav-item {
  opacity: 1;
  transform: translateY(0);
}

.nav-bullet {
  font-size: 8px;
  color: var(--gold);
  line-height: 1;
  margin-top: 2px;
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.nav-item.active .nav-bullet {
  opacity: 1;
  transform: scale(1);
}

.nav-number {
  font-family: 'Cinzel', serif;
  font-size: 13px;
  color: var(--ink3);
  line-height: 1;
  min-width: 20px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.nav-diamond {
  font-family: 'Cinzel', serif;
  font-size: 16px;
  color: var(--ink3);
  line-height: 1;
  min-width: 20px;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-item.active .nav-number,
.nav-item.active .nav-diamond {
  color: var(--gold);
  transform: scale(1.05);
}

.nav-title {
  font-size: 14px;
  color: var(--ink3);
  line-height: 1.3;
  transition: color 0.3s ease, font-weight 0.3s ease, transform 0.3s ease;
}

.nav-item.active .nav-title {
  color: var(--gold);
  font-weight: 500;
  transform: translateX(2px);
}

.nav-item:hover .nav-diamond,
.nav-item:hover .nav-title {
  color: var(--gold);
}

/* Hide nav on mobile */
@media (max-width: 767px) {
  .sticky-nav {
    display: none;
  }
  
  .content-wrapper {
    padding: 0 2rem;
    gap: 0;
  }
}

/* RESPONSIVE */
@media (max-width: 960px) {
  .hero-sec {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .section {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .orn {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  .cta-band {
    padding-left: 2rem;
    padding-right: 2rem;
    flex-direction: column;
    text-align: center;
  }
  .ps-row {
    grid-template-columns: 1fr;
  }
  .conclusion-grid {
    grid-template-columns: 1fr;
  }
  .acc-tags {
    display: none;
  }
}
@media (max-width: 560px) {
  .acc-body {
    padding-left: 1.2rem;
  }
}
</style>
