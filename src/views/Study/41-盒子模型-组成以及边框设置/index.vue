<template>
  <div>
    <div class="box1">实线边框</div>
    <div class="box2">虚线边框</div>
    <div class="box3">点线边枉</div>
    <div class="box4">不同边框1</div>
    <div class="box5">不同边框2</div>
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
div[class*='box'] {
  width: 200px;
  height: 200px;
  margin: 20px;
}
.box1 {
  border: 1px solid red;
}
.box2 {
  border: 1px dashed red;
}
.box3 {
  border: 1px dotted red;
}
.box4 {
  border-top: 2px solid red;
  border-bottom: 2px dotted red;
  border-left: 2px dashed red;
  border-right: 2px double red;
}
.box5 {
  border: 1px solid #d9e0ee;
  border-top: 3px solid #ff8400;
  //border-bottom: 1px solid #d9e0ee;
  //border-left: 1px solid #d9e0ee;
  //border-right: 1px solid #d9e0ee;
}
</style>
