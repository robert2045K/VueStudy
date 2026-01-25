<template>
  <div>
    <!--块级元素-->
    <h1>我是块级元素</h1>
    <p>我是块级元素</p>

    <!--块级嵌套-->
    <p>
      <strong>加粗</strong>
    </p>


    <!--行内， 内联元素-->
    <strong>我是内联元素</strong><strong>我是内联元素</strong>
    <em>倾斜</em>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()
onMounted(() => {
  /**
   * 1.块级元素：div, p, h1-h6, ul, ol, dl, dt, dd form,
   *          table, hr, fieldest, legend
   *
   * 2.行内元素：a, span, img, input, label, select, button, textarea
   */
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
