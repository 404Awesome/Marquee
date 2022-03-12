<template>
   <footer class="footer">
      <p>
         <span>数据来自</span>
         <a target="_blank" href="https://hitokoto.cn/">"一言"</a>
      </p>
   </footer>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.footer {
   position: fixed;
   right: 0px;
   bottom: 0px;
   left: 0px;
   display: flex;
   align-items: flex-end;
   justify-content: center;
   height: 50vh;
   background-color: #353b48;

   p {
      margin: 0px;
      color: #fff;
      font-size: 20px;
      line-height: 100px;

      a {
         margin-left: 15px;
         color: #4a69bd;
         text-decoration: none;
      }
   }
}
</style>