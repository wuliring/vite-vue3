<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: Array as () => string[],
    default: () => []
  }
})

const emit = defineEmits(['update:visible', 'update:modelValue', 'confirm'])

// 模拟用户数据
const mockUsers = ref(Array.from({ length: 20 }, (_, i) => ({
  id: `user_${i + 1}`,
  name: `用户${i + 1}`,
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`
})))

const searchQuery = ref('')
const selectedUsers = ref<string[]>([...props.modelValue])

const filteredUsers = computed(() => {
  if (!searchQuery.value) return mockUsers.value
  return mockUsers.value.filter(user => 
    user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const handleClose = () => {
  emit('update:visible', false)
}

const toggleUser = (userId: string) => {
  const index = selectedUsers.value.indexOf(userId)
  if (index === -1) {
    selectedUsers.value.push(userId)
  } else {
    selectedUsers.value.splice(index, 1)
  }
}

const handleRefresh = () => {
  // 模拟刷新，重新生成数据或清空搜索
  searchQuery.value = ''
  // 实际项目中这里可能调用接口
}

const handleClear = () => {
  selectedUsers.value = []
}

const handleSelectAll = () => {
  if (selectedUsers.value.length === filteredUsers.value.length) {
    selectedUsers.value = []
  } else {
    selectedUsers.value = filteredUsers.value.map(u => u.id)
  }
}

const handleConfirm = () => {
  emit('update:modelValue', selectedUsers.value)
  emit('confirm', selectedUsers.value)
  handleClose()
}
</script>

<template>
  <div v-if="visible" class="modal-overlay" @click.self="handleClose">
    <div class="modal-content">
      <div class="modal-header">
        <h3>用户列表</h3>
        <button class="close-btn" @click="handleClose">×</button>
      </div>
      
      <div class="search-box">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="请输入关键字搜索..." 
          class="search-input"
        />
      </div>

      <div class="user-list">
        <div 
          v-for="user in filteredUsers" 
          :key="user.id" 
          class="user-item"
          @click="toggleUser(user.id)"
        >
          <div class="user-info">
            <img :src="user.avatar" class="avatar" alt="avatar" />
            <span class="username">{{ user.name }}</span>
          </div>
          <div class="checkbox" :class="{ checked: selectedUsers.includes(user.id) }"></div>
        </div>
        <div v-if="filteredUsers.length === 0" class="empty-state">
          暂无用户
        </div>
      </div>

      <div class="modal-footer">
        <button class="footer-btn refresh" @click="handleRefresh">刷新</button>
        <button class="footer-btn clear" @click="handleClear">清空</button>
        <button class="footer-btn select-all" @click="handleSelectAll">全选</button>
        <button class="footer-btn confirm" @click="handleConfirm">确认</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 400px;
  height: 80vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.modal-header h3 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
}

.search-box {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.search-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  outline: none;
}

.search-input:focus {
  border-color: var(--primary-gold);
}

.user-list {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
}

.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
}

.user-item:hover {
  background: #f9f9f9;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #eee;
}

.username {
  font-size: 14px;
  color: #333;
}

.checkbox {
  width: 20px;
  height: 20px;
  border: 2px solid #ddd;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s;
}

.checkbox.checked {
  background: var(--primary-gold);
  border-color: var(--primary-gold);
}

.checkbox.checked::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 4px;
  height: 8px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.empty-state {
  text-align: center;
  padding: 32px;
  color: #999;
}

.modal-footer {
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 8px;
}

.footer-btn {
  flex: 1;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  color: white;
  transition: opacity 0.2s;
}

.footer-btn:hover {
  opacity: 0.9;
}

.refresh {
  background: #f39c12; /* Orange */
}

.clear {
  background: #e74c3c; /* Red */
}

.select-all {
  background: #f1c40f; /* Yellow */
}

.confirm {
  background: #d4a843; /* Gold/Primary */
}
</style>
