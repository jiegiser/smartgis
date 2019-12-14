/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-06 16:05:55
 * @LastEditors: jiegiser
 * @LastEditTime: 2019-12-13 19:08:58
 */
import ol from 'ol'
import mixin from './utils/mixins'
import Map from './map/Map'
import View from './map/View'
import BaseLayers from './layer/BaseLayers'
class S extends mixin(
  Map,
  View,
  BaseLayers
) {
  super()
}