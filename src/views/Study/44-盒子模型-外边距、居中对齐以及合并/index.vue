<template>
  <div>
    <div class="box1">第一个盒子</div>
    <div class="box2">第2个盒子</div>
    <span>行内盒子</span>
    <span>行内盒子</span>
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
/**
* class包含box
*/
[class^='box'] {
  width: 200px;
  height: 200px;
  background-color: pink;
}

.box1 {
  /**margin: 10px; //上下左右都是10px
  //margin: 10px 20px; //上下是10，  左右是20
  //margin: 10px 20px 30px; //上10, 左右20， 下30。  顺时针，上，右，下，左。*/
  margin: 10px 20px 30px 40px; /**上10，下20，左30，右40 */
}
.box2 {
  background-color: skyblue;
}

/**
* margin-top, margin-bottom对行内元素不起作用，
其他的margin-left,margin-right，padding,border都起作用。
*/
span {
  width: 100px;
  height: 100px;
  background-color:pink;
  margin: 10px 20px;
  padding: 10px;
  border:2px solid red;
}
</style>
