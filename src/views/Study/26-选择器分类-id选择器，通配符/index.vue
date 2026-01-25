<template>
  <div>
    <div id="pink">大春</div>
    <div id="pink">夏洛</div>
    <div>秋雅</div>
    <div>冬梅</div>
    <ul>
      <li>猪爸爸</li>
      <li>猪妈妈</li>
      <li>佩奇</li>
      <li class="">乔治</li>
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
 * class类选择器，与id选择器的区别：
 *   class类选择器： 可以选多个元素
 *   id选择器： 选择特定id属性的唯一元素， 不可重复。同一页面中，id值必须唯一。
 *   一般与js结合使用。js用id来选元素。
 *   与js交互。
 *
 *  *通配符选择器：
 *    清除所有元素的默认边距和填充， 统一不同浏览器的默认样式。
 *    *{
 *      margin:0  //清除所有元素的外边距
 *      padding:0 //去除所有元素的内边距
 *      box-sizing: border-box  //统一盒模型
 *    }
 *
 *
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
#pink {
  color: pink;
}
</style>
