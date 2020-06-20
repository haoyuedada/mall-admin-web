import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import Hello from '../components/HelloWorld'
//import About from '../components/Aboutt'
import Layout from '../views/layout/layout'

const routes = [
  {path:'/404',component:()=>import('@/views/404/404'),hidden:true},
  {
    path: '',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/home/index'),
      meta: {title: '首页', icon: 'home'}
    }]
  }
]
/*const router = new VueRouter({
  routes,
  mode: 'history'
})*/
export default new VueRouter({
  routes,
  mode: 'history'
})
