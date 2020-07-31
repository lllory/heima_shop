import Vue from 'vue'
import App from './App'
import {myRequest} from './utils/api.js'
import * as filters from './utils/filter.js'

Vue.prototype.$http = myRequest
Vue.config.productionTip = false
console.log(filters,'filterssss')
Object.keys(filters).forEach((key)=>{
	Vue.filter(key,filters[key])
})
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
