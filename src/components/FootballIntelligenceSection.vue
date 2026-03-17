<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1 class="hero-title">Beyond the ordinary: Strategic football intelligence</h1>
        <p class="hero-subtitle">Welcome to The Narrative Group, your 'special ops' team for advanced NFL roster strategy. We transform guesswork into quantifiable advantage, providing front offices, owners, and coaching staffs with cutting-edge intelligence needed to dominate the field and the balance sheet. Discover how our quantitative approach redefines success.</p>
      </div>
    </div>
  </section>

  <div class="cta-section">
    <button @click="$emit('navigate', 'home')" class="cta-button">
      Discover our edge
      <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>

  <section class="solutions-section">
    <div class="section-container">
      <h2 class="section-title">Our intelligence solutions</h2>
      <p class="section-subtitle">The Football Intelligence Division provides four distinct strategic products designed to eliminate guesswork from the front office.</p>
      
      <div class="solutions-list">
        <div class="solution-item">
          <h3 class="solution-title">1. The NIM Roster Audit (Narrative Intelligence Matrix)</h3>
          <p class="solution-description">A comprehensive diagnostic of your current 53-man roster and practice squad through the lens of asset volatility.</p>
          <div class="solution-grid">
            <div class="solution-card">
              <p class="solution-card-title">The Solution</p>
              <p class="solution-card-description">We identify "Value Traps"—players whose salary cap hit far exceeds their projected "Structural Synergy" score.</p>
            </div>
            <div class="solution-card">
              <p class="solution-card-title">The Outcome</p>
              <p class="solution-card-description">A prioritized liquidation and acquisition roadmap to re-balance the roster for maximum Win-Share ROI.</p>
            </div>
          </div>
        </div>

        <div class="solution-item">
          <h3 class="solution-title">2. Draft Capital Engineering</h3>
          <p class="solution-description">Moving beyond traditional "Trade Value Charts," we apply Scarcity Modeling to your draft board.</p>
          <div class="solution-grid">
            <div class="solution-card">
              <p class="solution-card-title">The Solution</p>
              <p class="solution-card-description">We quantify "Market Desperation" of other teams. If the league is overvaluing a specific position (e.g., Quarterback or Edge) in a weak year, we engineer trade-down scenarios to accumulate "Blue Chip" pillars.</p>
            </div>
            <div class="solution-card">
              <p class="solution-card-title">The Outcome</p>
              <p class="solution-card-description">Maximizing the hit rate per dollar spent on rookie contracts.</p>
            </div>
          </div>
        </div>

        <div class="solution-item">
          <h3 class="solution-title">3. Environmental Delta Analysis (The "Bounce-Back" Report)</h3>
          <p class="solution-description">We identify undervalued veteran talent by separating Physical Decay from Infrastructure-Induced Decline.</p>
          <div class="solution-grid">
            <div class="solution-card">
              <p class="solution-card-title">The Solution</p>
              <p class="solution-card-description">We analyze how a player's metrics change when their surrounding "System Synergy" fails. This identifies "Redemption" candidates who are likely to see a 30–50% performance spike in your specific scheme.</p>
            </div>
            <div class="solution-card">
              <p class="solution-card-title">The Outcome</p>
              <p class="solution-card-description">High-impact veteran signings at "Mid-Tier" market prices.</p>
            </div>
          </div>
        </div>

        <div class="solution-item">
          <h3 class="solution-title">4. Scheme-Sync Integration</h3>
          <p class="solution-description">Intelligence specifically for coaching transitions. We evaluate whether your current roster's "Net Skillset" is mathematically compatible with a new coordinator's playbook.</p>
          <div class="solution-grid">
            <div class="solution-card">
              <p class="solution-card-title">The Solution</p>
              <p class="solution-card-description">We identify "Friction Points" where your most expensive assets are being asked to perform tasks outside their high-efficiency baseline.</p>
            </div>
            <div class="solution-card">
              <p class="solution-card-title">The Outcome</p>
              <p class="solution-card-description">Drastically reducing the "learning curve" time during coaching changes and preventing expensive scheme-mismatch busts.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mitigation-section">
    <div class="section-container">
      <h2 class="section-title">Mitigating draft capital waste</h2>
      
      <div class="mitigation-list">
        <div class="mitigation-item">
          <h3 class="mitigation-title">1. Identifying the "Hype Inflation" Gap</h3>
          <p class="mitigation-description">Draft capital is wasted when a team uses a high-value pick on a player whose market perceived value is driven by scarcity rather than actual projected utility.</p>
          <div class="mitigation-grid">
            <div class="mitigation-card">
              <p class="mitigation-card-title">The Problem</p>
              <p class="mitigation-card-description">Teams "reach" for a Tier-2 Quarterback because they are desperate, essentially paying a Tier-1 price for a mid-tier asset.</p>
            </div>
            <div class="mitigation-card">
              <p class="mitigation-card-title">The FID Solution</p>
              <p class="mitigation-card-description">We use Scarcity Modeling to quantify the "Inflation Delta." If our metrics show that the talent drop-off between Pick 10 and Pick 40 is negligible for a specific position, we advise a "Trade-Down Engineering" approach to turn one overvalued asset into multiple high-probability pillars.</p>
            </div>
          </div>
        </div>

        <div class="mitigation-item">
          <h3 class="mitigation-title">2. Eliminating "System Mismatch" (The SSA Filter)</h3>
          <p class="mitigation-description">A pick is "wasted" if a player's skills are negated by the team's scheme.</p>
          <div class="mitigation-grid">
            <div class="mitigation-card">
              <p class="mitigation-card-title">The Problem</p>
              <p class="mitigation-card-description">Selecting a "Man-Coverage" specialist for a "Zone-Heavy" defensive coordinator.</p>
            </div>
            <div class="mitigation-card">
              <p class="mitigation-card-title">The FID Solution</p>
              <p class="mitigation-card-description">Through Structural Synergy Analysis (SSA), we ensure the draft pick acts as a Force Multiplier. We calculate how much the new asset improves the performance of the current roster. If the "Synergy Gain" is low, the pick is considered a waste of capital, regardless of how "talented" the player is.</p>
            </div>
          </div>
        </div>

        <div class="mitigation-item">
          <h3 class="mitigation-title">3. Calculating the "Replacement Value" Baseline</h3>
          <p class="mitigation-description">Teams often waste capital by drafting players to fill "perceived" holes that could have been filled more cheaply through veteran acquisition.</p>
          <div class="mitigation-grid">
            <div class="mitigation-card">
              <p class="mitigation-card-title">The Problem</p>
              <p class="mitigation-card-description">Using a 2nd-round pick on a player who provides the same metrics as a "Redemption Veteran" available for league minimum.</p>
            </div>
            <div class="mitigation-card">
              <p class="mitigation-card-title">The FID Solution</p>
              <p class="mitigation-card-description">Our Behavioral Performance Baseline (BPB) identifies "Infrastructure-Dependent" veterans. If we can find a veteran with a 40% bounce-back potential, we can save that 2nd-round draft pick to use on a high-scarcity position, effectively "doubling" the value of the team's capital.</p>
            </div>
          </div>
        </div>

        <div class="mitigation-item">
          <h3 class="mitigation-title">4. The "Draft Capital Waste" Audit</h3>
          <p class="mitigation-description">For your website, you can present this as a Quadrant Analysis to show Front Offices how we categorize their picks:</p>
          <div class="table-container">
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
                  <td class="action-buy">Strong Buy: Commit capital here.</td>
                </tr>
                <tr>
                  <td>Market Bubbles</td>
                  <td>High-hype, low-synergy specialists.</td>
                  <td class="action-liquidate">Liquidate: Trade down/out.</td>
                </tr>
                <tr>
                  <td>Efficiency Fillers</td>
                  <td>Low-cost, high-IQ role players.</td>
                  <td class="action-target">Target: Acquire via mid-rounds.</td>
                </tr>
                <tr>
                  <td>Red Flags</td>
                  <td>High-cost, infrastructure-dependent talent.</td>
                  <td class="action-avoid">Avoid: Capital is better spent elsewhere.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="roi-section">
    <div class="section-container">
      <h2 class="section-title">Maximizing contract ROI</h2>
      
      <div class="roi-list">
        <div class="roi-item">
          <h3 class="roi-title">1. Identifying "Infrastructure-Dependent" Value</h3>
          <p class="roi-description">The biggest drain on ROI is the "Superstar Premium"—paying top-of-market rates for a player whose success was actually a product of the team around him.</p>
          <div class="roi-grid">
            <div class="roi-card">
              <p class="roi-card-title">The Process</p>
              <p class="roi-card-description">We use Behavioral Performance Baseline (BPB) to strip away the "noise." We calculate how much of a player's production was "Self-Generated" vs. "System-Generated."</p>
            </div>
            <div class="roi-card">
              <p class="roi-card-title">The Result</p>
              <p class="roi-card-description">We identify players who will maintain high production even if the supporting cast changes, ensuring the contract remains an asset rather than a liability.</p>
            </div>
          </div>
        </div>

        <div class="roi-item">
          <h3 class="roi-title">2. The "Bounce-Back" Arbitrage</h3>
          <p class="roi-description">ROI is highest when you acquire an undervalued asset that is primed for a performance surge.</p>
          <div class="roi-grid">
            <div class="roi-card">
              <p class="roi-card-title">The Process</p>
              <p class="roi-card-description">Our Environmental Delta Analysis identifies veteran athletes whose metrics plummeted due to poor coaching or scheme mismatch, not physical decay.</p>
            </div>
            <div class="roi-card">
              <p class="roi-card-title">The Result</p>
              <p class="roi-card-description">We help teams sign "Redemption Veterans" to mid-tier contracts that yield Pro-Bowl level production. This is the ultimate "ROI hack" in a hard-cap league.</p>
            </div>
          </div>
        </div>

        <div class="roi-item">
          <h3 class="roi-title">3. Avoiding the "Sunk Cost" Trap</h3>
          <p class="roi-description">Contract ROI isn't just about who you sign; it's about when you move on.</p>
          <div class="roi-grid">
            <div class="roi-card">
              <p class="roi-card-title">The Process</p>
              <p class="roi-card-description">We provide Predictive Decay Modeling. We analyze behavioral and physical data points to project the exact window where a player's "Cost-per-Snap" begins to exceed their "Win-Share" contribution.</p>
            </div>
            <div class="roi-card">
              <p class="roi-card-title">The Result</p>
              <p class="roi-card-description">Teams can trade assets at their peak value (The "Sell High" window) before the contract becomes "untradeable" dead weight on the cap.</p>
            </div>
          </div>
        </div>

        <div class="roi-item">
          <h3 class="roi-title">4. Structural Synergy as a Cost-Saver</h3>
          <p class="roi-description">When the "system" is the star, individual contracts become more manageable.</p>
          <div class="roi-grid">
            <div class="roi-card">
              <p class="roi-card-title">The Process</p>
              <p class="roi-card-description">By using Structural Synergy Analysis (SSA), we show teams how to build units (like an Offensive Line or Secondary) where the collective efficiency is greater than the sum of the individual salaries.</p>
            </div>
            <div class="roi-card">
              <p class="roi-card-title">The Result</p>
              <p class="roi-card-description">You don't need five $20M players if you have five $8M players who are mathematically optimized to work together. This frees up "Cap Alpha" to spend on high-scarcity pillars.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="optimization-section">
    <div class="section-container">
      <h2 class="section-title">Optimizing system compatibility</h2>
      
      <div class="optimization-list">
        <div class="optimization-item">
          <h3 class="optimization-title">1. The Force-Multiplier Algorithm</h3>
          <p class="optimization-description">Most scouting reports are individualistic (e.g., "He is fast," "He is strong"). Our Structural Synergy Analysis (SSA) is relational.</p>
          <div class="optimization-grid">
            <div class="optimization-card">
              <p class="optimization-card-title">The Problem</p>
              <p class="optimization-card-description">A team signs a high-priced pass rusher but lacks interior presence to prevent the QB from stepping up in the pocket, neutralizing the new asset's speed.</p>
            </div>
            <div class="optimization-card">
              <p class="optimization-card-title">The FID Solution</p>
              <p class="optimization-card-description">We calculate the Synergy Coefficient. We model how a new acquisition affects the metrics of existing ten players. We only recommend "System-Optimized" moves where the new player acts as a force multiplier for the current roster.</p>
            </div>
          </div>
        </div>

        <div class="optimization-item">
          <h3 class="optimization-title">2. Behavioral Blueprinting</h3>
          <p class="optimization-description">System compatibility isn't just about physical traits; it's about cognitive load.</p>
          <div class="optimization-grid">
            <div class="optimization-card">
              <p class="optimization-card-title">The Problem</p>
              <p class="optimization-card-description">A veteran is moved from a "Read-and-React" defense to an "Aggressive-Stunt" defense. The mental friction of unlearning a decade of instincts causes a performance dip that looks like physical aging.</p>
            </div>
            <div class="optimization-card">
              <p class="optimization-card-title">The FID Solution</p>
              <p class="optimization-card-description">We perform Cognitive Scheme Mapping. We match a player's career-long behavioral baselines with the specific mental demands of the new coaching staff's playbook.</p>
            </div>
          </div>
        </div>

        <div class="optimization-item">
          <h3 class="optimization-title">3. Metric-Based Coaching Alignment</h3>
          <p class="optimization-description">We help front offices ensure the "Chef" (the Coach) is compatible with the "Ingredients" (the Roster).</p>
          <div class="optimization-grid">
            <div class="optimization-card">
              <p class="optimization-card-title">The Problem</p>
              <p class="optimization-card-description">A GM builds a roster of "Clean-Pocket" technical linemen, but the Head Coach runs a "Power-Gap" scheme that requires raw bulk.</p>
            </div>
            <div class="optimization-card">
              <p class="optimization-card-title">The FID Solution</p>
              <p class="optimization-card-description">We provide an Infrastructure Audit. We quantify the "Net Skillset" of the roster and compare it to the coach's historical play-calling metrics. If there is a "Scheme-Sync" mismatch, we provide a corrective roadmap before the season begins.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <button @click="$emit('navigate', 'home')" class="cta-button">
          Request a sample intelligence brief
          <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <section class="conclusion-section">
    <div class="section-container">
      <h2 class="section-title">Redefining success through data</h2>
      <p class="section-subtitle">In the high-stakes world of the NFL, every decision counts. The Narrative Group provides analytical depth and strategic foresight to turn potential into performance, ensuring your investments yield maximum returns. Let us empower your team with unmatched football intelligence.</p>
      
      <div class="conclusion-grid">
        <div class="conclusion-card">
          <h3 class="conclusion-title">Unlocking strategic advantage</h3>
          <p class="conclusion-description">For NFL General Managers and Front Office Executives, our quantitative strategies move beyond traditional scouting. We leverage Scarcity Modeling to identify undervalued assets and optimal trading opportunities, transforming your draft strategy from a gamble to a calculated portfolio investment. Reduce the "bust factor" and build a sustainable winning roster.</p>
        </div>

        <div class="conclusion-card">
          <h3 class="conclusion-title">Optimizing your investment & team synergy</h3>
          <p class="conclusion-description">For NFL Owners and Head Coaches, our insights ensure every dollar and every player contributes maximally. Our Behavioral Performance Baseline (BPB) protects against low ROI on guaranteed contracts, while Structural Synergy Analysis (SSA) guarantees system compatibility, ensuring your talented roster performs as a cohesive, dominant unit. This is about building a legacy, not just a team.</p>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <button @click="$emit('navigate', 'contact')" class="cta-button">
          Schedule a consultation
          <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
