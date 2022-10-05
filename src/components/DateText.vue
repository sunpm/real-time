<template>
  <div class="date-text">{{ dateFormat(time) }}</div>
</template>

<script lang="ts" setup>
import {dateFormat} from '@/utils/day'
import {useTime} from "@/composables/useTime"

const {time} = useTime()

</script>

<style scoped lang="scss">

</style>
