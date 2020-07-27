<template>
  <div class="form-demo">
    <template v-for="(item,index) in rowNum">
      <el-row :key="index" class="el-row">
        <template v-for="(item1,index1) in vchrLayoutMaster">
          <el-col :span="24" v-if="item1.ControlSource == 4 && index == item1.RIdx" class="title">{{ item1.UDisp }}</el-col>
          <el-col :span="24" v-if="item1.ControlSource == 5 && index == item1.RIdx" class="group">{{ item1.UDisp }}</el-col>
          <el-col :span="3" v-if="item1.StoreFieldInfo != undefined && index == item1.RIdx" class="el-col-field">
            <span>{{ item1.UDisp }}</span>
            <el-input :data="item1.FieldName" @input="changeInput" v-model="masterData[item1.FieldName]" v-if="item1.ControlSource == 2" size="small" style="width: 200px" :disabled="!item1.Editable"></el-input>
          </el-col>
        </template>
      </el-row>
    </template>

    <!--子凭据渲染-->
    <template v-for="(item,index) in level">
      <el-tabs type="border-card" v-for="(item1,index1) in vchrlayoutChildren[item]" :key="index1" :class="index1">
        <template v-for="(item2,index2) in item1">
          <el-tab-pane :label="item2.VarName" v-if="item2.StoreLayout != undefined"><!--不然会报undefined的错误-->
            <vxe-table
              size="medium"
              border
              :auto-resize="true"
              resizable>
              <vxe-table-column type="seq"></vxe-table-column>
              <template v-for="(item3,index3) in item2.StoreLayout.Elements">
                <vxe-table-column min-width="150" :field="item3.Name" :title="item3.Dest" v-if="item3.VisibleMode == '1'"></vxe-table-column> <!--VisibleMode控制显示-->
              </template>
            </vxe-table>
          </el-tab-pane>
        </template>
      </el-tabs>
    </template>
  </div>
</template>

<script>
  import { getVchrLayout } from '@/api/getVchrData'
  import { getStoAction,getStoCardData } from '@/api/getStoGridData'

	export default {
		name: "formSimple",
    data(){
		  return {
		    vchrLayoutMaster:[],
        vchrlayoutChildren:[],
        RIdx:0,
        rowNum:null,
        materStoId:'',
        masterData:[],
        level:null //级数，二级明细，三级明细
      }
    },
    created(){
		  this.getVchrLayout()
    },
    methods:{
      getVchrLayout(){
        getVchrLayout("GL_YWJT_JYFYD").then(res => {
          res.data.data.MasterVchr.Layout.forEach(function (k,v) {
            res.data.data.MasterVchr.Field.forEach(function (x,y) {
              if(k.ControlSource == "2" && k.FieldName == x.Name){
                res.data.data.MasterVchr.Layout[v]["Editable"] = x["Editable"];
              }
            })
          });
          this.vchrLayoutMaster = res.data.data.MasterVchr.Layout;
          this.rowNum = this.vchrLayoutMaster[this.vchrLayoutMaster.length-1]["RIdx"] + 1; //行数,用来el-row
          this.materStoId =res.data.data.MasterVchr.StoInfo.STOId;
          this.level = Object.keys(res.data.data.ChildrenVchr);
          this.vchrlayoutChildren = res.data.data.ChildrenVchr;
          let senddata = {"stoID":"GL_STO_YWCZD","stoPK":"JYFY202001120001","param":{"stoFilter":[{"F_FIELD":"F_ID","F_EXP":"=JYFY202001120001"}]}};
          getStoCardData(JSON.stringify(senddata)).then(res => {
            this.masterData = res.data.data;
          });
        })
      },
      changeInput(value){
        console.log("主表input时变化："+value);
      }
    }
	}
</script>

<style scoped>
  .form-demo{
    padding-left: 15px;
    padding-right: 15px;
  }
  /*.el-row{
    border-bottom: 1px solid #545658;
    border-left: 1px solid #545658;
    border-right: 1px solid #545658;
  }*/
  .el-row{
    padding-bottom: 17px;
  }
  .el-col-field{
    text-align: right;
    padding-right: 20px;
  }
  .title{
    text-align: center;
    font-size: 25px;
    padding-top: 30px;
  }
  .SheetsCount{
    display: none;
  }
</style>
