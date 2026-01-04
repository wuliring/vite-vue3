<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Device {
  id: number
  name: string
  earnings: string
  earningsAmount: string
  isLoggedIn: boolean
}

const router = useRouter()
const username = ref('6668666')
const points = ref(0)
const showRechargeModal = ref(false)
const showLoginModal = ref(false)
const rechargeCode = ref('')
const selectedDevice = ref<Device | null>(null)

const devices = ref<Device[]>([
  { id: 1, name: '请扫码登录', earnings: '0次', earningsAmount: '0元', isLoggedIn: false },
  { id: 2, name: '请扫码登录', earnings: '0次', earningsAmount: '0元', isLoggedIn: false },
  { id: 3, name: '请扫码登录', earnings: '0次', earningsAmount: '0元', isLoggedIn: false },
  { id: 4, name: '请扫码登录', earnings: '0次', earningsAmount: '0元', isLoggedIn: false }
])

const handleRecharge = () => {
  showRechargeModal.value = true
}

const handleConfirmRecharge = () => {
  console.log('确认充值', rechargeCode.value)
  showRechargeModal.value = false
  rechargeCode.value = ''
}

const handleCancelRecharge = () => {
  showRechargeModal.value = false
  rechargeCode.value = ''
}

const handleScanLogin = (device: Device) => {
  selectedDevice.value = device
  showLoginModal.value = true
}

const handleLoginViaIPad = () => {
  console.log('通过iPad登录', selectedDevice.value?.id)
  showLoginModal.value = false
}

const handleLoginViaLocalApp = () => {
  console.log('通过本地APP登录', selectedDevice.value?.id)
  showLoginModal.value = false
}

const handleCancelLogin = () => {
  showLoginModal.value = false
}

const handleAddDevice = () => {
  const newId = devices.value.length + 1
  devices.value.push({
    id: newId,
    name: '请扫码登录',
    earnings: '0次',
    earningsAmount: '0元',
    isLoggedIn: false
  })
}

const handleLogout = () => {
  router.push('/login')
}

const handleCustomerService = () => {
  console.log('联系客服')
}
</script>

