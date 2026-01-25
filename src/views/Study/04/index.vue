<template>
  <div>
    <h1>HTML</h1>
    <hr />
    <p>
      （超文本标记语言，HyperText Markup
      Language）是用于创建网页的标准标记语言，通过标签（Tags）结构化文字、图像、链接等内容。它非编程语言，而是网页的骨架，常与
      CSS（样式）和 JavaScript（行为）配合使用。浏览器读取 HTML 文件（.html）并将其渲染为可视化网页
    </p>
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


</style>
