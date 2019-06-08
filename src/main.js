import Vue from 'vue'
//import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import JsonCSV from 'vue-json-csv'

Vue.component('downloadCsv', JsonCSV)
Vue.use(Vuetify)
Vue.prototype.$storedata = { email: '', sector: '', other: '', part1a: [], part1b: [], part1array: [], part1eigen: [], part1lambda: 0, part1ci: 0, part1cr: 0,
 part2a: [], part2b: [], part2arrayA: [], part2arrayB: [], part2arrayC: [], part2arrayD: [], part2arrayE: [],
 part2eigenA: [], part2eigenB: [], part2eigenC: [], part2eigenD: [], part2eigenE: [],
part2lambdaA: 0, part2lambdaB: 0, part2lambdaC: 0, part2lambdaD: 0, part2lambdaE: 0,
part2ciA: 0, part2ciB: 0, part2ciC: 0, part2ciD: 0, part2ciE: 0,
part2crA: 0, part2crB: 0, part2crC: 0, part2crD: 0, part2crE: 0,
part3a: [], part3b: [], part3arrayA: [], part3arrayB: [], part3arrayC: [], part3arrayD: [], part3arrayE: [],
part3eigenA: [], part3eigenB: [], part3eigenC: [], part3eigenD: [], part3eigenE: [],
part3lambdaA: 0, part3lambdaB: 0, part3lambdaC: 0, part3lambdaD: 0, part3lambdaE: 0,
part3ciA: 0, part3ciB: 0, part3ciC: 0, part3ciD: 0, part3ciE: 0,
part3crA: 0, part3crB: 0, part3crC: 0, part3crD: 0, part3crE: 0}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
