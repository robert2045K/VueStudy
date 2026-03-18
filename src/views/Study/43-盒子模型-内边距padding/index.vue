<template>
  <div>
    <div class="box1">
      （超文本标记语言，HyperText Markup
      Language）是用于创建网页的标准标记语言，通过标签（Tags）结构化文字、图像、链接
    </div>
    <div class="title">美妆时尚热榜</div>
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
//padding的应用。
.box1 {
  width: 200px;
  height: 200px;
  background-color: orange;
  padding: 10px;
}

.title {
  width: 240px;
  height: 35px;
  border:1px solid #d9e0ee;
  border-top: 3px solid #ff8400;
  line-height: 35px;
  padding-left: 10px;
  font-size: 14px;


}

</style>
