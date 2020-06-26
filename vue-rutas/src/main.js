//clase q se importan para la utilizancion de Vue
import Vue from 'vue'//utiliza vue
import App from './App.vue'//utiliza la aplicacion principal q va a ser App.vue
import router from './router'//utiliza las rutas
import store from './store'//utiliza las store

//Aqui importamos BootstrapVue, IconsPlugin y q las utilize del archivo bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Instala cion BootstrapVue
Vue.use(BootstrapVue)
// Opcional instalacion the BootstrapVue Iconos y componetenres
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'//importamos bootstrap.css

import 'bootstrap-vue/dist/bootstrap-vue.css'//importamos bootstrap-vue.css

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
