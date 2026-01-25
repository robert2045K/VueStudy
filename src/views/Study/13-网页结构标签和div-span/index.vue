<template>
  <div>
    <div>我是div块级元素</div>
    <div>我是div块级元素</div>
    <span>我是span标签行内元素</span>
    <span>我是span标签行内元素</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()
/**
 * <header> 网页页眉
 * <main> 网页内容
 * <nav> 导航栏
 * <atricle> 文章相关
 * <section> 分块
 * <aside>侧边栏
 * <footer>页面页脚
 *
 * div：
 * 块级元素：默认独占一行，前后会自动换行
 * 通常用于布局结构，作为容器
 * 可以包含其他块级，或行内元素
 * 没有语义
 *
 * span:
 * 行内元素：不会换行，公包裹内容的一部分
 * 用于对文本，行内元素的局部样式或操作
 * 没有语义
 *
 * */
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
