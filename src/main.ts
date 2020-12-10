import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import axios from 'axios';
import VueAxios from 'vue-axios'
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);
Vue.use(VueAxios, axios);
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
