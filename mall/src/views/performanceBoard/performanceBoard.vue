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
              <!--左-->
              <div class="page1-main-left" style="height:100%;position: relative;">
                <!--左上-->
                <div class="page1-main-left-wave" style="">
                  <div class="kanban" style="color:#FBFBFE;left:20px;">
                    <div class="title">
                      <span class="tip">实时计划金额：<span class="amount">200</span>亿</span>
                    </div>
                    <br>
                    <div class="title" style="margin-top: 4px;">
                      <span class="tip">支付金额：<span class="amount">80</span>亿</span>
                      <span class="tip">未支付金额：<span class="amount">120</span>亿</span>
                      <span class="tip">支付比例：<span class="amount">40</span>%</span>
                    </div>
                  </div>
                  <div id="wave-charts">

                  </div>
                </div>
                <!--左中-->
                <div class="page1-main-left-cylin">
                  <div class="cylin-title">
                    <span>机构计划</span>
                    <span>银行计划</span>
                    <span>重点客户</span>
                  </div>
                  <div class="cylin-chart">
                    <div id="cylin-chart1"></div>
                    <div id="cylin-chart2"></div>
                  </div>
                </div>
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
      this.$nextTick(() => {
        this.draw();
        this.drawleftbing();
        this.drawleftbar();
      });
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
            top:0,
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
              normal: {
                color:'#57A4B1',
                lineStyle:{
                  width:1//设置线条粗细
                }
              }
            },
            symbol: "none"//取消圆点
          },{
            name: '支付金额',
            type: 'line',
            data: [11, 10, 16, 13, 14, 20,21,10,18,30],
            smooth:true,
            itemStyle:{
              normal: {
                color:'#AFA35A',
                lineStyle:{
                  width:1//设置线条粗细
                }
              }
            },
            symbol: "none"//取消圆点
          }]
        });
      },
      drawleftbing(){
        let waveCharts1 = this.$echarts.init(document.getElementById('cylin-chart1'));
        waveCharts1.setOption({
          title:{
            show:false
          },
          series: [{
            name: '未支付金额',
            type: 'pie',
            data: [{name:'建设银行',value:15},{name:"农业银行",value:20}, {name:"招商银行",value:27}, {name:"工商银行",value:12}, {name:"人民银行",value:23}],
            smooth: true,
            radius : [20, 30],
            left:5,
            label:{
              color:"#fff",
              fontSize:8
            }
          }]
        })
      },
      drawleftbar(){
        let waveCharts2 = this.$echarts.init(document.getElementById('cylin-chart2'));
        waveCharts2.setOption({
          title:{
            show:false
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          name: '未支付金额',
          type: 'bar',
          xAxis: [
            {
              type: 'category',
              data: ['建行', '农行', '工行', '等等'],
              nameTextStyle:{
                color:"#fff"
              },
              axisLine:{
                show:false,
                lineStyle:{
                  color:"#fff"
                }
              },
              axisTick:{
                show:false
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              splitLine:false,
              show:false
            }
          ],
          series: [
            {
              name: '邮件营销',
              type: 'bar',
              stack: '广告',
              barWidth : 10,
              data: [20, 32, 65, 34, 90, 30, 10],
              itemStyle:{
                color:"#88878E",
                borderColor:"#fff",
                borderWidth:0.5
              }
            },
            {
              name: '联盟广告',
              type: 'bar',
              stack: '广告',
              barWidth : 10,
              data: [20, 82, 91, 34, 90, 30, 10],
              itemStyle:{
                color:"#BA7A2D",
                borderColor:"#fff",
                borderWidth:0.5
              }
            }
          ]
        })
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
  background-color: #201E2F;
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
  display: flex;
}
.page1-main-left{
  width:30%;
}
.page1-main-middle{
  flex:1;
}
.page1-main-right{
  width:30%;
}
#cylin-chart1{
  height: 150px;
  display: inline-block;
  width: 50%;
}
#cylin-chart2{
  height: 150px;
  display: inline-block;
  width: 50%;
}
.page1-main-left-cylin{
  top: 36%;
  position: absolute;
  width:100%;
}
.cylin-title{
  display: flex;
  justify-content: space-around;
  /*color: #B1B3BA;*/
  color: #ffffff;
  font-size: 13px;
  width: 100%;
}
.cylin-title span{
  background-color: #353C55;
  padding: 2px 8px 2px 8px;
  border-radius: 7px;
}
.cylin-title span:before{

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
  bottom: -5px;
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
  height: 23%;
  top: 13%;
  left: 11px;
  width: 89%;
  position: absolute !important;
}
.page1-main-left-wave .amount{
  font-size: 13px;
  font-family: yejing;
}
.page1-main-left-wave .tip{
  font-size: 12px;
}
</style>
