<template>
    <fullscreen ref="fullscreen" @change="fullscreenChange" style="height: 100%;position: relative;">
      <div id="echartMain">
        <el-carousel id="carousel" :autoplay="false">
          <div @click="toggle" style="position:absolute;z-index:9999;right: 2px">
            <svg-icon icon-class="arrow-expand-all" class="expand"/>
          </div>
          <el-carousel-item>
            <div class="carousel-item-logo">
              <svg-icon icon-class="performancelogo"/>
              <span class="carousel-item-span">中国XX资金监控平台</span>
            </div>
            <div class="page1-main">
              <div class="page1-main-left" style="height:100%">
                <div class="page1-main-left-wave" style="height:100%">
                  <div class="kanban" style="color:#FBFBFE;left:20px;">
                    <div class="title">
                      <span>实时计划金额：</span><span>200亿</span>
                    </div>
                    <br>
                    <div class="title" style="margin-top: 4px;">
                      <span>支付金额：</span><span>80亿</span>
                      <span>未支付金额：</span><span>120亿</span>
                      <span>支付比例：</span><span>40%</span>
                    </div>
                  </div>
                  <div id="wave-charts">

                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="page1-main-middle"></div>
              <div class="page1-main-right"></div>
            </div>
          </el-carousel-item>
          <el-carousel-item>2</el-carousel-item>
          <el-carousel-item>3</el-carousel-item>
        </el-carousel>
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
		  this.draw();
    },
    methods:{
		  draw(){
		    let waveCharts = this.$echarts.init(document.getElementById('wave-charts'));
        waveCharts.setOption({
          grid: {
            top: '4%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          title:{
            show:false
          },
          tooltip: {},
          xAxis: {
            data: ['0:00', '9:00', '3:00', '6:00', '12:00', '15:00','18:00','21:00','24:00'],
            axisLabel: {
              show: true,
              textStyle: {
                color: '#57A4B1'
              }
            },
            axisLine:{
              lineStyle:{
                //color:'#57A4B1'
              }
            }
          },
          yAxis: {
            axisLabel: {
              show: true,
              textStyle: {
                color: '#57A4B1'
              }
            },
            splitLine:{
              show:false
            }
          },
          legend:{
            right:30,
            top:5,
            data: [{
              name: '未支付金额',
              // 强制设置图形为圆。
              icon: 'circle',
              // 设置文本为红色
              textStyle: {
                color: 'red'
              }
            },{
              name: '支付金额',
              // 强制设置图形为圆。
              icon: 'circle',
              // 设置文本为红色
              textStyle: {
                color: '#fff'
              }
            }]
          },
          series: [{
            name: '未支付金额',
            type: 'line',
            data: [15, 20, 36, 15, 17, 24,18,15,25,36],
            smooth:true,
            itemStyle:{
              color:'#57A4B1'
            }
          },{
            name: '支付金额',
            type: 'line',
            data: [11, 10, 16, 13, 14, 20,21,10,18,30],
            smooth:true,
            itemStyle:{
              color:'#AFA35A'
            }
          }]
        });
      },
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
}
/deep/ .el-carousel__container{
  height: 100% !important;
}
.carousel-item-span{
  color:#ffffff;
  font-family: 'youyuan';
  font-weight: bold;
}
.expand{
  float: right;
  color: #fff;
  cursor: pointer;
  margin-right: 5px;
  margin-top: 5px;
  font-size: 33px;
}
.page1-main{
  height: 100%;
}
.page1-main-left-wave .kanban{
  border:1px solid #FFF;
  position: absolute;
  border-radius: 7px;
  padding: 4px 11px 4px 11px;
  font-size: 13px;
}
.page1-main-left-wave .kanban .title{
  background-color: #2F323A;
  padding: 5px 11px 5px 10px;
  display: inline-block;
  border-radius: 5px;
}
.page1-main-left-wave .kanban:before{
  content: '';
  position: absolute;
  width: 80%;
  height: 100%;
  bottom: -1px;
  top:-1px;
  left:10%;
  border-bottom: 1px solid #1D1C25;
  border-top: 1px solid #1D1C25;
}
.page1-main-left-wave .kanban:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 80%;
  left: -1px;
  right:-1px;
  top:10%;
  border-left: 1px solid #1D1C25;
  border-right: 1px solid #1D1C25;
}
#wave-charts{
  height: 220px;
  width: 400px;
  top:12%;
}
</style>
