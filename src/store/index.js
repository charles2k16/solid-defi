import Vue from 'vue'
import Vuex from 'vuex'
import solid from './modules/solid'

Vue.use(Vuex)

// export const store = new Vuex.Store({ state: {} })

export default new Vuex.Store({
  modules: {
    solid
  }
})