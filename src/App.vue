<template>
  <Marquee />
</template>

<script setup lang="ts">
import Marquee from "./components/marquee/Marquee.vue"
</script>

<style lang="scss">
@font-face {
  font-family: "MiSans";
  src: url("./assets/MiSans.ttf");
}

body {
  font-family: "MiSans";
}

.box {
  height: 100vh;
  background-color: #eee;
}
</style>