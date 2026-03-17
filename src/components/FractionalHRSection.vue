<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1 class="hero-title">Strategic governance: your business, elevated</h1>
        <p class="hero-subtitle">Many small-to-mid-sized firms outgrow their operational foundation. You need C-Suite HR and strategic oversight without the full-time cost. The Narrative Group provides fractional expertise to bridge the gap between administrative tasks and executive leadership, ensuring your most valuable assets—your people and your entity structure—are protected and optimized. We're the bridge between administrative payroll and executive leadership, designing systems that find, protect, and retain your talent while auditing your entire operational foundation for "Structural Safety" against audits and for fundability by lenders.</p>
      </div>
    </div>
  </section>

  <div class="cta-section">
    <button @click="$emit('navigate', 'contact')" class="cta-button">
      Learn how we can help
      <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>

  <section class="profiles-section">
    <div class="section-container">
      <h2 class="section-title">Who we serve: our perfect client profiles</h2>
      <p class="section-subtitle">The Narrative Group partners with principals and founders ready to transform their HR and governance from a burden into a strategic asset. Our ideal clients aren't just looking for an "HR person"; they seek an architect of governance who can protect their assets while they focus on their craft. If your business fits one of these "sweet spot" profiles, you're perfectly positioned to get a 10x return on our fractional service.</p>
      
      <div class="profiles-list">
        <div class="profile-item">
          <div class="profile-header">
            <div class="profile-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5M9 7h1m-1 4h1m-4 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <div>
              <h3 class="profile-title">The prestige boutique</h3>
              <p class="profile-description">Firms built on elite, specialized talent (5–15 employees) like naval architecture, high-end interior design, or boutique law. They seek a governance layer as professional as their craft, worrying that a single compliance mistake will impact their trusted staff. We speak their high-end language, providing peace of mind and strategic benefit narratives using tools like QSEHRA.</p>
            </div>
          </div>
        </div>

        <div class="profile-item">
          <div class="profile-header">
            <div class="profile-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <div>
              <h3 class="profile-title">The multi-entity architect</h3>
              <p class="profile-description">Serial founders owning a "group" of distinct entities (real estate, financial services, consulting). They need to clean up jumbled HR records across LLCs to stack business credit or prepare for exit. We bridge HR governance and credit architecture, making each entity a bankable asset by ensuring compliant payroll, credit profiles, and strategic narratives.</p>
            </div>
          </div>
        </div>

        <div class="profile-item">
          <div class="profile-header">
            <div class="profile-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <div>
              <h3 class="profile-title">The growth-phase startup</h3>
              <p class="profile-description">Tech or service startups (15–50 employees) in the "danger zone"—too big for DIY HR, too small for a full-time CPO. They face "compliance drift" from rapid scaling and need fractional leadership. We provide a principal strategist for 5-10 hours a month, offering senior executive insights without the senior executive price tag.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-8">
        <button @click="$emit('navigate', 'contact')" class="cta-button">
          Find your fit: request a consultation
          <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <section class="compliance-section">
    <div class="section-container">
      <h2 class="section-title">Compliance isn't a task, it's your company's bedrock value</h2>
      <p class="section-subtitle">Many businesses manage with software; elite businesses govern with a strategist. We take the "governance burden" off of principal's desk so they can return to being a founder. We transform back-office compliance into a professional, scalable narrative that impresses employees and investors alike. Discover how to move from 'I think we're okay' to 'I know we're secure'.</p>
      
      <!-- Image section for compliance -->
      <div class="compliance-grid">
        <div>
          <h3 class="compliance-title">Professional Governance</h3>
          <p class="compliance-description">Our strategic oversight ensures your business operates with the same level of professionalism as your craft, protecting your assets and ensuring peace of mind.</p>
          <ul class="compliance-list">
            <li class="compliance-item">
              <div class="compliance-bullet"></div>
              <span class="compliance-text">Compliance audits and risk assessment</span>
            </li>
            <li class="compliance-item">
              <div class="compliance-bullet"></div>
              <span class="compliance-text">Strategic HR architecture design</span>
            </li>
            <li class="compliance-item">
              <div class="compliance-bullet"></div>
              <span class="compliance-text">Talent retention and optimization</span>
            </li>
          </ul>
        </div>
        <div class="compliance-image">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Professional governance and compliance" class="compliance-img">
          <div class="compliance-overlay"></div>
        </div>
      </div>
    </div>

    <div class="oversight-section">
      <div class="oversight-grid">
        <div class="oversight-image">
          <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Strategic oversight and executive leadership" class="oversight-img">
          <div class="oversight-overlay"></div>
        </div>
        <div>
          <h3 class="oversight-title">Executive-Level Strategy</h3>
          <p class="oversight-description">We provide strategic thinking and oversight that software alone cannot deliver, ensuring your business stays ahead of regulatory changes and compliance requirements.</p>
          <ul class="oversight-list">
            <li class="oversight-item">
              <div class="oversight-bullet"></div>
              <span class="oversight-text">Proactive regulatory monitoring</span>
            </li>
            <li class="oversight-item">
              <div class="oversight-bullet"></div>
              <span class="oversight-text">Strategic risk management</span>
            </li>
            <li class="oversight-item">
              <div class="oversight-bullet"></div>
              <span class="oversight-text">Executive-level insights without C-suite cost</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="integration-section">
    <div class="section-container">
      <h2 class="section-title">Integrating HR & capital for fundability</h2>
      <p class="section-subtitle">This is our most significant competitive advantage. Traditional HR consultants don't understand business credit, and credit strategists don't understand labor law. We bridge this gap. We ensure your HR records and corporate governance are so impeccably "clean" that they actively enhance your fundability. For multi-entity groups, we architect structures where each LLC becomes a stand-alone, bankable asset, helping you scale credit and protect your growth simultaneously. This resolves "multi-entity complexity & fundability" challenges and prevents "piercing the corporate veil."</p>
      
      <!-- Final image section -->
      <div class="final-section">
        <div class="final-image">
          <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Business growth and fundability" class="final-img">
          <div class="final-overlay">
            <h3 class="final-title">Build a Bankable Future</h3>
            <p class="final-subtitle">Transform your business into an asset that attracts capital and scales efficiently</p>
          </div>
        </div>
      </div>
      
      <div class="mt-8 text-center">
        <button @click="$emit('navigate', 'contact')" class="cta-button">
          Discover our clean slate methodology
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
  background: linear-gradient(to bottom right, rgb(30 41 59), rgb(55 65 81), rgb(63 63 63));
  border-radius: 1.5rem;
  padding: 3rem 4rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .hero-content {
    padding: 4rem;
  }
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

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
    line-height: 1.2;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 3.75rem;
    line-height: 1.2;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(241 245 249);
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

