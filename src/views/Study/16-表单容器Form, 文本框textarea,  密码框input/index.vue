<template>
  <div>
    <form action="">
      <!--1 单行文本框和密码框-->
      <ul>
        <li>账号： <input type="text" placeholder="请输入账号" autocomplete="off" /></li>
        <li>密码： <input type="password" placeholder="请输入密码" maxlength="8" /></li>
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
 * <form action=''>
 *   定义表单的容器，包裹所有表单控件
 *   action 属性定义了在提交表单时，应该把所有收集的数据送给谁（URL）处理
 *
 * 表单控件：
 * <input> 输入框
 * <textarea> 多行文本
 * <select>  下拉选择框
 * <button> 自定义按钮
 *
 *  输助标签
 *  <label> :关联输入控件的文本标签，提升可访问性（点击标签可聚焦输入框）
 *
 *
 *
 *  <input type='text'>
 *    type属性值    说明
 *    text        单行文本框
 *    password    密码框
 *    radio       单选框
 *    checkbox    复选框
 *    file        文本域
 *
 *    placeholder  提示信息
 *    name    元素名称， form根据这个收集数据。
 *    maxlength  允许的最大字符数
 *    accesskey  使元素获得焦点的快捷键
 *    autocomplete 用于控制表单的自动填充行为，帮助济览器决定是否根据用户历史输入自动填充字段值，取值on/off， 就是记录用户输入数据。
 *
 *
 *
 *
 *
 * */

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped></style>
