import Vue from 'vue';
import Router from 'vue-router';

import routes from './router';
import store from '@/store/store';

Vue.use(Router);

const router = new Router({
  routes,
});
// router.beforeEach((to, from, next) => {
//   if (to.meta.requireAuth) {
//     if (store.state.token) {
//       next();
//     } else {
//       next({
//         path: '/',
//         query: { redirect: to.fullPath },
//       });
//     }
//   } else {
//     next();
//   }
// });
export default router;
