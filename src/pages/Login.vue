<script>
import NavBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    Banner,
    NavBar,
  }
}
</script>

<template>
<Banner/>

<div class="outer">
  <NavBar/>
  
  <div class="container">
    <h2>Login</h2>

    <vs-input placeholder="username">
      <template #icon>
        <i class="bx bx-user" />
      </template>
    </vs-input>

    <vs-input placeholder="password" type="password">
      <template #icon>
        <i class="bx bx-lock-open-alt" />
      </template>
    </vs-input>

    <vs-button>Sign In</vs-button>
  </div>

</div>
</template>

<style scoped>
.outer {
  background-image: url('/images/2.jpg');
  padding: 0 120px 120px 120px;
  display: flex;
  flex-direction: column;
  gap: 120px;
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

</style>