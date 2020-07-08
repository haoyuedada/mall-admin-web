<template>
  <div id="tableData" :data="list">

  </div>
</template>

<script>
  import axios from 'axios'

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
        axios({
          method: "post",
          url: "/MDM/login2.do",  //使用 api+具体接口路径
          params: {
            ENV_DS_ID: "Default",
            ENV_SERVICE_ID: "",
            SEC_ENABLE: "",
            SEC_SIGNTEXT: "",
            SEC_TOKEN: "",
            USR_EMAIL: "",
            USR_ID: "tianmeng",
            USR_LAN: "zh",
            USR_ORG: "",
            USR_PASSWORD: ""
          }
        }).then(function(res) {
          var cookie_expires = 7;//有效期（天）
          var cookie_path = "/";//路径为根路径
          var cookie_secure = false;//为true，需要https协议
          console.log(1);
          Cookies.set("USR_ID","tianmeng", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("USR_PASSWORD","", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("ENV_DS_ID","Default", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("USR_LAN","zh", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("AUTO_LOGIN",false, {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("USR_COMPANY","", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("USR_COMPANY_MC","", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
          Cookies.set("USR_ORG","000001002006006", {expires: cookie_expires, path: cookie_path,secure: cookie_secure});
        }).catch(function (error) {
          console.log(error);
        })
        axios({
          method: "post",
          url: "/MDM/version2/projects/dct/version2/GridAction.do",  //使用 api+具体接口路径
          params: {
            jsondata:'{"info":{"dctID":"TTFD_LINETYPE","dctPID":"#ROOT","dctPLevel":0},"pager":{"pageNo":1,"pageSize":20},"param":{"orderField":null,"orderType":"asc","sqlWhere":"","showChildren":"0","state":""}}'
          }
        }).then(function(res) {
          console.log(res)
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
