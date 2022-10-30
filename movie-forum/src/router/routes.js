
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/PageHome.vue'), 
        name: 'Home'
      },
      { path: '/PageSuggestions', 
      component: () => import('pages/PageSuggestions.vue'),
      name:'Minhas Sugestões' 
    }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
