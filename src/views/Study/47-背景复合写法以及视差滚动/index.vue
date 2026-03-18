<template>
  <div>
    <!--第一屏-->
    <section class="section1">
      <div class="content">
        <p>夕阳是熔化的铁，把云絮焊成金红的鳞甲，天空在燃烧， 而大地只是沉默地承接这些温柔的灰烬</p>
        <p>
          这样的黄昏，让人想起灶膛里将熄的柴火，明明灭灭地舔着旧事，而光影是狡黠的，它把柳枝拉长成琴弦，却让归鸟的翅膀，在弦上拨出无声的颤音。
        </p>
        <p>偶尔有晚钟传来，像一粒铜扣，滚进群山厚重的褶皱里。</p>
        <p>风景独好</p>
      </div>
      <h2>落日夕阳</h2>
    </section>

    <!--第2屏-->
    <section class="section2">
      <div class="content">
        <p>夕阳是熔化的铁，把云絮焊成金红的鳞甲，天空在燃烧， 而大地只是沉默地承接这些温柔的灰烬</p>
        <p>
          这样的黄昏，让人想起灶膛里将熄的柴火，明明灭灭地舔着旧事，而光影是狡黠的，它把柳枝拉长成琴弦，却让归鸟的翅膀，在弦上拨出无声的颤音。
        </p>
        <p>偶尔有晚钟传来，像一粒铜扣，滚进群山厚重的褶皱里。</p>
        <p>风景独好</p>
      </div>
      <h2>落日夕阳</h2>
    </section>

    <!--第3屏-->
    <section class="section3">
      <div class="content">
        <p>夕阳是熔化的铁，把云絮焊成金红的鳞甲，天空在燃烧， 而大地只是沉默地承接这些温柔的灰烬</p>
        <p>
          这样的黄昏，让人想起灶膛里将熄的柴火，明明灭灭地舔着旧事，而光影是狡黠的，它把柳枝拉长成琴弦，却让归鸟的翅膀，在弦上拨出无声的颤音。
        </p>
        <p>偶尔有晚钟传来，像一粒铜扣，滚进群山厚重的褶皱里。</p>
        <p>风景独好</p>
      </div>
      <h2>落日夕阳</h2>
    </section>

    <!--第4屏-->
    <section class="section4">
      <div class="content">
        <p>夕阳是熔化的铁，把云絮焊成金红的鳞甲，天空在燃烧， 而大地只是沉默地承接这些温柔的灰烬</p>
        <p>
          这样的黄昏，让人想起灶膛里将熄的柴火，明明灭灭地舔着旧事，而光影是狡黠的，它把柳枝拉长成琴弦，却让归鸟的翅膀，在弦上拨出无声的颤音。
        </p>
        <p>偶尔有晚钟传来，像一粒铜扣，滚进群山厚重的褶皱里。</p>
        <p>风景独好</p>
      </div>
      <h2>落日夕阳</h2>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
//import bigBg1 from '@/assets/bg/bigBg1.jpg'
// import bigBg2 from '@/accsets/bg/bigBg2.jpg'
// import bigBg3 from '@/assets/bg/bigBg3.jpg'
// const bg1 = bigBg1
// 接收返回值
const props = defineProps<{
  userId?: string
}>()

onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}

section[class^='section'] {
  width: 100%;
  height: 100vh;
}
.section1 {
  background: url(@/assets/bg/bigBg1.jpg) no-repeat fixed center center/cover;
}
.section2 {
  background: url(@/assets/bg/bigBg2.jpg) no-repeat fixed center center/cover;
}
.section3 {
  background: url(@/assets/bg/bigBg3.jpg) no-repeat fixed center center/cover;
}
.section4 {
  background: url(@/assets/bg/bigBg1.jpg) no-repeat fixed center center/cover;
}
.content {
  width: 100%;
  height: 20%;
  background-color: rgba(0, 0, 0, 0.9);
  color: #fff;
  line-height: 30px;
  font-size: 16px;
  padding: 20px;
}
section[class^='section'] h2 {
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  margin-top: 200px;
  letter-spacing: 10px;
  color: #fff;
}
</style>
