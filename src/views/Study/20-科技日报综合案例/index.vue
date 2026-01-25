<template>
  <div class="tec">
    <header id="top">
      <h1>
        <a href="./index.html" title="科技日报">科技日报</a>
      </h1>
      <p>探索未来科技，传递创新力量</p>
      <nav>
        <ul>
          <li><a href="./index.html">首页</a></li>
          <li><a href="#">科技动态</a></li>
          <li><a href="#">国际科技</a></li>
          <li><a href="#">科技论坛</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <h2>今日要闻</h2>
      <h3>1.量子计算机取得突破性进展</h3>
      <p>
        这次中国自主量子计算机“本源悟空”全球首次运行十亿级 AI
        微调大模型，标志着国内已经开始通过量子-经典混合框架，将大模型参数优化转化为量子退火问题，实现量子计算机对
        AI 大模型任务的协助。
      </p>

      <p>
        这将有助于国产
        AI大模型的技术落地。同时，由于量子计算机的算力优势，一旦相关的技术壁垒被攻克，国产算力的发展将不再受制于美西方的芯片管制措施。除此之外，量子计算还会优先处理高维参数优化、注意力机制等计算密集型任务，与经典算力形成互补。
      </p>
      <p>
        这一里程碑不仅具有理论价值，更为更强大的量子技术(例如信息隐形传态或基于测量的计算)奠定了基础。这项由京都大学和广岛大学团队完成的突破性成果发表于美国《科学进展》杂志，提出了一种能够检测W态的量子测量方法——W态是一种复杂的多粒子纠缠态。其测量精度已超越确认量子纠缠性质所需的阈值。
      </p>
      <p>
        在量子力学中，纠缠是粒子间的一种深层关联，使它们相互连接，并使其个体属性在分离状态下失去独立意义。当涉及两个以上粒子时，则可能产生不同形式的纠缠。其中最著名的是GHZ态，而该态已在实验中得到验证。另一种对信息损耗更具耐受性且更难检测的状态就是W态。
      </p>
      <img :src="imgUrl" alt="abc科技" width="600" />
      <h3>2 Ai辅助诊断准确率突破95%</h3>
      <p>
        这将有助于国产
        AI大模型的技术落地。同时，由于量子计算机的算力优势，一旦相关的技术壁垒被攻克，国产算力的发展将不再受制于美西方的芯片管制措施。除此之外，量子计算还会优先处理高维参数优化、注意力机制等计算密集型任务，与经典算力形成互补。
      </p>
      <p>
        这一里程碑不仅具有理论价值，更为更强大的量子技术(例如信息隐形传态或基于测量的计算)奠定了基础。这项由京都大学和广岛大学团队完成的突破性成果发表于美国《科学进展》杂志，提出了一种能够检测W态的量子测量方法——W态是一种复杂的多粒子纠缠态。其测量精度已超越确认量子纠缠性质所需的阈值。
      </p>
      <p>
        在量子力学中，纠缠是粒子间的一种深层关联，使它们相互连接，并使其个体属性在分离状态下失去独立意义。当涉及两个以上粒子时，则可能产生不同形式的纠缠。其中最著名的是GHZ态，而该态已在实验中得到验证。另一种对信息损耗更具耐受性且更难检测的状态就是W态。
      </p>
      <img :src="imgUrl" alt="abc科技" width="600" />
      <p>
        “这是医疗AI发展的里程碑”<br />
        -引自《科技报行告》 主编ctke
      </p>
      <h3>3. 行业数据</h3>
      <table border="1">
        <tr>
          <th>领域</th>
          <th>投资额（亿美元）</th>
          <th>增长率</th>
        </tr>
        <tr>
          <td>人工智能</td>
          <td>580</td>
          <td>+43%</td>
        </tr>
        <tr>
          <td>量子计算</td>
          <td>580</td>
          <td>+43%</td>
        </tr>
        <tr>
          <td>生物科技</td>
          <td>580</td>
          <td>+43%</td>
        </tr>
      </table>
      <h3>4. 读者互动</h3>
      <p>您最关注的科技领域是？</p>
      <form action="">
        <ul>
          <li>
            <label><input type="radio" name="tech" />人工知能</label>
          </li>
          <li>
            <label><input type="radio" name="tech" />量子计算</label>
          </li>
          <li>
            <label><input type="radio" name="tech" />生物科技</label>
          </li>
          <li>
            <label><input type="radio" name="tech" />机器人</label>
          </li>
        </ul>
        留下你的观点：<textarea name="" id="" cols="30" rows="10"></textarea>
      </form>

      <h3>5. 科技大讲堂</h3>
      <video controls width="600">
        <source src="./video.mp4" type="video/mp4" />
      </video>
    </main>

    <footer>
      <p>2025 科技日报社 版权所有</p>
      <p>京ICP备202344号-1</p>
      <p>联系我们：<a href="mailto:12@qq.com">12@qq.com</a></p>
      <p>地址：深圳</p>
      <p><a href="#top">返回内容顶部</a></p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import imgUrl from '@/assets/study/2.png'
// 接收返回值
const props = defineProps<{
  userId?: string
}>()
onMounted(() => {
  console.log('userId=', props.userId)
})
</script>

<style scoped>
.tec {
  height: 100vh; /* 必须有固定高度 */
  overflow-y: auto; /* 必须允许纵向滚动 */
  scroll-behavior: smooth;
}
</style>
