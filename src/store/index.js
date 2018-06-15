/* eslint-disable indent */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const Store = new Vuex.Store({
  state: {
    backAddress: 'http://back.loc:81/',
    adsList: [ ],
    addItem: { },
    categories: { },
    categoryId: Number,
    loginState: null
  },
  mutations: {
    updateAdsList (state, data) {
      state.adsList = data
    },
    updateAddItem (state, data) {
      state.addItem = data
    },
    updateCategories (state, data) {
      state.categories = data
    },
    updateCategoryId (state, data) {
      state.categoryId = data
    },
    updateLoginState (state, data) {
      state.loginState = data
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
    setCategories (context, params) {
      let result = { }
      let i = 0
      for (let section in params) {
        let section_list = { }
        let j = 0
        for (let category in params[section].children) {
          section_list[j] = {id: params[section].children[category].id, name: params[section].children[category].name}
          j++;
        }
        result[i] = {id: params[section].category.id, name: params[section].category.name, category_list: section_list}
        i++
      }
      context.commit('updateCategories', result)
    },
    setCategoryId (context, params) {
      context.commit('updateCategoryId', params)
    },
    login (context, params) {
      context.commit('updateLoginState', params)
    }
  }
})

export default Store
