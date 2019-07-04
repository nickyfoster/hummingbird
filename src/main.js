// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import '@/main.scss';

import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import BarChart from '@/components/BarChart';
import OptionList from '@/components/OptionList';

Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.component('bar-chart', BarChart);
Vue.component('option-list', OptionList);

const initialState = {
    appName: 'HummingBird',
    chartData: {},
}
store(initialState)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
