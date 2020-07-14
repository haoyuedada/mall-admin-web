<template>
  <div class="login">
    <el-image
      :src="urlleft"
      :fit="fit"
      class="img img-left"
    ></el-image>
    <el-image
      :src="urlright"
      :fit="fit"
      class="img img-right"
    ></el-image>
    <el-card class="login-card">
      <div class="login-title">登 录 系 统</div>
      <el-form style="margin-top: 56px;">
        <el-form-item label="">
          <span class="login-svg">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="">
          <span class="login-svg">
            <svg-icon icon-class="password" class="color-main-password"></svg-icon>
          </span>
          <el-input v-model="userpassword"></el-input>
        </el-form-item>
        <el-button type="primary" style="margin-top: 22px;" @click="login">登录</el-button>
        <el-button type="primary" style="margin-top: 22px;float: right;" @click="thirdLogin">第三方登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {login} from "../../api/login";/*正常访问调用*/
  import {setCookies} from '@/utils/cookie';
  import leftImg from '@/assets/login/left.png'
  import rightImg from '@/assets/login/right.png'

  export default {
    name: 'login',
    data() {
      return {
        username:'',
        userpassword:'',
        urlleft:leftImg,
        urlright:rightImg,
        fit:'fit'
      }
    },
    methods:{
      thirdLogin() {
        this.$alert('功能开发中', '提示', {
          confirmButtonText: '确定',
          type: 'warning',
          center: true
          /*callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }*/
        });
      },
      login(){
        let username = this.username;
        let userpassword = this.userpassword;
        if(username == ""){
          this.$message({
            message: '用户名不能为空',
            type: 'warning'
          });
          return;
        }
        login(username,userpassword).then((res)=>{
          console.log(res);
          if(res.data.RES_CODE == "2"){//用户不存在
            this.$message({
              message: res.data.RES_INFO,
              type: 'warning'
            });
          }else if(res.data.RES_CODE == "0"){//登录成功
            this.$message({
              message: res.data.RES_INFO,
              type: 'success'
            });
            this.$router.push({path:'/home'});
            //设置cookie
            setCookies("USR_ID",res.data.USR_ID);
            setCookies("USR_PASSWORD",this.userpassword); // 存明文不合适
            setCookies("ENV_DS_ID","Default");
            setCookies("USR_LAN","zh");
            setCookies("AUTO_LOGIN",false);
            setCookies("USR_COMPANY","");
            setCookies("USR_COMPANY_MC","");
            setCookies("USR_ORG",res.data.USR_DEPT);
          }else if(res.data.RES_CODE == "3"){//已有账号登录
            this.$message({
              message: res.data.RES_INFO,
              type: 'warning'
            });
          }
        }).catch((err)=>{
          console.log(err);
        });
        /*axios({
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
          console.log(res);
          if(res.data.RES_CODE == "2"){//用户不存在
            this.$message({
              message: res.data.RES_INFO,
              type: 'warning'
            });
          }else if(res.data.RES_CODE == "0") {//登录成功
            this.$message({
              message: res.data.RES_INFO,
              type: 'success'
            });
            this.$router.push({path: '/home'});
          }
        }).catch(function(error) {
          console.log(error);
        })*/
      }
    }
  }
</script>
<style scoped>
  .login{
    width:100%;
    height: 100%;
    background: #2D3A4B;
    position: absolute;
    background-image: url('../../assets/login/bg.jpg');
  }
  .login-card{
    background: #2D3A4B;
    width: 500px;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 157px;
    border:1px solid #2D3A4B;
    opacity: 0.95;
  }
  .login-title{
    position: absolute;
    width: 130px;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    left: 50%;
    margin-left: -65px;
    margin-top: 20px;
  }
  .login-svg{
    z-index: 2;
    top: 50px;
    position: relative;
    color: #889aa4;
    left: 15px;
  }
  .color-main{
    font-size: 25px;
  }
  .color-main-password{
    font-size: 19px;
  }
  /deep/ .el-input__inner{
    background-color: #283443 !important;
    color: #fff;
    padding-left: 42px;
    height: 55px;
    border: 1px solid hsla(0,0%,100%,.1);
  }
  .el-form-item{
    margin-bottom: 0px;
  }
  .img{
    animation:Updown 1s infinite alternate;
    -webkit-animation:Updown 1s alternate infinite;
  }
  @keyframes Updown {
    from {
      margin-top: 30px;
    }
    to {
      margin-top: 10px;
    }
  }
  .img-right{
    float:right;
  }
  .img-left{
    float:left;
  }
</style>
