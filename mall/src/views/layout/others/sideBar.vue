<template>
  <div :class="[isActive ? 'closeSideBar'  : 'openSideBar']">
    <el-col>
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#304156"
        text-color="#fff"
        active-text-color="rgb(64, 158, 255)">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-collection"></i>
            <span>商品</span>
          </template>
          <el-menu-item index="2-1">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-s-goods"></i>
            <span slot="title">添加商品</span>
          </el-menu-item>
          <el-menu-item index="2-3">
            <i class="el-icon-s-claim"></i>
            <span slot="title">商品分类</span>
          </el-menu-item>
          <el-menu-item index="2-4">
            <i class="el-icon-s-shop"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="2-5">
            <i class="el-icon-collection"></i>
            <span slot="title">品牌管理</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-notebook-2"></i>
            <span>订单</span>
          </template>
          <el-menu-item index="3-1">
            <i class="el-icon-tickets"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-document-remove"></i>
            <span slot="title">订单设置</span>
          </el-menu-item>
          <el-menu-item index="3-3">
            <i class="el-icon-document-delete"></i>
            <span slot="title">退货申请处理</span>
          </el-menu-item>
          <el-menu-item index="3-4">
            <i class="el-icon-document-copy"></i>
            <span slot="title">退货原因设置</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-s-shop"></i>
            <span>营销</span>
          </template>
          <el-menu-item index="4-1">
            <i class="el-icon-data-analysis"></i>
            <span slot="title">秒杀活动列表</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <i class="el-icon-film"></i>
            <span slot="title">优惠券列表</span>
          </el-menu-item>
          <el-menu-item index="4-3">
            <i class="el-icon-suitcase"></i>
            <span slot="title">品牌推荐</span>
          </el-menu-item>
          <el-menu-item index="4-4">
            <i class="el-icon-suitcase-1"></i>
            <span slot="title">新品推荐</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-cpu"></i>
            <span>升级记录</span>
          </template>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<style>
  .sidebar{
    height: 100%;
    position: fixed;
    font-size: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
    background-color:#304156;
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
    background-color:#304156;
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
    background-color:#304156;
  }
</style>

<script>

  export default {
    data() {
      return {
          msg: '初始代模板',
          isActive:count,
          count:false
        }
    },
    computed: {
      count () {
        return this.$store.state.isActive
      }
    },
    methods:{
      handleOpen(key, keyPath){
        console.log(key, keyPath);
        console.log(this.$store.state.isActive);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handle(){
        this.isActive = !this.isActive;
      }
    }
  }
</script>
