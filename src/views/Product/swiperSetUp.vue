<template>
    <div class="box">
        222
        <!--    <echart :option="picOptions" :id="'qweq-111'" :height="800"/>-->
        <emit :msg2="name" ref="edit" @myClick="myClick"></emit>
    </div>
</template>

<script setup lang="ts">
    import { defineAsyncComponent, ref, provide, onMounted } from 'vue'; // 父组件
    // import { picOption } from './config.js'
    // const picOptions = ref(picOption)
    const emit = defineAsyncComponent(() => import('../../components/edit/index.vue'))
    const name = ref('1111')
    const edit = ref(null)
    // const foo = Symbol('foo') // 这个方法有个bug就是 配套的多个组件同时使用实例不能只用一个key，每个实例要有不一样的key，否则会被最后调用provide方法覆盖掉
    // const bar = Symbol('foo') // 需要用Symbol()
    // console.log(foo === bar);


    onMounted(() => {
        console.log(edit.value);
    })

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
