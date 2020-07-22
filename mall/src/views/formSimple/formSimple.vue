<template>
  <div class="form-demo">
    <!--<template v-for="(item,index) in vchrLayoutMaster">
      <el-row v-if="item.StoreFieldInfo == undefined">   &lt;!&ndash;表头及分组框&ndash;&gt;
        <el-col :span="24"><span>{{ item.UDisp }}</span></el-col>
      </el-row>
      <template v-if="item.StoreFieldInfo != undefined"> &lt;!&ndash;表单字段信息&ndash;&gt;
        <el-row v-for="(value,index) in item">
          <el-col :span="3">
            <span></span>
          </el-col>
        </el-row>
      </template>
    </template>-->
    <template v-for="(item,index) in vchrLayoutMaster">
      <el-row :key="index">
        <template v-for="(item1,index1) in vchrLayoutMaster">
          <el-col :span="24" v-if="item1.StoreFieldInfo == undefined && item.RIdx == item1.RIdx">{{ item1.UDisp }}</el-col>
          <el-col :span="6" v-if="item1.StoreFieldInfo != undefined && item.RIdx == item1.RIdx">{{ item1.UDisp }}</el-col>
        </template>
      </el-row>
    </template>
  </div>
</template>

<script>
  import { getVchrLayout } from '@/api/getVchrData'

	export default {
		name: "formSimple",
    data(){
		  return {
		    vchrLayoutMaster:[],
        RIdx:0
      }
    },
    created(){
		  this.getVchrLayout()
    },
    methods:{
      getVchrLayout(){
        getVchrLayout("GL_YWJT_JYFYD").then(res => {
          console.log(res);
          this.vchrLayoutMaster = res.data.data.MasterVchr.Layout;
        })
      }
    }
	}
</script>

<style scoped>

</style>
