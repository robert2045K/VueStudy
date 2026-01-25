<template>
  <div>
    <!--头部内容-->
    <div class="header center"></div>
    <!--导航栏-->
    <div class="nav center"></div>
    <!--主体-->
    <div class="main center"></div>
    <!--footer-->
    <div class="footer center"></div>
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
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: black;
}
.nav {
  width: 1000px;
  height: 60px;
  background-color: skyblue;
}
.main {
  width: 1000px;
  height: 1000px;
  background-color: pink;
}
.footer {
  width: 1000px;
  height: 160px;
  background-color: purple;
}

/**水平居中, 通用写法 */
.center {
  margin: 0 auto;
}
</style>
