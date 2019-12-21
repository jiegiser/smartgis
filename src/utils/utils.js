/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-21 17:07:45
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-21 17:14:43
 */
/**
 * @name: 判断是否为对象
 * @param {type} 
 * @return: 布尔类型
 */
const isObject = value => {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}
export {
  isObject
}