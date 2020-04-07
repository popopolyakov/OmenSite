import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'newindex'
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      }
    }
  })
}

createStore