<template>
<Banner/>

<div class="outer">
  <div class="upper">
    <NavBar/>

    <h1>Cars</h1>
  </div>

  <div class="cars_list">
    <div class="filters">
    
      <div class="filter car_type">
        <h3>Vehicle Type</h3>

        <vs-checkbox-group v-model="vehicle_type">
          <vs-checkbox value="car"> Car </vs-checkbox>
          <vs-checkbox value="van"> Van </vs-checkbox>
          <vs-checkbox value="minibus"> Minibus </vs-checkbox>
          <vs-checkbox value="prestige"> Prestige </vs-checkbox>
        </vs-checkbox-group>
      </div>

    </div>

    <div class="cars">
      <template v-for="car in vehicles">
        <ApiCarCards :car=car />
      </template>
    </div>
  </div>

</div>
</template>

<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import ApiCarCards from '../components/ApiCarCards.vue'

import axios from 'axios'

export default {
  components: {
    Banner,
    NavBar,
    ApiCarCards,
  },
  data() {
    return {
      cars: [],
      filter: '',
      vehicle_type: [],
    }
  },
  async created(){
    try {
      const response = await axios.get('https://xpresspro-core.onrender.com/vehicles')
      this.items = response.data;
    } catch (error) {
      console.error(error)
    }
  },
}
</script>

<style scoped>
.upper {
  background-image: url('/images/2.jpg');
  display: flex;
  flex-direction: column;
  gap: 42px;
  padding: 0 120px 60px 120px;
}

.upper h1 {
  font-size: 38px;
  font-weight: 700;
  align-self: center;
  color: white;
}

.cars_list {
  padding: 40px 120px;
  display: flex;
  justify-content: space-between;
}

.filter {
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 25px;
  width: 235px;
}

.filter h3 {
  font-size: 18px;
  font-weight: 600;
}
</style>
