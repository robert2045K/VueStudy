<template>
  <div>
    <h2>1.无序列表</h2>
    <ul>
      <li>射雕英雄传</li>
      <li>神雕侠侣</li>
      <li>天龙八部</li>
      <li>鹿鼎记</li>
    </ul>

    <h2>2.有序列表</h2>
    <ol>
      <li>看视频</li>
      <li>写代码</li>
      <li>做笔记</li>
      <li>多复习</li>
    </ol>

    <h2>3.描述列表</h2>
    <dl>
      <dt>家电</dt>
      <dd>电视</dd>
      <dd>冰箱</dd>
      <dd>空调</dd>
      <dd>烟灶</dd>
    </dl>


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
