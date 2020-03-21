import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import VotingMap from './views/VotingMap.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/map',
      name: 'map',
      component: VotingMap
    },
    {
      path: '/unemployment',
      name: 'unemployment',
      component: VotingMap
    }
  ]
})
