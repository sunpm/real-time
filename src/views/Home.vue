<template>
  <div class="home">
    <LunarText />
    <DateText />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { dataValueOf } from '@/utils/day'
import { clearTimer } from '@/utils/timer'
import DateText from '@/components/DateText.vue'
import LunarText from '@/components/LunarText.vue'

export default defineComponent({
  name: 'Home',
  components: {
    DateText,
    LunarText
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

    return {
    }
  }
})
</script>
<style lang="scss">
.home {
  line-height: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: bold;
  color: #e2ecfd;
  background-color: #0d1320;
}
</style>
