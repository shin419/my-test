import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import home from './module/home'

export default function () {
  const Store = new Vuex.Store({
    modules: {
      home,
    }
  })
  return Store
}
