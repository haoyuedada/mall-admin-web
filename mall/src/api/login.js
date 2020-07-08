import request from '@/utils/request'

export function login(username,password) {
  return request({
    url:process.env.BASE_API+'/login22.do',
    method:'post',
    data:{
      username,
      password
    }
  })
}
