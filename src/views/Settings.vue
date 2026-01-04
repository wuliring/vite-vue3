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
  multiMiaohaoSetting: '随机',
  multiTailSetting: '全尾'
})

const showGrabModeModal = ref(false)
const tempGrabMode = ref('全部群')

const handleGrabModeClick = () => {
  tempGrabMode.value = settings.value.grabMode
  showGrabModeModal.value = true
}

const handleConfirmGrabMode = () => {
  settings.value.grabMode = tempGrabMode.value
  showGrabModeModal.value = false
}

const handleCancelGrabMode = () => {
  showGrabModeModal.value = false
}

// 推送类型弹窗
const showPushTypeModal = ref(false)
const tempPushType = ref('图片推送')

const handlePushTypeClick = () => {
  tempPushType.value = settings.value.pushType
  showPushTypeModal.value = true
}

const handleConfirmPushType = () => {
  settings.value.pushType = tempPushType.value
  showPushTypeModal.value = false
}

const handleCancelPushType = () => {
  showPushTypeModal.value = false
}

// 多秒号设置弹窗
const showMultiMiaohaoModal = ref(false)
const tempMultiMiaohao = ref('随机')

const handleMultiMiaohaoClick = () => {
  tempMultiMiaohao.value = settings.value.multiMiaohaoSetting
  showMultiMiaohaoModal.value = true
}

const handleConfirmMultiMiaohao = () => {
  settings.value.multiMiaohaoSetting = tempMultiMiaohao.value
  showMultiMiaohaoModal.value = false
}

const handleCancelMultiMiaohao = () => {
  showMultiMiaohaoModal.value = false
}

// 多尾号设置弹窗
const showMultiTailModal = ref(false)
const tempMultiTail = ref('全尾')

const handleMultiTailClick = () => {
  tempMultiTail.value = settings.value.multiTailSetting
  showMultiTailModal.value = true
}

const handleConfirmMultiTail = () => {
  settings.value.multiTailSetting = tempMultiTail.value
  showMultiTailModal.value = false
}

const handleCancelMultiTail = () => {
  showMultiTailModal.value = false
}

// 雷值位置弹窗
const showThunderPositionModal = ref(false)
const tempThunderPosition = ref('分')

const handleThunderPositionClick = () => {
  tempThunderPosition.value = leiSettings.value.thunderPosition
  showThunderPositionModal.value = true
}

const handleConfirmThunderPosition = () => {
  leiSettings.value.thunderPosition = tempThunderPosition.value
  showThunderPositionModal.value = false
}

const handleCancelThunderPosition = () => {
  showThunderPositionModal.value = false
}

// 智能打折弹窗
const showSmartDiscountModal = ref(false)
const tempSmartDiscount = ref('不设置')

const handleSmartDiscountClick = () => {
  tempSmartDiscount.value = leiSettings.value.smartDiscount
  showSmartDiscountModal.value = true
}

const handleConfirmSmartDiscount = () => {
  leiSettings.value.smartDiscount = tempSmartDiscount.value
  showSmartDiscountModal.value = false
}

const handleCancelSmartDiscount = () => {
  showSmartDiscountModal.value = false
}

// 不抢雷型弹窗
const showNoGrabTypeModal = ref(false)
const tempNoGrabType = ref('不设置')

const handleNoGrabTypeClick = () => {
  tempNoGrabType.value = leiSettings.value.noGrabType
  showNoGrabTypeModal.value = true
}

const handleConfirmNoGrabType = () => {
  leiSettings.value.noGrabType = tempNoGrabType.value
  showNoGrabTypeModal.value = false
}

const handleCancelNoGrabType = () => {
  showNoGrabTypeModal.value = false
}

// 认几位弹窗
const showRecognizeDigitsModal = ref(false)
const tempRecognizeDigits = ref(2)

const handleRecognizeDigitsClick = () => {
  tempRecognizeDigits.value = leiSettings.value.recognizeDigits
  showRecognizeDigitsModal.value = true
}

const handleConfirmRecognizeDigits = () => {
  leiSettings.value.recognizeDigits = tempRecognizeDigits.value
  showRecognizeDigitsModal.value = false
}

const handleCancelRecognizeDigits = () => {
  showRecognizeDigitsModal.value = false
}

