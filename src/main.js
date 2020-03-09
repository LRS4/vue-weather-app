import Vue from 'vue'
import App from './App.vue'
import router from './router'// loads from src/router/index.js

Vue.config.productionTip = false

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
