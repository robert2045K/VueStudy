<template>
  <div>
    <!--兄弟选择器-->
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>
    <h2>我是标题</h2>
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>
    <p>兄弟呀，想你啦！</p>

    <ul>
      <li>兄弟</li>
      <li class="brother">兄弟</li>
      <li>兄弟</li>
      <li>兄弟</li>
      <li>兄弟</li>
      <li>兄弟</li>
    </ul>
    <div class="inputBox">
      <input type="text" required />
      <span>Your Name</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

/**
 *   关系选择器，通过位置来选择目标元素， 精准选择，常见有：
 *
 *
 *   //--------------1.后代，子代选择器，都是父子关系------------------
 *
 *   后代选择器： 选择某个元素的后代元素（不限层级，包括子元素、孙元素）
 *    .box p {
 *      color: pink;
 *    }
 *
 *    子代选择器： 选择某个元素的直接子元素（仅限一层），  选儿子那一层的所有元素
 *    .box>P {
 *      color: pink;
 *    }
 *
 *
 *    //------2.兄弟选择器，指同一层级的元素，没有父子关系。------
 *
 *    领接兄弟选择器：  选中某个元素，的第一个兄弟元素，只选一个。
 *    h2+p {
 *      color: red;
 *    }
 *
 *    通用兄弟选择器：  选中某个元素，的后面所有的兄弟元素。 可以选多个。
 *    h2~p {
 *      color: blue;
 *    }
 *
 *
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
h2 + p {
  color: red;
}
h2 ~ p {
  color: red;
}
.brother + li {
  color: red;
}
.brother ~ li {
  color: red;
}

.inputBox {
  position: relative; /* 关键：给父容器加相对定位，作为 span 的参考坐标 */
  //margin-top: 0px; /* 留点间距，防止 label 飘上去挡住上面的内容 */
}

.inputBox span {
  position: absolute;
  left: 0;
  top: 0;
  padding: 1px;
  color: #ccc;
  font-size: 1em;
  pointer-events: none;
  transition: all 0.5s;
}

/**
*  :focus：当用户点击输入框。
*  :valid：当输入框里有内容（配合 required 属性）。
*/

.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: orange;
  transform: translateX(10px) translateY(-7px);
  font-size: 0.65em;
  padding: 0 10px;
  background-color: #fff;
}
</style>
