<template>
  <div class="wrapper">
    <ul class="content" ref="contentEL">
      <MarqueeItem v-for="(item, index) in insertContent" :key="index" :data="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import Marquee, { insertContent } from "./marquee";
import MarqueeItem from "./MarqueeItem.vue";

type EL = HTMLElement | null;
let contentEL = ref<EL>(null);

let marquee: any;
onMounted(() => {
  marquee = new Marquee<EL>(contentEL.value);
  marquee.Init()
})

onBeforeUnmount(() => {
  marquee.Stop();
})
</script>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  box-sizing: border-box;
  height: 300px;
  background-color: #bdc3c7;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);

  user-select: none;

  &:hover .content {
    animation-play-state: paused;
  }

  .content {
    display: flex;
    box-sizing: border-box;
    margin: 0px;
    padding: 30px 0;
    height: 100%;
    list-style-type: none;
    animation: Marquee 25s linear infinite;
  }
}

// 适配移动端
@media screen and (max-width: 750px) {
  .wrapper {
    height: calc(300px / 1.2);

    .content {
      padding: calc(30px / 1.2) 0px;
    }

    &:hover .content {
      // 解决移动端 hover 会一直暂停问题
      animation-play-state: running;
    }
  }
}
</style>
<!-- 全局样式 -->
<style lang="scss">
@keyframes Marquee {
  from {
    left: 0;
    transform: translateX(0px);
  }
  to {
    transform: translateX(calc(-320px * 6));
  }
}
</style>
