<template>
    <div class="app-container">
      <div class="pic" style="position: absolute;padding-left: 136px;">
        <img class="pic_parent" src="@/assets/404_pages/404.png" height="300" width="500"/>
        <img class="pic_child left" src="@/assets/404_pages/404_cloud.png" height="10" width="25"/>
        <img class="pic_child middle" src="@/assets/404_pages/404_cloud.png" height="10" width="25"/>
        <img class="pic_child right" src="@/assets/404_pages/404_cloud.png" height="10" width="25"/>
      </div>
      <el-col :span="12" class="tip">
        <div style="margin-left: 100px;margin-top: 60px">
          <h1 class="color-main">OOPS!</h1>
          <h2 style="color: #606266">很抱歉，页面它不小心迷路了！</h2>
          <div style="color:#909399;font-size: 14px">请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告</div>
          <el-button style="margin-top: 20px" type="primary" round @click="handleGoMain">返回首页</el-button>
        </div>
      </el-col>
    </div>
</template>

<script>
  export default {
    name: 'wrongPage',
    data() {
      return {

      }
    },
    methods: {
      handleGoMain() {
        this.$router.push({path: '/'})
      }
    },
  }
</script>

<style scoped>
  .app-container {
    width: 80%;
    margin: 120px auto;
  }
  .tip{
    right: 25px;
    position: absolute;
  }
  .img-style {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
  .left {
    width: 80px;
    top: 17px;
    left: 220px;
    opacity: 0;
    animation-name: cloudLeft;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
</style>
