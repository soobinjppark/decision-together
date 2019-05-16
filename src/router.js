import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Part1 from '@/components/Part1.vue'
import Part2 from '@/components/Part2.vue'
import Part3 from '@/components/Part3.vue'
import Intro from '@/components/Intro.vue'
import AttIntro from '@/components/AttIntro.vue'
import AltIntro from '@/components/AltIntro.vue'
import Complete from '@/components/Complete.vue'
import UserInfo from '@/components/UserInfo.vue'
import Result from '@/components/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/part1/',
      name: 'part1',
      component: Part1
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    },
    {
      path: '/attintro',
      name: 'attintro',
      component: AttIntro
    },
    {
      path: '/altintro',
      name: 'altintro',
      component: AltIntro
    },
    {
      path: '/part2',
      name: 'part2',
      component: Part2
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    },
    {
      path: '/part3',
      name: 'part3',
      component: Part3
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    }
  ]
})
