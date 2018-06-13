/* eslint-disable indent */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    backAddress: 'http://back.loc:81/',
    adsList: [ ],
    addItem: { },
    loginStatus: false
  },
  mutations: {
    updateAdsList (state, data) {
      state.adsList = data
    },
    updateAddItem (state, data) {
      state.addItem = data
    },
    updateLoginStatus (state, data) {
      state.loginStatus = data
    }
  },
  actions: {
    /* original - context.commit('updateAdsList', params.data) */
    setList (context, params) {
      context.commit('updateAdsList', params)
    },
    loadById (context, params) {
      context.state.adsList.forEach(item => {
        if (item.id === params.id) {
          let editedItem = { }
          Object.assign(editedItem, item)
          context.commit('updateAddItem', editedItem)
        }
      })
    },
    save (context, params) {
      context.state.adsList.forEach(item => {
        if (item.id === params.item.id) {
          item.name = params.item.name
        }
      })

      context.commit('updateAdsList', context.state.adsList)
    },
    login (context, param) {
      context.commit('updateLoginStatus', param)
    }
  }
})

export default Store
