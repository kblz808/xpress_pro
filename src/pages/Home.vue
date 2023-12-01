<template>
    <Banner />
    <Hero />
    <Fleet />
    <Feature />
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Fleet from '../components/Fleet.vue'
  import Hero from '../components/Hero.vue'
  import Feature from '../components/Features.vue'

  export default {
    components: {
      Banner,
      Fleet,
      Hero,
      Feature,
    }
  }
</script>