import Vue from 'vue'
import VueRouter from  'vue-router'
import Home from '../components/HelloWorld.vue'
import Weather from '../components/Weather.vue'
import About from '../components/About.vue'

// 0. If using a module system (e.g. via vue-cli), call `Vue.use(VueRouter)`.
Vue.use(VueRouter);

// 1. Define route components.
// These can (should) be imported from other files at the top as can get below warning if not
// Vue warn: You are using the runtime-only build of Vue where the template compiler is not available.
// Either pre-compile the templates into render functions, or use the compiler-included build.
// const About = { template: '<template><p>This will be the About page</p></template>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: '/weather/:location?', // : is param ? is optional
    name: 'weather',
    component: Weather
  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router