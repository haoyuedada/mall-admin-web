//数组对象去重
export function duplicateRemove(objArr) {
  objArr.reduce(function(prev,element){
    if(!prev.find(el=>el.value==element.value)) {
      prev.push(element)
    }
    return prev
  },[])
}
