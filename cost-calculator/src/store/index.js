import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      { id: 1, data: '22.10.2022', title: 'food', prise: 500, redact: false },
      { id: 2, data: '24.10.2022', title: 'transport', prise: 300, redact: false },
    ],
    showAdder: false,
    pages: [1],

  },
  getters: {
    getList: (state) => state.list,
    getShowAdder: (state) => state.showAdder,
    getTotalPrise: (state) => +state.list.filter(item => item.prise >= 0).reduce((sum, item) => sum + (+item.prise), 0),
    getTotalPriseTransport: (state) => +state.list.filter(item => item.title == 'transport' && item.prise >= 0).reduce((sum, item) => sum + (+item.prise), 0),
    getTotalPriseFood: (state) => +state.list.filter(item => item.title == 'food' && item.prise >= 0).reduce((sum, item) => sum + (+item.prise), 0),
    getTotalPriseHealth: (state) => +state.list.filter(item => item.title == 'health' && item.prise >= 0).reduce((sum, item) => sum + (+item.prise), 0),
    getTotalPriseEntertainment: (state) => +state.list.filter(item => item.title == 'entertainment' && item.prise >= 0).reduce((sum, item) => sum + (+item.prise), 0),
    getPages: (state) => state.pages,
    getRedact: (state) => state.list.find(item => item.redact),
  },
  mutations: {
    addCost(state, payload) { state.list = [...state.list, payload] },
    hideShowAdder(state, payload) { state.showAdder = payload },
    showShowAdder(state, payload) { state.showAdder = payload },
    addPages(state, payload) { state.pages = [...state.pages, payload] },
    delStr(state, idx) {
      state.list.splice(idx, 1);
    },
    redactStr(state, { newObj, idx }) {
      state.list.splice(idx, 1, newObj);
      state.list[idx].redact = !state.list[idx].redact
    },

    redact(state, idx) {
      state.list[idx].redact = !state.list[idx].redact;
    }
  },
  actions: {
  },
  modules: {
  }
})
