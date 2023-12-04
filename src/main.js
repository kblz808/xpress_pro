import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Vuesax from 'vuesax-alpha'

import App from './App.vue'
import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'
import Profile from './pages/Profile.vue'
import Journey from './pages/Journey.vue'
import Sight from './pages/Sight.vue'
import Cars from './pages/Cars.vue'
import AdditionalService from './pages/AdditionalService.vue'

import 'vuesax-alpha/theme-chalk/index.css'

import './index.css'

const routes = [
  {path: '/', component: Home},
  {path: '/dashboard', component: Dashboard},
  {path: '/profile', component: Profile},
  {path: '/journey', component: Journey},
  {path: '/sight', component: Sight},
  {path: '/cars', component: Cars},
  {path: '/additional', component: AdditionalService}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(Vuesax)
app.use(router)
app.mount('#app')