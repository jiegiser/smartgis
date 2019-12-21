/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-21 17:14:32
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-21 17:41:24
 */
class Observable {
  constructor() {
    super()
    this.Events = {}
    this.__version = 0
  }
  hasOwnKey() {
    return Function.call.bind(Object.hasOwnProperty)
  }
  slice() {
    return Function.call.bind(Array.prototype.slice)
  }
}