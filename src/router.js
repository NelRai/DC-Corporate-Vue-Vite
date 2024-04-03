import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import ImpressumView from './ImpressumView.vue'
import DatenschutzView from './DatenschutzView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/impressum', component: ImpressumView },
  { path: '/datenschutz', component: DatenschutzView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
export default router