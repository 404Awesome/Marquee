<template>
   <header class="header">
      <h1>Marquee</h1>
   </header>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.header {
   display: flex;
   align-items: center;
   flex-flow: column nowrap;
   justify-content: space-evenly;
   box-sizing: border-box;
   height: calc(100vh - 300px);
   background-color: #4a69bd;

   h1 {
      margin: 0px;
      color: #fff;
      font-weight: 400;
      font-size: 80px;
   }

   &::after {
      position: absolute;
      bottom: 320px;
      left: 50%;
      width: 30px;
      height: 30px;
      background-image: url("../../assets/arrowhead.svg");
      background-size: cover;
      content: "";
      transform: translateX(-50%);
      animation: Dance ease-in-out 1s infinite alternate-reverse;
   }
}

@media screen and (max-width: 750px) {
   .header {
      height: calc(100vh - (300px / 1.2));

      h1 {
         font-size: 60px;
      }

      &::after {
         bottom: 270px;
      }
   }
}

@keyframes Dance {
   from {
      transform: translateX(-50%) translateY(0px);
   }

   to {
      transform: translateX(-50%) translateY(-10px);
   }
}
</style>