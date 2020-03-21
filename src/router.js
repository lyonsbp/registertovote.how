import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import VotingMap from './views/VotingMap.vue'
import UnemploymentMap from './views/UnemploymentMap.vue'

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
      path: '/corona-virus',
      name: 'corona',
      component: UnemploymentMap
    }
  ]
})
