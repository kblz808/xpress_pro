import { createApp } from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import Vuesax from 'vuesax-alpha'
import { createPinia } from 'pinia'

import App from './App.vue'
import Home from './pages/Home.vue'
import Dashboard from './pages/Dashboard.vue'
import Profile from './pages/Profile.vue'
import MyOrders from './pages/MyOrders.vue'
import MyFavorite from './pages/MyFavorite.vue'
import Journey from './pages/Journey.vue'
import Sight from './pages/Sight.vue'
import Cars from './pages/Cars.vue'
import AdditionalService from './pages/AdditionalService.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import CarsFilter from './pages/CarsFilter.vue'
import Blog from './pages/Blog.vue'
import CarDialog from './pages/CarDialog.vue'
import Completed from './pages/Completed.vue'

import 'vuesax-alpha/theme-chalk/index.css'
import './index.css'

const routes = [
  {path: '/', component: Home},
  {path: '/dashboard', component: Dashboard},
  {path: '/profile', component: Profile},
  {path: '/myorders', component: MyOrders},
  {path: '/myfavorite', component: MyFavorite},
  {path: '/journey', component: Journey},
  {path: '/sight', component: Sight},
  {path: '/cars', component: Cars},
  {path: '/additional', component: AdditionalService},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/cars_filter', component: CarsFilter},
  {path: '/blog', component: Blog},
  {path: '/car_dialog/:id', name: 'car', component: CarDialog, props: true},
  {path: '/completed', name: 'completed', component: Completed},
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