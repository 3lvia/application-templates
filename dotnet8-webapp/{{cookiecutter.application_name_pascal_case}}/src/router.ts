import { createRouter, createWebHistory } from 'vue-router';

import Root from './views/Root.vue';

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root,
    },
  ],
});

export default router;
