<template>
  <!--    <header>-->
  <!--      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

  <!--      <div class="wrapper">-->
  <!--        <HelloWorld msg="You did it!" />-->

  <!--        <nav>-->
  <!--          <RouterLink to="/">Home</RouterLink>-->
  <!--          <RouterLink to="/about">About</RouterLink>-->
  <!--        </nav>-->
  <!--      </div>-->
  <!--    </header>-->
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import { nextTick, onMounted } from 'vue'

const router = useRouter()

const goPage = () => {
  // 字符串路径
  //router.push('/about')
  // 对象形式
  //router.push({ path: '/home' })
  // 命名的路由（推荐，因为即使路径变了，只要名字不变就没事）
  //router.push({ name: 'study', params: { userId: '123' } })
  router.push({ name: 'start' })
}

onMounted(() => {
  nextTick(() => {
    goPage()
  })
})
</script>

<style scoped></style>
