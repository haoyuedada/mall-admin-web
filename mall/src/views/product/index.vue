<template>
  <div id="tableData">
    <vxe-grid
        export-config
        border
        height="100%"
        :data="tableData"
        resizable
        stripe
        highlight-hover-row
        highlight-current-row
        keep-source
        id="toolbar_demo_1"
        :toolbar="tableToolbar"
        :custom-config="{storage: true}"
        :edit-config="{trigger: 'click', mode: 'row', showStatus: true}"
        @toolbar-button-click="toolbarButtonClickEvent">
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
    </vxe-grid>
  </div>
</template>

<script>
  import { getStoAction,getGridAction } from '../../api/productCate'
  import { Message, MessageBox } from 'element-ui'

  export default {
    name: "productList",
    data(){
      return {
        tableData: [],
        tableToolbar:{
          buttons: [
            /*{ code: 'myInsert', name: '新增' },
            { code: 'mySave', name: 'app.body.button.save', status: 'success' },
            { code: 'myExport', name: '导出数据', type: 'text', status: 'warning' },
            {
              name: '禁用按钮',
              disabled: false,
              dropdowns: [
                { code: 'other1', name: '下拉的按钮1', type: 'text', disabled: false },
                { code: 'other2', name: '下拉的按钮2', type: 'text', disabled: true },
                { code: 'other3', name: '下拉的按钮3', type: 'text', disabled: false }
              ]
            }*/
          ],
          refresh: {query:this.getProductCateList},
          export: true,
          print: true,
          zoom: true,
          custom: true
        },
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
      },
      toolbarButtonClickEvent ({ code }) {
        switch (code) {
          case 'myInsert':
            this.$refs.xGrid.insert({
              name: 'xxx'
            })
            break
          case 'mySave':
            setTimeout(() => {
              const { insertRecords, removeRecords, updateRecords } = this.$refs.xGrid.getRecordset()
              this.$XModal.message({ message: `新增 ${insertRecords.length} 条，删除 ${removeRecords.length} 条，更新 ${updateRecords.length} 条`, status: 'success' })
              this.loadData()
            }, 100)
            break
          case 'myExport':
            this.$refs.xGrid.exportData({
              type: 'csv'
            })
            break
        }
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
