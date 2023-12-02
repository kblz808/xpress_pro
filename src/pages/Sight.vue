<template>
<Banner/>
<NavBar/>

<div class="container">
  <template v-for="sight in sights">
    <SightCard :sight=sight @card-clicked="handleCardClicked" />
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
      selectedSights: [],
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
    handleCardClicked(sight, value) {
      if(value) {
        this.selectedSights.push(sight);
      } else {
        this.selectedSights = this.selectedSights.filter(s => sight.id != s.id);
      }
      console.log(this.selectedSights);
      // const sight = this.sights.find(s => s.id === sightId);
      // console.log(sightId, value);
    }
  }
}
</script>