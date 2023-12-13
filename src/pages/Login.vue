<script>
import NavBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'

import {useUserStore} from '../store.js'

import {VsNotification} from 'vuesax-alpha'

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false,
    };
  },
  components: {
    Banner,
    NavBar,
  },
  methods: {
    async handleSubmit(){
      this.isLoading = true;
      const userStore = useUserStore();
      if(await userStore.login({email: this.email,  password: this.password})){
        this.$router.push('/dashboard');
      } else {
        this.isLoading = false;
        this.errorNotification();
      }
    },
    errorNotification(){
      VsNotification({
        progressAuto: true,
        icon: `<i class='bx bx-error' ></i>`,
        position: 'top-right',
        color: 'danger',
        title: 'Login Failed',
        text: 'Unable to sign in. Please check your username and password are correct and try again. If you continue to experience issues, contact our support team.',
      })
    }
  },
}
</script>

<template>
<Banner/>

<div class="outer">
  <NavBar/>
  
  <div class="container">
    <h2>Login</h2>

    <vs-input placeholder="email" v-model="email">
      <template #icon>
        <i class="bx bx-user" />
      </template>
    </vs-input>

    <vs-input placeholder="password" type="password" v-model="password">
      <template #icon>
        <i class="bx bx-lock-open-alt" />
      </template>
    </vs-input>

    <vs-button @click="handleSubmit" :loading="isLoading" color="success">Sign In</vs-button>

    <p>Dont have an account yet? <router-link to="/register"><span>Sign up</span> here</router-link></p>
  </div>

</div>
</template>

<style scoped>
.outer {
  background-image: url('/images/2.jpg');
  padding: 0 120px 80px 120px;
  display: flex;
  flex-direction: column;
  gap: 80px;
}

.container {
  padding: 42px;
  background: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-self: center;
  border-radius: 10px;
}

.container h2 {
  font-size: 18px;
  font-weight: 700;
}

.container p {
  font-size: 14px;
  color: #777777;
}

span {
  color: limegreen;
  font-weight: 600;
}

</style>