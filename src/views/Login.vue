<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const account = ref('')
const password = ref('')

const handleLogin = () => {
  // 模拟登录
  router.push('/home/devices')
}
</script>

<template>
  <div class="login-page">
    <!-- 背景 -->
    <div class="login-bg">
      <div class="bg-overlay"></div>
      <!-- 图片占位区域 -->
      <div class="bg-placeholder">
        <span>背景图片</span>
      </div>
    </div>

    <!-- 内容 -->
    <div class="login-content">
      <!-- Logo区域 -->
      <div class="logo-area">
        <div class="logo-placeholder">
          <span class="logo-text">野豹</span>
          <span class="logo-r">®</span>
        </div>
      </div>

      <!-- 登录表单 -->
      <div class="login-form">
        <div class="form-item">
          <span class="form-label">账号</span>
          <input 
            v-model="account"
            type="text" 
            class="form-input" 
            placeholder="请输入账号"
          />
        </div>
        <div class="form-divider"></div>
        <div class="form-item">
          <span class="form-label">密码</span>
          <input 
            v-model="password"
            type="password" 
            class="form-input" 
            placeholder="请输入密码"
          />
        </div>
      </div>

      <!-- 登录按钮 -->
      <button class="login-btn" @click="handleLogin">登录</button>

      <!-- 底部链接 -->
      <div class="login-footer">
        <a href="#" class="footer-link">注册账号</a>
        <a href="#" class="footer-link">忘记密码</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.login-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    #1a1510 0%,
    #2a2015 20%,
    #3a2a1a 40%,
    #4a3520 60%,
    #3a2a1a 80%,
    #1a1510 100%
  );
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    ellipse at center 70%,
    rgba(255, 150, 50, 0.15) 0%,
    rgba(255, 100, 30, 0.1) 30%,
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
  color: rgba(255, 255, 255, 0.1);
  font-size: 24px;
}

.login-content {
  position: relative;
  z-index: 10;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
}

.logo-area {
  flex: 0 0 auto;
  padding-top: 80px;
  padding-bottom: 60px;
  display: flex;
  justify-content: center;
}

.logo-placeholder {
  position: relative;
  display: flex;
  align-items: flex-start;
}

.logo-text {
  font-size: 72px;
  font-weight: bold;
  background: linear-gradient(
    180deg,
    #f5d485 0%,
    #d4a843 30%,
    #b8922f 60%,
    #d4a843 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-family: 'STKaiti', 'KaiTi', serif;
  letter-spacing: 8px;
}

.logo-r {
  font-size: 16px;
  color: #d4a843;
  margin-left: 4px;
  margin-top: 8px;
}

.login-form {
  background: rgba(40, 35, 30, 0.9);
  border-radius: 8px;
  overflow: hidden;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 16px 20px;
}

.form-label {
  color: #999;
  font-size: 15px;
  width: 50px;
  flex-shrink: 0;
}

.form-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 15px;
  padding: 0 12px;
}

.form-input::placeholder {
  color: #666;
}

.form-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0 20px;
}

.login-btn {
  margin-top: 30px;
  width: 100%;
  height: 48px;
  background: var(--primary-gold);
  border: none;
  border-radius: 6px;
  color: #1a1a1a;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.login-btn:hover {
  background: var(--primary-gold-light);
}

.login-btn:active {
  transform: scale(0.98);
}

.login-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 4px;
}

.footer-link {
  color: #d4a843;
  font-size: 14px;
  text-decoration: none;
}

.footer-link:hover {
  text-decoration: underline;
}
</style>
