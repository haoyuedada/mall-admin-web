<template>
  <div class="login">
    <el-card class="login-card">
      <div class="login-title">登录系统</div>
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
  import axios from 'axios';
  import {login} from "../../api/login";

  export default {
    name: 'login',
    data() {
      return {
        username:'',
        userpassword:''
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
        axios({
          method: "post",
          url: process.env.BASE_API+"/login2.do",  //使用 api+具体接口路径
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
        }).catch(function(error) {
          console.log(error);
        })
      }
    }
  }
</script>

<style>
  .login{
    width:100%;
    height: 100%;
    background: #2D3A4B;
    position: absolute;
  }
  .login-card{
    background: #2D3A4B;
    width: 500px;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 157px;
    border:1px solid #2D3A4B;
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
  .el-input__inner{
    background-color: #283443 !important;
    color: #fff;
    padding-left: 42px;
    height: 55px;
    border: 1px solid hsla(0,0%,100%,.1);
  }
  .el-form-item{
    margin-bottom: 0px;
  }
</style>
