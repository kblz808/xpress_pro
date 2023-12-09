<template>
    <div class="box">
      <div class="upper">
        <div class="left">
          <h3>What is your vehicle type?</h3>
          <div class="car_types">
            <div class="logo" :style="{'background': car_clicked == 'car' ? 'yellow' : 'green'}" @click="carClicked('car')">
              <img src="/images/car.png">
              Car
            </div>

            <div class="logo" :style="{'background': car_clicked == 'van' ? 'yellow' : 'green'}" @click="carClicked('van')">
              <img src="/images/van.png">
              Van
            </div>

            <div class="logo" :style="{'background': car_clicked == 'minibus' ? 'yellow' : 'green'}" @click="carClicked('minibus')">
              <img src="/images/minibus.png">
              Minibus
            </div>

            <div class="logo" :style="{'background': car_clicked == 'sports' ? 'yellow' : 'green'}" @click="carClicked('sports')">
              <img src="/images/sportscar.png">
              Prestige
            </div>
          </div>
        </div>

        <div class="right">
          <div class="forms">
            <div>
              Pick Up Location
              <vs-select v-model="pickup_location" filter placeholder="Pick your pick up location">
                <template #message-danger v-if="showError"> Pickup and Dropoff locations cannot be the same </template>
                <vs-option v-for="city in cities" :label="city" :value="city"> {{city}} </vs-option>
              </vs-select>
            </div>

            <div>
              Drop Off Location
              <vs-select v-model="dropoff_location" filter placeholder="Pick your drop off location">
                <template #message-danger v-if="showError"> Pickup and Dropoff locations cannot be the same </template>
                <vs-option v-for="city in cities" :label="city" :value="city"> {{city}} </vs-option>
              </vs-select>
            </div>
          </div>
    
          <div class="forms">
            <div>
              Pick Up Date & Time
              <vs-input v-model="pickup_date" type="date"  />
            </div>

            <div>
              <vs-input v-model="time" type="time" label="Time" />
            </div>
          </div>
        </div>
      </div>

      <vs-button color="success" @click="rentClicked"><router-link to="/sight">Rent Now</router-link></vs-button>
    </div>

</template>

<style scoped>
.box {
  background: white;
  color: #031B4E;
  padding: 30px 20px 12px 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 78px;
  height: 40px;
}

.logo {
  color: white;
  padding: 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.car_types {
  display: flex;
  justify-content: start;
  gap: 16px;
}

.right {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.forms {
  display: flex;
  gap: 32px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.left h3 {
  font-size: 18px; 
  font-weight: 700;
}
</style>

<script>
import {germanCities} from '../data.js'

export default {
  data() {
    return {
      car_clicked: '',
      pickup_location: "",
      dropoff_location: "",
      pickup_date: "",
      time: "",
      cities: germanCities,
      showError: false,
    }
  },
  watch: {
    dropoff_location() {
      if(this.dropoff_location == this.pickup_location){
        this.showError = true;
      } else {
        this.showError = false;
      }
    },
    pickup_location(){
      if(this.dropoff_location == this.pickup_location){
        this.showError = true;
      } else {
        this.showError = false;
      }
    }
  },
  methods: {
    carClicked(carName) {
      this.car_clicked = carName;
    },
    rentClicked(){
      const journey = {
        car_pickeed: this.car_picked,
        pickup_location: this.pickup_location,
        dropoff_location: this.dropoff_location,
        pickup_date: this.pickup_date,
        time: this.time,
      };
      localStorage.setItem("journey", JSON.stringify(journey));
      
      this.$router.push('/sight');
    }
  },
}
</script>