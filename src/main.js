import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Vuesax from 'vuesax-alpha'

import { createPinia } from 'pinia'

import App from './App.vue'
import Home from './pages/Home.vue'
import Journey from './pages/Journey.vue'
import Sight from './pages/Sight.vue'
import Cars from './pages/Cars.vue'
import AdditionalService from './pages/AdditionalService.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'

import 'vuesax-alpha/theme-chalk/index.css'
import './index.css'

const routes = [
  {path: '/', component: Home},
  {path: '/journey', component: Journey},
  {path: '/sight', component: Sight},
  {path: '/cars', component: Cars},
  {path: '/additional', component: AdditionalService},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(Vuesax)
app.use(router)
app.mount('#app')