<template>
  <div class="date-text">{{text}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DateText',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped lang="scss">

</style>
