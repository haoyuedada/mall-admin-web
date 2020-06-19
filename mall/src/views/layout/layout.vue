<template>
  <div class="app-wrapper">
    <sideBar></sideBar>
    <div class="main-container">
      <topBar></topBar>
      <home></home>
    </div>
  </div>
</template>

<style>
  .app-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
  }
  .main-container{
    height: 100%;
    margin-left: 180px;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    background-color: #304156;
  }
  body{
    margin: 0;
  }
</style>

<script>
  import sideBar from './others/sideBar'
  import topBar from './others/topBar'
  import home from '@/home/index'
	export default {
		data() {
			return {msg: '初始代模板1'}
		},
    components:{
      sideBar,
      topBar,
      home
    },
    methods:{
      handleOpen(key, keyPath){
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
	}
</script>
