<template>
    <Banner />
    <Hero />
    <Fleet />
    <Info />
    <Feature />
    <Feedback />
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Fleet from '../components/Fleet.vue'
  import Hero from '../components/Hero.vue'
  import Feature from '../components/Features.vue'
  import Info from '../components/Info.vue'
  import Feedback from '../components/Feedback.vue'

  export default {
    components: {
      Banner,
      Fleet,
      Hero,
      Feature,
      Info,
      Feedback,
    }
  }
</script>