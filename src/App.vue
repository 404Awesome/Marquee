<template>
  <main class="main">
    <Head />
    <Marquee />
  </main>
  <Foot />
</template>

<script setup lang="ts">
import Marquee from "./components/marquee/Marquee.vue"
import Head from "./components/header/Head.vue"
import Foot from "./components/footer/Foot.vue"
</script>

<style lang="scss">
@font-face {
  font-family: "MiSans";
  src: url("./assets/MiSans.ttf");
}

body {
  font-family: "MiSans";
}

.main {
  position: relative;
  z-index: 999;
  margin-bottom: 100px;
}
</style>