<template>
  <div>
    <h1>这是H1标签</h1>
    <h2>这是H2标签</h2>
    <h3>这是H3标签</h3>
    <h4>这是H4标签</h4>
    <h5>这是H5标签</h5>

    <p>（超文本标记语言，HyperText Markup
    Language）是用于创建网页的标准标记语言，通过标签（Tags）结构化文字、图像、链接等内容。它非编程语言，而是网页的骨架，常与
    CSS（样式）和 JavaScript（行为）配合使用。浏览器读取 HTML 文件（.html）并将其渲染为可视化网页
      HTML 的核心概念与特点：</p>
    <h2>定义与功能： 用于描述网页结构和语义（如标题、段落、列表）。</h2>
    <p>HTML 标签 (Tags)： HTML 元素通过尖括号包围的标签来表示，通常成对出现，如  为开始标签， 为结束标签。
    非编程语言： 它是一种标记语言，用于排版和内容组织，不具备编程的逻辑判断能力。
    网页结构： 完整的 HTML 文档通常包含 （声明）、（根元素）、（元数据）和（内容）。
  版本演进： 现代网页多使用 HTML5 标准，它引入了更多语义化标签（如，使结构更清晰。
    编辑器： 可以使用记事本、VS Code、Sublime Text 等文本编辑器进行编写</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

onMounted(() => {
  console.log(props.userId)
})
</script>

<style scoped></style>
