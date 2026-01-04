<script setup lang="ts">
import { ref, computed } from 'vue'

// 顶部标签页
const topTabs = [
  { key: 'settings', label: '设置', icon: 'settings' },
  { key: 'miaohao', label: '秒号', icon: 'clock' },
  { key: 'lei', label: '雷', icon: 'thunder' },
  { key: 'daxiao', label: '大小', icon: 'size' },
  { key: 'weishu', label: '尾数', icon: 'number' }
]

const activeTopTab = ref('settings')

// 玩法子标签
const playTabs = ['雷玩法', '大小玩法', '尾数玩法']
const activePlayTab = ref('雷玩法')

// 设置数据
const settings = ref({
  // 群设置
  currentPlay: '雷玩法',
  grabMode: '全部群',
  
  // 通用设置
  blockUsers: [],
  grabDelay: 0,
  detectTimeout: 300,
  forceTailGrab: false,
  tailMinAmount: false,
  manualClick: false,
  skipPaymentPack: true,
  selfSendTail: false,
  skipOwnRedpack: false,
  grabDetailPush: false,
  thunderDetailPush: false,
  pushType: '图片推送',
  
  // 多号设置
  autoSwitchTail: false,
  smartRecognize: true,
  blessingAll: false,
  multiToSingle: false,
  blockThunderValue: false,
  onlyGrabAmountRange: false,
  recognizeDigits: 2,
  recognizePosition: '前',
  skipBlessingRedpack: false,
  
  // 中间抢设置
  singleThunderAfter: 0,
  singleThunderEnabled: false,
  doubleThunderBefore: 0,
  doubleThunderEnabled: false,
  tripleThunderBefore: 0,
  tripleThunderEnabled: false,
  quadThunderBefore: 0,
  quadThunderEnabled: false,
  pentaThunderBefore: 0,
  pentaThunderEnabled: false,
  hexaThunderBefore: 0,
  hexaThunderEnabled: false,
  
  // 拖拉机设置
  tractorRemaining: 0,
  tractorEnabled: false
})

// 秒号设置
const miaohaoSettings = ref({
  blockUsers: [],
  grabDelay: 0,
  detectTimeout: 300,
  forceTailGrab: false,
  tailMinAmount: false,
  manualClick: false,
  skipPaymentPack: true,
  selfSendTail: false,
  skipOwnRedpack: false,
  grabDetailPush: false,
  thunderDetailPush: false,
  pushType: '图片推送'
})

// 雷玩法设置
const leiSettings = ref({
  thunderPosition: '分',
  smartRecognize: true,
  blessingAllThunder: false,
  customChinese: false,
  frontThunder: false,
  smartDiscount: '不设置',
  customDiscount: false,
  noGrabType: '不设置/',
  multiToSingle: false,
  blockThunderValue: false,
  onlyGrabAmountRange: false,
  recognizeDigits: 2,
  recognizePosition: '前',
  skipBlessingRedpack: false,
  
  // 中间抢设置
  singleThunderAfter: 0,
  singleThunderEnabled: false,
  doubleThunderBefore: 0,
  doubleThunderEnabled: false,
  tripleThunderBefore: 0,
  tripleThunderEnabled: false,
  quadThunderBefore: 0,
  quadThunderEnabled: false,
  pentaThunderBefore: 0,
  pentaThunderEnabled: false,
  hexaThunderBefore: 0,
  hexaThunderEnabled: false,
  
  // 拖拉机设置
  tractorRemaining: 0,
  tractorEnabled: false
})

// 大小玩法设置
const daxiaoSettings = ref({
  middleGrabSwitch: false,
  middleGrabCondition: '大于',
  amount: 0,
  appearCount: 1,
  grabCount: 1,
  deathFreeSwitch: false,
  tailNoGrab: ['最小']
})

// 尾数玩法设置
const weishuSettings = ref({
  selectTail: '单尾',
  deathFreeSwitch: false,
  middleGrabSwitch: false,
  middleGrabCondition: '大于',
  tailNumber: 0.00,
  appearGrabCount: 1,
  tailNoGrab: '不抢最小'
})

const handleSave = () => {
  console.log('保存设置')
}

const handleTopTabClick = (key: string) => {
  activeTopTab.value = key
  if (key === 'lei') {
    activePlayTab.value = '雷玩法'
  } else if (key === 'daxiao') {
    activePlayTab.value = '大小玩法'
  } else if (key === 'weishu') {
    activePlayTab.value = '尾数玩法'
  }
}

