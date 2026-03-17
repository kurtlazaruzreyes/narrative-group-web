<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1 class="hero-title">About Us: Crafting Your Narrative</h1>
        <p class="hero-subtitle">The Narrative Group: Strategic Storytelling for Everyone with a Story to Tell.</p>
      </div>
    </div>
  </section>

  <div class="cta-section">
    <router-link to="/services" class="cta-button">
      Our services
      <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
      </svg>
    </router-link>
  </div>

  <section class="story-section">
    <div class="section-container">
      <h2 class="section-title">Our Story</h2>
      <p class="section-subtitle">Building narratives that inspire, connect, and transform.</p>
      
      <div class="story-grid">
        <div class="story-content">
          <p class="story-description">We believe every great journey deserves a compelling narrative. The Narrative Group was founded on the principle that authentic storytelling isn't just about publicity—it's about building lasting connections and driving meaningful impact.</p>
          
          <ul class="story-list">
            <li class="story-item">Strategic narrative development</li>
            <li class="story-item">Authentic brand storytelling</li>
            <li class="story-item">Impact-driven communication strategies</li>
          </ul>
        </div>
        
        <div class="story-image">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Team collaboration and storytelling" class="story-img">
          <div class="story-overlay"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="pillars-section">
    <div class="section-container">
      <h2 class="section-title">Our Partnership Pillars</h2>
      <p class="section-subtitle">We don't just look for clients; we look for partners who align with our core philosophy.</p>
      
      <div class="pillars-grid">
        <div class="pillar-card">
          <h3 class="pillar-title">Vision</h3>
          <p class="pillar-description">You have a clear goal but need the roadmap to communicate it.</p>
        </div>
        
        <div class="pillar-card">
          <h3 class="pillar-title">Authenticity</h3>
          <p class="pillar-description">You want a narrative that is true to your values, not just "PR spin."</p>
        </div>
        
        <div class="pillar-card">
          <h3 class="pillar-title">Impact</h3>
          <p class="pillar-description">You are focused on building a legacy that lasts longer than a news cycle.</p>
        </div>
      </div>
      
      <div class="mt-8">
        <router-link to="/services" class="cta-button">
          Our services →
        </router-link>
      </div>
    </div>
  </section>

  <!-- Hero image section -->
  <div class="story-grid">
    <div>
      <h2 class="section-heading">Our Story</h2>
      <p class="section-description">We believe every great journey deserves a compelling narrative. The Narrative Group was founded on the principle that authentic storytelling isn't just about publicity—it's about building lasting connections and driving meaningful impact.</p>
      <ul class="feature-list">
        <li class="feature-item">
          <div class="feature-bullet"></div>
          <span class="feature-text">Strategic narrative development</span>
        </li>
        <li class="feature-item">
          <div class="feature-bullet"></div>
          <span class="feature-text">Authentic brand storytelling</span>
        </li>
        <li class="feature-item">
          <div class="feature-bullet"></div>
          <span class="feature-text">Impact-driven communication strategies</span>
        </li>
      </ul>
    </div>
    <div class="story-image">
      <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Team collaboration and storytelling" class="story-img">
      <div class="story-overlay"></div>
    </div>
  </div>

  <section class="pillars-section">
    <div class="section-container">
      <h2 class="section-title">Our Partnership Pillars</h2>
      <p class="section-subtitle">We don't just look for clients; we look for partners who align with our core philosophy:</p>
      
      <div class="pillars-grid">
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
          <h3 class="pillar-title">Vision</h3>
          <p class="pillar-description">You have a clear goal but need the roadmap to communicate it.</p>
        </div>
        
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <h3 class="pillar-title">Authenticity</h3>
          <p class="pillar-description">You want a narrative that is true to your values, not just "PR spin."</p>
        </div>
        
        <div class="pillar-card">
          <div class="pillar-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h3 class="pillar-title">Impact</h3>
          <p class="pillar-description">You are focused on building a legacy that lasts longer than a news cycle.</p>
        </div>
      </div>
      
      <div class="mt-8">
        <button @click="$emit('navigate', 'services')" class="cta-button">
          Our services
          <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>

  <!-- Team image section -->
  <div class="expertise-grid">
    <div class="expertise-image">
      <img src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Professional team meeting" class="expertise-img">
      <div class="expertise-overlay"></div>
    </div>
    <div>
      <h2 class="section-heading">Our Expertise</h2>
      <p class="section-description">Our team brings decades of combined experience in strategic communications, media relations, and brand development. We understand that every story is unique and deserves a tailored approach.</p>
      <ul class="feature-list">
        <li class="feature-item">
          <div class="feature-bullet"></div>
          <span class="feature-text">Industry-leading expertise</span>
        </li>
        <li class="feature-item">
          <div class="feature-bullet"></div>
          <span class="feature-text">Customized strategy development</span>
        </li>
        <li class="feature-item">
          <div class="feature-bullet"></div>
          <span class="feature-text">Results-driven approach</span>
        </li>
      </ul>
    </div>
  </div>

  <section class="partners-section">
    <div class="section-container">
      <h2 class="section-title">Who we partner with:</h2>
      <div class="partners-grid">
        <div class="partner-card">
          <div class="partner-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 class="partner-title">The Visionary</h3>
          <p class="partner-description">Founders and executives.</p>
        </div>
        
        <div class="partner-card">
          <div class="partner-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <h3 class="partner-title">The Impact Maker</h3>
          <p class="partner-description">Non-profits and community leaders.</p>
        </div>
        
        <div class="partner-card">
          <div class="partner-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
            </svg>
          </div>
          <h3 class="partner-title">The Competitor</h3>
          <p class="partner-description">Athletes and sports organizations.</p>
        </div>
        
        <div class="partner-card">
          <div class="partner-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h3 class="partner-title">The Creative</h3>
          <p class="partner-description">Artists and influencers.</p>
        </div>
      </div>
      
      <div class="mt-8">
        <a href="tel:+1702-969-4220" class="contact-button">
          Let's talk
          <svg class="button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
  </section>

  <!-- Success metrics image section -->
