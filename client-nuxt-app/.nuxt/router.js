import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66d906e6 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5a7b01f4 = () => interopDefault(import('../pages/BlogPosts/index.vue' /* webpackChunkName: "pages/BlogPosts/index" */))
const _375a02df = () => interopDefault(import('../pages/BlogPosts/_id/index.vue' /* webpackChunkName: "pages/BlogPosts/_id/index" */))
const _2769515c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _66d906e6,
    name: "about"
  }, {
    path: "/BlogPosts",
    component: _5a7b01f4,
    name: "BlogPosts"
  }, {
    path: "/BlogPosts/:id",
    component: _375a02df,
    name: "BlogPosts-id"
  }, {
    path: "/",
    component: _2769515c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
