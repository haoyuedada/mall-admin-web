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
        /*axios.get('/api/login2.do').then(this.getHomeInfoSuccess)
        axios.get('/api/GridAction.do').then(this.getHomeInfoSuccess)*/
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
            USR_ID: "1023650",
            USR_LAN: "zh",
            USR_ORG: "",
            USR_PASSWORD: "379C99C211B8904E46CAAD9EE69A3ABF"
          }
        }).then(function(res) {
          console.log(res)
        })
        axios({
          method: "post",
          url: "/TTF/x-model/model/business/pansoftorg/version2/GridAction.do",  //使用 api+具体接口路径
          params: {
            jsondata:'84E8039CAEEFDDFF5025B8EE8CA06D0879110EBFC9AA04C5804E7D8EC1997E7B9A26B5090B0B596579F8FC0169A34A0570E856E9ABBF3E3D68207D9073BA75D3F4CFCF29EF6680679F450F758B758B9F980AB28832A73027EF0BAD0E621AD5952F6A2107A6EBF6F01FE800AFEC53A0B69338A4DAB6525D60E59BE19D83B938E7AF3BD190166C8C1E05CD6A5233D4700F9B6826050DE66A07EF29AEA12BE868A4377916ED9C369D67AD961EC0BC68D67B395072E159C5CE2F9338A4DAB6525D60E6133DAE11B81778AF3BD190166C8C1E2C76F1B94310F8DD3ED3B4934FF8700B70D4EEE35596739AA51ECB12270802C1C6E2203FB7DB1DCD3F292C262EE261CAB6329EAE28EA5060E82321A3551F8067821BE5303664506ED469E67A8F066351D7A8AFBD008CFB1C520717ECD6CC052C065BCD8869CDF7B3B49DC756EBC1841254B0ABE0CB01B0D0C76C6FD696626D3969121BE442EEC9AE1339DA4B525A2A1E5CBA6AF556206727110FF12AD06CCB9F'
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
