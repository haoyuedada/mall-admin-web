<template>
    <div class="panel">
      <el-row :gutter="40" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col"  >
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-people" @click="drawer = true">
              <svg-icon icon-class="peoples" class-name="card-panel-icon"/>
            </div>
            <div class="card-panel-tip">
              <div class="card-panel-tip-title">personnel</div>
              <div class="card-panel-tip-value">1200</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col"  >
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-clipboard">
              <svg-icon icon-class="clipboard" class-name="card-panel-icon"/>
            </div>
            <div class="card-panel-tip">
              <div class="card-panel-tip-title">file</div>
              <div class="card-panel-tip-value">1200</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col"  >
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-message">
              <svg-icon icon-class="message" class-name="card-panel-icon"/>
            </div>
            <div class="card-panel-tip">
              <div class="card-panel-tip-title">message</div>
              <div class="card-panel-tip-value">1200</div>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col"  >
          <div class="card-panel">
            <div class="card-panel-icon-wrapper icon-guide">
              <svg-icon icon-class="guide" class-name="card-panel-icon"/>
            </div>
            <div class="card-panel-tip">
              <div class="card-panel-tip-title">mail</div>
              <div class="card-panel-tip-value">1200</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-drawer
        title="我是标题"
        :visible.sync="drawer"
        :with-header="false">
        <span>我来啦!</span>
      </el-drawer>
    </div>
</template>

<script>
	export default {
		name: "panelGroup",
    data(){
		  return {
        drawer: false,
        direction: 'rtl'
      }
    },
    methods:{
      personal(){
        console.log(1);
      }
    }
	}
</script>

<style scoped lang="scss">
  .panel-group{
    margin-left: 2px !important;
    width: 100%;
    .card-panel-col{
    }
    .card-panel-tip{
      display: inline-block;
      position: relative;
      left: 84px;
      top: -12px;
    }
    .card-panel-tip-title{
      line-height: 18px;
      color: rgba(0,0,0,.45);
      font-size: 16px;
      margin-bottom: 12px;
    }
    .card-panel-tip-value{
      font-size: 20px;
      font-weight: 700;
    }
    .card-panel{
      height: 108px;
      cursor: pointer;
      font-size: 12px;
      position: relative;
      overflow: hidden;
      color: #666;
      background: #fff;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
      border-color: rgba(0, 0, 0, .05);
      position: relative;
    }
    .card-panel-icon{
      font-size: 48px;
    }
    .card-panel-icon-wrapper{
      margin-top: 17px;
      margin-left: 18px;
      width: 80px;
      margin-bottom: 18px;
      border-radius: 8px;
      transition: all 0.38s ease-out;
      display: inline-block;
    }
    .card-panel-icon{
      padding: 15px 15px 15px 15px;
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-clipboard{
      color: #36a3f7;
    }
    .icon-guide{
      color: #f4516c;
    }
    .icon-message{
      color: #34bfa3;
    }
  }
  .card-panel{
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #5ec2c6;
        color: #fff;
      }
      .icon-clipboard{
        background: #36a3f7;
        color: #fff;
      }
      .icon-guide{
        background: #f4516c;
        color: #fff;
      }
      .icon-message{
        background: #34bfa3;
        color: #fff;
      }
    }
  }
</style>
