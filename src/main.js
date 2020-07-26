import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

require('jquery');
require('bootstrap/dist/js/bootstrap.min');

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
