<template>
  <div id="tableData" :data="list">

  </div>
</template>

<script>
  import {getStoAction} from '../../api/productCate'

  export default {
    name: "productList",
    data(){
      return {
        list: null
      }
    },
    created(){
      this.getProductCateList();
    },
    methods:{
      getProductCateList(){
        let senndata = '{"info":{"dctID":"TTFD_LINETYPE","dctPID":"#ROOT","dctPLevel":0},"pager":{"pageNo":1,"pageSize":20},"param":{"orderField":null,"orderType":"asc","sqlWhere":"","showChildren":"0","state":""}}'
        getStoAction(senndata).then((res)=>{
          if(res.data.ret == "0"){
            this.$confirm(res.data.msg, '提示', {
              confirmButtonText: '确定',
              type: 'warning'
            }).then(() => {
              this.$router.push({path:'/login'});
            })
          }
        }).catch((err)=>{
          this.$message.error(err);
        })
      },
      getHomeInfoSuccess(res){
        console.log(res);
      }
    }
  }
</script>

<style scoped>

</style>
