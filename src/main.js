import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Vuesax from 'vuesax-alpha'

import App from './App.vue'
import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'
import Profile from './pages/Profile.vue'
import MyOrders from './pages/MyOrders.vue'

import 'vuesax-alpha/theme-chalk/index.css'

import './index.css'

const routes = [
  {path: '/', component: Home},
  {path: '/dashboard', component: Dashboard},
  {path: '/profile', component: Profile},
  {path: '/myorders', component: MyOrders},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(Vuesax)
app.use(router)
app.mount('#app')