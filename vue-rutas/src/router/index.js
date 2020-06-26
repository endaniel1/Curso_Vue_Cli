import Vue from 'vue'
import VueRouter from 'vue-router'
//AQUI ES DONDE VAN LA RUTAS 
Vue.use(VueRouter)
  /*
    PATH: LA RUTA
    NAME: NOMBRE LA LA RUTA A UTILIZAR
  */
  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/caracteristicas/:id',
    name: 'Caracteristicas',
    component: () => import(/* webpackChunkName: "home" */ '../views/Caracteristicas.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import(/* webpackChunkName: "home" */ '../views/Card.vue')
  },
  {
    path: '/formulario',
    name: 'Formulario',
    component: () => import(/* webpackChunkName: "home" */ '../views/Formulario.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
