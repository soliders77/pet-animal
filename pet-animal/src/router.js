import Vue from 'vue'
import Router from 'vue-router'
import global from './components/global/1.vue'

Vue.use(Router)

export default new Router({
  routes: [
   {path:"/global",component:global}
  ]
})