const handlePlayTabClick = (tab: string) => {
  activePlayTab.value = tab
  if (tab === '雷玩法') {
    activeTopTab.value = 'lei'
  } else if (tab === '大小玩法') {
    activeTopTab.value = 'daxiao'
  } else if (tab === '尾数玩法') {
    activeTopTab.value = 'weishu'
  }
}

const handleSelectUsers = () => {
  console.log('选择用户')
}

const increment = (key: string, obj: any) => {
  obj[key]++
}

const decrement = (key: string, obj: any) => {
  if (obj[key] > 0) obj[key]--
}
</script>

<template>
  <div class="settings-page">
    <!-- 顶部标题栏 -->
    <div class="header">
      <div class="header-left">
        <span class="welcome">欢迎使用野豹</span>
      </div>
      <button class="save-btn" @click="handleSave">+ 保存设置</button>
    </div>

    <!-- 提示信息 -->
    <div class="tip-banner">
      <span class="tip-text">温馨提示: 添加完成后请点击右上角保存!</span>
    </div>

    <!-- 顶部标签页 -->
    <div class="top-tabs">
      <div 
        v-for="tab in topTabs" 
        :key="tab.key"
        class="tab-item"
        :class="{ active: activeTopTab === tab.key }"
        @click="handleTopTabClick(tab.key)"
      >
        <div class="tab-icon">
          <svg v-if="tab.icon === 'settings'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
          <svg v-else-if="tab.icon === 'clock'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <svg v-else-if="tab.icon === 'thunder'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
            <polyline points="13 11 9 17 15 17 11 23"></polyline>
          </svg>
          <svg v-else-if="tab.icon === 'size'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4 7 4 4 20 4 20 7"></polyline>
            <line x1="9" y1="20" x2="15" y2="20"></line>
            <line x1="12" y1="4" x2="12" y2="20"></line>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </div>
        <span class="tab-label">{{ tab.label }}</span>
      </div>
    </div>

    <!-- 设置内容区域 -->
    <div class="settings-content">
      <!-- 设置标签页内容 -->
      <template v-if="activeTopTab === 'settings'">
        <!-- 群设置 -->
        <div class="section">
          <div class="section-title">群设置</div>
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">当前玩法</span>
              <div class="setting-value link">
                <span>{{ settings.currentPlay }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">抢群模式</span>
              <div class="setting-value link">
                <span>{{ settings.grabMode }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 通用设置 -->
        <div class="section">
          <div class="section-title">通用设置</div>
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">设置屏蔽用户</span>
              <button class="select-btn" @click="handleSelectUsers">选择用户</button>
            </div>
            <div class="setting-item">
              <span class="setting-label">抢包延迟(毫秒)</span>
              <div class="number-input">
                <button @click="decrement('grabDelay', settings)">-</button>
                <input type="text" v-model="settings.grabDelay" />
                <button @click="increment('grabDelay', settings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">探测时效(秒)</span>
              <div class="number-input">
                <button @click="decrement('detectTimeout', settings)">-</button>
                <input type="text" v-model="settings.detectTimeout" />
                <button @click="increment('detectTimeout', settings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">尾包强制抢</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.forceTailGrab }" @click="settings.forceTailGrab = !settings.forceTailGrab">
                </div>
                <span class="switch-label">{{ settings.forceTailGrab ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">尾包低于多少金额不抢(元)</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.tailMinAmount }" @click="settings.tailMinAmount = !settings.tailMinAmount">
                </div>
                <span class="switch-label">{{ settings.tailMinAmount ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">手动点包</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.manualClick }" @click="settings.manualClick = !settings.manualClick">
                </div>
                <span class="switch-label">{{ settings.manualClick ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">赔付包不抢</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.skipPaymentPack }" @click="settings.skipPaymentPack = !settings.skipPaymentPack">
                </div>
                <span class="switch-label">{{ settings.skipPaymentPack ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">自己发包扫尾</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.selfSendTail }" @click="settings.selfSendTail = !settings.selfSendTail">
                </div>
                <span class="switch-label">{{ settings.selfSendTail ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">不抢自己的红包</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.skipOwnRedpack }" @click="settings.skipOwnRedpack = !settings.skipOwnRedpack">
                </div>
                <span class="switch-label">{{ settings.skipOwnRedpack ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">抢包明细推送</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.grabDetailPush }" @click="settings.grabDetailPush = !settings.grabDetailPush">
                </div>
                <span class="switch-label">{{ settings.grabDetailPush ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">中雷明细推送</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.thunderDetailPush }" @click="settings.thunderDetailPush = !settings.thunderDetailPush">
                </div>
                <span class="switch-label">{{ settings.thunderDetailPush ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">推送类型</span>
              <div class="setting-value link">
                <span>{{ settings.pushType }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 多号设置 -->
        <div class="section">
          <div class="section-title">多号设置</div>
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">自动切换秒尾</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.autoSwitchTail }" @click="settings.autoSwitchTail = !settings.autoSwitchTail">
                </div>
                <span class="switch-label">{{ settings.autoSwitchTail ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">智能识别祝福语</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.smartRecognize }" @click="settings.smartRecognize = !settings.smartRecognize">
                </div>
                <span class="switch-label">{{ settings.smartRecognize ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">祝福语全数字为雷</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.blessingAll }" @click="settings.blessingAll = !settings.blessingAll">
                </div>
                <span class="switch-label">{{ settings.blessingAll ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">多雷转单雷</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.multiToSingle }" @click="settings.multiToSingle = !settings.multiToSingle">
                </div>
                <span class="switch-label">{{ settings.multiToSingle ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">屏蔽不抢雷值</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.blockThunderValue }" @click="settings.blockThunderValue = !settings.blockThunderValue">
                </div>
                <span class="switch-label">{{ settings.blockThunderValue ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">只抢红包金额范围</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.onlyGrabAmountRange }" @click="settings.onlyGrabAmountRange = !settings.onlyGrabAmountRange">
                </div>
                <span class="switch-label">{{ settings.onlyGrabAmountRange ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">认</span>
              <div class="setting-value inline">
                <span class="highlight">{{ settings.recognizeDigits }}位</span>
                <span class="arrow">›</span>
                <span class="setting-label-inline">{{ settings.recognizePosition }}</span>
                <span class="arrow">›</span>
                <span>为红包金额</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">不抢红包祝福语</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: settings.skipBlessingRedpack }" @click="settings.skipBlessingRedpack = !settings.skipBlessingRedpack">
                </div>
                <span class="switch-label">{{ settings.skipBlessingRedpack ? '开启' : '关闭' }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 中间抢设置 -->
        <div class="section">
          <div class="section-title">中间抢设置</div>
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">单雷出现</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('singleThunderAfter', settings)">-</button>
                  <input type="text" v-model="settings.singleThunderAfter" />
                  <button @click="increment('singleThunderAfter', settings)">+</button>
                </div>
                <span class="setting-suffix">个雷后抢</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.singleThunderEnabled }" @click="settings.singleThunderEnabled = !settings.singleThunderEnabled">
                  </div>
                  <span class="switch-label">{{ settings.singleThunderEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">双雷前</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('doubleThunderBefore', settings)">-</button>
                  <input type="text" v-model="settings.doubleThunderBefore" />
                  <button @click="increment('doubleThunderBefore', settings)">+</button>
                </div>
                <span class="setting-suffix">包没有雷后抢</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.doubleThunderEnabled }" @click="settings.doubleThunderEnabled = !settings.doubleThunderEnabled">
                  </div>
                  <span class="switch-label">{{ settings.doubleThunderEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">三雷前</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('tripleThunderBefore', settings)">-</button>
                  <input type="text" v-model="settings.tripleThunderBefore" />
                  <button @click="increment('tripleThunderBefore', settings)">+</button>
                </div>
                <span class="setting-suffix">包没有雷后抢</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.tripleThunderEnabled }" @click="settings.tripleThunderEnabled = !settings.tripleThunderEnabled">
                  </div>
                  <span class="switch-label">{{ settings.tripleThunderEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">四雷前</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('quadThunderBefore', settings)">-</button>
                  <input type="text" v-model="settings.quadThunderBefore" />
                  <button @click="increment('quadThunderBefore', settings)">+</button>
                </div>
                <span class="setting-suffix">包没有雷后抢</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.quadThunderEnabled }" @click="settings.quadThunderEnabled = !settings.quadThunderEnabled">
                  </div>
                  <span class="switch-label">{{ settings.quadThunderEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">五雷前</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('pentaThunderBefore', settings)">-</button>
                  <input type="text" v-model="settings.pentaThunderBefore" />
                  <button @click="increment('pentaThunderBefore', settings)">+</button>
                </div>
                <span class="setting-suffix">包没有雷后抢</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.pentaThunderEnabled }" @click="settings.pentaThunderEnabled = !settings.pentaThunderEnabled">
                  </div>
                  <span class="switch-label">{{ settings.pentaThunderEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">六雷前</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('hexaThunderBefore', settings)">-</button>
                  <input type="text" v-model="settings.hexaThunderBefore" />
                  <button @click="increment('hexaThunderBefore', settings)">+</button>
                </div>
                <span class="setting-suffix">包没有雷后抢</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.hexaThunderEnabled }" @click="settings.hexaThunderEnabled = !settings.hexaThunderEnabled">
                  </div>
                  <span class="switch-label">{{ settings.hexaThunderEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 拖拉机设置 -->
        <div class="section">
          <div class="section-title">拖拉机设置</div>
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">拖拉机账号抢剩余</span>
              <div class="setting-right">
                <div class="number-input small">
                  <button @click="decrement('tractorRemaining', settings)">-</button>
                  <input type="text" v-model="settings.tractorRemaining" />
                  <button @click="increment('tractorRemaining', settings)">+</button>
                </div>
                <span class="setting-suffix">包</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: settings.tractorEnabled }" @click="settings.tractorEnabled = !settings.tractorEnabled">
                  </div>
                  <span class="switch-label">{{ settings.tractorEnabled ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- 秒号标签页内容 -->
      <template v-else-if="activeTopTab === 'miaohao'">
        <div class="section">
          <div class="section-title">通用设置</div>
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">设置屏蔽用户</span>
              <button class="select-btn" @click="handleSelectUsers">选择用户</button>
            </div>
            <div class="setting-item">
              <span class="setting-label">抢包延迟(毫秒)</span>
              <div class="number-input">
                <button @click="decrement('grabDelay', miaohaoSettings)">-</button>
                <input type="text" v-model="miaohaoSettings.grabDelay" />
                <button @click="increment('grabDelay', miaohaoSettings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">探测时效(秒)</span>
              <div class="number-input">
                <button @click="decrement('detectTimeout', miaohaoSettings)">-</button>
                <input type="text" v-model="miaohaoSettings.detectTimeout" />
                <button @click="increment('detectTimeout', miaohaoSettings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">尾包强制抢</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.forceTailGrab }" @click="miaohaoSettings.forceTailGrab = !miaohaoSettings.forceTailGrab">
                </div>
                <span class="switch-label">{{ miaohaoSettings.forceTailGrab ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">尾包低于多少金额不抢(元)</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.tailMinAmount }" @click="miaohaoSettings.tailMinAmount = !miaohaoSettings.tailMinAmount">
                </div>
                <span class="switch-label">{{ miaohaoSettings.tailMinAmount ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">手动点包</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.manualClick }" @click="miaohaoSettings.manualClick = !miaohaoSettings.manualClick">
                </div>
                <span class="switch-label">{{ miaohaoSettings.manualClick ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">赔付包不抢</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.skipPaymentPack }" @click="miaohaoSettings.skipPaymentPack = !miaohaoSettings.skipPaymentPack">
                </div>
                <span class="switch-label">{{ miaohaoSettings.skipPaymentPack ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">自己发包扫尾</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.selfSendTail }" @click="miaohaoSettings.selfSendTail = !miaohaoSettings.selfSendTail">
                </div>
                <span class="switch-label">{{ miaohaoSettings.selfSendTail ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">不抢自己的红包</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.skipOwnRedpack }" @click="miaohaoSettings.skipOwnRedpack = !miaohaoSettings.skipOwnRedpack">
                </div>
                <span class="switch-label">{{ miaohaoSettings.skipOwnRedpack ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">抢包明细推送</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.grabDetailPush }" @click="miaohaoSettings.grabDetailPush = !miaohaoSettings.grabDetailPush">
                </div>
                <span class="switch-label">{{ miaohaoSettings.grabDetailPush ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">中雷明细推送</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: miaohaoSettings.thunderDetailPush }" @click="miaohaoSettings.thunderDetailPush = !miaohaoSettings.thunderDetailPush">
                </div>
                <span class="switch-label">{{ miaohaoSettings.thunderDetailPush ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">推送类型</span>
              <div class="setting-value link">
                <span>{{ miaohaoSettings.pushType }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- 雷/大小/尾数标签页内容 - 共用玩法子标签 -->
      <template v-else-if="activeTopTab === 'lei' || activeTopTab === 'daxiao' || activeTopTab === 'weishu'">
        <div class="play-tabs">
          <div 
            v-for="tab in playTabs" 
            :key="tab"
            class="play-tab"
            :class="{ active: activePlayTab === tab }"
            @click="handlePlayTabClick(tab)"
          >
            {{ tab }}
            <div v-if="activePlayTab === tab" class="tab-indicator"></div>
          </div>
        </div>
        
        <!-- 雷玩法内容 -->
        <div v-if="activePlayTab === '雷玩法'">
          <div class="section">
            <div class="section-content">
              <div class="setting-item">
                <span class="setting-label">雷值位置</span>
                <div class="setting-value link">
                  <span>{{ leiSettings.thunderPosition }}</span>
                  <span class="arrow">›</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">智能识别祝福语</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.smartRecognize }" @click="leiSettings.smartRecognize = !leiSettings.smartRecognize">
                  </div>
                  <span class="switch-label">{{ leiSettings.smartRecognize ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">祝福语全数字为雷</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.blessingAllThunder }" @click="leiSettings.blessingAllThunder = !leiSettings.blessingAllThunder">
                  </div>
                  <span class="switch-label">{{ leiSettings.blessingAllThunder ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">自定义转换中文</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.customChinese }" @click="leiSettings.customChinese = !leiSettings.customChinese">
                  </div>
                  <span class="switch-label">{{ leiSettings.customChinese ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">前置雷</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.frontThunder }" @click="leiSettings.frontThunder = !leiSettings.frontThunder">
                  </div>
                  <span class="switch-label">{{ leiSettings.frontThunder ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">智能打折</span>
                <div class="setting-value link">
                  <span>{{ leiSettings.smartDiscount }}</span>
                  <span class="arrow">›</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">自定义打折</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.customDiscount }" @click="leiSettings.customDiscount = !leiSettings.customDiscount">
                  </div>
                  <span class="switch-label">{{ leiSettings.customDiscount ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">不抢雷型</span>
                <div class="setting-value link">
                  <span>{{ leiSettings.noGrabType }}</span>
                  <span class="arrow">›</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">多雷转单雷</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.multiToSingle }" @click="leiSettings.multiToSingle = !leiSettings.multiToSingle">
                  </div>
                  <span class="switch-label">{{ leiSettings.multiToSingle ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">屏蔽不抢雷值</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.blockThunderValue }" @click="leiSettings.blockThunderValue = !leiSettings.blockThunderValue">
                  </div>
                  <span class="switch-label">{{ leiSettings.blockThunderValue ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">只抢红包金额范围</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.onlyGrabAmountRange }" @click="leiSettings.onlyGrabAmountRange = !leiSettings.onlyGrabAmountRange">
                  </div>
                  <span class="switch-label">{{ leiSettings.onlyGrabAmountRange ? '开启' : '关闭' }}</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">认</span>
                <div class="setting-value inline">
                  <span class="highlight">{{ leiSettings.recognizeDigits }}位</span>
                  <span class="arrow">›</span>
                  <span class="setting-label-inline">{{ leiSettings.recognizePosition }}</span>
                  <span class="arrow">›</span>
                  <span>为红包金额</span>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">不抢红包祝福语</span>
                <div class="switch-wrapper">
                  <div class="switch" :class="{ active: leiSettings.skipBlessingRedpack }" @click="leiSettings.skipBlessingRedpack = !leiSettings.skipBlessingRedpack">
                  </div>
                  <span class="switch-label">{{ leiSettings.skipBlessingRedpack ? '开启' : '关闭' }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- 中间抢设置 -->
          <div class="section">
            <div class="section-title">中间抢设置</div>
            <div class="section-content">
              <div class="setting-item">
                <span class="setting-label">单雷出现</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('singleThunderAfter', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.singleThunderAfter" />
                    <button @click="increment('singleThunderAfter', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">个雷后抢</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.singleThunderEnabled }" @click="leiSettings.singleThunderEnabled = !leiSettings.singleThunderEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.singleThunderEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">双雷前</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('doubleThunderBefore', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.doubleThunderBefore" />
                    <button @click="increment('doubleThunderBefore', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">包没有雷后抢</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.doubleThunderEnabled }" @click="leiSettings.doubleThunderEnabled = !leiSettings.doubleThunderEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.doubleThunderEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">三雷前</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('tripleThunderBefore', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.tripleThunderBefore" />
                    <button @click="increment('tripleThunderBefore', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">包没有雷后抢</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.tripleThunderEnabled }" @click="leiSettings.tripleThunderEnabled = !leiSettings.tripleThunderEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.tripleThunderEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">四雷前</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('quadThunderBefore', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.quadThunderBefore" />
                    <button @click="increment('quadThunderBefore', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">包没有雷后抢</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.quadThunderEnabled }" @click="leiSettings.quadThunderEnabled = !leiSettings.quadThunderEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.quadThunderEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">五雷前</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('pentaThunderBefore', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.pentaThunderBefore" />
                    <button @click="increment('pentaThunderBefore', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">包没有雷后抢</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.pentaThunderEnabled }" @click="leiSettings.pentaThunderEnabled = !leiSettings.pentaThunderEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.pentaThunderEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
              <div class="setting-item">
                <span class="setting-label">六雷前</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('hexaThunderBefore', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.hexaThunderBefore" />
                    <button @click="increment('hexaThunderBefore', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">包没有雷后抢</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.hexaThunderEnabled }" @click="leiSettings.hexaThunderEnabled = !leiSettings.hexaThunderEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.hexaThunderEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 拖拉机设置 -->
          <div class="section">
            <div class="section-title">拖拉机设置</div>
            <div class="section-content">
              <div class="setting-item">
                <span class="setting-label">拖拉机账号抢剩余</span>
                <div class="setting-right">
                  <div class="number-input small">
                    <button @click="decrement('tractorRemaining', leiSettings)">-</button>
                    <input type="text" v-model="leiSettings.tractorRemaining" />
                    <button @click="increment('tractorRemaining', leiSettings)">+</button>
                  </div>
                  <span class="setting-suffix">包</span>
                  <div class="switch-wrapper">
                    <div class="switch" :class="{ active: leiSettings.tractorEnabled }" @click="leiSettings.tractorEnabled = !leiSettings.tractorEnabled">
                    </div>
                    <span class="switch-label">{{ leiSettings.tractorEnabled ? '开启' : '关闭' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 大小玩法内容 -->
        <div v-else-if="activePlayTab === '大小玩法'" class="section">
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">中间抢开关</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: daxiaoSettings.middleGrabSwitch }" @click="daxiaoSettings.middleGrabSwitch = !daxiaoSettings.middleGrabSwitch">
                </div>
                <span class="switch-label">{{ daxiaoSettings.middleGrabSwitch ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">中间抢条件</span>
              <div class="setting-value link">
                <span>{{ daxiaoSettings.middleGrabCondition }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">金额</span>
              <div class="number-input">
                <button @click="decrement('amount', daxiaoSettings)">-</button>
                <input type="text" v-model="daxiaoSettings.amount" />
                <button @click="increment('amount', daxiaoSettings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">出现次数</span>
              <div class="number-input">
                <button @click="decrement('appearCount', daxiaoSettings)">-</button>
                <input type="text" v-model="daxiaoSettings.appearCount" />
                <button @click="increment('appearCount', daxiaoSettings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">抢几包</span>
              <div class="number-input">
                <button @click="decrement('grabCount', daxiaoSettings)">-</button>
                <input type="text" v-model="daxiaoSettings.grabCount" />
                <button @click="increment('grabCount', daxiaoSettings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">免死设置</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: daxiaoSettings.deathFreeSwitch }" @click="daxiaoSettings.deathFreeSwitch = !daxiaoSettings.deathFreeSwitch">
                </div>
                <span class="switch-label">{{ daxiaoSettings.deathFreeSwitch ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">尾包不抢(可多选)</span>
              <div class="setting-value link">
                <span>{{ daxiaoSettings.tailNoGrab.join(',') }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 尾数玩法内容 -->
        <div v-else-if="activePlayTab === '尾数玩法'" class="section">
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">选择尾数</span>
              <div class="setting-value link">
                <span>{{ weishuSettings.selectTail }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">免死设置</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: weishuSettings.deathFreeSwitch }" @click="weishuSettings.deathFreeSwitch = !weishuSettings.deathFreeSwitch">
                </div>
                <span class="switch-label">{{ weishuSettings.deathFreeSwitch ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">中间抢开关</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: weishuSettings.middleGrabSwitch }" @click="weishuSettings.middleGrabSwitch = !weishuSettings.middleGrabSwitch">
                </div>
                <span class="switch-label">{{ weishuSettings.middleGrabSwitch ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">中间抢条件</span>
              <div class="setting-value link">
                <span>{{ weishuSettings.middleGrabCondition }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">出现尾数(格式0.01)</span>
              <div class="number-input">
                <button @click="weishuSettings.tailNumber = Math.max(0, weishuSettings.tailNumber - 0.01)">-</button>
                <input type="text" v-model="weishuSettings.tailNumber" />
                <button @click="weishuSettings.tailNumber += 0.01">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">出现几次抢</span>
              <div class="number-input">
                <button @click="decrement('appearGrabCount', weishuSettings)">-</button>
                <input type="text" v-model="weishuSettings.appearGrabCount" />
                <button @click="increment('appearGrabCount', weishuSettings)">+</button>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">尾包不抢</span>
              <div class="setting-value link">
                <span>{{ weishuSettings.tailNoGrab }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.settings-page {
  padding: 16px;
  padding-bottom: 80px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
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

.save-btn {
  background: transparent;
  border: none;
  color: #999;
  font-size: 14px;
  cursor: pointer;
  padding: 8px 12px;
}

.save-btn:hover {
  color: var(--bg-dark);
}

.tip-banner {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid var(--primary-gold);
  border-radius: 8px;
  padding: 12px 16px;
  margin-bottom: 16px;
}

.tip-text {
  color: #e74c3c;
  font-size: 14px;
}

.top-tabs {
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 12px 8px;
  margin-bottom: 16px;
}

.tab-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
}

.tab-item.active {
  color: var(--primary-gold);
}

.tab-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
}

.tab-icon svg {
  width: 100%;
  height: 100%;
}

.tab-label {
  font-size: 12px;
}

.play-tabs {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 16px;
}

.play-tab {
  position: relative;
  padding: 8px 16px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
  transition: color 0.2s;
}

.play-tab.active {
  color: var(--primary-gold);
}

.tab-indicator {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background: var(--primary-gold);
  border-radius: 50%;
}

.section {
  margin-bottom: 16px;
}

.section-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  padding-left: 4px;
}

.section-content {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  padding: 4px 16px;
}

.setting-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid #f0f0f0;
}

.setting-item:last-child {
  border-bottom: none;
}

.setting-label {
  font-size: 14px;
  color: #333;
  flex-shrink: 0;
}

.setting-value {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #999;
  font-size: 14px;
}

.setting-value.link {
  color: var(--primary-gold);
  cursor: pointer;
}

.setting-value .arrow {
  font-size: 16px;
  color: #ccc;
}

.setting-value.inline {
  gap: 8px;
}

.setting-value .highlight {
  color: var(--primary-gold);
}

.setting-label-inline {
  color: var(--primary-gold);
}

.setting-right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.setting-suffix {
  font-size: 13px;
  color: #666;
}

.switch-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
}

.switch {
  position: relative;
  width: 44px;
  height: 24px;
  background: #ddd;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s;
}

.switch.active {
  background: var(--primary-gold);
}

.switch::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 50%;
  transition: transform 0.3s;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.switch.active::after {
  transform: translateX(20px);
}

.switch-label {
  font-size: 12px;
  color: #999;
  min-width: 28px;
}

.number-input {
  display: flex;
  align-items: center;
  gap: 4px;
}

.number-input.small {
  gap: 2px;
}

.number-input button {
  width: 28px;
  height: 28px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.number-input.small button {
  width: 24px;
  height: 24px;
  font-size: 14px;
}

.number-input button:hover {
  background: #f5f5f5;
}

.number-input input {
  width: 50px;
  height: 28px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  font-size: 14px;
  outline: none;
}

.number-input.small input {
  width: 40px;
  height: 24px;
  font-size: 13px;
}

.select-btn {
  padding: 6px 16px;
  background: var(--primary-gold);
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  transition: background 0.2s;
}

.select-btn:hover {
  background: var(--primary-gold-dark);
}
</style>
