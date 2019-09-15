import Vue from 'vue'
//import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import JsonCSV from 'vue-json-csv'
import VueApexCharts from 'vue-apexcharts'

Vue.component('downloadCsv', JsonCSV)
Vue.component('apexchart', VueApexCharts)
Vue.use(Vuetify, VueApexCharts)
Vue.prototype.$storedata = { email: '', sector: '', other: '', part1a: [], part1b: [], part1array: [], part1matrix: [], part1eigen: [], part1eigenScale: [], part1lambda: 0, part1ci: 0, part1cr: 0,
 part2a: [], part2b: [], part2arrayA: [], part2arrayB: [], part2arrayC: [], part2arrayD: [], part2arrayE: [],
 part2matrixA : [], part2matrixB: [], part2matrixC : [], part2matrixD : [], part2matrixE : [],
 part2eigen: {},
part2lambda: [],
part2ci: [],
part2cr: [],
part3a: [], part3b: [], part3arrayA: [], part3arrayB: [], part3arrayC: [], part3arrayD: [], part3arrayE: [],
part3matrixA : [], part3matrixB : [], part3matrixC : [], part3matrixD : [], part3matrixE : [],
part3eigen: {}, part3eigenScale: [],
part3lambda: [],
part3ci: [],
part3cr: []}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
