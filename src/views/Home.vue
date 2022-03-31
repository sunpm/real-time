<template>
  <div class="home">
    <DateText />

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import solarLunar from 'solarlunar-es'
import { dataValueOf } from '@/utils/day'
import { clearTimer } from '@/utils/timer'
import DateText from '@/components/DateText.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DateText
  },
  setup () {
    const store = useStore()

    onMounted(async () => {
      const timeUnix = dataValueOf()
      await store.dispatch('updateTime', timeUnix)
    })

    onUnmounted(() => {
      clearTimer('realTime')
    })

    // console.log(getWeek(time.value))
    console.log(solarLunar.solar2lunar(2022, 3, 31))

    return {
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
