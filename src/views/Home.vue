<template>
  <div class="home">
    <LunarText />
    <DateText />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
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
      await store.dispatch('updateTime')
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
  line-height: 1.5;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 80px;
  font-weight: bold;
  color: #e2ecfd;
  background-color: #0d1320;
}
</style>
