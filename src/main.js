import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false    //ignorable warning message

new Vue({
  render: h => h(App),
}).$mount('#app')
