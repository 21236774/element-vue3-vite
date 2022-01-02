<script setup lang="ts">

  import menuArr from '../../utils/menu'

  const handleOpen = (key: any, keyPath: any) => {
    console.log(key, keyPath);
  }
  const handleClose = (key: any, keyPath: any)=> {
    console.log(key, keyPath);
  }
</script>

<template>
<el-container>
  <el-header>
    <div class="header-top-box">欢迎：admin</div>
  </el-header>
  <el-container>
    <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu :index="item.id" v-for="item in menuArr" :key="item.id">
            <template #title>
              <span>{{ item.title }}</span>
            </template>
            <el-menu-item-group v-for="items in item.children" :key="items.id">
              <el-menu-item :index="items.id" style="padding: 0">
                <router-link style="width: 100%; padding-left: 40px; text-align: left;" tag="li" :to="items.routerPath"><span>{{ items.title }}</span></router-link>
              </el-menu-item>
            </el-menu-item-group>
            <!-- <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu> -->
          </el-sub-menu>
        </el-menu>
    </el-aside>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-container {
    height: 100%;
    overflow: hidden;
  }
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .header-top-box {
    float: right;
  }
</style>
