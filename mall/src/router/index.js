import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from '../views/layout/layout'
import login from '../views/login/index'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {path:'/404',component:()=>import('@/views/404/404'),hidden:true},
  /*{path:'/login',component:()=>import('@/views/login/index'),hidden:true},*/
  {
    path: '/',
    component: login,
    redirect: '/login',
    children: [{
      path: 'login',
      name: 'login',
      component: () => import('@/views/login/index'),
      meta: {title: '登录', icon: 'home'}
    }]
  },
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
  /*{path:'/home',component:()=>import('@/views/layout/layout'),hidden:true},*/
  {
    path: '/home',
    component: Layout,
    redirect: '/home1',
    children: [{
      path: '/home1',
      name: '/home1',
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
        meta:{title:'表格示例',icon: 'product-list'}
      },
      {
        path:'formDemo',
        name:'formDemo',
        component:()=>import('@/views/formSimple/formSimple'),
        meta:{title:'表单示例',icon: 'product-list'}
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
