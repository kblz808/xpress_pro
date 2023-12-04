<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
export default {
  components: {
    Banner,
    NavBar,
  },
  data() {
    return {
      name: '',
      username: '',
      password: '',
      re_password: '',
      email: '',
      phone: '',
    };
  },
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
      <vs-input v-mode="name" placeholder="Name" input-style="border" />
      <vs-input v-mode="email" placeholder="Email" input-style="border" />
    </div>

    <div class="form2">
      <vs-input v-mode="username" placeholder="Username" input-style="border" />
      <vs-input v-mode="phone" placeholder="Phone" input-style="border" />
    </div>

    <div class="form3">
      <vs-input v-mode="password" placeholder="Password" input-style="border" />
      <vs-input v-mode="re_password" placeholder="Re-enter Password" input-style="border" />
    </div>

    <vs-button>Register Now</vs-button>
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

.text p {
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