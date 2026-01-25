<template>
  <div>
    <strong>加精</strong>
    <br />
    <em>倾斜</em>
    <br />
    <ins>下划线</ins>
    <br />
    <del>删除线</del>
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

<style scoped></style>
