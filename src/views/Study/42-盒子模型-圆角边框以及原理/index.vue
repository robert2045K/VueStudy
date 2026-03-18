<template>
  <div>
    <div class="radius1"></div>
    <div class="radius2"></div>
    <div class="radius3"></div>
    <div class="radius4"></div>
    <img :src="img7" alt="" class="avatar" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import img7 from '@/assets/study/7.png'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
.radius1 {
  width: 100px;
  height: 100px;
  background-color: pink;
  border-radius: 50%;
}

.radius2 {
  width: 200px;
  height: 80px;
  background-color: pink;
  border-radius: 10px;
}

.radius3 {
  width: 200px;
  height: 40px;
  background-color: skyblue;
  border-radius: 20px;
}
.avatar {
  border-radius: 50%;
}

.radius4 {
  width: 100px;
  height: 100px;
  background-color: orange;
  border-radius: 10px 30px;
}
</style>
