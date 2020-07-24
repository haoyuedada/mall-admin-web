import request from '@/utils/request'
import qs from 'qs'

export function getGridAction(sendData) {
  return request({
    url:'/MDM/version2/projects/dct/version2/GridAction.do',
    method:'post',
    data: qs.stringify({
      jsondata:sendData
    })
  })
}
export function getStoAction(stoid,stoFilter,sql) {
  return request({
    url:'/FSS/version2/proplatform/showcomvoucher/version2/STOAction.do',
    method:'post',
    data: qs.stringify({
      jsondata:{
        "info":{"stoID":stoid,"stoFilter":stoFilter},
        "pager":{"pageNo":1,"pageSize":10000,"rowCount":10000},
        "param":{"orderField":"","orderType":"desc","sqlWhere":sql,"state":"data"}
      }
    })
  })
}
export function getStoCardData(sendData) {
  return request({
    url:'/FSS/version2/proplatform/showcomvoucher/version2/StoCardDataAction.do',
    method:'post',
    data: qs.stringify({
      jsondata:sendData
    })
  })
}
