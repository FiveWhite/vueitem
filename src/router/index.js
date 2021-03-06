import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Item from '@/components/item'
import Goods from '@/components/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/goods',
      component: Goods
    }
  ]
})
