<template>
  <p>我是设置页面a</p>
  <button @click="showToast" class="btn">打开 toast</button>
  <!-- to 属性就是目标位置 -->
  <teleport to="#teleport-target">
    <div v-if="visible" class="toast-wrap">
      <div class="toast-msg">我是一个 Toast 文案</div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { getCurrentInstance, inject, watch, ref } from 'vue'; // 子组件
  const instance = getCurrentInstance()
  const _this = instance.appContext.config.globalProperties // 获取全局对象\
  const name = inject('name')
  watch(name, (newValue, oldValue) => {
    console.log(name.value)
  })
  // toast 的封装
  const visible = ref(false);
  let timer;
  const showToast = () => {
    visible.value = true;
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   visible.value = false;
    // }, 2000);
  }
</script>

<style>

</style>
