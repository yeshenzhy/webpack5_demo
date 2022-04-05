/*
 * @Descripttion: 
 * @Author: zhy
 * @Date: 2022-04-05 11:48:27
 * @LastEditTime: 2022-04-05 11:48:27
 */


const state = {
  size: 100,
}

const mutations = {
    SET_SIZE: (state, size) => {
        state.size = size
    }
}

const actions = {
    setSize({ commit }, size) {
        commit('SET_SIZE', size)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