// 认前/后弹窗
const showRecognizePositionModal = ref(false)
const tempRecognizePosition = ref('前')

const handleRecognizePositionClick = () => {
  tempRecognizePosition.value = leiSettings.value.recognizePosition
  showRecognizePositionModal.value = true
}

const handleConfirmRecognizePosition = () => {
  leiSettings.value.recognizePosition = tempRecognizePosition.value
  showRecognizePositionModal.value = false
}

const handleCancelRecognizePosition = () => {
  showRecognizePositionModal.value = false
}

// 中间抢条件弹窗（大小玩法）
const showMiddleConditionModal = ref(false)
const tempMiddleCondition = ref('大于')

const handleMiddleConditionClick = () => {
  tempMiddleCondition.value = daxiaoSettings.value.middleGrabCondition
  showMiddleConditionModal.value = true
}

const handleConfirmMiddleCondition = () => {
  daxiaoSettings.value.middleGrabCondition = tempMiddleCondition.value
  showMiddleConditionModal.value = false
}

const handleCancelMiddleCondition = () => {
  showMiddleConditionModal.value = false
}

// 尾包不抢弹窗（可多选）
const showTailNoGrabModal = ref(false)
const tempTailNoGrab = ref<string[]>(['最小'])

const handleTailNoGrabClick = () => {
  tempTailNoGrab.value = [...daxiaoSettings.value.tailNoGrab]
  showTailNoGrabModal.value = true
}

const toggleTailNoGrab = (item: string) => {
  const index = tempTailNoGrab.value.indexOf(item)
  if (index > -1) {
    tempTailNoGrab.value.splice(index, 1)
  } else {
    tempTailNoGrab.value.push(item)
  }
}

const handleConfirmTailNoGrab = () => {
  daxiaoSettings.value.tailNoGrab = [...tempTailNoGrab.value]
  showTailNoGrabModal.value = false
}

const handleCancelTailNoGrab = () => {
  showTailNoGrabModal.value = false
}

// 选择尾数弹窗（尾数玩法）
const showSelectTailModal = ref(false)
const tempSelectTail = ref('单尾')

const handleSelectTailClick = () => {
  tempSelectTail.value = weishuSettings.value.selectTail
  showSelectTailModal.value = true
}

const handleConfirmSelectTail = () => {
  weishuSettings.value.selectTail = tempSelectTail.value
  showSelectTailModal.value = false
}

const handleCancelSelectTail = () => {
  showSelectTailModal.value = false
}

// 中间抢条件弹窗（尾数玩法）
const showWeishuMiddleConditionModal = ref(false)
const tempWeishuMiddleCondition = ref('大于')

const handleWeishuMiddleConditionClick = () => {
  tempWeishuMiddleCondition.value = weishuSettings.value.middleGrabCondition
  showWeishuMiddleConditionModal.value = true
}

const handleConfirmWeishuMiddleCondition = () => {
  weishuSettings.value.middleGrabCondition = tempWeishuMiddleCondition.value
  showWeishuMiddleConditionModal.value = false
}

const handleCancelWeishuMiddleCondition = () => {
  showWeishuMiddleConditionModal.value = false
}

// 尾包不抢弹窗（尾数玩法）
const showWeishuTailNoGrabModal = ref(false)
const tempWeishuTailNoGrab = ref('不抢最小')

const handleWeishuTailNoGrabClick = () => {
  tempWeishuTailNoGrab.value = weishuSettings.value.tailNoGrab
  showWeishuTailNoGrabModal.value = true
}

const handleConfirmWeishuTailNoGrab = () => {
  weishuSettings.value.tailNoGrab = tempWeishuTailNoGrab.value
  showWeishuTailNoGrabModal.value = false
}

const handleCancelWeishuTailNoGrab = () => {
  showWeishuTailNoGrabModal.value = false
}

// 选择用户弹窗
const showUserSelectModal = ref(false)
const userSearchKeyword = ref('')
const userList = ref<{id: string, name: string, selected: boolean}[]>([
  { id: '1', name: '用户1', selected: false },
  { id: '2', name: '用户2', selected: false },
  { id: '3', name: '用户3', selected: false },
])

const filteredUserList = computed(() => {
  if (!userSearchKeyword.value) return userList.value
  return userList.value.filter(user => user.name.includes(userSearchKeyword.value))
})

