import { createStore } from 'vuex'
import { clearTimer, setTimer } from '@/utils/timer'

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
    updateTime ({ commit }, time) {
      const timeout = 10000000
      commit('updateTime', time)
      clearTimer('realTime')
      setTimer('realTime', () => {
        time += timeout
        commit('updateTime', time)
      }, timeout)
    }
  },
  modules: {
  }
})
