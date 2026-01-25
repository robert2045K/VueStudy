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
</style>
