import { createRouter, createWebHashHistory } from 'vue-router';
import { devicesRoutes } from './modules/devices';
import { scenesRoutes } from './modules/scenes';

export const routes = [
  ...devicesRoutes,
  ...scenesRoutes,
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;