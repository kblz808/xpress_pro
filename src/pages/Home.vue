<template>
    <Banner />
    <Hero />
    <Fleet />
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Fleet from '../components/Fleet.vue'
  import Hero from '../components/Hero.vue'

  export default {
    components: {
      Banner,
      Fleet,
      Hero,
    }
  }
</script>