const handleUserSelectClick = () => {
  showUserSelectModal.value = true
}

const handleRefreshUsers = () => {
  // 刷新用户列表逻辑
}

const handleClearUsers = () => {
  userList.value.forEach(user => user.selected = false)
}

const handleSelectAllUsers = () => {
  userList.value.forEach(user => user.selected = true)
}

const handleConfirmUserSelect = () => {
  showUserSelectModal.value = false
}

const handleCancelUserSelect = () => {
  showUserSelectModal.value = false
}

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
  skipThunderValue: false,
  onlyGrabRange: false,
  recognizeDigits: 2,
  recognizePosition: '前',
  skipBlessingRedpack: false,
  
  // 中间抢设置
  singleThunderAfter: 2,
  singleThunderEnabled: true,
  doubleThunderBefore: 0,
  doubleThunderEnabled: true,
  tripleThunderBefore: 0,
  tripleThunderEnabled: true,
  quadThunderBefore: 0,
  quadThunderEnabled: true,
  pentaThunderBefore: 0,
  pentaThunderEnabled: true,
  hexaThunderBefore: 0,
  hexaThunderEnabled: true,
  
  // 拖拉机设置
  tractorRemaining: 0,
  tractorEnabled: true
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

// 保存成功弹窗
const showSaveSuccessModal = ref(false)

const handleSave = () => {
  // 显示保存成功弹窗
  showSaveSuccessModal.value = true
  // 2秒后自动关闭
  setTimeout(() => {
    showSaveSuccessModal.value = false
  }, 2000)
}

const handleTopTabClick = (key: string) => {
  activeTopTab.value = key
}

