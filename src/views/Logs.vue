<script setup lang="ts">
import { ref } from 'vue'

interface LogItem {
  id: number
  time: string
  content: string
  type: 'success' | 'error' | 'info'
}

const logs = ref<LogItem[]>([])

const handleClear = () => {
  logs.value = []
}
</script>

<template>
  <div class="logs-page">
    <!-- 顶部标题栏 -->
    <div class="header">
      <div class="header-center">
        <span class="title">日志</span>
      </div>
      <button class="clear-btn" @click="handleClear">清空</button>
    </div>

    <!-- 日志内容 -->
    <div class="logs-container">
      <div v-if="logs.length === 0" class="empty-state">
        <div class="empty-box">暂无日志</div>
      </div>
      <div v-else class="logs-list">
        <div v-for="log in logs" :key="log.id" class="log-item" :class="log.type">
          <span class="log-time">{{ log.time }}</span>
          <span class="log-content">{{ log.content }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logs-page {
  padding: 16px;
  padding-bottom: 80px;
  min-height: calc(100vh - 60px);
}

.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  padding: 0 16px;
}

.header-center {
  flex: 1;
  text-align: center;
}

.title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.clear-btn {
  position: absolute;
  right: 0;
  background: transparent;
  border: none;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
}

.clear-btn:hover {
  color: var(--primary-gold);
}

.logs-container {
  flex: 1;
}

.empty-state {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.empty-box {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 14px 100px;
  color: #666;
  font-size: 14px;
  text-align: center;
}

.logs-list {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 12px;
  max-height: calc(100vh - 200px);
  overflow-y: auto;
}

.log-item {
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 13px;
  display: flex;
  gap: 12px;
  background: #f9f9f9;
}

.log-item:last-child {
  margin-bottom: 0;
}

.log-item.success {
  background: rgba(46, 204, 113, 0.1);
}

.log-item.error {
  background: rgba(231, 76, 60, 0.1);
}

.log-item.info {
  background: rgba(52, 152, 219, 0.1);
}

.log-time {
  color: #999;
  flex-shrink: 0;
}

.log-content {
  color: #333;
  word-break: break-all;
}
</style>
