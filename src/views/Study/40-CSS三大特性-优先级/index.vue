<template>
  <div>
    <div class="box" id="header" style="color:pink">Css权重优先级</div>
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
* {
  color: red !important;
}
div {
  color: blue;
}

.box {
  color: green;
}

#header {
  color: purple;
}
</style>
