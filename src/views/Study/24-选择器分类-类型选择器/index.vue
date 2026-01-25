<template>
  <div>
    <div>大春</div>
    <div>夏洛</div>
    <div>秋雅</div>
    <div>冬梅</div>
    <ul>
      <li>猪爸爸</li>
      <li>猪妈妈</li>
      <li>佩奇</li>
      <li>乔治</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

/**
 * 选择器分类：
 *   基础选择器
 *   关系选择器
 *   分组选择器
 *   伪类和伪元素
 *
 *
 * 基础选择器：
 *   1-类型选择器：
 *     直接选中标签, 比如：选中p标签, 所有的p标签都会被选中
 *      p{
 *        color: gold;
 *      }
 *
 *    2-类选择器：
 *      在标签中, 加class属性：<div class='box'>
 *        .box{
 *          color: gold;
 *        }
 *
 *    3-id选择器
 *       在标签中, 加id属性：<div id='box'>
 *        #box{
 *          color: gold;
 *        }
 *
 *     4- * 通配符
 *       * {
 *         color: gold;
 *       }
 *
 *
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
div {
  color: pink
}
li {
  color: blue;
}
</style>
