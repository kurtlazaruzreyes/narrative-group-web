import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomeSection.vue'),
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../components/AboutSection.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../components/ServicesSection.vue'),
      meta: { title: 'Services' }
    },
    {
      path: '/football',
      name: 'football',
      component: () => import('../components/FootballIntelligenceSection.vue'),
      meta: { title: 'Football Intelligence' }
    },
    {
      path: '/hr',
      name: 'hr',
      component: () => import('../components/FractionalHRSection.vue'),
      meta: { title: 'Fractional HR' }
    },
    {
      path: '/hoops',
      name: 'hoops',
      component: () => import('../components/HoopsIntelligenceSection.vue'),
      meta: { title: 'Hoops Intelligence' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../components/ContactSection.vue'),
      meta: { title: 'Contact' }
    },
    // 404 Not Found - catch all
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/'
    }
  ],
})

// Set document.title dynamically on every navigation
router.afterEach((to) => {
  const appName = 'The Narrative Group'
  const pageTitle = to.meta.title as string | undefined
  document.title = pageTitle ? `${pageTitle} | ${appName}` : appName
})

export default router
