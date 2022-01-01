<template>
  <el-table :data="tableData" style="width: 100%" class="list-table">
    <el-table-column label="标题" width="180">
      <template #default="scope">
        <el-icon><timer /></el-icon>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="价格" width="180">
      <template #default="scope">
        <el-icon><timer /></el-icon>
        <span style="margin-left: 10px">{{ scope.row.name }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const tableData = ref([
    {
      date: '2016-05-03',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    },
  ])
  const handleEdit = (index: number, row: any) => {
    console.log(index, row)
  }
  const handleDelete = (index: number, row: any) => {
    console.log(index, row)
  }
</script>

<style>
  .el-main {
    line-height: 40px;
  }
</style>
