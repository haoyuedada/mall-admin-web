import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

//创建axios实例
const service = axios.create({
  baseURL: '', // api的base_url;反向代理设置为空，index.js中proxyTable;正常访问时设为process.env.BASE_API
  timeout: 15000 // 请求超时时间
})

//response拦截器
service.interceptors.response.use(
  response => {
    if(response.data.ret == "0"){//登录超时
      MessageBox.confirm(response.data.msg, '提示', {//注意不能用
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        this.$router.push({path:'/login'});
      })
    }
  },
  error => {
    this.$alert(error, '提示', {
      confirmButtonText: '确定'
    });
  }
)
export default service
