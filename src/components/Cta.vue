<script setup lang="ts">
interface Props {
  headline?: string;
  subheadline?: string;
  buttonText?: string;
}

withDefaults(defineProps<Props>(), {
  headline: "Ready to Own",
  subheadline: "Your Narrative?",
  buttonText: "Get Started"
});
</script>

<template>
  <section class="relative min-h-[70vh] flex items-center justify-center bg-[#F9F7F2] overflow-hidden">
    
    <div class="absolute inset-0 z-0 flex items-center justify-center opacity-80">
      <svg class="w-[150%] h-[150%] rotate-[-5deg]" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#D4AF37" stop-opacity="0.2" />
            <stop offset="50%" stop-color="#D4AF37" stop-opacity="0.6" />
            <stop offset="100%" stop-color="#D4AF37" stop-opacity="0.2" />
          </linearGradient>
        </defs>
        
        <g stroke="url(#goldGrad)" stroke-width="1" fill="none">
          <path v-for="i in 30" :key="'h'+i" 
            :d="`M 0 ${i * 35} Q 500 ${i * 35 + (Math.sin(i) * 50)} 1000 ${i * 35}`" />
          
          <path v-for="i in 30" :key="'v'+i" 
            :d="`M ${i * 35} 0 Q ${i * 35 + (Math.cos(i) * 50)} 500 ${i * 35} 1000`" />
        </g>

        <g fill="#D4AF37" opacity="0.8">
          <template v-for="x in 20" :key="'x'+x">
            <circle v-for="y in 20" :key="'x'+x+'y'+y"
              :cx="x * 50" :cy="y * 50" r="1.5" />
          </template>
        </g>
      </svg>
      
      <div class="absolute inset-0 bg-gradient-to-b from-[#F9F7F2] via-transparent to-[#F9F7F2]"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-[#F9F7F2] via-transparent to-[#F9F7F2]"></div>
    </div>

    <div class="relative z-10 text-center px-6 max-w-4xl">
      <h2 class="text-4xl md:text-6xl font-serif text-zinc-900 leading-[1.1] tracking-tight mb-10">
        {{ headline }}<br />
        <span class="text-zinc-800">{{ subheadline }}</span>
      </h2>

      <div class="flex justify-center">
        <a href="/contact" class="inline-block">
          <button
            class="px-7 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-lg 
                   shadow-[0_20px_40px_rgba(0,0,0,0.3)] 
                   hover:bg-black transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            {{ buttonText }}
          </button>
        </a>
      </div>
    </div>

  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');

h2 {
  font-family: 'Source Serif 4', serif;
}

svg {
  animation: float 8s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: scale(1) rotate(-5deg); }
  50% { transform: scale(1.05) rotate(-3deg); }
}
</style>