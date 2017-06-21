import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)


export default new Vuex.Store({

  state: {
    count: 0,
  },

  getters: {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  },

  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },

  actions: {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementAsync: ({ commit }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment', 100)
          resolve()
        }, 1000)
      })
    },
  },



});


