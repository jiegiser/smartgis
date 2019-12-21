/*
 * @Descripttion: 
 * @Author: jiegiser
 * @Date: 2019-12-06 16:05:55
 * @LastEditors  : jiegiser
 * @LastEditTime : 2019-12-21 18:01:49
 */
import mixin from './utils/mixins'
import Map from './map/Map'
import View from './map/View'
import BaseLayers from './layer/BaseLayers'
import { isObject } from './utils/utils'
import Observable from './utils/Observable'
import { version, name, author } from '../package.json'
class S extends mixin(
  Map,
  View,
  BaseLayers
) {
  constructor() {
    super()
    this.version_ = version
    this.view = null
    this.map = null
    let _arguments = Array.prototype.slice.call(arguments)
    if(_arguments.length === 1 && isObject(_arguments[0])) {
      if(_arguments[0]['target']) {
        this.initMap(_arguments[0]['target'], _arguments[0])
      }
    } else if (
      _arguments.length === 2 &&
      _arguments[0] &&
      isObject(_arguments[1])
    ) {
      this.initMap(_arguments[0], _arguments[1])
    }
  }
  initMap (mapDiv, params = {}) {
    try {
      this.target_ = mapDiv
      this.view = this._addView(this.options_['view'])
      let layers = this.addBaseLayers(this.options_['baseLayers'])
      this.map = new ol.Map({
        target: this.target_,
        loadTilesWhileAnimating:
          typeof this.options_['loadTilesWhileAnimating'] === 'boolean'
            ? this.options_['loadTilesWhileAnimating']
            : false,
        loadTilesWhileInteracting:
          typeof this.options_['loadTilesWhileInteracting'] === 'boolean'
            ? this.options_['loadTilesWhileInteracting']
            : false,
        layers: layers,
        view: this.view,
        renderer: this.options_['renderer']
          ? this.options_['renderer']
          : undefined
      })
      this._addEvent()
      this._addMapInteraction()
      this.dispatch(EVENT_TYPE.LOAD_MAP_SUCCESS, true)
    } catch (error) {
      this.dispatch(EVENT_TYPE.LOAD_MAP_SUCCESS, error)
    }
  }
}