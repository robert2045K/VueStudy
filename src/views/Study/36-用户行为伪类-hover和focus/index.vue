<template>
  <div>
    <div class="box">文字</div>
    <input type="text" class="search" />
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
.box {
  width: 100px;
  height: 100px;
  background-color: pink;
  text-align: center;
  line-height: 100px;
}

.box:hover {
  background-color: red;
  color: #fff;
}

.search {
  width:100px;
  height:20px;
  transition: 0.5s;
}
.search:focus {
  width: 200px;
  background-color: red;
}
</style>
