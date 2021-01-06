import Vue from 'vue';
import App from './App.vue';
import router from '@/router/index';
import vuetify from '@/plugins/vuetify';
import { i18n } from '@/i18n/base';
import firebase from 'firebase';
import axios from 'axios'
import VueAxios from 'vue-axios'
import "animate.css";

Vue.use(VueAxios, axios)

Vue.config.productionTip = false
const config = {
  apiKey: "AIzaSyCD_9puV53HrX2mhuK0flyvFkxgjDgr3lM",
  authDomain: "michele-castelli.firebaseapp.com",
  databaseURL: "https://michele-castelli.firebaseio.com",
  projectId: "michele-castelli",
  storageBucket: "michele-castelli.appspot.com",
  messagingSenderId: "862957015050",
  appId: "1:862957015050:web:39dafad4a1e25454588ff3",
  measurementId: "G-HR612DTCQ9"
};

firebase.initializeApp(config);
new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
