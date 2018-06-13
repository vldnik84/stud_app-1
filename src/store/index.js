/* eslint-disable indent */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    backAddress: 'http://back.loc:81/',
    adsList: [
      {
        id: '1',
        name: 'test1'
      },
      {
        id: '2',
        name: 'test2'
      },
      {
        id: '3',
        name: 'test3'
      }
    ],
    addItem: { },
    loggedIn: false
  },
  mutations: {
    updateAdsList (state, data) {
      state.adsList = data
    },
    updateAddItem (state, data) {
      state.addItem = data
    },
    updateLoggedState (state, data) {
      state.loggedIn = data
    }
  },
  actions: {
    setList (context, params) {
      context.commit('updateAdsList', params.data)
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
      context.commit('updateLoggedState', param)
    }
  }
})

export default Store
