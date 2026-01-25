<template>
  <div>
    <div class="content">
      <p>我是p标签</p>
    </div>
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
.content {
  //font: 14px '宋体';
  font: italic 700 18px/1.5 '宋体';
  /**文字继随父元素的颜色, 文字大小*/
  color: red;
  font-size: 35px;
}
</style>
