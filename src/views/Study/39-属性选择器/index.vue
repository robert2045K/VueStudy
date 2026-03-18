<template>
  <div>
    <a href="#">修改文字颜色</a><br />
    <a href="#" class="font">修改文字颜色</a><br />
    <a href="#" class="font14">修改文字颜色</a><br />
    <a href="#" class="font16">修改文字颜色</a><br />
    <a href="#" class="red">修改文字颜色</a><br />

    <input type="text" />
    <input type="password" />
    <input type="checkbox" />
    <input type="radio" />
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
a {
  color: #000;
  text-decoration: none;
}

/**
*1. 选择包含属性
* 也就是a标签有class这个属性，就选出来。
*没有class属性的a标签，就没选择出。
*/
a[class] {
  color: red;
}

/**
*2.选class=font
**/
a[class='font'] {
  color: #8fbcf1;
}

/**
*2.选class的值, 以font开头
**/
a[class^='font'] {
  color: #ff6900;
}

/**
*3.选class的值, 以t14结尾
**/
a[class$='t14'] {
  color: #f3fe56;
}

/**
*4.选class的值, 包括font
**/
a[class*='font'] {
  color: #f3fe56;
}


input[type='text'],
input[type='password']{
  outline: none;
  border: none;
}
</style>
