// 导入vue实例
import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Vcharts from 'v-charts'

import App from './App'
import router from './router'
import store from './vuex/store'
import Cookies from 'js-cookie'
import './icons'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

import XEUtils from 'xe-utils'
//样式
import "@/styles/dct/dct.css"

import echarts from 'echarts'
import fullscreen from 'vue-fullscreen'

import '@/fonts/css/font.css'

Vue.use(ElementUI);
Vue.use(Vcharts);
Vue.use(Cookies);
Vue.use(VXETable);
Vue.use(fullscreen);
Vue.prototype.$utils = XEUtils
Vue.prototype.$echarts = echarts;
//实例化Vue实例
new Vue({
  //定义Vue绑定的跟元素
  el: '#app',
  //用<App/>代替根元素
  template: '<App/>',
  //声明App组件，这样上面的<App/>元素就可以生效
  components: { App },
  //将上面声明的路由器传递到根Vue实例
  router,
  store
})//将这个实例挂载到id=app的根元素上
