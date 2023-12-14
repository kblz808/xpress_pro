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
import Cars from './pages/Cars.vue'
import AdditionalService from './pages/AdditionalService.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import CarsFilter from './pages/CarsFilter.vue'
import Blog from './pages/Blog.vue'
import CarDialog from './pages/CarDialog.vue'
import Completed from './pages/Completed.vue'
import Payment from './pages/Payment.vue'
import NewSight from './pages/NewSight.vue'
import About from './pages/About.vue'

import 'vuesax-alpha/theme-chalk/index.css'
import './index.css'

const routes = [
  {path: '/', component: Home},
  {path: '/dashboard', component: Dashboard, meta: {requiresAuth: false}},
  {path: '/profile', component: Profile, meta: {requiresAuth: false}},
  {path: '/myorders', component: MyOrders, meta: {requiresAuth: false}},
  {path: '/myfavorite', component: MyFavorite, meta: {requiresAuth: false}},
  {path: '/journey', component: Journey, meta: {requiresAuth: false}},
  {path: '/sight/:step', name: 'sight', props: true, component: NewSight, meta: {requiresAuth: false}},
  {path: '/cars', component: Cars, meta: {requiresAuth: false}},
  {path: '/additional', component: AdditionalService, meta: {requiresAuth: false}},
  {path: '/register', component: Register},
  {path: '/login', component: Login},
  {path: '/cars_filter', component: CarsFilter},
  {path: '/blog', component: Blog},
  {path: '/completed', name: 'completed', component: Completed},
  {path: '/cars_filter', component: CarsFilter, meta: {requiresAuth: true}},
  {path: '/payment', component: Payment},
  {path: '/cars_filter', component: CarsFilter, meta: {requiresAuth: false}},
  {path: '/blog', component: Blog, meta: {requiresAuth: false}},
  {path: '/car_dialog/:id', name: 'car', component: CarDialog, props: true, meta: {requiresAuth: false}},
  {path: '/about', component: About},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(isAuthenticated()){
      next();
    } else {
      next('/login');
    }
  } else {
    next();
  }
})

function isAuthenticated(){
  return !!localStorage.getItem('token');
}

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(Vuesax)
app.use(router)
app.mount('#app')