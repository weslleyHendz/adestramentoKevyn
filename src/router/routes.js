
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Obediencia.vue') },
      { path: '/obediencia-basica', component: () => import('pages/Obediencia.vue') },
      { path: '/manutencao', component: () => import('pages/Manut.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
