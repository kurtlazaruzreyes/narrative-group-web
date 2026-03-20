<template>
  <footer class="bg-black text-white px-6 md:px-8 lg:px-16 pt-12 pb-0 overflow-hidden">
    <div class="flex flex-col lg:flex-row justify-between items-center mb-20 gap-8">
      
      <div class="flex items-center gap-4 order-2 lg:order-1">
        <span class="text-[0.7rem] text-white/70 tracking-tight">All rights reserved.</span>
      </div>

      <nav class="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 text-[0.75rem] md:text-[0.8rem] font-medium tracking-wide order-1 lg:order-2 max-w-full">
        <a href="/" class="hover:text-gray-400 transition-colors whitespace-nowrap">Home</a>
        <a href="/about" class="hover:text-gray-400 transition-colors whitespace-nowrap">About</a>
        <a href="/services" class="hover:text-gray-400 transition-colors whitespace-nowrap">Services</a>
        <a href="/football-intelligence" class="hover:text-gray-400 transition-colors whitespace-nowrap">Football Intelligence</a>
        <a href="/fractional-hr-strategic-governance" class="hover:text-gray-400 transition-colors whitespace-nowrap">Fractional HR</a>
        <a href="/hoops-intelligence" class="hover:text-gray-400 transition-colors whitespace-nowrap">Hoops Intelligence</a>
        <a href="/contact" class="hover:text-gray-400 transition-colors whitespace-nowrap">Contact</a>
      </nav>

      <div class="flex gap-5 items-center opacity-80 order-3">
        <a href="#" aria-label="Email" class="hover:scale-110 transition-transform"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></a>
        <a href="#" aria-label="X" class="hover:scale-110 transition-transform"><svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg></a>
        <a href="#" aria-label="Dribbble" class="hover:scale-110 transition-transform"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M8.5 2.5c1.1 2 2.1 4.3 2.1 6.2 0 2-.1 3.5-.1 3.5"/><path d="M16.3 4.1c.3 1.8.4 3.6.2 5.3-.3 3.5-2.2 6.5-5.2 8.1"/><path d="M2 12c5 0 8.5 1.5 11.1 4.5"/><path d="M5 19c3.5-3 7.1-4.2 11-4.2 1.5 0 2.8.2 4.1.5"/><path d="M12 2c.3 0 .7 0 1 .1"/></svg></a>
        <a href="#" aria-label="LinkedIn" class="hover:scale-110 transition-transform"><svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect width="16" height="16" x="3" y="3" rx="1.5"/><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 11v5"/><path d="M16 11v5"/><path d="M12 11c0-1.1.9-2 2-2s2 .9 2 2"/></svg></a>
      </div>
    </div>

    <div class="relative flex justify-center">
      <h2 class="text-[8vw] md:text-[9vw] font-medium tracking-tighter leading-[0.8] mb-[-2vw] select-none">
        <span class="block text-center"> <span class="text-gold">The Narrative Group</span></span>
        
        <span class="absolute left-0 top-full w-full block scale-y-[-1] opacity-20 bg-gradient-to-b from-white to-transparent bg-clip-text text-transparent pointer-events-none">
          <span class="text-gold">The Narrative Group</span>
        </span>
      </h2>
    </div>
  </footer>
</template>

<style scoped>
h2 span:last-child {
  mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%);
  -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%);
}
</style>