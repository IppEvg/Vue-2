import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import modal from './plugins/index'
import apexchart from './plugins/apexchart'
Vue.component('apexchart', apexchart)





Vue.config.productionTip = false
Vue.use(modal)
new Vue({
  router,
  store,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