<section class="success-section">
  <div class="success-image-container">
    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Success metrics and results" class="success-img">
    <div class="success-overlay">
      <div class="success-content">
        <h3 class="success-title">Measurable Success</h3>
        <p class="success-subtitle">We deliver tangible results that matter to your bottom line</p>
      </div>
    </div>
  </div>
</section>

  <section class="metrics-section">
    <div class="section-container">
      <h2 class="section-title">Measuring Success: Tangible Results</h2>
      
      <div class="metrics-list">
        <div class="metric-item">
          <h3 class="metric-title">1. Narrative Authority & Sentiment</h3>
          <p class="metric-description">We track how the conversation around you shifts.</p>
          <ul class="metric-list-items">
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Share of Voice:</strong> How often are you mentioned compared to competitors in your industry?</span>
            </li>
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Sentiment Analysis:</strong> Moving the needle from neutral or negative to positive, ensuring the public perceives you as a leader, not just a participant.</span>
            </li>
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Key Message Adherence:</strong> Ensuring that when the media talks about you, they are using the language and "story pillars" we've established.</span>
            </li>
          </ul>
        </div>

        <div class="metric-item">
          <h3 class="metric-title">2. Strategic Audience Growth</h3>
          <p class="metric-description">Growth is meaningless without alignment. We focus on reaching the people who actually move the needle for your goals.</p>
          <ul class="metric-list-items">
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">High-Value Network Expansion:</strong> Tracking engagement from industry peers, investors, and decision-makers rather than just "likes."</span>
            </li>
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Conversion and Lead Gen:</strong> For brands and founders, we measure how our storytelling translates into website traffic, newsletter sign-ups, or partnership inquiries.</span>
            </li>
          </ul>
        </div>

        <div class="metric-item">
          <h3 class="metric-title">3. Media Quality Over Quantity</h3>
          <p class="metric-description">One feature in a respected industry journal (like Forbes, Fast Company, or TechCrunch) is worth more than a hundred low-tier mentions.</p>
          <ul class="metric-list-items">
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Tier-1 Placements:</strong> Securing features in outlets that provide instant credibility to your brand.</span>
            </li>
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Thought Leadership:</strong> Measuring the success of op-eds, speaking engagements, and panel invitations that position you as an expert.</span>
            </li>
          </ul>
        </div>

        <div class="metric-item">
          <h3 class="metric-title">The "Bottom Line" Results</h3>
          <p class="metric-description">Ultimately, we measure success by your ability to own your time and your reputation. Crisis Mitigation: The silence we maintain is often as important as the noise we make.</p>
          <ul class="metric-list-items">
            <li class="metric-list-item">
              <div class="metric-bullet"></div>
              <span class="metric-text"><strong class="metric-strong">Legacy Positioning:</strong> Success is defined by your brand's strength five years from now, not just five days from now.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="mt-8">
        <router-link to="/services" class="cta-button">
          View our work
          <svg class="cta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
