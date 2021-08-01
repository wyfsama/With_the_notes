import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Main'),
    redirect: '/count',
    children: [
      {
        path: '/count',
        component: () => import('@/views/Count'),
      },
      {
        path: '/detail',
        component: () => import('@/views/Detail')
      },
      {
        path: '/report',
        component: () => import('@/views/Report')
      },
      {
        path: '/count/edit',
        component: () => import('../views/Edit')
      },
      {
        path: '/count/edit/:type',
        component: () => import('@/views/CreatPro')
      },
    ]
  },
  {
    path: '/about',
    component: () => import('@/views/About')
  }

]

const router = new VueRouter({
  routes
})

export default router
