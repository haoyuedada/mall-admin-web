import XEUtils from 'xe-utils';
// 自定义全局的格式化处理函数
  // 格式化性别
 export function formatSex ({ cellValue }) {
    return cellValue ? (cellValue === '1' ? '男' : '女') : ''
  }
  // 格式化下拉选项
  export function formatSelect ({ cellValue }, list) {
    const item = list.find(item => item.value === cellValue)
    return item ? item.label : ''
  }
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
export function formatDate ({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  }
  // 格式金额，默认2位数
export function formatAmount ({ cellValue }, digits) {
    return XEUtils.commafy(cellValue, { digits: digits || 2 })
  }
  // 格式化银行卡，默认每4位隔开
export function formatBankcard ({ cellValue }) {
    return XEUtils.commafy(cellValue, { spaceNumber: 4, separator: ' ' })
  }
  // 四舍五入,默认两位数
export function formatFixedNumber ({ cellValue }, digits) {
    return XEUtils.toNumber(cellValue).toFixed(digits || 2)
  }
  // 截取小数,默认两位数
export function formatCutNumber ({ cellValue }, digits) {
    return XEUtils.toFixedString(cellValue, digits || 2)
  }
  // 转换 moment 类型为字符串
export function toMomentString ({ cellValue }, format) {
    return cellValue ? cellValue.format(format) : ''
  }

