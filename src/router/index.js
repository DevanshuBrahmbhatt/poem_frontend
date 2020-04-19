import Vue from 'vue'
import VueRouter from 'vue-router'
import addlogin from '../views/addlogin.vue'
import addpoem from '../views/addpoem.vue'
import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  
    {
      path:'/addlogin',
      name: 'addlogin',
      component:addlogin
    },
    {
      path:'/addpoem',
      name:'addpoem',
      component:addpoem
    },
   
  ]
  
  const router = new VueRouter({
    routes
  })
  
  export default router