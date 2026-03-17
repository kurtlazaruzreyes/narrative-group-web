<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1 class="hero-title">Welcome to The Narrative Group</h1>
        <p class="hero-subtitle">Crafting narratives that build brands, connect communities, and move people no matter your industry.</p>
      </div>
    </div>
  </section>

  <section class="services-section">
    <h2 class="section-title">Our Services</h2>
    <div class="services-grid">
      <article class="service-card">
        <div class="service-icon">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
          </svg>
        </div>
        <h3 class="service-title">Storytelling Strategy</h3>
        <p class="service-description">Craft a compelling narrative to elevate your brand and engage your audience.</p>
        <a href="tel:+1702-969-4220" class="service-link">
          More info
          <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </article>

      <article class="service-card">
        <div class="service-icon">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
          </svg>
        </div>
        <h3 class="service-title">Media Relations</h3>
        <p class="service-description">Secure media coverage and exposure to enhance your brand visibility and reach.</p>
        <button @click="$emit('navigate', 'services')" class="service-link">
          More info
          <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </article>

      <article class="service-card">
        <div class="service-icon">
          <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        </div>
        <h3 class="service-title">Digital Branding</h3>
        <p class="service-description">Build a strong online presence to connect with fans and amplify your brand message.</p>
        <button @click="$emit('navigate', 'services')" class="service-link">
          More info
          <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </article>
    </div>
  </section>

  <section class="faq-section">
    <h2 class="section-title">Frequently Asked Questions</h2>
    <div class="faq-list">
      <article class="faq-item">
        <h3 class="faq-title">How can The Narrative Group help me improve my public image?</h3>
      </article>

      <article class="faq-item">
        <h3 class="faq-title">What sets The Narrative Group apart from other PR agencies?</h3>
        <p class="faq-description">Our 'Narrative-First' approach. Whether it's a professional athlete or a scaling tech company, we believe every brand's success is rooted in the story they tell. We apply the high-stakes discipline of sports PR to the broader world of business and branding.</p>
      </article>

      <article class="faq-item">
        <h3 class="faq-title">How do I get started with The Narrative Group?</h3>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style lang="css" scoped>
/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 4rem;
}

.hero-content {
  background: linear-gradient(to bottom right, rgb(37 99 235), rgb(79 70 229), rgb(147 51 234));
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

/* Services Section */
.services-section {
  margin-bottom: 4rem;
}

.section-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  background: linear-gradient(to right, rgb(17 24 39), rgb(55 65 81));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}

.services-grid {
  display: grid;
  gap: 2rem;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.service-card {
  background: rgb(255 255 255);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  padding: 2rem;
  border: 1px solid rgb(243 244 246);
}

.service-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-color: rgb(191 219 254);
  transform: translateY(-0.5rem);
}

.service-icon {
  width: 3.5rem;
  height: 3.5rem;
  background: linear-gradient(to bottom right, rgb(59 130 246), rgb(99 102 241));
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.service-card:hover .service-icon {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.icon {
  width: 2rem;
  height: 2rem;
  color: rgb(255 255 255);
}

.service-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 0.75rem;
}

.service-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-bottom: 1.5rem;
}

.service-link {
  display: inline-flex;
  align-items: center;
  color: rgb(37 99 235);
  font-weight: 600;
  transition-property: color, transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-decoration: none;
}

.service-link:hover {
  color: rgb(30 64 175);
  transform: translateX(0.25rem);
}

.link-icon {
  width: 1rem;
  height: 1rem;
  margin-left: 0.5rem;
}

/* FAQ Section */
.faq-section {
  margin-bottom: 4rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item {
  background: rgb(255 255 255);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  border: 1px solid rgb(243 244 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.faq-item:hover {
  border-color: rgb(191 219 254);
}

.faq-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
}

.faq-description {
  color: rgb(75 85 99);
  line-height: 1.625;
  margin-top: 1rem;
}
</style>
