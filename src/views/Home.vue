<template>
  <div class="home">
{{realTime}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { getTime } from '@/api/time'
import { dataValueOf, dateFormat } from '@/utils/day'
import { setTimer, clearTimer } from '@/utils/timer'

export default defineComponent({
  name: 'Home',
  setup () {
    const realTime = ref()
    const time = ref(0)
    onMounted(async () => {
      const { sysTime2 } = await getTime()
      realTime.value = dateFormat(sysTime2)
      time.value = dataValueOf(sysTime2)
    })

    onUnmounted(() => {
      clearTimer('realTime')
    })

    setTimer('realTime', () => {
      time.value += 1000
      realTime.value = dateFormat(time.value)
    })

    return {
      realTime
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
  color: #fff;
  background-color: #000;
}
</style>
