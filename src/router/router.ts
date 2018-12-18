import layout from '../views/layout/layout.vue';

const router = [
  {
    path: '/',
    name: 'index',
    component: layout,
    children: [
      {
        path: '/map',
        name: 'map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/map/index.vue'),
      },
      {
        path: '/upload',
        name: 'upload',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/upload/index.vue'),
        meta: {
          requireAuth: true,
        },
      },
      {
        path: '/login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/login/index.vue'),
      },
    ],
  },
];
export default router;
