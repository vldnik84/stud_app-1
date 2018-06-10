/* eslint-disable indent */

import Vue from 'vue'
import Router from 'vue-router'
import AdsList from '@/components/AdsList'
import Login from '@/components/Login'
import Register from '@/components/Register'
import SingleAd from '@/components/SingleAd'
import AddForm from '@/components/AddForm'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AdsList',
      component: AdsList
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      /* Original - /ad:id(\d+) */
      path: '/ad:id(\\d+)',
      name: 'SingleAd',
      component: SingleAd
    },
    {
      /* Original - /:id(\d+) */
      path: '/:id(\\d+)',
      name: 'AddForm',
      component: AddForm
    },
    {
      path: '*',
      name: 'Page404',
      component: Page404
    }
  ],
  mode: 'history'
})
