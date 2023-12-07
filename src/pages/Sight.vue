<template>
<Banner/>

<div class="outer_container">
  <NavBar/>

  <div class="outer">
    <vs-button @click="handleNext">Next</vs-button>

    <div class="container">  
      <template v-for="sight in sights">
        <SightCard :sight=sight @card-clicked="handleCardClicked" />
      </template>
    </div>

  </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 0;
  align-items: start;
}

.outer {
  background: black;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.outer_container {
  padding: 0 120px;
  background: black;
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
    },
    handleNext(){
      localStorage.setItem("sights", JSON.stringify(this.selectedSights));
      this.$router.push('/cars');
    }
  }
}
</script>