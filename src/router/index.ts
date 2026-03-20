import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HeroSection.vue'
import AboutPage from '../pages/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import FootballIntelligenceSection from '../pages/FootballIntelligenceSection.vue'
import FractionalHRSection from '../pages/FractionalHRSection.vue'
import HoopsIntelligenceSection from '../pages/HoopsIntelligenceSection.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, left: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HomePage.vue'),
      meta: { title: 'Home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutPage.vue'),
      meta: { title: 'About' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../pages/ServicesPage.vue'),
      meta: { title: 'Services' }
    },
    {
      path: '/football-intelligence',
      name: 'football-intelligence',
      component: () => import('../pages/FootballIntelligenceSection.vue'),
      meta: { title: 'Football Intelligence' }
    },
    {
      path: '/fractional-hr',
      name: 'fractional-hr',
      component: () => import('../pages/FractionalHRSection.vue'),
      meta: { title: 'Fractional HR Strategic Governance' }
    },
    {
      path: '/hoops-intelligence',
      name: 'hoops-intelligence',
      component: () => import('../pages/HoopsIntelligenceSection.vue'),
      meta: { title: 'Hoops Intelligence' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue'),
      meta: { title: 'Contact' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      redirect: '/'
    }
  ],
})

router.afterEach((to) => {
  const appName = 'The Narrative Group'
  const pageTitle = to.meta.title as string | undefined
  document.title = pageTitle ? `${pageTitle} | ${appName}` : appName
})

export default router
