<template>
<Banner/>

<div class="outer">
  <NavBar/>
  
  <div class="container">
    <h1>Looking for a <span>vehicle?</span> You're at the right place.</h1>
    <JourneyForm />
  </div>
</div>

</template>

<style scoped>
.outer {
  background-image: url("/images/subheader.jpg");
  height: 872px;
  padding: 0 120px;
}

.container {
  color: white;
  padding: 100px 0;
}

.container h1 {
  font-size: 38px;
  font-weight: 800;
  padding-bottom: 80px;
}

.container span {
  color: green;
}

.lower{
  background-color: #1a1919;
  padding: 0 120px;
}
</style>

<script>
import NavBar from '../components/NavBar.vue';
import Banner from '../components/Banner.vue';
import JourneyForm from '../components/JourneyForm.vue';
import Footer from '../components/Footer.vue'

export default {
  components: {
    NavBar,
    Banner,
    JourneyForm,
    Footer,
  },
 
}
</script>