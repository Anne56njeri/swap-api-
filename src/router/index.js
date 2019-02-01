import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import characterDetails from '@/components/characterDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/details/',
      name: 'characterDetails',
      component: characterDetails
    }
  ]
})
