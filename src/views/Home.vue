<template>
  <div class="home">
    <DateText :text="dateText" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue'
import { dataValueOf, dateFormat } from '@/utils/day'
import { setTimer, clearTimer } from '@/utils/timer'
import DateText from '@/components/DateText.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DateText
  },
  setup () {
    const realTime = ref()
    const time = ref()

    onMounted(async () => {
      const timeUnix = dataValueOf()
      time.value = timeUnix
      realTime.value = dateFormat(timeUnix)
    })

    onUnmounted(() => {
      clearTimer('realTime')
    })

    setTimer('realTime', () => {
      time.value += 1000
      realTime.value = dateFormat(time.value)
    })

    // 日期
    const dateText = computed(() => dateFormat(time.value))

    return {
      realTime,
      dateText
    }
  }
})
</script>
<style lang="scss">
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: #e2ecfd;
  background-color: #0d1320;
}
</style>
