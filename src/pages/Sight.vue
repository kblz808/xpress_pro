<template>
<Banner/>
<NavBar/>

<div class="container">
  <template v-for="sight in sights">
    <SightCard :sight=sight @card-clicked="handleCardClicked(card.id)" />
  </template>
</div>
</template>

<style scoped>
.container {
  background: black;
  padding: 120px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import SightCard from '../components/SightCard.vue'

import axios from 'axios';

export default {
  components: {
    Banner,
    NavBar,
    SightCard,
  },

  data() {
    return {
      sights: [],
    }
  },

  mounted() {
    axios.get('https://xpresspro-core.onrender.com/sightseeings')
      .then(res => {
        this.sights = res.data.data;
      })
      .catch(err => {
        console.error(err);
      })
  },
  methods: {
    handleCardClicked(cardID){
      
    }
  }
}
</script>