/* Hero Section */
.hero-section {
  margin-bottom: 4rem;
}

.hero-content {
  background: linear-gradient(to bottom right, rgb(245 158 11), rgb(251 146 60), rgb(239 68 68));
  border-radius: 1.5rem;
  padding: 3rem 4rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), transparent);
}

.hero-text {
  position: relative;
  z-index: 10;
}

.hero-title {
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 800;
  color: rgb(255 255 255);
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(254 243 199);
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

/* CTA Section */
.cta-section {
  margin-bottom: 3rem;
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, rgb(245 158 11), rgb(251 146 60));
  color: rgb(255 255 255);
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.75rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.cta-button:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.25rem);
}

.cta-icon {
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 0.5rem;
}

/* Section Container */
.section-container {
  background: rgb(255 255 255);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem 3rem;
  border: 1px solid rgb(243 244 246);
  margin-bottom: 3rem;
}

.section-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  background: linear-gradient(to right, rgb(17 24 39), rgb(55 65 81));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(75 85 99);
  margin-bottom: 3rem;
}

/* Solutions Section */
.solutions-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.solution-item {
  background: linear-gradient(to bottom right, rgb(254 243 199), rgb(254 215 170));
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid rgb(245 158 11);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.solution-item:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.solution-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.solution-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.solution-grid {
  display: grid;
  gap: 1rem;
}

.solution-card {
  background: rgb(254 243 199);
  border-radius: 0.75rem;
  padding: 1rem;
}

.solution-card-title {
  font-weight: 700;
  color: rgb(146 64 14);
  margin-bottom: 0.5rem;
}

.solution-card-description {
  color: rgb(146 64 14);
}

/* Mitigation Section */
.mitigation-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mitigation-item {
  background: linear-gradient(to bottom right, rgb(254 242 242), rgb(254 215 170));
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid rgb(239 68 68);
}

.mitigation-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.mitigation-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.mitigation-grid {
  display: grid;
  gap: 1rem;
}

.mitigation-card {
  background: rgb(254 242 242);
  border-radius: 0.75rem;
  padding: 1rem;
}

.mitigation-card-title {
  font-weight: 700;
  color: rgb(185 28 28);
  margin-bottom: 0.5rem;
}

.mitigation-card-description {
  color: rgb(185 28 28);
}

/* Audit Table */
.table-container {
  overflow-x: auto;
}

.audit-table {
  min-width: 100%;
  background: rgb(255 255 255);
  border: 1px solid rgb(229 231 235);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.audit-table thead {
  background: linear-gradient(to right, rgb(245 158 11), rgb(251 146 60));
  color: rgb(255 255 255);
}

.audit-table th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 700;
}

.audit-table td {
  padding: 1rem 1.5rem;
}

.audit-table tbody tr {
  border-bottom: 1px solid rgb(229 231 235);
}

.action-buy {
  color: rgb(22 163 74);
  font-weight: 700;
}

.action-liquidate {
  color: rgb(239 68 68);
  font-weight: 700;
}

.action-target {
  color: rgb(37 99 235);
  font-weight: 700;
}

.action-avoid {
  color: rgb(239 68 68);
  font-weight: 700;
}

/* ROI Section */
.roi-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.roi-item {
  background: linear-gradient(to bottom right, rgb(239 246 255), rgb(224 231 255));
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid rgb(37 99 235);
}

.roi-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.roi-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.roi-grid {
  display: grid;
  gap: 1rem;
}

.roi-card {
  background: rgb(239 246 255);
  border-radius: 0.75rem;
  padding: 1rem;
}

.roi-card-title {
  font-weight: 700;
  color: rgb(30 64 175);
  margin-bottom: 0.5rem;
}

.roi-card-description {
  color: rgb(30 64 175);
}

/* Optimization Section */
.optimization-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.optimization-item {
  background: linear-gradient(to bottom right, rgb(224 242 254), rgb(239 246 255));
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid rgb(6 182 212);
}

.optimization-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.optimization-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.optimization-grid {
  display: grid;
  gap: 1rem;
}

.optimization-card {
  background: rgb(224 242 254);
  border-radius: 0.75rem;
  padding: 1rem;
}

.optimization-card-title {
  font-weight: 700;
  color: rgb(30 64 175);
  margin-bottom: 0.5rem;
}

.optimization-card-description {
  color: rgb(30 64 175);
}

/* Conclusion Section */
.conclusion-grid {
  display: grid;
  gap: 2rem;
}

.conclusion-card {
  background: linear-gradient(to bottom right, rgb(254 243 199), rgb(254 215 170));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgb(243 244 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.conclusion-card:hover {
  border-color: rgb(251 146 60);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.conclusion-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.conclusion-description {
  color: rgb(75 85 99);
  line-height: 1.625;
}
</style>
