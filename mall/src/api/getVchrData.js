import request from '@/utils/request'

export function getVchrLayout(DJLX) {
  return request({
    url:'/FSS/version2/proplatform/showcomvoucher/version2/VchrLayoutAction.do',
    method:'post',
    params: {
      jsondata:{"VCHR_ID":DJLX,"VCHR_TYPE":"","VCHR_LAYOUT_ID":"","VCHR_PRINT":""}
    }
  })
}
