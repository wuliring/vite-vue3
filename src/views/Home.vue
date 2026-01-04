<script setup lang="ts">
import { useRoute } from 'vue-router'
import BottomNav from '../components/BottomNav.vue'

const route = useRoute()
</script>

<template>
  <div class="home-page">
    <!-- 背景 -->
    <div class="home-bg">
      <div class="bg-overlay"></div>
      <div class="bg-placeholder">
        <span>背景图片</span>
      </div>
    </div>

    <!-- 内容区域 -->
    <div class="home-content">
      <router-view />
    </div>

    <!-- 底部导航 -->
    <BottomNav />
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.home-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    #8a9aaa 0%,
    #9aa8b8 20%,
    #b8c4d0 40%,
    #c8d0d8 60%,
    #b8c4d0 80%,
    #9aa8b8 100%
  );
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center 50%,
    rgba(255, 180, 100, 0.2) 0%,
    rgba(255, 150, 80, 0.15) 30%,
    transparent 60%
  );
}

.bg-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.1);
  font-size: 24px;
}

.home-content {
  position: relative;
  z-index: 10;
  height: calc(100% - 60px);
  overflow-y: auto;
  padding-bottom: 20px;
}
</style>
