<template>
  <Marquee />
</template>

<script setup lang="ts">
import Marquee from "./components/marquee/Marquee.vue"
</script>

<style lang="scss">
@font-face {
  font-family: "AlibabaPuHuiTi";
  src: url("./assets/AlibabaPuHuiTi.ttf");
}

body {
  font-family: "AlibabaPuHuiTi";
}
</style>