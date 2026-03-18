<template>
  <div>
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


</style>
