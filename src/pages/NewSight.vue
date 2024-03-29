<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import NewSightCard from '../components/NewSightCard.vue'
import NewCarCard from '../components/NewCarCard.vue'
import Stepper from '../components/Stepper.vue'

import {VueSpinnerOrbit} from 'vue3-spinners';

import {VsNotification} from 'vuesax-alpha'

import {germanCities} from '../data.js'

import axios from 'axios';

export default {
  props: ['step'],
  components: {
    Banner,
    NavBar,
    NewSightCard,
    Stepper,
    NewCarCard,
    VueSpinnerOrbit,
  },
  watch: {
    pickup_location() {
      if(this.pickup_location == this.dropoff_location) {
        this.showError = true;
      } else {
        this.showError = false;
      }
    },
    dropoff_location(){
      if(this.pickup_location == this.dropoff_location) {
        this.showError = true;
      } else {
        this.showError = false;
      }
    }
  },
  data() {
    return {
      cities: germanCities,
      current: 1,

      show_cars: true,
      show_sights: false,
      show_additional: false,

      car_selected: false,
      sight_selected: false,

      cars: [],
      sights: [],
      selectedSights: [],
      selected_car: null,

      total_price: 0,
      
      pickup_location: '',
      dropoff_location: '',
      pickup_date: '',
      time: '',

      seat_count: 0,

      isLoading: false,

      show_text: 'Select Your Preferred Vehicle',

      showError: false,

      isPayLoading: false,
    }
  },
  mounted() {
    this.isLoading = true;

    const journey = JSON.parse(localStorage.getItem("journey"));
    this.pickup_location = journey.pickup_location;
    this.dropoff_location = journey.dropoff_location;
    this.pickup_date = journey.pickup_date;
    this.time = journey.time;

    if(this.step == 2){
      let car = JSON.parse(localStorage.getItem("selected_car"));
      this.handleCarSelected(car);
    } else {
      axios.get('https://xpresspro-core.onrender.com/vehicles')
        .then(res => {
          this.cars= res.data.data;
          this.isLoading = false;
        })
        .catch(err => {
          console.error(err);
        })
    }

    axios.get('https://xpresspro-core.onrender.com/sightseeings')
      .then(res => {
        this.sights = res.data.data;
      })
      .catch(err => {
        console.error(err);
      })
  },
  methods: {
    handleSwitch() {
      const pickup = this.pickup_location;
      this.pickup_location = this.dropoff_location;
      this.dropoff_location = pickup;
    },
    errorNotification(){
      VsNotification({
        progressAuto: true,
        icon: `<i class='bx bx-error' ></i>`,
        position: 'top-right',
        color: 'danger',
        title: 'Wei\'re sorry, something went wrong.',
        text: 'There was an error while sending your journey data. Please check your internet connection and try again. If the problem persists, contact our support team at support@xpresspor.com.',
      })
    },
    handleAdditional(){
      if(this.show_additional){
        this.isPayLoading = true;
        const data = {
          origin: this.pickup_location,
          destination: this.dropoff_location,
          Departure_Date: this.pickup_date,
          Departure_time: this.time,
          list_of_Sightseeing: this.selectedSights,
          user_id: 1,
          vehicle_id: this.selected_car.id,
          driver_id: 1,
        }

        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if(token && user){
          const id = JSON.parse(user).id;
          data.user_id = id;
        }

        localStorage.setItem("data", JSON.stringify(data));

        console.log(data);

        axios.post('https://xpresspro-core.onrender.com/journeys', {payload: data})
          .then(res => {
            localStorage.setItem("total_price", this.total_price);
            console.log(res);
            this.$router.push('/payment');
          })
          .catch(err => {
            this.errorNotification();
            console.error(err);
            this.isPayLoading = false;
          });
        
      } else {
        this.show_sights = false;
        this.current = 3;
        this.show_additional = true;
      }
    },
    handleCarSelected(car) {
      if(this.showError){
        return;
      } else {
        this.isLoading = true;
        this.selected_car = car;
        this.total_price = car.price_per_day;
        this.show_cars = false;
        this.current = 2;
        this.show_sights = true;
        this.car_selected = true;
        this.show_text = "Visit these sights along the way";

        console.log(this.selected_car);
        this.isLoading = false;
      }
    },
    handleSightSelected(sight, selected) {
      if(selected){
        this.total_price -= (sight.time_spent * 1.5) * 20;
        this.selectedSights = this.selectedSights.filter(s => sight.id != s.id);
      } else {
        this.total_price += (sight.time_spent * 1.5) * 20;
        this.selectedSights.push(sight);
      }

      if(this.selectedSights.length > 0) {
        this.sight_selected = true;
      } else {
        this.sight_selected = false;
      }
      console.log(this.selectedSights);
    },
    addSeat(){
      this.seat_count += 1;
    },
    minusSeat(){
      if(this.seat_count <= 0){
        return;
      }else {
        this.seat_count -= 1
      }
    }
  },
}
</script>

