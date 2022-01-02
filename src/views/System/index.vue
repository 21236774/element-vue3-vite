<template>
    <div class="box">
        嘻嘻嘻嘻
        <!--    <echart :option="picOptions" :id="'qweq-111'" :height="800"/>-->
        <emit :msg2="name" ref="edit" @myClick="myClick"></emit>
    </div>
</template>

<script setup lang="ts">
    import { defineAsyncComponent, ref, provide, onMounted } from 'vue'; // 父组件
    const emit = defineAsyncComponent(() => import('../../components/edit/index.vue'))
    const name = ref('1111')
    const edit = ref(null)
    provide('name', name)
    const myClick = (value: boolean) => {
        console.log(value);
    }
    // 方法二 适用于Vue3.2版本, 不需要引入
    // import { defineExpose } from "vue"
</script>

<style scoped>
    .box {
        width: 100%;
        height: 800px;
    }
</style>
