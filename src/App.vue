<script setup lang="ts">
import LunarText from '@/components/LunarText.vue'
import DateText from '@/components/DateText.vue'
</script>

<template>
  <div class="home">
    <LunarText />
    <DateText />
  </div>
</template>

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