<template>
  <div class="devices-page">
    <!-- 顶部标题栏 -->
    <div class="header">
      <div class="header-left">
        <span class="welcome">欢迎使用野豹</span>
      </div>
      <div class="header-right">
        <span class="username">{{ username }}</span>
        <button class="icon-btn" @click="handleCustomerService">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </button>
        <button class="icon-btn" @click="handleLogout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- 点数卡片 -->
    <div class="points-card">
      <div class="points-info">
        <span class="points-label">当前点数:</span>
        <span class="points-value">{{ points }}</span>
      </div>
      <button class="recharge-btn" @click="handleRecharge">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        充值
      </button>
    </div>

    <!-- 设备列表 -->
    <div class="device-list">
      <div v-for="device in devices" :key="device.id" class="device-card">
        <div class="device-avatar">
          <!-- 图片占位 -->
          <div class="avatar-placeholder"></div>
        </div>
        <div class="device-info">
          <div class="device-name">{{ device.name }}</div>
          <div class="device-earnings">当前收益 {{ device.earnings }}/{{ device.earningsAmount }}</div>
          <button class="scan-btn" @click="handleScanLogin(device)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
              <circle cx="12" cy="13" r="4"></circle>
            </svg>
            扫码登录
          </button>
        </div>
      </div>
    </div>

    <!-- 添加设备按钮 -->
    <button class="add-device-btn" @click="handleAddDevice">
      <span class="plus">+</span>
      点击添加设备
    </button>

    <!-- 充值弹窗 -->
    <div v-if="showRechargeModal" class="modal-overlay" @click.self="handleCancelRecharge">
      <div class="modal-container">
        <div class="modal-header">提示</div>
        <div class="modal-content">
          <div class="input-wrapper">
            <input 
              v-model="rechargeCode" 
              type="text" 
              placeholder="请输入注册码" 
              class="modal-input"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="modal-btn cancel" @click="handleCancelRecharge">取消</button>
          <button class="modal-btn confirm" @click="handleConfirmRecharge">确认</button>
        </div>
      </div>
    </div>

    <!-- 登录方式选择弹窗 (Action Sheet) -->
    <div v-if="showLoginModal" class="modal-overlay bottom" @click.self="handleCancelLogin">
      <div class="action-sheet">
        <div class="action-item" @click="handleLoginViaIPad">
          <div class="action-title">通过iPad登录【优先使用】</div>
          <div class="action-desc">默认请使用该方式登录</div>
        </div>
        <div class="action-item" @click="handleLoginViaLocalApp">
          <div class="action-title">通过本地APP登录【APP扫码】</div>
          <div class="action-desc">请在iPad登录出现无登录按钮情况下选择</div>
        </div>
        <div class="action-divider"></div>
        <div class="action-item cancel" @click="handleCancelLogin">
          <div class="action-title">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.devices-page {
  padding: 16px;
  padding-bottom: 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.header-left {
  display: flex;
  align-items: center;
}

.welcome {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.username {
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.icon-btn {
  width: 28px;
  height: 28px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0;
}

.icon-btn svg {
  width: 100%;
  height: 100%;
}

.points-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.points-info {
  display: flex;
  align-items: center;
  gap: 4px;
}

.points-label {
  font-size: 14px;
  color: #666;
}

.points-value {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-gold);
}

.recharge-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: var(--primary-gold);
  border: none;
  border-radius: 20px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.recharge-btn svg {
  width: 16px;
  height: 16px;
}

.recharge-btn:hover {
  background: var(--primary-gold-dark);
}

.device-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.device-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  gap: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.device-avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #4a4a4a 0%, #2a2a2a 100%);
  border-radius: 8px;
}

.device-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.device-name {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.device-earnings {
  font-size: 13px;
  color: #999;
  margin: 4px 0;
}

.scan-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 100%;
  padding: 10px;
  background: transparent;
  border: 2px solid var(--primary-gold);
  border-radius: 6px;
  color: var(--primary-gold);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.scan-btn svg {
  width: 16px;
  height: 16px;
}

.scan-btn:hover {
  background: var(--primary-gold);
  color: #fff;
}

.add-device-btn {
  width: 100%;
  margin-top: 16px;
  padding: 14px;
  background: transparent;
  border: 2px solid var(--primary-gold);
  border-radius: 8px;
  color: var(--primary-gold);
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.2s;
}

.add-device-btn .plus {
  font-size: 20px;
  font-weight: 300;
}

.add-device-btn:hover {
  background: var(--primary-gold);
  color: #fff;
}

/* 弹窗样式 */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-container {
  width: 280px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.modal-header {
  padding: 20px 20px 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
}

.modal-content {
  padding: 10px 20px 20px;
}

.input-wrapper {
  background: #f5f5f5;
  border-radius: 4px;
  padding: 12px;
}

.modal-input {
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  font-size: 15px;
  color: #333;
  text-align: center;
}

.modal-input::placeholder {
  color: #ccc;
}

.modal-footer {
  display: flex;
  border-top: 1px solid #f0f0f0;
}

.modal-btn {
  flex: 1;
  padding: 14px;
  border: none;
  background: transparent;
  font-size: 16px;
  color: var(--primary-gold);
  cursor: pointer;
  transition: background 0.2s;
}

.modal-btn:first-child {
  border-right: 1px solid #f0f0f0;
}

.modal-btn:active {
  background: #f9f9f9;
}

.modal-btn.cancel {
  color: var(--primary-gold);
}

.modal-btn.confirm {
  font-weight: 500;
}

/* 登录方式选择弹窗 (Action Sheet) */
.modal-overlay.bottom {
  align-items: flex-end;
}

.action-sheet {
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  animation: slide-up 0.3s ease-out;
}

.action-item {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;
}

.action-item:active {
  background: #f9f9f9;
}

.action-item:last-child {
  border-bottom: none;
}

.action-title {
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.action-desc {
  font-size: 13px;
  color: #999;
  margin-top: 4px;
}

.action-divider {
  height: 8px;
  background: #f5f5f5;
}

.action-item.cancel {
  padding: 16px;
}

.action-item.cancel .action-title {
  font-weight: 500;
  font-size: 17px;
}

@keyframes slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>
