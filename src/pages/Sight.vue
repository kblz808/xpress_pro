<template>
<Banner/>

<div class="upper">
  <NavBar/>
  <h1>Sight-seeings Stops</h1>
</div>
<div class="outer_container">
  <div class="buttons">
    <vs-button color="success" @click="handleBack">Back</vs-button>
    <vs-button color="success" @click="handleNext">Next</vs-button>
  </div>

  <div class="outer">
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
.buttons{
  display: flex;
  justify-content: space-between;
}
h1{
  font-size: 32px;
  color:white;
  font-weight: 800;
  text-align: center;
  padding-top: 30px;
}


.upper{
  height: 300px;
  background-image: url('/images/bg.jpg');
  padding: 0 120px;
  
}
.outer_container {
  padding: 30px 120px;
  background-color: aliceblue;
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
    },
    handleBack(){
      localStorage.setItem("sights", JSON.stringify(this.selectedSights));
      this.$router.push('/journey');
    }
  }
}
</script>