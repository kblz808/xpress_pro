<template>
    <Banner />
    <Hero />
    <Fleet />
    <Info />
    <Feature />
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Fleet from '../components/Fleet.vue'
  import Hero from '../components/Hero.vue'
  import Feature from '../components/Features.vue'
  import Info from '../components/Info.vue'

  export default {
    components: {
      Banner,
      Fleet,
      Hero,
      Feature,
      Info,
    }
  }
</script>