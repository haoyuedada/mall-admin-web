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
        :with-header="false"
        size="20%">
        <el-form ref="form" :model="form" label-width="80px" style="margin-top:20px">
          <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="部门">
            <el-input v-model="form.org" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="编号">
            <el-input v-model="form.orderNo" disabled="disabled"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.tel"></el-input>
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="form.idCard"></el-input>
          </el-form-item>
          <el-form-item label="成本中心">
            <el-input v-model="form.costCenter"></el-input>
          </el-form-item>
          <el-form-item label="生日">
            <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="颜色主题">
            <el-color-picker v-model="form.defaultColor" @change="setGlobalColor()"></el-color-picker>
          </el-form-item>
          <el-form-item label="信用等级">
            <el-rate v-model="form.rate" style="margin-top: 8px;"></el-rate>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
</template>

<script>
  import { getStoAction,getGridAction } from '../../api/getStoGridData'

	export default {
		name: "panelGroup",
    data(){
		  return {
        drawer: false,
        direction: 'rtl',
        form:{
          name:'田梦',
          org:'运营管理部',
          tel:'88888888',
          orderNo:'0000124',
          idCard:'3125214521542',
          costCenter:'管理费用',
          defaultColor:"#304156",
          rate:4
        },
        disabled:false
      }
    },
    mounted() {
		  this.getPersonalMessage();
    },
    methods:{
      getPersonalMessage(){
        let senndata = '{"info":{"dctID":"SSF_USERS","dctPID":"#ROOT","dctPLevel":0},"pager":{"pageNo":1,"pageSize":20},"param":{"orderField":null,"orderType":"asc","sqlWhere":"","showChildren":"0","state":""}}'
        getGridAction(senndata).then((res)=>{
          console.log(res.data.rows);
        }).catch((err)=>{
          console.log(err);
        })
      },
      setGlobalColor(){
        this.$store.state.systemColor = this.form.defaultColor;
      }
    }
	}
</script>

<style scoped lang="scss">
  .el-input__inner{
    background-color:#ffffff !important;
  }
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
