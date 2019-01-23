import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MainPage from '@/components/MainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    }
  ]
})
