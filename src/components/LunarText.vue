<template>
  <div class="date-text">{{dateText}}</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { dateFormat } from '@/utils/day'

export default defineComponent({
  name: 'LuDateText',
  setup (props) {
    // 日期
    const dateText = computed(() => dateFormat(props.time))
    return {
      dateText
    }
  }
})
</script>

<style scoped lang="scss">

</style>
