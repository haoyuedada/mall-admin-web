<template>
  <div id="tableData">
    <vxe-table
        border
        height="95%"
        :data="tableData"
        resizable
        stripe
        highlight-hover-row
        highlight-current-row>
      <vxe-table-column title="基本信息">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="ID" title="编号"></vxe-table-column>
        <vxe-table-column field="PRCTR" title="利润中心"></vxe-table-column>
      </vxe-table-column>
      <vxe-table-column title="日期">
        <vxe-table-column field="DATBI" title="有效截至日期"></vxe-table-column>
        <vxe-table-column field="FSRQ" title="发送日期(发送程式自动生成)"></vxe-table-column>
        <vxe-table-column field="FSSJ" title="发送时间(发送程式自动生成)"></vxe-table-column>
      </vxe-table-column>
      <vxe-table-column field="KOKRS" title="控制范围"></vxe-table-column>
      <vxe-table-column field="KTEXT" title="一般姓名 "></vxe-table-column>
      <vxe-table-column field="IDLTEXT" title="长文本 "></vxe-table-column>
      <vxe-table-column field="LOCK_IND" title="锁定"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
  import { getStoAction,getGridAction } from '../../api/productCate'
  import { Message, MessageBox } from 'element-ui'

  export default {
    name: "productList",
    data(){
      return {
        tableData: []
      }
    },
    created(){
      this.getProductCateList();
    },
    methods:{
      getProductCateList(){
        let senndata = '{"info":{"dctID":"PUB_DCT_LRZX","dctPID":"#ROOT","dctPLevel":0},"pager":{"pageNo":1,"pageSize":20},"param":{"orderField":null,"orderType":"asc","sqlWhere":"","showChildren":"0","state":""}}'
        getGridAction(senndata).then((res)=>{
          this.tableData = res.data.data.rows;
        }).catch((err)=>{

        })
      }
    }
  }
</script>

<style scoped>
#tableData{
  height: 100%;
  margin-right: 12px;
  margin-left: 10px;
}
</style>
