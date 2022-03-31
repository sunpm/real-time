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
      commit('updateTime', time)
      clearTimer('realTime')
      setTimer('realTime', () => {
        time += 1000
        commit('updateTime', time)
      })
    }
  },
  modules: {
  }
})
