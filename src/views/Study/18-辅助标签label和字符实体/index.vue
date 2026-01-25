<template>
  <div>
    <form action="">
      <!--1 单行文本框和密码框-->
      <ul>
        <!--1 label 方式1 for id 关联  点击男或女，都会有选中功能-->
        <li>
          性别：
          <input type="radio" name="gender" value="0" checked id="girl" />
          <label for="girl">女</label>
          <input type="radio" name="gender" value="1" id="boy" />
          <label for="boy">男</label>
        </li>

        <!--2 label 方式2 <label> 包裹-->
        <li>
          爱好：
          <label> <input type="checkbox" name="hobby" value="0" checked />足球 </label>
          <label><input type="checkbox" name="hobby" value="1" />篮球</label>
          <label><input type="checkbox" name="hobby" value="1" />双色球</label>
        </li>

        <!-- label <label> 包裹 input-->
        <li>
          <label>账号： <input type="text" placeholder="请输入账号" autocomplete="off" /></label>
        </li>
        <li>
          <label>密码： <input type="password" placeholder="请输入密码" maxlength="8" /></label>
        </li>
      </ul>
    </form>

    <h3>特殊字符</h3>
    <div>
      &nbsp; 空格 <br />
      &lt; 小于号 <br />
      &gt; 大于号 <br />
      &copy; 版权符号 <br />
      &reg; 注册商标 <br />
      &yen; 人民币符号 <br />
      &cent; 分 <br />
      &pound; 英镑符号 <br />
      &euro; 欧元符号 <br />
      &amp; 与符号 <br />
      &quot; 双引号
    </div>

    <span>&lt;p&gt;是一个段落标签</span>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

/**

 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
