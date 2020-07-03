import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

//创建axios实例
const service = axios.create({
  method: "get",
  baseURL:"api/getdata",
  timeout:15000,
  params: {
    id:1
  }
})

export default service
