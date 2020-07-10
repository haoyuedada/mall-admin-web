<template>
  <div class="app-wrapper">
    <sideBar></sideBar>
    <div :class="['main-container',isClose ? 'closeSideBarMain'  : 'openSideBarMain']">
      <topBar></topBar>
      <AppMain></AppMain>
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
    position:relative;
    overflow: hidden;
    transition: width .28s;
    background-color: #f0f2f5;
    height: 100%;
  }
  .closeSideBarMain{
    margin-left: 54px;
  }
  .openSideBarMain{
    margin-left: 210px;
  }
  body{
    margin: 0;
  }
</style>

<script>
  import sideBar from './others/sideBar'
  import topBar from './others/topBar'
  import AppMain from './others/Appmain'
	export default {
		data() {
			return {msg: '初始代模板1'}
		},
    components:{
      sideBar,
      topBar,
      AppMain
    },
    computed:{
      isClose(){
        return this.$store.state.isActive
      }
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
