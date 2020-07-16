<template>
  <div id="tableData">
    <div id="title">
      <svg-icon icon-class="dct" class-name="dct-icon"/>
      利润中心字典
    </div>
    <vxe-grid
        size="medium"
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
        @toolbar-button-click="toolbarButtonClickEvent"
        :loading="loading"
        :tooltip-config="{enabled: true,contentMethod: showTooltipMethod}"
        @checkbox-all="selectAllEvent"
        @checkbox-change="selectChangeEvent">
      <vxe-table-column type="checkbox" width="40"></vxe-table-column>
      <vxe-table-column title="基本信息">
        <vxe-table-column type="seq" width="60"></vxe-table-column>
        <vxe-table-column field="ID" title="编号" :filters="[{label:'id大于1000',value:1000},{label:'id大于4000',value:4000}]" :filter-method="filterMethod"></vxe-table-column>
        <vxe-table-column field="PRCTR" title="利润中心"></vxe-table-column>
      </vxe-table-column>
      <vxe-table-column title="日期">
        <vxe-table-column field="DATBI" title="有效截至日期"></vxe-table-column>
        <vxe-table-column field="FSRQ" title="发送日期(发送程式自动生成)" :formatter="formatTime"></vxe-table-column>
        <vxe-table-column field="FSSJ" title="发送时间(发送程式自动生成)" align = 'right'></vxe-table-column>
      </vxe-table-column>
      <vxe-table-column field="KOKRS" title="控制范围"></vxe-table-column>
      <vxe-table-column field="KTEXT" title="一般姓名" show-overflow></vxe-table-column>
      <vxe-table-column field="IDLTEXT" title="长文本"></vxe-table-column>
      <vxe-table-column field="LOCK_IND" title="锁定"></vxe-table-column>
    </vxe-grid>
    <vxe-pager
      border
      :loading="loading"
      :current-page="tablePage.currentPage"
      :page-size="tablePage.pageSize"
      :total="tablePage.totalResult"
      :layouts="['PrevPage', 'JumpNumber', 'NextPage', 'FullJump', 'Sizes', 'Total']"
      @page-change="handlePageChange">
    </vxe-pager>
  </div>
</template>

<script>
  import { getStoAction,getGridAction } from '../../api/getStoGridData'
  import { Message, MessageBox } from 'element-ui'
  import XEUtils from 'xe-utils'

  export default {
    name: "productList",
    data(){
      return {
        tableData: [],
        loading:false,
        tablePage: {
          currentPage: 1,
          pageSize: 10,
          totalResult: 0
        },
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
        }
      }
    },
    created(){
      this.getProductCateList();
    },
    methods:{
      getProductCateList(){
        this.loading = true;
        let senndata = '{"info":{"dctID":"PUB_DCT_LRZX","dctPID":"#ROOT","dctPLevel":0},"pager":{"pageNo":'+this.tablePage.currentPage+',"pageSize":'+this.tablePage.pageSize+'},"param":{"orderField":null,"orderType":"asc","sqlWhere":"","showChildren":"0","state":""}}'
        getGridAction(senndata).then((res)=>{
          this.tableData = res.data.data.rows;
          this.tablePage.totalResult = res.data.data.pager.RowCount;
          this.loading = false;
        }).catch((err)=>{

        })
      },
      getProductCateListPage1(){
        this.loading = true;
        let senndata = '{"info":{"dctID":"PUB_DCT_LRZX","dctPID":"#ROOT","dctPLevel":0},"pager":{"pageNo":'+this.tablePage.currentPage+',"pageSize":'+this.tablePage.pageSize+',"rowCount":'+this.tablePage.totalResult+'},"param":{"orderField":null,"orderType":"asc","sqlWhere":"","showChildren":"0","state":""}}'
        getGridAction(senndata).then((res)=>{
          this.tableData = res.data.data.rows;
          this.tablePage.totalResult = res.data.data.pager.RowCount;
          this.loading = false;
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
      },
      formatTime ({ cellValue, row, column }) {
        return XEUtils.toDateString(cellValue, 'yyyy-MM-dd HH:ss:mm')
      },
      handlePageChange ({ currentPage, pageSize }) {
        this.tablePage.currentPage = currentPage
        this.tablePage.pageSize = pageSize
        this.getProductCateListPage1();
      },
      selectAllEvent ({ checked, records }) {
        console.log(checked ? '所有勾选事件' : '所有取消事件', records)
      },
      selectChangeEvent ({ checked, records }) {
        console.log(checked ? '勾选事件' : '取消事件', records)
      },
      showTooltipMethod ({ type, column, row, items, _columnIndex }) {
        const { property } = column
        // 重写默认的提示内容
        if (property === 'role' || property === 'date') {
          if (type === 'header') {
            return column.title ? '自定义标题提示内容：' + column.title : ''
          } else if (type === 'footer') {
            return items[_columnIndex] ? '自定义表尾提示内容：' + items[_columnIndex] : ''
          }
          return row[property] ? '自定义提示内容：' + row[property] : ''
        }
        // 其余的单元格使用默认行为
        return null
      },
      filterMethod({value,row,column}){
        return row.ID >= value
      }
    }
  }
</script>

<style scoped>

</style>
