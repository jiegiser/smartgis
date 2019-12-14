/*
 * @Descripttion: 视图相关操作
 * @Author: jiegiser
 * @Date: 2019-12-13 18:45:13
 * @LastEditors: jiegiser
 * @LastEditTime: 2019-12-13 18:59:05
 */
import ol from 'ol'

class View {
  /**
   * @name: 构造视图
   * @msg: 构造视图
   * @param {param} ol.View构造项
   * @return: ol.VIew
   */
  addView(params) {
    let option = params || {}
    this.projection = ol.proj.get(option['projection'] || 'EPSG:3857')
    return new ol.View({
      center:
        option['center'] && Array.isArray(option['center'])
          ? option['center']
          : [0, 0],
          zoom:
          option['zoom'] && typeof option['zoom'] === 'number'
            ? option['zoom']
            : 0,
        minZoom:
          option['minZoom'] && typeof option['minZoom'] === 'number'
            ? option['minZoom']
            : undefined,
        maxZoom:
          option['maxZoom'] && typeof option['maxZoom'] === 'number'
            ? option['maxZoom']
            : undefined,
            projection: option['projection'] ? option['projection'] : 'EPSG:3857'
    })
  }
  /**
   * @name: 放大
   * @msg: 视图放大功能
   * @param {duration} 动画的持续时间
   * @return: 
   */
  zooIn(duration) {
    let zoom = this.map.getView().getZoom()
    // animate是对视图的动画效果进行处理
    this.map.getView().animate({
      zoom: zoom + 1,
      duration: duration && typeof duration === 'number' ? duration : 300
    })
  }
}