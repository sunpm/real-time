<template>
  <div class="lunar-text">
    <div class="lunar-gz-date">
      <span>{{ solarLunarText?.yearCn }}</span>
      <span>{{ solarLunarText?.monthCn }}</span>
      <span>{{ solarLunarText?.dayCn }}</span>
    </div>
    <div class="lunar-gz">
      <!--壬寅年 【虎年】 癸卯月 癸未日-->
      <span>{{ solarLunarText?.gzYear }}年</span>
      <span>【{{ solarLunarText?.animal }}年】</span>
      <span>{{ solarLunarText?.gzMonth }}月</span>
      <span>{{ solarLunarText?.gzDay }}日</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useTime} from "@/composables/useTime"

const {solarLunarText} = useTime()

</script>

<style scoped lang="scss">
.lunar-text {
  text-align: center;

  span {
    margin-right: 20px;
  }
}
</style>
