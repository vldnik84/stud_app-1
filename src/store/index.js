import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    addsList: [
      {
        id: 1,
        name: 'test1'
      },
      {
        id: 2,
        name: 'test2'
      },
      {
        id: 3,
        name: 'test3'
      }
    ],
    addItem: {}
  },
  mutations: {
    updateAddsList (state, data) {
      state.addsList = data
    },
    updateAddItem (state, data) {
      state.addItem = data
    }
  },
  actions: {
    setList (context, params) {
      context.commit('updateAddsList', params.data)
    },
    loadById (context, params) {
      let result = {}

      context.state.addsList.forEach(item => {
        if (item.id === params.id) {
          result = item
        }
      })

      context.commit('updateAddItem', result)
    }
  }
})

export default Store
