import Vue from 'vue'
import Router from 'vue-router'
import Timeline from '@/components/MainPanel/Timeline'
import Events from '@/components/MainPanel/Events'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
