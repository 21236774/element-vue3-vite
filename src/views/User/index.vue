<template>
<div>
  <div class="max-box">
    <div class="box" ref="box">123123</div>
    <div class="box" ref="box_1">213213</div>
    <div class="box" ref="shenzhen">21321312</div>
  </div>
</div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .box {
    width: 33%;
    height: 400px;
  }
  #shenzhen {
    width: 33%;
    height: 400px;
  }
  .max-box {
    background-color: rgba(6, 251, 254, 0.2);
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .echart-3d-bar {
    width: 100%;
    height: 500px;
  }
</style>