const handleSelectUsers = () => {
  handleUserSelectClick()
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
              <div class="setting-value link" @click="handleGrabModeClick">
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
              <div class="setting-value link" @click="handlePushTypeClick">
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
              <span class="setting-label">多秒号设置</span>
              <div class="setting-value link" @click="handleMultiMiaohaoClick">
                <span>{{ settings.multiMiaohaoSetting }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">多尾号设置</span>
              <div class="setting-value link" @click="handleMultiTailClick">
                <span>{{ settings.multiTailSetting }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 玩法子标签 -->
        <div class="play-tabs">
          <div 
            v-for="tab in playTabs" 
            :key="tab"
            class="play-tab"
            :class="{ active: activePlayTab === tab }"
            @click="activePlayTab = tab"
          >
            {{ tab }}
            <div v-if="activePlayTab === tab" class="tab-indicator"></div>
          </div>
        </div>
        
        <!-- 雷玩法内容 -->
        <template v-if="activePlayTab === '雷玩法'">
          <div class="section">
            <div class="section-content">
              <div class="setting-item">
                <span class="setting-label">雷值位置</span>
                <div class="setting-value link" @click="handleThunderPositionClick">
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
                <div class="setting-value link" @click="handleSmartDiscountClick">
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
                <div class="setting-value link" @click="handleNoGrabTypeClick">
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
                <span class="setting-label">认</span>
                <div class="setting-value inline">
                  <span class="highlight" @click="handleRecognizeDigitsClick">{{ leiSettings.recognizeDigits }}位</span>
                  <span class="arrow">›</span>
                  <span class="setting-label-inline" @click="handleRecognizePositionClick">{{ leiSettings.recognizePosition }}</span>
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
        </template>

        <!-- 大小玩法内容 -->
        <template v-else-if="activePlayTab === '大小玩法'">
          <div class="section">
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
                <div class="setting-value link" @click="handleMiddleConditionClick">
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
                <div class="setting-value link" @click="handleTailNoGrabClick">
                  <span>{{ daxiaoSettings.tailNoGrab.join(',') }}</span>
                  <span class="arrow">›</span>
                </div>
              </div>
            </div>
          </div>
        </template>

        <!-- 尾数玩法内容 -->
        <template v-else-if="activePlayTab === '尾数玩法'">
          <div class="section">
            <div class="section-content">
              <div class="setting-item">
                <span class="setting-label">选择尾数</span>
                <div class="setting-value link" @click="handleSelectTailClick">
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
                <div class="setting-value link" @click="handleWeishuMiddleConditionClick">
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
                <div class="setting-value link" @click="handleWeishuTailNoGrabClick">
                  <span>{{ weishuSettings.tailNoGrab }}</span>
                  <span class="arrow">›</span>
                </div>
              </div>
            </div>
          </div>
        </template>
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

      <!-- 雷标签页内容 -->
      <template v-else-if="activeTopTab === 'lei'">
        <!-- 玩法子标签 -->
        <div class="play-tabs">
          <div class="play-tab active">
            雷玩法
            <div class="tab-indicator"></div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">雷值位置</span>
              <div class="setting-value link" @click="handleThunderPositionClick">
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
              <div class="setting-value link" @click="handleSmartDiscountClick">
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
              <div class="setting-value link" @click="handleNoGrabTypeClick">
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
                <div class="switch" :class="{ active: leiSettings.skipThunderValue }" @click="leiSettings.skipThunderValue = !leiSettings.skipThunderValue">
                </div>
                <span class="switch-label">{{ leiSettings.skipThunderValue ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">只抢红包金额范围</span>
              <div class="switch-wrapper">
                <div class="switch" :class="{ active: leiSettings.onlyGrabRange }" @click="leiSettings.onlyGrabRange = !leiSettings.onlyGrabRange">
                </div>
                <span class="switch-label">{{ leiSettings.onlyGrabRange ? '开启' : '关闭' }}</span>
              </div>
            </div>
            <div class="setting-item">
              <span class="setting-label">认</span>
              <div class="setting-value inline">
                <span class="highlight" @click="handleRecognizeDigitsClick">{{ leiSettings.recognizeDigits }}位</span>
                <span class="arrow">›</span>
                <span class="setting-label-inline" @click="handleRecognizePositionClick">{{ leiSettings.recognizePosition }}</span>
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
      </template>

      <!-- 大小标签页内容 -->
      <template v-else-if="activeTopTab === 'daxiao'">
        <!-- 玩法子标签 -->
        <div class="play-tabs">
          <div class="play-tab active">
            大小玩法
            <div class="tab-indicator"></div>
          </div>
        </div>
        
        <div class="section">
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
              <div class="setting-value link" @click="handleMiddleConditionClick">
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
              <div class="setting-value link" @click="handleTailNoGrabClick">
                <span>{{ daxiaoSettings.tailNoGrab.join(',') }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- 尾数标签页内容 -->
      <template v-else-if="activeTopTab === 'weishu'">
        <!-- 玩法子标签 -->
        <div class="play-tabs">
          <div class="play-tab active">
            尾数玩法
            <div class="tab-indicator"></div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-content">
            <div class="setting-item">
              <span class="setting-label">选择尾数</span>
              <div class="setting-value link" @click="handleSelectTailClick">
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
              <div class="setting-value link" @click="handleWeishuMiddleConditionClick">
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
              <div class="setting-value link" @click="handleWeishuTailNoGrabClick">
                <span>{{ weishuSettings.tailNoGrab }}</span>
                <span class="arrow">›</span>
              </div>
            </div>
          </div>
        </div>
      </template>

    </div>

  </div>

  <!-- 抢群模式选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showGrabModeModal" class="grab-mode-modal" @click.self="handleCancelGrabMode">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelGrabMode">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmGrabMode">确认</span>
        </div>
        <div class="grab-mode-content">
          <div 
            class="grab-mode-item" 
            :class="{ active: tempGrabMode === '全部群' }"
            @click="tempGrabMode = '全部群'"
          >
            全部群
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempGrabMode === '指定群' }"
            @click="tempGrabMode = '指定群'"
          >
            指定群
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 推送类型选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showPushTypeModal" class="grab-mode-modal" @click.self="handleCancelPushType">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelPushType">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmPushType">确认</span>
        </div>
        <div class="grab-mode-content">
          <div 
            class="grab-mode-item" 
            :class="{ active: tempPushType === '文本推送' }"
            @click="tempPushType = '文本推送'"
          >
            文本推送
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempPushType === '图片推送' }"
            @click="tempPushType = '图片推送'"
          >
            图片推送
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 多秒号设置选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showMultiMiaohaoModal" class="grab-mode-modal" @click.self="handleCancelMultiMiaohao">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelMultiMiaohao">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmMultiMiaohao">确认</span>
        </div>
        <div class="grab-mode-content">
          <div 
            class="grab-mode-item" 
            :class="{ active: tempMultiMiaohao === '随机' }"
            @click="tempMultiMiaohao = '随机'"
          >
            随机
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempMultiMiaohao === '轮询' }"
            @click="tempMultiMiaohao = '轮询'"
          >
            轮询
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempMultiMiaohao === '全秒' }"
            @click="tempMultiMiaohao = '全秒'"
          >
            全秒
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 多尾号设置选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showMultiTailModal" class="grab-mode-modal" @click.self="handleCancelMultiTail">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelMultiTail">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmMultiTail">确认</span>
        </div>
        <div class="grab-mode-content">
          <div 
            class="grab-mode-item" 
            :class="{ active: tempMultiTail === '随机' }"
            @click="tempMultiTail = '随机'"
          >
            随机
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempMultiTail === '轮询' }"
            @click="tempMultiTail = '轮询'"
          >
            轮询
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempMultiTail === '全尾' }"
            @click="tempMultiTail = '全尾'"
          >
            全尾
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 雷值位置选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showThunderPositionModal" class="grab-mode-modal" @click.self="handleCancelThunderPosition">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelThunderPosition">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmThunderPosition">确认</span>
        </div>
        <div class="grab-mode-content">
          <div 
            class="grab-mode-item" 
            :class="{ active: tempThunderPosition === '分' }"
            @click="tempThunderPosition = '分'"
          >
            分
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempThunderPosition === '角' }"
            @click="tempThunderPosition = '角'"
          >
            角
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempThunderPosition === '元' }"
            @click="tempThunderPosition = '元'"
          >
            元
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempThunderPosition === '角+分' }"
            @click="tempThunderPosition = '角+分'"
          >
            角+分
          </div>
          <div 
            class="grab-mode-item" 
            :class="{ active: tempThunderPosition === '角分都是' }"
            @click="tempThunderPosition = '角分都是'"
          >
            角分都是
          </div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 智能打折选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showSmartDiscountModal" class="grab-mode-modal" @click.self="handleCancelSmartDiscount">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelSmartDiscount">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmSmartDiscount">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempSmartDiscount === '不设置' }" @click="tempSmartDiscount = '不设置'">不设置</div>
          <div class="grab-mode-item" :class="{ active: tempSmartDiscount === '95' }" @click="tempSmartDiscount = '95'">95</div>
          <div class="grab-mode-item" :class="{ active: tempSmartDiscount === '90' }" @click="tempSmartDiscount = '90'">90</div>
          <div class="grab-mode-item" :class="{ active: tempSmartDiscount === '85' }" @click="tempSmartDiscount = '85'">85</div>
          <div class="grab-mode-item" :class="{ active: tempSmartDiscount === '80' }" @click="tempSmartDiscount = '80'">80</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 不抢雷型选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showNoGrabTypeModal" class="grab-mode-modal" @click.self="handleCancelNoGrabType">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelNoGrabType">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmNoGrabType">确认</span>
        </div>
        <div class="grab-mode-content no-grab-type">
          <div class="no-grab-type-row">
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '不设置' }" @click="tempNoGrabType = '不设置'">
              <span class="radio-icon">{{ tempNoGrabType === '不设置' ? '●' : '○' }}</span>
              <span>不设置</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '单雷' }" @click="tempNoGrabType = '单雷'">
              <span class="radio-icon">{{ tempNoGrabType === '单雷' ? '●' : '○' }}</span>
              <span>单雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '二雷' }" @click="tempNoGrabType = '二雷'">
              <span class="radio-icon">{{ tempNoGrabType === '二雷' ? '●' : '○' }}</span>
              <span>二雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '三雷' }" @click="tempNoGrabType = '三雷'">
              <span class="radio-icon">{{ tempNoGrabType === '三雷' ? '●' : '○' }}</span>
              <span>三雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '四雷' }" @click="tempNoGrabType = '四雷'">
              <span class="radio-icon">{{ tempNoGrabType === '四雷' ? '●' : '○' }}</span>
              <span>四雷</span>
            </div>
          </div>
          <div class="no-grab-type-row">
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '五雷' }" @click="tempNoGrabType = '五雷'">
              <span class="radio-icon">{{ tempNoGrabType === '五雷' ? '●' : '○' }}</span>
              <span>五雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '六雷' }" @click="tempNoGrabType = '六雷'">
              <span class="radio-icon">{{ tempNoGrabType === '六雷' ? '●' : '○' }}</span>
              <span>六雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '七雷' }" @click="tempNoGrabType = '七雷'">
              <span class="radio-icon">{{ tempNoGrabType === '七雷' ? '●' : '○' }}</span>
              <span>七雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '八雷' }" @click="tempNoGrabType = '八雷'">
              <span class="radio-icon">{{ tempNoGrabType === '八雷' ? '●' : '○' }}</span>
              <span>八雷</span>
            </div>
            <div class="no-grab-type-item" :class="{ active: tempNoGrabType === '九雷' }" @click="tempNoGrabType = '九雷'">
              <span class="radio-icon">{{ tempNoGrabType === '九雷' ? '●' : '○' }}</span>
              <span>九雷</span>
            </div>
          </div>
          <button class="no-grab-type-confirm" @click="handleConfirmNoGrabType">确定</button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 认几位选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showRecognizeDigitsModal" class="grab-mode-modal" @click.self="handleCancelRecognizeDigits">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelRecognizeDigits">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmRecognizeDigits">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempRecognizeDigits === 1 }" @click="tempRecognizeDigits = 1">一位</div>
          <div class="grab-mode-item" :class="{ active: tempRecognizeDigits === 2 }" @click="tempRecognizeDigits = 2">两位</div>
          <div class="grab-mode-item" :class="{ active: tempRecognizeDigits === 3 }" @click="tempRecognizeDigits = 3">三位</div>
          <div class="grab-mode-item" :class="{ active: tempRecognizeDigits === 4 }" @click="tempRecognizeDigits = 4">四位</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 认前/后选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showRecognizePositionModal" class="grab-mode-modal" @click.self="handleCancelRecognizePosition">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelRecognizePosition">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmRecognizePosition">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempRecognizePosition === '前' }" @click="tempRecognizePosition = '前'">前</div>
          <div class="grab-mode-item" :class="{ active: tempRecognizePosition === '后' }" @click="tempRecognizePosition = '后'">后</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 中间抢条件选择弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showMiddleConditionModal" class="grab-mode-modal" @click.self="handleCancelMiddleCondition">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelMiddleCondition">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmMiddleCondition">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempMiddleCondition === '大于' }" @click="tempMiddleCondition = '大于'">大于</div>
          <div class="grab-mode-item" :class="{ active: tempMiddleCondition === '小于' }" @click="tempMiddleCondition = '小于'">小于</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 尾包不抢选择弹窗（可多选） - Teleport到body -->
  <Teleport to="body">
    <div v-if="showTailNoGrabModal" class="grab-mode-modal" @click.self="handleCancelTailNoGrab">
      <div class="grab-mode-sheet">
        <div class="grab-mode-content tail-no-grab">
          <div 
            class="tail-no-grab-item" 
            :class="{ active: tempTailNoGrab.includes('最小') }"
            @click="toggleTailNoGrab('最小')"
          >
            <span class="radio-icon">{{ tempTailNoGrab.includes('最小') ? '●' : '○' }}</span>
            <span>最小</span>
          </div>
          <div 
            class="tail-no-grab-item" 
            :class="{ active: tempTailNoGrab.includes('最大') }"
            @click="toggleTailNoGrab('最大')"
          >
            <span class="radio-icon">{{ tempTailNoGrab.includes('最大') ? '●' : '○' }}</span>
            <span>最大</span>
          </div>
          <div 
            class="tail-no-grab-item" 
            :class="{ active: tempTailNoGrab.includes('二小') }"
            @click="toggleTailNoGrab('二小')"
          >
            <span class="radio-icon">{{ tempTailNoGrab.includes('二小') ? '●' : '○' }}</span>
            <span>二小</span>
          </div>
          <div 
            class="tail-no-grab-item" 
            :class="{ active: tempTailNoGrab.includes('二大') }"
            @click="toggleTailNoGrab('二大')"
          >
            <span class="radio-icon">{{ tempTailNoGrab.includes('二大') ? '●' : '○' }}</span>
            <span>二大</span>
          </div>
          <div 
            class="tail-no-grab-item" 
            :class="{ active: tempTailNoGrab.includes('第三大') }"
            @click="toggleTailNoGrab('第三大')"
          >
            <span class="radio-icon">{{ tempTailNoGrab.includes('第三大') ? '●' : '○' }}</span>
            <span>第三大</span>
          </div>
          <button class="tail-no-grab-confirm" @click="handleConfirmTailNoGrab">确定</button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 选择尾数弹窗（尾数玩法） - Teleport到body -->
  <Teleport to="body">
    <div v-if="showSelectTailModal" class="grab-mode-modal" @click.self="handleCancelSelectTail">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelSelectTail">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmSelectTail">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempSelectTail === '单尾' }" @click="tempSelectTail = '单尾'">单尾</div>
          <div class="grab-mode-item" :class="{ active: tempSelectTail === '双尾' }" @click="tempSelectTail = '双尾'">双尾</div>
          <div class="grab-mode-item" :class="{ active: tempSelectTail === '角分' }" @click="tempSelectTail = '角分'">角分</div>
          <div class="grab-mode-item" :class="{ active: tempSelectTail === '元角分' }" @click="tempSelectTail = '元角分'">元角分</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 中间抢条件弹窗（尾数玩法） - Teleport到body -->
  <Teleport to="body">
    <div v-if="showWeishuMiddleConditionModal" class="grab-mode-modal" @click.self="handleCancelWeishuMiddleCondition">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelWeishuMiddleCondition">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmWeishuMiddleCondition">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempWeishuMiddleCondition === '大于' }" @click="tempWeishuMiddleCondition = '大于'">大于</div>
          <div class="grab-mode-item" :class="{ active: tempWeishuMiddleCondition === '小于' }" @click="tempWeishuMiddleCondition = '小于'">小于</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 尾包不抢弹窗（尾数玩法） - Teleport到body -->
  <Teleport to="body">
    <div v-if="showWeishuTailNoGrabModal" class="grab-mode-modal" @click.self="handleCancelWeishuTailNoGrab">
      <div class="grab-mode-sheet">
        <div class="grab-mode-header">
          <span class="grab-mode-btn cancel" @click="handleCancelWeishuTailNoGrab">取消</span>
          <span class="grab-mode-btn confirm" @click="handleConfirmWeishuTailNoGrab">确认</span>
        </div>
        <div class="grab-mode-content">
          <div class="grab-mode-item" :class="{ active: tempWeishuTailNoGrab === '不抢最小' }" @click="tempWeishuTailNoGrab = '不抢最小'">不抢最小</div>
          <div class="grab-mode-item" :class="{ active: tempWeishuTailNoGrab === '不抢最大' }" @click="tempWeishuTailNoGrab = '不抢最大'">不抢最大</div>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 选择用户弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showUserSelectModal" class="user-select-modal" @click.self="handleCancelUserSelect">
      <div class="user-select-panel">
        <div class="user-select-header">用户列表</div>
        <div class="user-select-search">
          <input 
            type="text" 
            v-model="userSearchKeyword" 
            placeholder="请输入关键字搜索..."
            class="user-search-input"
          />
        </div>
        <div class="user-select-list">
          <div 
            v-for="user in filteredUserList" 
            :key="user.id" 
            class="user-select-item"
            :class="{ selected: user.selected }"
            @click="user.selected = !user.selected"
          >
            <span class="user-checkbox">{{ user.selected ? '☑' : '☐' }}</span>
            <span class="user-name">{{ user.name }}</span>
          </div>
          <div v-if="filteredUserList.length === 0" class="user-select-empty">
            暂无用户
          </div>
        </div>
        <div class="user-select-footer">
          <button class="user-btn refresh" @click="handleRefreshUsers">刷新</button>
          <button class="user-btn clear" @click="handleClearUsers">清空</button>
          <button class="user-btn select-all" @click="handleSelectAllUsers">全选</button>
          <button class="user-btn confirm" @click="handleConfirmUserSelect">确认</button>
        </div>
      </div>
    </div>
  </Teleport>

  <!-- 保存成功弹窗 - Teleport到body -->
  <Teleport to="body">
    <div v-if="showSaveSuccessModal" class="save-success-modal">
      <div class="save-success-content">
        <div class="save-success-icon">✓</div>
        <div class="save-success-text">保存成功</div>
      </div>
    </div>
  </Teleport>
