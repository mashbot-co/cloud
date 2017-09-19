import Vue from 'vue'
import Router from 'vue-router'
import Quotes from '@/views/Quotes'
import PageOne from '@/views/PageOne'
import PageTwo from '@/views/PageTwo'
import PageThree from '@/views/PageThree'
import SignIn from '@/views/security/SignIn'
import ResetPassword from '@/views/security/ResetPassword'
import UpdatePassword from '@/views/security/UpdatePassword'
import store from '@/store/index'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/page-two',
      name: 'PageTwo',
      component: PageTwo
    },
    {
      path: '/page-three',
      name: 'PageThree',
      component: PageThree
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
      meta: { requiresAuth: false }
    },
    {
      path: '/reset-password',
      name: 'ResetPassword',
      component: ResetPassword,
      meta: { requiresAuth: false }
    },
    {
      path: '/update-password',
      name: 'UpdatePassword',
      component: UpdatePassword,
      meta: { requiresAuth: false }
    }
  ]
})

/*
 * This guard is responsible for verifying the current request
 * is permitted. A request is considered not permitted if the route
 * requires authorization and the state determines no-one is
 * logged in. If not permitted, the route will redirect to the
 * sign-in route, otherwise it will pass-through to the originally
 * requested route.
 */
router.beforeEach((to, from, next) => {
  var options = {}
  if (to.meta.requiresAuth !== false) {
    if (!store.getters.isLoggedIn) {
      options = {path: '/sign-in'}
    }
  }
  next(options)
})

router.beforeEach((to, from, next) => {
  var options = {}
  if (to.meta.requiresAuth === false) {
    if (store.getters.isLoggedIn) {
      options = {path: '/'}
    }
  }
  next(options)
})

export default router
