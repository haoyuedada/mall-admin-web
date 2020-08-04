<template>
    <div id="echartMain">
      <el-carousel id="carousel" :autoplay="false" style="height: 100%">
        <el-carousel-item class="carousel-item" style="height: 100%">
          <div class="carousel-item-logo">
            <svg-icon icon-class="performancelogo"/>
            <span class="carousel-item-span">中国XX资金监控平台</span>
          </div>    
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </el-carousel-item>
        <el-carousel-item>2</el-carousel-item>
        <el-carousel-item>3</el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>


	export default {
		name: "performanceBoard",
    mounted(){
		  //this.draw();
    },
    methods:{
      draw(){
        let myChart = this.$echarts.init(document.getElementById('echartMain'));
        myChart.setOption({
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
	}


</script>

<style scoped>

#carousel{
  width: 100%;
  height: 100%;
}
#echartMain{
  width: 100%;
  height: 100%;
  background-color: #1D1C25;
}
.carousel-item-logo{
  text-align: center;
  font-size: 24px;
  font-family: -webkit-body;
}
/deep/ .el-carousel__container{
  height: 100% !important;
}
.carousel-item-span{
  color:#ffffff;
}
</style>