</template>

<style>
/* 弹窗样式 - 非scoped用于Teleport */
.grab-mode-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 99999;
}

.grab-mode-sheet {
  width: 100%;
  max-width: 480px;
  background: #fff;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  animation: grab-mode-slide-up 0.3s ease-out;
}

.grab-mode-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid #f0f0f0;
}

.grab-mode-btn {
  font-size: 16px;
  cursor: pointer;
  color: #d4a853;
}

.grab-mode-btn.confirm {
  font-weight: 500;
}

.grab-mode-content {
  padding: 20px 0 40px;
}

.grab-mode-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #999;
  cursor: pointer;
  transition: all 0.2s;
}

.grab-mode-item.active {
  color: #333;
  font-weight: 500;
  background: #f9f9f9;
}

/* 不抢雷型特殊样式 */
.grab-mode-content.no-grab-type {
  padding: 20px;
}

.no-grab-type-row {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin-bottom: 15px;
}

.no-grab-type-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 14px;
  color: #666;
}

.no-grab-type-item.active {
  color: var(--primary-gold);
}

.radio-icon {
  font-size: 16px;
  color: #ccc;
}

.no-grab-type-item.active .radio-icon {
  color: var(--primary-gold);
}

.no-grab-type-confirm {
  width: 100%;
  height: 44px;
  background: linear-gradient(135deg, #E8B86D, #C9A050);
  border: none;
  border-radius: 22px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
}

/* 尾包不抢弹窗样式 */
.grab-mode-content.tail-no-grab {
  padding: 30px 20px 20px;
}

.tail-no-grab-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 0;
  font-size: 16px;
  color: #666;
  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
}

