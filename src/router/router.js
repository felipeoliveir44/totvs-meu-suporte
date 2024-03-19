import { createRouter, createWebHistory } from 'vue-router';
import pageTotvs from '../views/pageTotvs.vue';
import pageIos from '../views/pageIos.vue';

const routes = [
  { path: '/', component: pageTotvs },
  { path: '/ios', component: pageIos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;