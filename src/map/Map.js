/*
 * @Descripttion: 地图的基本操作
 * @Author: jiegiser
 * @Date: 2019-12-13 18:33:02
 * @LastEditors: jiegiser
 * @LastEditTime: 2019-12-13 18:44:30
 */
import ol from 'ol'
class Map {
  /**
   * @name: addControl 添加控件
   * @param {control} 控件实例
   * @return: 
   */
  addControl(control) {
    if (this.map && control instanceof ol.control.Control) {
      this.map.addControl(control)
    } else {
      throw new Error('地图不存在或者传入控件实例有误！')
    }
  }
}