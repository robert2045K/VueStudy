<template>
  <div>
    <div class="box">电影</div>
    <p>
      对于夏联的舞台，杨瀚森可能并不陌生。去年，他跟随中国国家男篮参加了加州经典赛，打了 3
      场比赛，场均得到 8.7 分 5 篮板 1 助攻，此外，场均还有 4.67 次失误和 4
      次犯规。时隔一年，这些数据并没有太多参考意义。杨瀚森的实力和经验有所提升，他也已经正式成为 NBA
      球队的一员。
    </p>
    <p>
      不过，人们依然期待看到他能否适应比赛的速度和对抗强度。夏联本就不是为大个子球员量身打造的舞台，他要面对一堆运动能力出色的突破手和急于证明自己的后卫，如果他能稳固防守，做好终结和球的转移，而且在转换进攻中跟上节奏，那就会是一个很好的信号。
      具体详见杨瀚森夏联首秀前瞻：攻防两端看点十足，比赛数据不如细节重要
    </p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

/**
 * 字体样式            说明
 * text-align       水平对齐    控制它所在的块级盒子内，如何水平对齐
 * text-indent      首行缩进
 * letter-spacing    字符间距
 * line-height       行高
 *
 *
 * text-align：
 * *****只对盒子起作用，并且是水平对齐********
 * 控制它所在的块级盒子内，如何水平对齐。
 * 使用场景：
 * 1.文本/图片，在盒子水平对齐。
 * 2. 文单文字两端对齐
 *
 * text-align：left
 * text-align：right
 * text-align：center
 * text-align：justify //两端对齐
 *
 *
 * */
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
/**文本对齐 */
.box {
  width: 120px;
  height: 50px;
  background-color: pink;
  text-align: center;
  /**字间距*/
  letter-spacing: 5px;
  /**------行高与盒子高度一样，可以让行高垂直居中------*/
  line-height: 50px;
}
p {
  /**对齐方式**/
  text-align: justify;
  /**缩进*/
  text-indent: 2em;
  /**行高*/
  line-height: 26px;
}
</style>
