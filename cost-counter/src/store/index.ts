import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { id: 1, data: '22.10.2022', title: 'food', prise: 500 },
      { id: 2, data: '24.10.2022', title: 'transport', prise: 300 },
    ],
    showAdder: false,
  },
  getters: {
    getList: (state) => state.list,
    getShowAdder: (state) => state.showAdder,
    getTotalPrise: (state) => +state.list.reduce((sum, item) => sum + (+item.prise), 0),
  },
  mutations: {
    addCost(state, payload) { state.list = [...state.list, payload] },
    hideShowAdder(state, payload) { state.showAdder = payload },
    showShowAdder(state, payload) { state.showAdder = payload },
  },
  actions: {
  },
  modules: {
  }
})
