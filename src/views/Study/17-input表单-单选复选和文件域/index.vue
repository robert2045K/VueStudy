<template>
  <div>
    <form action="">
      <!--1 单行文本框和密码框-->
      <ul>
        <li>账号： <input type="text" placeholder="请输入账号" autocomplete="off" /></li>
        <li>密码： <input type="password" placeholder="请输入密码" maxlength="8" /></li>

        <!--2 单选-->
        <li>
          性别：
          <input type="radio" name="gender" value="0" checked />女
          <input type="radio" name="gender" value="1" />男
        </li>

        <!--2 复选-->
        <li>
          爱好：
          <input type="checkbox" name="hobby" value="0" checked />足球
          <input type="checkbox" name="hobby" value="1" />篮球
          <input type="checkbox" name="hobby" value="1" />双色球
        </li>

        <!--3 文件域-->
        <li>
          头像：
          <input type="file" name="file" multiple accept=".exe,.jpg.mp4" />
        </li>

        <!--文本域-->
        <li>
          留言：
          <textarea placeholder="请输入" name="msg" id="" cols="30" rows="10"></textarea>
        </li>

        <!--select-->
        <select name="city" id="">
          <option value="0">北京</option>
          <option value="1">上海</option>
          <option value="2">广州</option>
          <option value="3" selected>深圳</option>
        </select>


      </ul>
      <button>登陆</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

/**
 *  <input type='text'>
 *
 *   type属性值    说明
 *   radio       单选
 *   checkbox    复选框
 *
 *   其他属性    说明
 *   name    表单名称实现分组
 *   value   表单值,    //单选为例，显示是男，女。      选男，value=0, 选女：value=1.       value是发给后台的数据，Form根据name得到value值。
 *   checked   是否默认选中
 *
 *
 *  文件域 file
 *  multiple   充许选择多个文件
 *  accept   规定选择的文件类型，多个类型中间用逗号分开
 *
 *
 *
 *
 *   <textarea> HTML 元素是一个多行，纯文本编辑控件，输入大量自由格式文本的场景，如： 评论，
 *
 *  name         表单名称
 *  placeholder  提示信息
 *  rows    行数
 *  cols   列数
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
