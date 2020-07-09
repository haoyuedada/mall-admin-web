import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

//创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

//response拦截器
/*service.interceptors.response.use(
  response => {
    if(response.data.ret == "0"){//登录超时
      this.$confirm(response.data.msg, '提示', {
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
)*/
export default service
