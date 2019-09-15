import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index.vue'
import Part1 from '@/components/Part1/Part1.vue'
import Part2 from '@/components/Part2/Part2.vue'
import Part3 from '@/components/Part3/Part3.vue'
import Part1Intro from '@/components/Part1/Part1Intro.vue'
import Part2Intro from '@/components/Part2/Part2Intro.vue'
import Part3Intro from '@/components/Part3/Part3Intro.vue'
import Part3Complete from '@/components/Part3/Part3Complete'
import Part1Complete from '@/components/Part1/Part1Complete.vue'
import UserInfo from '@/components/Layout/UserInfo.vue'
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
      path: '/userinfo',
      name: 'userinfo',
      component: UserInfo
    },
    {
      path: '/part-1-intro',
      name: 'part-1-intro',
      component: Part1Intro
    },
    {
      path: '/part-2-intro',
      name: 'part-2-intro',
      component: Part2Intro
    },
    {
      path: '/part-3-intro',
      name: 'part-3-intro',
      component: Part3Intro
    },
    {
      path: '/part2',
      name: 'part2',
      component: Part2
    },
    {
      path: '/part-1-complete',
      name: 'part-1-complete',
      component: Part1Complete
    },
    {
      path: '/part-3-complete',
      name: 'part-3-complete',
      component: Part3Complete
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
