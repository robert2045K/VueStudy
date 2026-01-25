<template>
  <div>
    <!--后代选择器-->
    <ul class="nava">
      <li><a href="#">首面</a></li>
      <li><a href="#">产品介绍</a></li>
      <li><a href="#">合作模式</a></li>
    </ul>
    <div class="footer">
      <a href="#">关于我们</a>
      <a href="#">联系我们</a>
      <a href="#">隐么政策</a>
    </div>

    <!--子代选择器-->
    <div class="son">
      <span>我是儿子</span>
      <p>
        <span>我是孙子</span>
      </p>
      <span>我是儿子</span>
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
 *    领接兄弟选择器
 *    h2+p {
 *      color: red;
 *    }
 *
 *    通用兄弟选择器
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
/** 后代选择器*/
.footer a {
  color: red;
}
/** 写多层，
//ul li a {
//  color: blue;
//}
*/

.nava li a {
  color: red;
  font-size: 20px;
}

/** 子代择据器, 选儿子那一层的所有元素*/
.son > span {
  color: green;
}
</style>
