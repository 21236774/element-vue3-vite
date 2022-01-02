<template>
  <div class="login-box">
    <div class="center">
      <el-space direction="vertical">
        <el-input v-model="userName" placeholder="请输入账号" />
        <el-input v-model="password" type="password" placeholder="请输入密码" @keyup.enter.native="addAnswer" show-password />
        <el-button type="primary" @click="toHome">登录</el-button>
      </el-space>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { ref } from "vue";
  import { ElMessage } from 'element-plus';
  import { getCurrentInstance } from 'vue'
  const instance = getCurrentInstance()
  const _this= instance.appContext.config.globalProperties // 获取全局对象
  const token = sessionStorage.getItem('token')
  const router = useRouter()
  const userName = ref('')
  const password = ref('')

  if(token) {
    router.push('/home/index')
  }

  const addAnswer = (value: object) => {
    toHome()
  }

  const toHome = async () =>{
    if(!userName.value || !password.value) {
      ElMessage({
        type: 'warning',
        duration: 1500,
        showClose: true,
        message: '请完善表单信息'
      })
      return
    }
    const { code, msg, data } = await _this.$http.get('/user/login', { username: userName.value, password: password.value })
    if(code != '200') {
        ElMessage({
        type: 'warning',
        duration: 1500,
        showClose: true,
        message: msg
      })
      return
    }
    sessionStorage.setItem('token', '123')
    router.push('/home')
  }

</script>

<style lang="scss">
  .login-box {
    height: 100%;
    position: relative;
    background: url('https://img0.baidu.com/it/u=2021728205,4000198249&fm=26&fmt=auto');
  }
  .center {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    width: 200px;
    height: 200px;
  }
  h1 {
    background-color: $h2;
  }
</style>
