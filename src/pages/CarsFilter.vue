<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import FilterCarCard from '../components/FilterCarCard.vue'

import {VueSpinnerOrbit} from 'vue3-spinners';
import {VsNotification} from 'vuesax-alpha'

import axios from 'axios'

export default {
  components: {
    Banner,
    NavBar,
    FilterCarCard,
    VueSpinnerOrbit,
  },
  data() {
    return {
      cars: [],
      filtered_cars: [],
      filter: '',
      vehicle_type: [],
      body_type: [],
      car_seats: [],
      luggage_capacity: [],
      min_price: null,
      max_price: null,
      isLoading: true,
    }
  },
  methods: {
    errorNotification(){
      VsNotification({
        progressAuto: true,
        icon: `<i class='bx bx-error' ></i>`,
        position: 'top-right',
        color: 'danger',
        title: 'Wei\'re sorry, something went wrong.',
        text: 'There was an error while searching for cars data. Please check your internet connection and try again. If the problem persists, contact our support team at support@xpresspor.com.',
      })
    },
  },
  mounted() {
    axios.get('https://xpresspro-core.onrender.com/vehicles')
      .then(res => {
        this.isLoading = false;
        this.cars = res.data.data;
        this.filtered_cars = this.cars;
      })
      .catch(err => {
        this.isLoading = false;
        this.errorNotification();
        console.error(err);
      })
  },
  watch: {
    car_seats() {
      if(this.car_seats.length == 0){
        this.filtered_cars = this.cars;
        return;
      }
      this.filtered_cars = this.cars.filter(car => {
        return this.car_seats.includes(car.person_capacity.toString());
      })
    },
    luggage_capacity() {
      if(this.luggage_capacity.length == 0) {
        this.filtered_cars = this.cars;
        return;
      }
      this.filtered_cars = this.cars.filter(car => {
        return this.luggage_capacity.includes(car.luggage_capacity.toString());
      })
    },
    min_price() {
      if(!this.min_price){
        this.filtered_cars = this.cars;
        return;
      }
      this.filtered_cars = this.cars.filter(car => {
        return car.price_per_day >= this.min_price;
      })
    },
    max_price() {
      if(!this.max_price){
        this.filtered_cars = this.cars;
        return;
      }
      this.filtered_cars = this.cars.filter(car => {
        return car.price_per_day <= this.max_price;
      })
    }
  }
}
</script>


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
          <vs-checkbox value="5"> 5 seats </vs-checkbox>
        </vs-checkbox-group>
      </div>

      <div class="filter luggage_capacity">
        <h3>Luggage Capacity</h3>
        <vs-checkbox-group v-model="luggage_capacity">
          <vs-checkbox value="1"> 1 luggage </vs-checkbox>
          <vs-checkbox value="2"> 2 luggage </vs-checkbox>
          <vs-checkbox value="3"> 3 luggage </vs-checkbox>
          <vs-checkbox value="4"> 4 luggage </vs-checkbox>
        </vs-checkbox-group>
      </div>

      
      <div class="filter price">
        <h3> Minimum Price </h3>

        <vs-input v-model="min_price" input-style="border" placeholder="Min Price" />
        <vs-input v-model="max_price" input-style="border" placeholder="Max Price" />

      </div>
    </div>

    <div class="load" v-if="isLoading">
      <VueSpinnerOrbit size="100" color="lime"/>
    </div>
  
    <div class="cars" v-if="!isLoading">
      <template v-for="car in filtered_cars">
        <FilterCarCard :car=car />
      </template>
    </div>
  </div>

</div>
</template>


<style scoped>
.load {
  width: 100%;
  display: flex;
  padding: 20px;
  justify-content: center;
}

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
  align-items: start;
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
  transition: border-color 0.5s ease;
}

.filter:hover {
  border-color: green;
}

.filter h3 {
  font-size: 18px;
  font-weight: 600;
}
</style>
