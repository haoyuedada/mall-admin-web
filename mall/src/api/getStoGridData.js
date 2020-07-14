import request from '@/utils/request'

export function getGridAction(sendData) {
  return request({
    url:'/MDM/version2/projects/dct/version2/GridAction.do',
    method:'post',
    params: {
      jsondata:sendData
    }
  })
}
export function getStoAction(sendData) {
  return request({
    url:'/MDM/version2/projects/dct/version2/GridAction.do',
    method:'post',
    params: {
      jsondata:sendData
    }
  })
}
