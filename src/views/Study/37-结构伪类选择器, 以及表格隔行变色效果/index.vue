<template>
  <div>
    <ul class="ul1">
      <li>第1个li</li>
      <li>第2个li</li>
      <li>第3个li</li>
      <li>第4个li</li>
      <li>第5个li</li>
      <li>第6个li</li>
      <li>第7个li</li>
      <li>第8个li</li>
      <li>第9个li</li>
      <li>第10个li</li>
    </ul>
    <ul class="ul2">
      <li>第1个li</li>
      <li>第2个li</li>
      <li>第3个li</li>
      <li>第4个li</li>
      <li>第5个li</li>
      <li>第6个li</li>
      <li>第7个li</li>
      <li>第8个li</li>
      <li>第9个li</li>
      <li>第10个li</li>
    </ul>

    <table class="data">
      <tr>
        <th>姓名</th>
        <th>数据</th>
        <th>日期</th>
      </tr>
      <tr>
        <td>姚明</td>
        <td>20分</td>
        <td>2007年10月30日</td>
      </tr>
      <tr>
        <td>易建联</td>
        <td>10分</td>
        <td>2007年10月30日</td>
      </tr>
      <tr>
        <td>王致治</td>
        <td>10分</td>
        <td>2007年10月30日</td>
      </tr>
      <tr>
        <td>杨</td>
        <td>10分</td>
        <td>2007年10月30日</td>
      </tr>
      <tr>
        <td>杨</td>
        <td>10分</td>
        <td>2007年10月30日</td>
      </tr>
      <tr>
        <td>杨</td>
        <td>10分</td>
        <td>2007年10月30日</td>
      </tr>
    </table>

    <table class="table2">
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
        <td>7</td>
        <td>8</td>
        <td>9</td>
      </tr>
    </table>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
.ul1 li:first-child {
  color: red;
}
.ul1 li:last-child {
  color: blue;
}
.ul1 li:nth-child(3) {
  color: green;
}
.ul1 li:nth-child(8) {
  color: purple;
}

/**奇数*/
.ul2 li:nth-child(odd) {
  color: purple;
}
/**偶数*/
.ul2 li:nth-child(even) {
  color: purple;
}

/**3的倍数个元素*/
.ul2 li:nth-child(3n) {
  color: green;
}
/**第3个以后的元素*/
.ul2 li:nth-child(n + 3) {
  color: green;
}
/**第3个以前的元素*/
.ul2 li:nth-child(-n + 3) {
  color: green;
}

.data {
  /**合并相领边框*/
  border-collapse: collapse;
  border: 1px solid #f1f1f1;
  width: 400px;
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
}

.data tr {
  height: 35px;
}

/**奇数行，隔行变色**/
.data tr:nth-child(odd) {
  background-color: #f9f9f9;
}
/**第一行**/
.data tr:first-child {
  background-color: #8fbcf1;
  color: #fff;
}
.data tr:hover {
  background-color: #f1f1f1;
}

.table2 {
  width: 300px;
  /**让表格，单元格之间的边框合并*/
  border-collapse: collapse;
}
.table2, .table2 td {
  border: 1px solid red;
}
</style>
