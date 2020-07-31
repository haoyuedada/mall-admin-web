<template>
  <div :class="[isClose ? 'closeSideBar'  : 'openSideBar']" >
    <el-col style="height: 100%;">
      <el-menu
        style="transition: width 1.28s;width: 210px;height: 100%;"
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :background-color="globalColor"
        text-color="#fff"
        active-text-color="rgb(64, 158, 255)"
        ref="el-menu"
        :collapse="isClose ? true  : false"
        >
        <template v-for="(item,index) in menus">
          <router-link v-if="item.leaf == '1'" :to="{ path : item.path}">
            <el-menu-item :index="item.key">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </router-link>
          <el-submenu v-if="item.leaf == '0'" :index="item.key">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="(item,index) in item.children">
              <router-link :to="{path:item.path}">
                <el-menu-item :index="item.key">
                  <i :class="item.icon"></i>
                  <span>{{ item.name }}</span>
                </el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
  </div>
</template>

<style lang="scss" scoped>
  .sidebar{
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    /*background-color:#304156;*/
  }
  .openSideBar{
    transition: width .28s;
    width: 210px!important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    /*background-color:#304156;*/
    .el-submenu__icon-arrow{
      font-size: 15px !important;
    }
  }
  .closeSideBar{
    transition: width .28s;
    width: 54px!important;
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    /*background-color:#304156;*/
    .el-submenu__icon-arrow{
      transition:width .28s;
      display: none;
    }
  }
  i{
    font-size: 20px !important;
  }
</style>

<script>

  export default {
    data() {
      return {
          msg: '初始代模板',
          count:false,
          menus:[
            {
              name:'首页',
              path:'/home1',
              key:'1',
              icon:'el-icon-location',
              level:'1',
              leaf:'1',
              children:[]
            },
            {
              name:'商品',
              path:'/product',
              key:'2',
              icon:'el-icon-collection',
              level:'1',
              leaf:'0',
              children:[
                {
                  name:'表格示例',
                  path:'/product/productList',
                  key:'2-1',
                  icon:'el-icon-menu',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'表单示例',
                  path:'/product/formDemo',
                  key:'2-2',
                  icon:'el-icon-s-goods',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'看板示例',
                  path:'/product/performanceBoard',
                  key:'2-3',
                  icon:'el-icon-s-claim',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'商品类型',
                  path:'/product/productAdd',
                  key:'2-4',
                  icon:'el-icon-s-shop',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'品牌管理',
                  path:'/product/productAdd',
                  key:'2-5',
                  icon:'el-icon-collection',
                  level:'2',
                  leaf:'1',
                  children:[]
                }
              ]
            },
            {
              name:'订单',
              path:'/order',
              key:'3',
              icon:'el-icon-notebook-2',
              level:'1',
              leaf:'0',
              children:[
                {
                  name:'订单列表',
                  path:'/product/productList',
                  key:'3-1',
                  icon:'el-icon-tickets',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'订单设置',
                  path:'/product/productAdd',
                  key:'3-2',
                  icon:'el-icon-document-remove',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'退货申请处理',
                  path:'/product/productAdd',
                  key:'3-3',
                  icon:'el-icon-document-delete',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'退货原因设置',
                  path:'/product/productAdd',
                  key:'3-4',
                  icon:'el-icon-document-copy',
                  level:'2',
                  leaf:'1',
                  children:[]
                }
              ]
            },
            {
              name:'营销',
              path:'/market',
              key:'4',
              icon:'el-icon-s-shop',
              level:'1',
              leaf:'0',
              children:[
                {
                  name:'秒杀活动列表',
                  path:'/product/productList',
                  key:'4-1',
                  icon:'el-icon-data-analysis',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'优惠券列表',
                  path:'/product/productAdd',
                  key:'4-2',
                  icon:'el-icon-film',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'品牌推荐',
                  path:'/product/productAdd',
                  key:'4-3',
                  icon:'el-icon-suitcase',
                  level:'2',
                  leaf:'1',
                  children:[]
                },
                {
                  name:'新品推荐',
                  path:'/product/productAdd',
                  key:'4-4',
                  icon:'el-icon-suitcase-1',
                  level:'2',
                  leaf:'1',
                  children:[]
                }
              ]
            },
            {
              name:'升级记录',
              path:'/update',
              key:'5',
              icon:'el-icon-cpu',
              level:'1',
              leaf:'1',
              children:[]
            }
          ]
        }
    },
    computed: {
      isClose () {
        return this.$store.state.isActive;
      },
      globalColor(){
        return this.$store.state.systemColor;
      }
    },
    methods:{
      handleOpen(key, keyPath){
        /*console.log(key, keyPath);*/
      },
      handleClose(key, keyPath) {
        /*console.log(key, keyPath);*/
      }
    }
  }
</script>
