<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'

import axios from 'axios'
import {useUserStore} from '../store.js'

import {VsNotification} from 'vuesax-alpha'

export default {
  components: {
    Banner,
    NavBar,
  },
  data() {
    return {
      first_name: '',
      last_name: '',
      password: '',
      confirm_password: '',
      email: '',
      phone: '',
      isLoading: false,
    };
  },
  methods: {
    async handleRegister() {
      this.isLoading = true;
      const userStore = useUserStore();
      if(await userStore.register({first_name: this.first_name, last_name: this.last_name, email: this.email, phone_number: this.phone, password: this.password, password_confirmation: this.confirm_password}) == true){
        this.$router.push('/login');
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
        title: 'Registration Error',
        text: 'We encountered an issue with your registration. Please check your information and try again. If the problem persists, contact support for assistance.',
      })
    }
  }
}
</script>

<template>
<Banner/>

<div class="upper">
  <NavBar/>
  <h1>Register</h1>
</div>

<div class="lower">
  <div class="text">
      <h2>Don't have an account? Register now.</h2>
      <p>Welcome to Rentaly. We're excited to have you on board. By creating an account with us, you'll gain <br/> access to a range of benefits and convenient features that will enhance your car rental experience.</p>
  </div>

  <div class="form">
    <div class="form1">
      <vs-input v-model="first_name" placeholder="First Name" input-style="border" />
      <vs-input v-model="email" placeholder="Email" input-style="border" />
    </div>

    <div class="form2">
      <vs-input v-model="last_name" placeholder="Last name" input-style="border" />
      <vs-input v-model="phone" placeholder="Phone" input-style="border" />
    </div>

    <div class="form3">
      <vs-input v-model="password" placeholder="Password" input-style="border" type="password"/>
      <vs-input v-model="confirm_password" placeholder="Confirm Password" input-style="border" type="password"/>
    </div>

    <vs-button @click="handleRegister" :loading="isLoading" color="success">Register Now</vs-button>
  </div>
</div>

</template>

<style scoped>
.upper {
    background-image: url('/images/subheader.jpg');
    padding: 0 120px 80px 120px;
    display: flex;
    flex-direction: column;
    gap: 42px;
}

.upper h1 {
  font-weight: 800;
  font-size: 48px;
  color: white;
  align-self: center;
}

.lower {
  padding: 60px 16rem;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.text {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.text h2 {
  font-size: 22px;
  font-weight: 600;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: start;
}

.form1 {
  display: flex;
  gap: 12px;
}

.form2 {
  display: flex;
  gap: 12px;
}

.form3 {
  display: flex;
  gap: 12px;
}
</style>