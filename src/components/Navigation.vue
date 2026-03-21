<template>
  <nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white/95 backdrop-blur-sm rounded-full mx-6 mt-4 border border-gray-200/50 shadow-lg max-md:px-4 max-md:mx-3 max-md:py-3">
    <router-link to="/" class="flex items-center gap-3 no-underline hover:opacity-80 transition-all duration-300">
      <img src="/ng-logo-only-gold.png" alt="The Narrative Group" class="h-7 w-auto">
      <span class="font-playfair text-xl font-bold tracking-wider3 text-[#1C1C1C] hover:text-[#C9A84C] transition-all duration-300">
        The <span class="text-[#C9A84C]">Narrative</span> Group
      </span>
    </router-link>
    
    <!-- Desktop Navigation -->
    <ul class="flex gap-8 list-none max-lg:hidden">
      <li>
        <router-link 
          to="/about" 
          class="relative font-dm text-sm font-medium no-underline text-[#666666] hover:text-[#1C1C1C] transition-all duration-300 group"
          active-class="text-[#C9A84C] font-semibold"
        >
          About
          <span class="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          <span class="absolute bottom-[-2px] left-0 w-full h-0.5 bg-[#C9A84C]" v-if="$route.path === '/about'"></span>
        </router-link>
      </li>
      <li>
        <router-link 
          to="/services" 
          class="relative font-dm text-sm font-medium no-underline text-[#666666] hover:text-[#1C1C1C] transition-all duration-300 group"
          active-class="text-[#C9A84C] font-semibold"
        >
          Services
          <span class="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          <span class="absolute bottom-[-2px] left-0 w-full h-0.5 bg-[#C9A84C]" v-if="$route.path === '/services'"></span>
        </router-link>
      </li>
      <li>
        <router-link 
          to="/football-intelligence" 
          class="relative font-dm text-sm font-medium no-underline text-[#666666] hover:text-[#1C1C1C] transition-all duration-300 group"
          active-class="text-[#C9A84C] font-semibold"
        >
          Football Intelligence
          <span class="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          <span class="absolute bottom-[-2px] left-0 w-full h-0.5 bg-[#C9A84C]" v-if="$route.path === '/football-intelligence'"></span>
        </router-link>
      </li>
      <li>
        <router-link 
          to="/fractional-hr" 
          class="relative font-dm text-sm font-medium no-underline text-[#666666] hover:text-[#1C1C1C] transition-all duration-300 group"
          active-class="text-[#C9A84C] font-semibold"
        >
          Fractional HR Strategic Governance
          <span class="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          <span class="absolute bottom-[-2px] left-0 w-full h-0.5 bg-[#C9A84C]" v-if="$route.path === '/fractional-hr'"></span>
        </router-link>
      </li>
      <li>
        <router-link 
          to="/hoops-intelligence" 
          class="relative font-dm text-sm font-medium no-underline text-[#666666] hover:text-[#1C1C1C] transition-all duration-300 group"
          active-class="text-[#C9A84C] font-semibold"
        >
          Hoops Intelligence
          <span class="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-[#C9A84C] transition-all duration-300 group-hover:w-full"></span>
          <span class="absolute bottom-[-2px] left-0 w-full h-0.5 bg-[#C9A84C]" v-if="$route.path === '/hoops-intelligence'"></span>
        </router-link>
      </li>
    </ul>
    
    <!-- Desktop CTA -->
    <div class="flex items-center gap-3 max-lg:hidden">
      <router-link 
        to="/contact" 
        class="font-dm text-sm font-semibold px-5 py-2 bg-[#C9A84C] text-[#1C1C1C] no-underline hover:bg-[#C9A84C]/80 hover:scale-105 transition-all duration-300 rounded-full shadow-md"
      >
        Contact Us
      </router-link>
    </div>
    
    <!-- Mobile Burger Menu -->
    <button 
      @click="toggleMobileMenu" 
      class="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-all duration-300"
      aria-label="Toggle menu"
    >
      <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-[#1C1C1C]" />
      <X v-else class="w-6 h-6 text-[#1C1C1C]" />
    </button>
  </nav>
  
  <!-- Mobile Menu Overlay -->
  <div 
    v-if="isMobileMenuOpen" 
    class="fixed inset-0 z-40 lg:hidden"
    @click="closeMobileMenu"
  >
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeMobileMenu"></div>
    <div class="absolute top-24 left-6 right-6 bg-white rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
      <div class="p-6">
        <ul class="flex flex-col gap-4 list-none">
          <li>
            <router-link 
              to="/about" 
              @click="closeMobileMenu"
              class="block font-dm text-base font-medium no-underline text-[#1C1C1C] hover:text-[#C9A84C] transition-all duration-300 py-2"
              active-class="text-[#C9A84C] font-semibold"
            >
              About
            </router-link>
          </li>
          <li>
            <router-link 
              to="/services" 
              @click="closeMobileMenu"
              class="block font-dm text-base font-medium no-underline text-[#1C1C1C] hover:text-[#C9A84C] transition-all duration-300 py-2"
              active-class="text-[#C9A84C] font-semibold"
            >
              Services
            </router-link>
          </li>
          <li>
            <router-link 
              to="/football-intelligence" 
              @click="closeMobileMenu"
              class="block font-dm text-base font-medium no-underline text-[#1C1C1C] hover:text-[#C9A84C] transition-all duration-300 py-2"
              active-class="text-[#C9A84C] font-semibold"
            >
              Football Intelligence
            </router-link>
          </li>
          <li>
            <router-link 
              to="/fractional-hr" 
              @click="closeMobileMenu"
              class="block font-dm text-base font-medium no-underline text-[#1C1C1C] hover:text-[#C9A84C] transition-all duration-300 py-2"
              active-class="text-[#C9A84C] font-semibold"
            >
              Fractional HR Strategic Governance
            </router-link>
          </li>
          <li>
            <router-link 
              to="/hoops-intelligence" 
              @click="closeMobileMenu"
              class="block font-dm text-base font-medium no-underline text-[#1C1C1C] hover:text-[#C9A84C] transition-all duration-300 py-2"
              active-class="text-[#C9A84C] font-semibold"
            >
              Hoops Intelligence
            </router-link>
          </li>
        </ul>
        <div class="mt-6 pt-6 border-t border-gray-200">
          <router-link 
            to="/contact" 
            @click="closeMobileMenu"
            class="block w-full font-dm text-base font-semibold px-6 py-3 bg-[#C9A84C] text-[#1C1C1C] no-underline hover:bg-[#C9A84C]/80 hover:scale-105 transition-all duration-300 rounded-full shadow-md text-center"
          >
            Contact Us
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

.font-playfair { font-family: 'Playfair Display', serif; }
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X } from 'lucide-vue-next'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