@media (min-width: 768px) {
  .hero-subtitle {
    font-size: 1.5rem;
    line-height: 1.75rem;
  }
}

/* CTA Section */
.cta-section {
  margin-bottom: 3rem;
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, rgb(30 41 59), rgb(55 65 81));
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

@media (min-width: 768px) {
  .section-container {
    padding: 3rem 4rem;
  }
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

@media (min-width: 768px) {
  .section-title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

.section-subtitle {
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: rgb(75 85 99);
  margin-bottom: 3rem;
}

/* Profiles Section */
.profiles-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.profile-item {
  background: linear-gradient(to bottom right, rgb(248 250 252), rgb(229 231 235));
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid rgb(30 41 59);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.profile-item:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.profile-header {
  display: flex;
  align-items: flex-start;
}

.profile-icon {
  width: 4rem;
  height: 4rem;
  background: linear-gradient(to bottom right, rgb(30 41 59), rgb(55 65 81));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.icon {
  width: 2rem;
  height: 2rem;
  color: rgb(255 255 255);
}

.profile-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 0.75rem;
}

.profile-description {
  color: rgb(75 85 99);
  line-height: 1.625;
}

/* Compliance Section */
.compliance-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .compliance-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.compliance-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.compliance-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.compliance-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.compliance-item {
  display: flex;
  align-items: flex-start;
}

.compliance-bullet {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(30 41 59);
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.compliance-text {
  color: rgb(75 85 99);
}

/* Oversight Section */
.oversight-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .oversight-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.oversight-image {
  position: relative;
  order: 2;
}

.oversight-img {
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 16rem;
  object-fit: cover;
}

.oversight-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(17 24 39, 0.2), transparent);
  border-radius: 1rem;
}

.oversight-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.oversight-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.oversight-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.oversight-item {
  display: flex;
  align-items: flex-start;
}

.oversight-bullet {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(55 65 81);
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.oversight-text {
  color: rgb(75 85 99);
}

/* Integration Section */
.integration-section {
  margin-bottom: 4rem;
}

.final-section {
  position: relative;
}

.final-image {
  position: relative;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 20rem;
  object-fit: cover;
}

.final-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(17 24 39, 0.4), transparent);
  border-radius: 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 2rem;
}

.final-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(255 255 255);
  margin-bottom: 0.5rem;
}

.final-subtitle {
  color: rgb(241 245 249);
  font-size: 1.125rem;
  line-height: 1.75rem;
}

/* Compliance Image */
.compliance-image {
  position: relative;
}

.compliance-img {
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 16rem;
  object-fit: cover;
}

.compliance-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(17 24 39, 0.2), transparent);
  border-radius: 1rem;
}
</style>
