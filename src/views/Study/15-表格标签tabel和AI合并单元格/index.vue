<template>
  <div>
    <h2>表格基本语法</h2>
    <table border="1">
      <thead>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
          <td>成绩</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>张三</td>
          <td>18</td>
          <td>100</td>
        </tr>
        <tr>
          <td>李四</td>
          <td>18</td>
          <td>100</td>
        </tr>
      </tbody>
    </table>

    <h2>合并单元格</h2>
    <table border="1">
      <thead>
        <tr>
          <td>姓名</td>
          <td>年龄</td>
          <td>性别</td>
          <td>爱好</td>
          <td>居住地</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>张三</td>
          <td>18</td>
          <td>男</td>
          <td>足球</td>
          <td>北京</td>
        </tr>
        <tr>
          <td>李四</td>
          <td>18</td>
          <td>男</td>
          <td>足球</td>
          <td rowspan="2">北京</td>
        </tr>
        <tr>
          <td>王五</td>
          <td>18</td>
          <td>男</td>
          <td>足球</td>
        </tr>
        <tr>
          <td>日期</td>
          <td colspan="4"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()
/**
 * 标签           作用
 * <table>     表格容器
 * <tr>         行
 * <td>        单元格
 * <th>       表头单元格
 *
 * 跨行合并：rowspan
 * 跨列合并：colspan
 * */
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
