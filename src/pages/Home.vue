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
  import Fleet from '../components/Home/Fleet.vue'
  import Hero from '../components/Home/Hero.vue'
  import Feature from '../components/Home/Features.vue'
  import Info from '../components/Home/Info.vue'
  import News from '../components/Home/News.vue'
  import Feedback from '../components/Home/Feedback.vue'
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