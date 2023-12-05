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

      <div class="filter body_type">
        <h3>Car Body Type</h3>
        <vs-checkbox-group v-model="body_type">
          <vs-checkbox value="convertible"> Convertible </vs-checkbox>
          <vs-checkbox value="coupe"> Coupe </vs-checkbox>
          <vs-checkbox value="exotic_cars"> Exotic Cars </vs-checkbox>
          <vs-checkbox value="hatchback"> Hatch Back </vs-checkbox>
          <vs-checkbox value="minivan"> Mini Van </vs-checkbox>
          <vs-checkbox value="truck"> Truck </vs-checkbox>
          <vs-checkbox value="sedan"> Sedan </vs-checkbox>
          <vs-checkbox value="sports_car"> Sports Car </vs-checkbox>
          <vs-checkbox value="station_wagon"> Station Wagon </vs-checkbox>
          <vs-checkbox value="wagon"> Wagon </vs-checkbox>
        </vs-checkbox-group>
      </div>

      <div class="filter car_seats">
        <h3>Car Seats</h3>
        <vs-checkbox-group v-model="car_seats">
          <vs-checkbox value="2"> 2 seats </vs-checkbox>
          <vs-checkbox value="4"> 4 seats </vs-checkbox>
          <vs-checkbox value="6"> 6 seats </vs-checkbox>
        </vs-checkbox-group>
      </div>
      
      <div class="filter price">
        <h3> Minimum Price </h3>

      </div>
    </div>

    <div class="cars">
      <template v-for="car in cars">
        <FilterCarCard :car=car />
      </template>
    </div>
  </div>

</div>
</template>

<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import FilterCarCard from '../components/FilterCarCard.vue'

import axios from 'axios'

export default {
  components: {
    Banner,
    NavBar,
    FilterCarCard,
  },
  data() {
    return {
      cars: [],
      filtered_cars: [],
      filter: '',
      vehicle_type: [],
      body_type: [],
      car_seats: [],
    }
  },
  mounted() {
    axios.get('https://xpresspro-core.onrender.com/vehicles')
      .then(res => {
        this.cars = res.data.data;
      })
      .catch(err => {
        console.error(err);
      })
  },
  watch: {
    vehicle_type() {
      console.log(this.vehicle_type);

      // this.filtered_cars = this.cars.filter(car => {
      //   console.log('car');
      // });
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.cars {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 12px;
}

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
  gap: 2px;
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
