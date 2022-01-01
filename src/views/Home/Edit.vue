<template>
  <div class="box">
    <echart :option="picOptions" :height="800"/>
  </div>
</template>

<script setup lang="ts">
  import { defineAsyncComponent, ref, provide } from 'vue'; // 父组件
  const Echart = defineAsyncComponent(() => import("~/components/echart/index.vue"));
  import { picOption } from './config.js'
  const picOptions = ref(picOption)
  const emit = defineAsyncComponent(() => import('../../components/edit/index.vue'))
  const name = ref('1111')
  // const foo = Symbol('foo') // 这个方法有个bug就是 配套的多个组件同时使用实例不能只用一个key，每个实例要有不一样的key，否则会被最后调用provide方法覆盖掉
  // const bar = Symbol('foo') // 需要用Symbol()
  // console.log(foo === bar);
  provide('name', name)
</script>

<style scoped>
  .box {
    width: 100%;
    height: 800px;
  }
</style>
