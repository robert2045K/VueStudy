<template>
  <div>
    <!--字体颜色-->
    <h2>1.字体颜色</h2>
    <p class="pink">字体颜色，颜色名称</p>
    <p class="color16">字体颜色，十六进制</p>
    <p class="rgb">字体颜色，rgb或rgba</p>
    <p class="rgba">字体颜色，文字半透明</p>

    <!--2字体族-->
    <h2>2.设置字体族</h2>
    <p class="font">字体族-，使用字体名称设置</p>

    <!--3字体大小-->
    <h2>3.设置字体大小</h2>
    <p class="font12">字体大小，px设置</p>
    <p class="font14">字体大小，px设置</p>
    <p class="font16">字体大小，px设置</p>

    <!--4字体粗细-->
    <h2 class="noBold">4.设置字体精细</h2>
    <p class="bold">字体粗细，使用关键字</p>
    <p class="bold">字体粗细，使用关键字</p>

    <!--5字体倾斜-->
    <h2 class="italic">5.字体倾斜，可以使用italic设置</h2>
    <em class="normal">字体样式，取消倾斜，可以使用normal设置</em>

    <!--6字体装饰-->
    <h2>6.设置字体装饰</h2>
    <p class="underline">字体装饰，underline下划线</p>
    <p class="overline">字体装饰，overline上划线</p>
    <p class="line-through">字体装饰，line-through删除线</p>
    <a class="font16" href="#">字体装饰，none下划线</a>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

/**
 *  字体样式             说明
 *  color             字体颜色  #fff000  rgb(0,0,0)  rgba(244,255,255, 0)
 *  font-family       字体族
 *  font-size         字体大小
 *  font-style        字体风格   用来打开和关闭文本italic（斜体） font-style: normal。 普通字体（关才斜体）
 *  font-weight       字体粗体
 *  text-decoration   字体装饰
 *
 *
 *
 * text-decoration
 * none: 取消文本装饰。
 * underline: 下划线。
 * overline: 上划线。
 * line-through：穿过文本的线。
 * */
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
.pink {
  color: pink;
}
.color16 {
  color: #f00;
}
.rgb {
  color: rgb(255, 0, 0);
}
.rgba {
  color: rgb(255, 0, 0, 0.5);
  background-color: green;
}

/**字体font-family*/
.font {
  font-family: 宋体;
}

/**字体大小*/
.font12 {
  font-size: 12px;
}
.font14 {
  font-size: 14px;
}
.font16 {
  font-size: 16px;
}

/**字体倾斜*/
.italic {
  font-style: italic;
}
.normal {
  font-style: normal;
}

.noBold {
  //font-weight: normal;
  font-weight: 400;
}
.bold {
  //font-weight: 700;
  font-weight: bold;
}

/**6字体装饰--*/
a {
  text-decoration: none;
}
.underline {
  text-decoration: underline;
}
.overline {
  text-decoration: overline;
}
.line-through {
  text-decoration: line-through;
}
</style>
