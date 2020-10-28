import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index';
import vuetify from '@/plugins/vuetify';
import { i18n } from '@/i18n/base';

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
