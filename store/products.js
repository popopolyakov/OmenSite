import axios from 'axios'

/* async function getwears() {
  data = await axios.get('/testcatalog')
  console.log(data)
  return { data }
} */

export const state = () => ({
  products: [],
})

export const mutations = {
  setItem(state, {changeString:changeString, editID:editID, changeProperty:changeProperty}) {
    console.log(changeString, editID, changeProperty)
    console.log(state.products[editID - 1][`${changeProperty}`])
    state.products[editID - 1][`${changeProperty}`] = changeString
    console.log(state.products[editID - 1][`${changeProperty}`])
  },
  setProduct(state, data) {
    console.log(data)
    state.products.concat(data)
    console.log(state.products)
  }
}

export const actions = {
  setProperty({ commit }, ctx) {
    console.log(ctx)
    commit('setItem', ctx)
  },
  async nuxtServerInit({ commit }) {
    const data = await axios.get('/api/testcatalog')
    console.log(data)
    commit('setProduct', data)
  }
}

export const getters = {
  getProducts: async s => { console.log(s.products);[...s.products]}
}