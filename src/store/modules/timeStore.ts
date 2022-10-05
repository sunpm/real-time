import {defineStore} from 'pinia'
import { clearTimer, setTimer } from '@/utils/timer'
import { dataValueOf } from '@/utils/day'

export default defineStore('time', {
  state: () => ({
    time: 0
  }),
  actions: {
    updateTime () {
      const timeout = 1000
      this.time = dataValueOf()
      clearTimer('realTime')
      setTimer('realTime', () => {
        this.time = dataValueOf()
      }, timeout)
    }
  }
})