<template>
<Banner/>

<div class="cover">
<div class="upper">
  <NavBar/>
  <h1>Sight-seeings Stops</h1>
</div>

<div class="stepper">
  <Stepper :current="current" @selected="stepper_selected" />
</div>

<div class="outer_container">

  <div class="container">  
    <h2>{{show_text}}</h2>

    <div class="load" v-if="isLoading">
      <VueSpinnerOrbit size="100" color="lime"/>
    </div>
    
    <template v-for="sight in sights" v-if="show_sights">
      <NewSightCard :sight=sight @card_clicked="handleSightSelected" @price_update="handlePriceChange"/>
    </template>

    <div class="car_list">
      <template v-for="car in cars" v-if="show_cars">
        <NewCarCard :car="car" @selected="handleCarSelected" />
      </template>
    </div>

    <template v-if="show_additional">
      <div class="add_left">
        <div class="image_container">
          <img src="/images/child_seat.png" />
        </div>

        <div class="seat_tools">
          <vs-button @click="minusSeat" color="success" icon><i class='bx bx-minus'></i></vs-button>
          <div class="count">{{seat_count}}</div>
          <vs-button @click="addSeat" color="success" icon><i class='bx bx-plus'></i></vs-button>
        </div>

        <p>number of child seat</p>
      </div>  
    </template>
  </div>

  <div class="right">

    <div class="top">
      <h2 class="title">Itinerary</h2>

      <div class="locations">
        <vs-select v-model="pickup_location" filter placeholder="Pick your pick up location">
          <template #message-danger v-if="showError"> Pickup and Dropoff locations cannot be the same </template>
          <vs-option v-for="city in cities" :label="city" :value="city"> {{city}} </vs-option>
        </vs-select>

        <vs-button icon @click="handleSwitch" color="success"><i class='bx bx-transfer-alt'></i></vs-button>

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

    <div class="middle" v-if="car_selected">
      <h2 class="title">Your ride</h2>

      <div class="vehicle">
        <img :src="selected_car.sideview"/>

        <div class="info">
          <h3>{{selected_car.vehicle_model}}</h3>

          <div class="text">
            <div class="small_info first">
              <p>Comparable to a</p>
              <h5>Volkswagen Passat</h5>
            </div>
          
            <div class="small_info first">
              <p>Passengers</p>
              <i class='bx bx-group'></i> {{selected_car.person_capacity}}
            </div>

            <div class="small_info second">
              <p>Luggage</p>
              <i class='bx bxs-backpack'></i> {{selected_car.luggage_capacity}}x
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <hr/>

    <template v-if="car_selected">
      <vs-button @click="handleAdditional" size="large" color="success" :loading="isPayLoading">Book your trip for ${{total_price}}</vs-button>
    </template>
    
  </div>

</div>
</div>
</template>

<style scoped>
.load {
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.car_list {
  display:flex;
  flex-wrap:wrap;
  gap: 24px;
}

.cover {
  display: flex;
  flex-direction: column;
}

.seat_tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add_left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 450px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 36px;
  border-radius: 32px;
}

.add_left img {
  width: 200px;
  height: auto;
}

.small_info p {
  font-size: 14px;
  font-weight: 500;
}

.small_info h5 {
  font-size: 12px;
}

.text {
  display: flex;
  justify-content: space-between;
}

.info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.info h3 {
  font-size: 18px;
  font-weight: 500;
}

.vehicle {
  display: flex;
  align-items: center;
  gap: 12px;
}

.vehicle img {
  width: 120px;
  object-fit: contain;
  border-radius: 10px;
}

.stepper {
  padding: 24px 80px;
}

.time {
  display: flex;
  justify-content: space-between;
}

.locations {
  display: flex;
  align-items: center;
}

.top {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: space-between;
}

.middle {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: space-between;
}


.title {
  font-size: 32px;
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
  background: aliceblue;
  display: flex;
  gap: 32px;
  align-items: start;
}
</style>