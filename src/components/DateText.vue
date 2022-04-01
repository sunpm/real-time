<template>
  <div class="date-text">{{dateText}}</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import { dateFormat } from '@/utils/day'

export default defineComponent({
  name: 'DateText',
  setup () {
    const store = useStore()
    // 日期
    const dateText = computed(() => {
      const time = store.state.time
      return dateFormat(time, 'YYYY年MM月DD日 HH:mm:ss')
    })
    return {
      dateText
    }
  }
})
</script>

<style scoped lang="scss">

</style>