.tail-no-grab-item:last-of-type {
  border-bottom: none;
}

.tail-no-grab-item.active {
  color: var(--primary-gold);
}

.tail-no-grab-item .radio-icon {
  font-size: 18px;
  color: #ccc;
}

.tail-no-grab-item.active .radio-icon {
  color: var(--primary-gold);
}

.tail-no-grab-confirm {
  width: 100%;
  height: 44px;
  background: linear-gradient(135deg, #E8B86D, #C9A050);
  border: none;
  border-radius: 22px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;
}

/* 选择用户弹窗样式 */
.user-select-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.user-select-panel {
  width: 320px;
  max-height: 80vh;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modal-fade-in 0.3s ease-out;
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.user-select-header {
  padding: 16px;
  font-size: 18px;
  font-weight: 600;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}

.user-select-search {
  padding: 12px 16px;
  border-bottom: 1px solid #f0f0f0;
}

.user-search-input {
  width: 100%;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
}

.user-search-input:focus {
  border-color: var(--primary-gold);
}

.user-search-input::placeholder {
  color: #999;
}

.user-select-list {
  flex: 1;
  overflow-y: auto;
  max-height: 300px;
  min-height: 150px;
}

.user-select-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  cursor: pointer;
  border-bottom: 1px solid #f5f5f5;
  transition: background 0.2s;
}

.user-select-item:hover {
  background: #fafafa;
}

.user-select-item.selected {
  background: #fff9f0;
}

.user-checkbox {
  font-size: 18px;
  color: #ccc;
}

.user-select-item.selected .user-checkbox {
  color: var(--primary-gold);
}

.user-name {
  font-size: 14px;
  color: #333;
}

.user-select-empty {
  padding: 40px;
  text-align: center;
  color: #999;
  font-size: 14px;
}

.user-select-footer {
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
}

.user-btn {
  flex: 1;
  height: 36px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.2s;
}

.user-btn:active {
  opacity: 0.8;
}

.user-btn.refresh {
  background: var(--primary-gold);
  color: #fff;
}

.user-btn.clear {
  background: #e74c3c;
  color: #fff;
}

.user-btn.select-all {
  background: var(--primary-gold);
  color: #fff;
}

.user-btn.confirm {
  background: var(--primary-gold);
  color: #fff;
}

/* 保存成功弹窗样式 */
.save-success-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  pointer-events: none;
}

.save-success-content {
  background: rgba(0, 0, 0, 0.75);
  border-radius: 12px;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  animation: save-success-fade-in 0.3s ease-out;
}

.save-success-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--primary-gold);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
}

.save-success-text {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

@keyframes save-success-fade-in {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes grab-mode-slide-up {
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
}
</style>

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
