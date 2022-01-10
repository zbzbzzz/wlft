import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    redirect: '/begin',
    component: () => import('@/views/layout/index'),
    children: [
      {
        path: '/begin',
        name: 'begin',
        component: () => import('@/views/begin')
      },
      {
        path: '/step3',
        name: 'step3',
        component: () => import('@/views/step3')
      },
      {
        path: '/step4',
        name: 'step3',
        component: () => import('@/views/step4')
      },
      {
        path: '/photo',
        name: 'photo',
        component: () => import('@/views/photo')
      },
      {
        path: '/face',
        name: 'face',
        component: () => import('@/views/face')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
