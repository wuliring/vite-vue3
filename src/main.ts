import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

// 路由配置
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/home/devices'
        },
        {
          path: 'devices',
          name: 'Devices',
          component: () => import('./views/Devices.vue')
        },
        {
          path: 'logs',
          name: 'Logs',
          component: () => import('./views/Logs.vue')
        },
        {
          path: 'settings',
          name: 'Settings',
          component: () => import('./views/Settings.vue')
        }
      ]
    }
  ]
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
