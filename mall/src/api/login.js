import request from '@/utils/request'

export function login(username,password) {
  return request({
    url:'/MDM/login2.do',
    method:'post',
    params:{
      ENV_DS_ID: "Default",
      ENV_SERVICE_ID: "",
      SEC_ENABLE: "",
      SEC_SIGNTEXT: "",
      SEC_TOKEN: "",
      USR_EMAIL: "",
      USR_ID: username,
      USR_LAN: "zh",
      USR_ORG: "",
      USR_PASSWORD: password
    }
  })
}
