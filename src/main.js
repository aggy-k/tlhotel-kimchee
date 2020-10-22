import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'



Vue.prototype.$api = axios.create({
  // headers: {"X-CSRF-TOKEN": document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
})

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Expose-Headers'] = 'server,content-type,content-length,date,connection,x-final-url,access-control-allow-origin';
// axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
