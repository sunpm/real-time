import {useTimeStore} from "@/store"
import {storeToRefs} from "pinia"
import {computed} from "vue"
import solarLunar from "solarlunar-es"
import {getDate, getMonth, getYear} from "@/utils/day"

export const useTime = () => {
  const store = useTimeStore()

  store.updateTime()

  const {time} = storeToRefs(store)
  // 日期
  const solarLunarText = computed(() => {
    return solarLunar.solar2lunar(getYear(time.value), getMonth(time.value), getDate(time.value))
  })

  return {
    time,
    solarLunarText
  }
}

