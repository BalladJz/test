<script setup lang="ts">
// const develop = import.meta.env
// console.log(develop)
</script>

<template>
  <div class="w-full h-full flex justify-center items-center">
    <div class="my_div w-[800px] h-[800px] text-[20px] border border-[#ef9364] p-[10px]">
      <div
        class="w-full h-full item"
        style="background-color: rgb(0, 0, 255, 0.1); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.2); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.3); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.4); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.5); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.6); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.7); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.8); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255, 0.9); border-radius: 10px"
      ></div>
      <div
        class="w-full h-full"
        style="background-color: rgb(0, 0, 255); border-radius: 10px"
      ></div>
      <!-- <template v-for="i in 9" :key="i">
        <div
          :style="background-color: rgb(0,0,255, 0.);border-radius: 10px;`
          class="w-full h-full"
        >
          {{ i }}
        </div>
      </template> -->
    </div>
  </div>
</template>

<style scoped lang="scss">
// .my_div {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   display: grid;
//   // grid-template-columns: 100px 200px 100px;
//   // grid-template-rows: 100px 200px 100px;
//   grid-template-columns: repeat(4, 1fr);
//   // grid-template-columns: repeat(auto-fill, minmax(100px, 2fr));
//   gap: 10px;

//   border-radius: 10px;
//   box-shadow: 0px 0px 10px 0px red;
//   // background: linear-gradient(-90deg, #fff, green, rgb(40, 152, 196));
//   // background: radial-gradient(circle at top right 50%, green, rgb(40, 152, 196));
//   // background: radial-gradient(circle at top right 50%, #ffffff, #000000);
// }

// .item {
//   grid-column: 1/3;
//   grid-row: 1/3;
// }
</style>
