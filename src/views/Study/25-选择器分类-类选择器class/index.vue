<template>
  <div>
    <div class="pink">大春</div>
    <div>夏洛</div>
    <div>秋雅</div>
    <div class="pink sub-nav">冬梅</div>
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
 *
 *
 *
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
.pink {
  color: pink;
}
/**类class选择器，权重，高于类型选择器*/
div {
  color: red;
}

/**一个div, 可以有多类名*/
.sub-nav {
  font-size: 20px;
}
</style>
