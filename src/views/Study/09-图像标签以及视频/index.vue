<template>
  <div>
    <h2>图像标签的使用</h2>
    <img :src="img" width="1900" alt="" />
    <video :src="video" width="1600" controls autoplay muted loop></video>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// import img from '../../../assets/study/1.jpg'
import img from '@/assets/study/2.png'
import video from '@/assets/study/video-full.mp4'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