/* Hero Section */
.hero-section {
  margin-bottom: 4rem;
}

.hero-content {
  background: linear-gradient(to bottom right, rgb(59 130 246), rgb(139 92 246), rgb(236 72 153));
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
  color: rgb(219 234 254);
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

/* Story Grid */
.story-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .story-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.section-heading {
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.section-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
}

.feature-bullet {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(79 70 229);
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.feature-text {
  color: rgb(55 65 81);
}

.story-image {
  position: relative;
}

.story-img {
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 16rem;
  object-fit: cover;
}

.story-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(79 70 229, 0.2), transparent);
  border-radius: 1rem;
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

/* Pillars Section */
.pillars-section {
  margin-bottom: 4rem;
}

.pillars-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .pillars-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.pillar-card {
  background: rgb(248 250 252);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border-left: 4px solid rgb(59 130 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.pillar-card:nth-child(2) {
  border-left-color: rgb(139 92 246);
}

.pillar-card:nth-child(3) {
  border-left-color: rgb(236 72 153);
}

.pillar-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.25rem);
}

.pillar-title {
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 0.5rem;
}

.pillar-description {
  color: rgb(75 85 99);
  font-size: 0.875rem;
  line-height: 1.25rem;
}

/* CTA Button */
.cta-button {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, rgb(59 130 246), rgb(139 92 246));
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
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

/* Expertise Grid */
.expertise-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .expertise-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.expertise-image {
  position: relative;
  order: 2;
}

.expertise-img {
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 16rem;
  object-fit: cover;
}

.expertise-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(147 51 234, 0.2), transparent);
  border-radius: 1rem;
}

/* Partners Section */
.partners-section {
  margin-bottom: 4rem;
}

.partners-grid {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .partners-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.partner-card {
  background: linear-gradient(to bottom right, rgb(249 250 251), rgb(239 246 255));
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgb(243 244 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.partner-card:hover {
  border-color: rgb(79 70 229);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.25rem);
}

.partner-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(to bottom right, rgb(37 99 235), rgb(79 70 229));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
}

.pillar-icon {
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(to bottom right, rgb(59 130 246), rgb(139 92 246));
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  width: 1.25rem;
  height: 1.25rem;
  color: rgb(255 255 255);
}

.partner-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 0.5rem;
}

.partner-description {
  color: rgb(75 85 99);
  line-height: 1.625;
}

.contact-button {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, rgb(79 70 229), rgb(147 51 234));
  color: rgb(255 255 255);
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-decoration: none;
}

.contact-button:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.25rem);
}

.button-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

/* Success Section */
.success-section {
  margin-bottom: 4rem;
}

.success-image-container {
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  margin-top: 2rem;
  height: 24rem;
}

.success-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.success-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.success-content {
  text-align: center;
  color: rgb(255 255 255);
  padding: 3rem 2rem;
  max-width: 600px;
}

.success-title {
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  color: rgb(255 255 255);
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.success-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: rgb(255 255 255);
  opacity: 0.95;
  font-weight: 400;
  max-width: 500px;
  margin: 0 auto;
}

/* Metrics Section */
.metrics-section {
  margin-bottom: 4rem;
}

.metrics-list {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.metric-item {
  background: linear-gradient(to bottom right, rgb(239 246 255), rgb(224 231 255));
  border-radius: 1rem;
  padding: 2rem;
  border-left: 4px solid rgb(37 99 235);
}

.metric-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 1rem;
}

.metric-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.metric-list-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.metric-list-item {
  display: flex;
  align-items: flex-start;
}

.metric-bullet {
  width: 0.5rem;
  height: 0.5rem;
  background: rgb(37 99 235);
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

.metric-text {
  color: rgb(55 65 81);
  line-height: 1.625;
}

.metric-strong {
  color: rgb(17 24 39);
  font-weight: 700;
}
</style>
