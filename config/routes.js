export default [
  {
    path: '/',
    component: '../layouts/index',
    routes: [
      {
        path: '/',
        component: '../pages/index',
      },
      {
        path: '/test',
        component: '../pages/test',
      },
    ],
  },
];
