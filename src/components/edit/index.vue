<template>
  <p>{{ props.msg2 }}</p>
  <button @click="showToast" class="btn">打开 toast</button>
  <!-- to 属性就是目标位置 -->
  <teleport to="#teleport-target">
    <div v-if="visible" class="toast-wrap">
      <div class="toast-msg"></div>
    </div>
  </teleport>
</template>

<script setup lang="ts">
  import { getCurrentInstance, inject, watch, ref } from 'vue'; // 子组件
  const instance = getCurrentInstance()
  const _this = instance.appContext.config.globalProperties // 获取全局对象
  const name1 = ref(1)
  const name = inject('name') // inject深入传递子子子子子子...组件
  const props = defineProps({
    // props写法不需要引入
    msg1: String,
    msg2: {
      type:String,
      default:""
    }
  })
  defineExpose({
    childName: "这是子组件的属性",
    someMethod(){
      console.log("这是子组件的方法")
    }
  })
  console.log(props);

  const emit = defineEmits(["myClick"]) // 这个也不需要引入

  watch(name, (newValue, oldValue) => {
    console.log(name.value)
  })
  // toast 的封装
  const visible = ref(false);
  let timer;
  const showToast = () => {
    visible.value = true;
    emit('myClick', visible.value)
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   visible.value = false;
    // }, 2000);
  }
</script>

<style>

</style>
