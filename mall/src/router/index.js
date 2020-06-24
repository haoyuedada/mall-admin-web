import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import Hello from '../components/HelloWorld'
//import About from '../components/Aboutt'
import Layout from '../views/layout/layout'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {path:'/404',component:()=>import('@/views/404/404'),hidden:true},
  {
    path:'/error',
    component: Layout,
    redirect: 'noRedirect',
    children: [{
      path: '404',
      name: 'page404',
      component: () => import('@/views/404/404'),
      meta: {title: '404', icon: 'page404'}
    }]
  },
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
  },
  {
    path:'/product',
    component:Layout,
    redirect: '/product/productList',
    name:'product',
    meta:{title: '商品',icon:'product'},
    children:[
      {
        path:'productList',
        name:'productList',
        component:()=>import('@/views/product/index'),
        meta:{title:'商品列表',icon: 'product-list'}
      }
    ]
  },
  {
    path:'*',
    redirect:'/error/404',
    name:'notFound',
    hidden:true
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
