<template>
   <li class="item">
      <article class="sentence">{{ data.content }}</article>
      <footer class="from">{{ data.from }}</footer>
   </li>
</template>

<script setup lang="ts">
import { PropType, toRefs } from "vue"
type Data = {
   content: string,
   from: string,
   remove: boolean
}
let props = defineProps({
   data: {
      type: Object as PropType<Data>,
      required: true,
   }
})

let { data } = toRefs(props);
</script>

<style lang="scss" scoped>
.item {
   position: relative;
   display: flex;
   flex-flow: column nowrap;
   flex-shrink: 0;
   box-sizing: border-box;
   margin-left: 20px;
   padding: 20px;
   width: 300px;
   border-radius: 7px;
   background-color: #fff;
   box-shadow: 0px 0px 15px rgba($color: #000000, $alpha: 0.2);
   color: #535c68;
   cursor: pointer;
   transition: all 0.2s linear;
   transform: translateY(0px) scale(1);

   .sentence {
      display: -webkit-box;
      overflow: hidden;
      flex: 1;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      font-size: 22px;

      -webkit-line-clamp: 3;
   }

   .from {
      overflow: hidden;
      align-self: flex-end;
      width: 170px;
      text-align: right;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 18px;
   }

   &:hover {
      transform: translateY(-10px) scale(1.03);

      .sentence,
      .from {
         color: #4a69bd;
      }
   }

   // icon
   &::before {
      position: absolute;
      bottom: 0px;
      left: 0px;
      z-index: 999;
      width: 100px;
      height: 100px;
      background-image: url("./icon.svg");
      background-size: cover;
      content: "";
   }
}

// 优化移动端
@media screen and (max-width: 750px) {
   .item {
      width: calc(300px / 1.2);

      .sentence {
         font-size: 20px;
      }

      .from {
         font-size: 16px;
      }

      &::before {
         width: calc(100px / 1.2);
         height: calc(100px / 1.2);
      }
   }
}
</style>