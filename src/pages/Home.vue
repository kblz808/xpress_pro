<template>
    <Banner />
    <Hero />
    <Fleet />
    <Info />
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Fleet from '../components/Fleet.vue'
  import Hero from '../components/Hero.vue'
  import Info from '../components/Info.vue'

  export default {
    components: {
      Banner,
      Fleet,
      Hero,
      Info,
    }
  }
</script>