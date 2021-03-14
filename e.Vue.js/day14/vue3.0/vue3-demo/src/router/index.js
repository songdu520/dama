import { createRouter, createWebHashHistory } from 'vue-router'

// import Index from '../components/Index.vue'
// import About from '../components/About.vue'

const routes = [
  { 
    path: '/',
    component: () => import('../components/Index.vue')
  },
  { 
    path: '/about',
    component: () => import('../components/About.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('../components/Detail.vue')
    // props: true
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

router.beforeEach(async(to, from) => {
  // console.log(to)
  // if (to.fullPath === '/') {
  //   next('/detail/4578')
  // }
  // next()
  return await fn()
})

function fn() {
  // setTimeout(() => {
    return true
  // }, 1000)
}


export default router