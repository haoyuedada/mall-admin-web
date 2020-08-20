<template>
    <fullscreen ref="fullscreen" @change="fullscreenChange" style="height: 100%;position: relative;">
      <div class="container">
        <div class="top-container">
          <div class="title"><svg-icon icon-class="performancelogo"></svg-icon><span>中国石油资金监控平台</span></div>
          <div class="expand-icon" @click="toggle()"><svg-icon icon-class="arrow-expand-all"/></div>
        </div>
        <div class="bottom-container"></div>
      </div>
    </fullscreen>
</template>

<script>
	export default {
		name: "performanceBoard",
    data(){
		  return {
        fullscreen:false
      }
    },
    mounted(){
      this.$nextTick(() => {

      });
    },
    methods:{
      toggle () {
        this.$refs['fullscreen'].toggle() // recommended
      },
      fullscreenChange(fullscreen){
        this.fullscreen = fullscreen
      }
    }
	}


</script>

<style scoped>
.container{
  height: 100%;
  background-image: url("bg.jpg");
  background-size:100% 100%;
}
.top-container{
  height:8%;
  text-align: center;
  border:1px solid red;
}
.top-container>.title{
  display: inline-block;
  font-size: 24px;
  top: 26%;
  position: relative;
  color: #fff;
}
.top-container>.title>span{
  font-family: youyuan;
  font-weight: bold;
}
.top-container>.expand-icon{
  float: right;
  font-size: 26px;
}
.bottom-container{
  height: 92%;
}
</style>
