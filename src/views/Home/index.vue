<template>
  <BaseHeader />
</template>

<script setup lang="ts">
import BaseHeader from "../../components/layouts/BaseHeader.vue";
import { ref } from "vue";
import { getCurrentInstance } from 'vue'
const instance = getCurrentInstance()
const _this= instance.appContext.config.globalProperties // 获取全局对象
// import HelloWorld from "./components/HelloWorld.vue";
_this.$cookie.set('session', '123', '7d'); // 测试是否携带上cookie
const num = ref(0)


_this.$http.get('/user/register', {}).then(res => {
  console.log(res)
})


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.element-plus-logo {
  width: 50%;
}
</style>
