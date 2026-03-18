<template>
  <div>
    <!--伪类-->
    <button disabled>注册</button>
    <br />
    <input type="checkbox" id="agree" />
    <label for="agree">同意注册协议</label>

    <!--伪元素-->
    <p>
      伪元素选择器： 1. 伪元素选择器，通过选择，元素的内部子元素，来改变元素的样式。
      2.伪元素选择器，通过选择，元素的内部子元素，来改变元素的样式。
      3.伪元素选择器，通过选择，元素的内部子元素，来改变元素的样式。
    </p>
    <textarea name="" id="" placeholder="请留言" cols="30" rows="10"></textarea>
    <div class="box">pink</div>
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
/**-----------------伪类----------**/
button {
  width: 150px;
  height: 40px;
  background: #ff6900;
  color: #fff;
  border: none;
  font-size: 16px;
}
/**
伪类选择器，
* 按钮禁用时，用伪类选择器，选中按钮的disabled状态
*也就是说, 伪类选择器，是用来选，组件状态属性，
* 相当于button执行disabled属性时，渲染指定的Css的样式
*/
button:disabled {
  background: #ccc;
}

input:checked + label {
  color: #ff6900;
}
/**----------伪类--------------------**/

/**-----------------伪元素----------**/

/**选择p元素的，第一个字符**/
p::first-letter {
  font-size: 28px;
}

textarea::placeholder {
  color: red;
}

/**
before, after伪元素
**/
.box::before {
  content: 'king1';
  color: red;
}
.box::after {
  content: 'king2';
  color: red;
}
</style>
