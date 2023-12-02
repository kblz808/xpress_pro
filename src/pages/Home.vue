<template>
    <Banner />
    <Hero />
    <Fleet />
    <Info />
    <Feature />
    <Feedback />
    <News />
    <Footer />
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Fleet from '../components/Fleet.vue'
  import Hero from '../components/Hero.vue'
  import Feature from '../components/Features.vue'
  import Info from '../components/Info.vue'
  import News from '../components/News.vue'
  import Feedback from '../components/Feedback.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components: {
      Banner,
      Fleet,
      Hero,
      Feature,
      Info,
      News,
      Feedback,
      Footer,
    }
  }
</script>