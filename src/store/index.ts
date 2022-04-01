import { createStore } from 'vuex'
import { clearTimer, setTimer } from '@/utils/timer'
import { dataValueOf } from '@/utils/day'

export default createStore({
  state: {
    time: 0
  },
  mutations: {
    // 更新时间戳
    updateTime (state, time) {
      state.time = time
    }
  },
  actions: {
    // 更新时间戳
    updateTime ({ commit }) {
      const timeout = 1000
      commit('updateTime', dataValueOf())
      clearTimer('realTime')
      setTimer('realTime', () => {
        commit('updateTime', dataValueOf())
      }, timeout)
    }
  },
  modules: {
  }
})
