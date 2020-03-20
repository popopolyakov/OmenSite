export const state = () => ({
    token: null
  })
  
export const mutations = {
    setToken(state, userInfo) {
      console.log(userInfo.login, userInfo.pass)
      console.log(process.env.LOGINADMIN, process.env.PASSADMIN)
      if ((userInfo.login == process.env.LOGINADMIN) & (userInfo.pass == process.env.PASSADMIN)) {
          state.token = 'truetoken'
        }
      else {
          state.token=null
      }
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit')
  },
  login({ commit }, userInfo) {
    console.log(userInfo)
    commit('setToken', userInfo)
  },
  logout({commit}) {
    commit('clearToken')
  },
}

export const getters = {
  hasToken: s => !!s.token
}