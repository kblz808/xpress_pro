<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import NewSightCard from '../components/NewSightCard.vue'

import Stepper from '../components/Stepper.vue'

import axios from 'axios';

export default {
  components: {
    Banner,
    NavBar,
    NewSightCard,
    Stepper,
  },

  data() {
    return {
      sights: [],
      selectedSights: [],
      current: 2,
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

<template>
<Banner/>

<div class="upper">
  <NavBar/>
  <h1>Sight-seeings Stops</h1>
</div>

<div class="outer_container">

  <div class="container">  
    <h2>Visit these sights along the way</h2>
    <template v-for="sight in sights">
      <NewSightCard :sight=sight @card-clicked="handleCardClicked" />
    </template>
  </div>

  <div class="right">
    <div class="top">
      <h2>Route</h2>

      <div class="locations">
        <vs-select v-model="pickup_location" filter placeholder="Pick your pick up location">
          <template #message-danger v-if="showError"> Pickup and Dropoff locations cannot be the same </template>
          <vs-option v-for="city in cities" :label="city" :value="city"> {{city}} </vs-option>
        </vs-select>

        <vs-button icon><i class='bx bx-transfer-alt'></i></vs-button>

        <vs-select v-model="dropoff_location" filter placeholder="Pick your drop off location">
          <template #message-danger v-if="showError"> Pickup and Dropoff locations cannot be the same </template>
          <vs-option v-for="city in cities" :label="city" :value="city"> {{city}} </vs-option>
        </vs-select>
      </div>

      <div class="time">
        <vs-input v-model="pickup_date" type="date"  />  
        <vs-input v-model="time" type="time" />
      </div>
    </div>

    <hr/>
    
  </div>

</div>
</template>

<style scoped>
.time {
  display: flex;
  justify-content: space-between;
}

.locations {
  display: flex;
  align-items: center;
  gap: 12px;
}

.top {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: space-between;
}

.top h2 {
  font-size: 36px;
  font-weight: 600;
  align-self: start;
}

.right {
  background: white;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border: 1.5px solid gray;
}

.container {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
}

.container h2 {
  font-size: 24px;
  font-weight: 600;
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
  background-image: url('/images/bg.jpg');
  padding: 0 80px 60px 80px;
}

.outer_container {
  padding: 40px 80px;
  background-color: aliceblue;
  display: flex;
  gap: 32px;
  align-items: start;
}
</style>