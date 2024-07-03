<script setup lang="ts"></script>

<template>
  <div style="width: 100vw; height: 100vh; background-color: #f6f6f6" class="main">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<style scoped lang="scss">
.main {
  position: relative;
  .left {
    position: absolute;
    left: 0;
    width: 25vw;
    height: 100vh;
    background-color: skyblue;
  }

  .right {
    position: absolute;
    right: 0;
    width: 25vw;
    height: 100vh;
    background-color: papayawhip;
  }
}
</style>
