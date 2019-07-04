import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProfileHome from '@/components/pages/ProfileHome'
import ProfileBackground from '@/components/pages/ProfileBackground'
import ProfileSubject from '@/components/pages/ProfileSubject'
import ProfileHobbies from '@/components/pages/ProfileHobbies'
import Result from '@/components/pages/Result'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'ProfileHome',
            component: ProfileHome
        },
        {
            path: '/profile',
            name: 'ProfileHome',
            component: ProfileHome
        },
        {
          path: '/profile/background',
          name: 'ProfileBackground',
          component: ProfileBackground
        },
        {
            path: '/profile/subjects',
            name: 'ProfileSubject',
            component: ProfileSubject
        },
        {
            path: '/profile/hobbies',
            name: 'ProfileHobbies',
            component: ProfileHobbies
        },
        {
          path: '/result',
          name: 'Result',
          component: Result
        }
    ]
})
