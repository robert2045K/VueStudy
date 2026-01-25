<template>
  <div>
    <a href="https://www.deepseek.com">depseek一下</a>
    <a href="#">产品介绍</a>
    <a href="#">联系方式</a>
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
/**链接伪类*/

/**未访问链接*/
a:link {
  color: #000;
  text-decoration: none;
}
/**已访问，链接*/
a:visited {
  color: orange;
  text-decoration: none;
}

/**鼠标经过，链接*/
a:hover {
  color: red;
  text-decoration: underline;
}

/**被点击，链接, 按住鼠标不放时的颜色。*/
a:active {
  color: blue;
  text-decoration: none;
}


/**一般写下面2个就可以了**
a {
  text-decoration: none;
  color: #000;
}
a:hover {
  color: red;
}
*/
</style>
