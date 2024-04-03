// import { createApp } from 'vue'
// import router from './router'

import './style.css'
import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './HomeView.vue'
import ImpressumView from './ImpressumView.vue'
import DatenschutzView from './DatenschutzView.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/impressum', component: ImpressumView },
  { path: '/datenschutz', component: DatenschutzView }
]

if (typeof window !== 'undefined') {
    
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
   }

// export default router

// src/main.ts
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// `export const createApp` is required instead of the original `createApp(App).mount('#app')`
export const createApp = ViteSSG(
  // the root component
  App,
  // vue-router options
  { routes },
  // function to have custom setups
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
)