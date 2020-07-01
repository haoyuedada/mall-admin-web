import axios from 'axios'
import { Message, MessageBox } from 'element-ui'

//创建axios实例
const service = axios.create({
  baseURL:process.env.BABEL_ENV,
  timeout:15000
})

export default service
