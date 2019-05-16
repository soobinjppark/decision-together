import Vue from 'vue'
//import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import JsonCSV from 'vue-json-csv'

Vue.component('downloadCsv', JsonCSV)
Vue.use(Vuetify)
Vue.prototype.$storedata = { email: '', sector: '', other: '', part1a: [], part1b: [], part2a: [],part2b: [], part3a: [], part3b: [] }


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
