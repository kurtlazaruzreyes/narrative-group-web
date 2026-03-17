<template>
  <section class="hero-section">
    <div class="hero-content">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1 class="hero-title">Contact us</h1>
        <p class="hero-subtitle">Have a question or ready to start crafting your narrative? Contact us today to schedule a consultation.</p>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <div class="section-container">
      <h2 class="section-title">Contact Information</h2>
      <p class="section-subtitle">Reach out to us through any of the following channels</p>
      
      <div class="contact-grid">
        <div class="contact-card">
          <div class="contact-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </div>
          <h3 class="contact-title">Phone</h3>
          <p class="contact-description">+1 (702) 969-4220</p>
          <a href="tel:+1702-969-4220" class="contact-link">Call Now</a>
        </div>
        
        <div class="contact-card">
          <div class="contact-icon">
            <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="contact-title">Email</h3>
          <p class="contact-description">info@narrativegroup.com</p>
          <a href="mailto:info@narrativegroup.com" class="contact-link">Send Email</a>
        </div>
      </div>
      
      <div class="mt-8">
        <router-link to="/" class="cta-button">
          Back to Home
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

<style lang="css" scoped>
/* Hero Section */
.hero-section {
  margin-bottom: 4rem;
}

.hero-content {
  background: linear-gradient(to bottom right, rgb(16 185 129), rgb(20 184 166), rgb(6 182 212));
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
  text-align: center;
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
  color: rgb(209 250 229);
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

/* Contact Section */
.contact-section {
  margin-bottom: 4rem;
}

.contact-container {
  background: rgb(255 255 255);
  border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  padding: 2rem 3rem;
  border: 1px solid rgb(243 244 246);
}

@media (min-width: 768px) {
  .contact-container {
    padding: 3rem 4rem;
  }
}

.contact-header {
  text-align: center;
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
  margin-bottom: 1rem;
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
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}

.contact-icon {
  width: 5rem;
  height: 5rem;
  background: linear-gradient(to bottom right, rgb(16 185 129), rgb(20 184 166));
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.icon {
  width: 2.5rem;
  height: 2.5rem;
  color: rgb(255 255 255);
}

.contact-grid {
  display: grid;
  gap: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.contact-card {
  background: linear-gradient(to bottom right, rgb(209 250 229), rgb(167 243 208));
  border-radius: 1.5rem;
  padding: 1.5rem;
  border: 1px solid rgb(243 244 246);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-align: center;
}

.contact-card:hover {
  border-color: rgb(16 185 129);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.contact-title {
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  color: rgb(17 24 39);
  margin-bottom: 0.5rem;
}

.contact-link {
  color: rgb(16 185 129);
  font-weight: 600;
  transition-property: color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  text-decoration: none;
}

.contact-link:hover {
  color: rgb(5 150 105);
}

/* CTA Section */
.cta-section {
  text-align: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  background: linear-gradient(to right, rgb(16 185 129), rgb(20 184 166));
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
</style>
