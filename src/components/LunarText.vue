<template>
  <div class="lunar-text">
    <div class="lunar-gz-date">
      <span>{{solarLunarText.monthCn}}</span>
      <span>{{solarLunarText.dayCn}}</span>
      <span>{{solarLunarText.ncWeek}}</span>
    </div>
    <div class="lunar-gz">
      <!--壬寅年 【虎年】 癸卯月 癸未日-->
      <span>{{solarLunarText.gzYear}}年</span>
      <span>【{{solarLunarText.animal}}年】</span>
      <span>{{solarLunarText.gzMonth}}月</span>
      <span>{{solarLunarText.gzDay}}日</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import solarLunar from 'solarlunar-es'
import { getYear, getMonth, getDate } from '@/utils/day'

export default defineComponent({
  name: 'LunarText',
  setup () {
    const store = useStore()
    // 日期
    const solarLunarText = computed(() => {
      const time = ref(store.state.time)
      return solarLunar.solar2lunar(getYear(time), getMonth(time), getDate(time))
    })
    console.log(solarLunarText.value)
    return {
      solarLunarText
    }
  }
})
</script>

<style scoped lang="scss">
.lunar-text {
  margin-bottom: 10px;
  text-align: center;
  .lunar-gz {
    margin-top: 10px;
  }
  span {
    margin-right: 20px;
  }
}
</style>
