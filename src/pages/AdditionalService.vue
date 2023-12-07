<template>
<Banner />

<div class="outer_container">
  <NavBar />

  <div class="outer">
    <vs-button @click="handleFinish">Finish</vs-button>

    <div class="container">
      <div class="left">
        <div class="image_container">
          <img src="/images/child_seat.png" />
        </div>

        <div class="seat_tools">
          <vs-button @click="remove"><i class='bx bx-minus'></i></vs-button>
          <div class="count">{{count}}</div>
          <vs-button @click="add"><i class='bx bx-plus'></i></vs-button>
        </div>

        <p>Number of child seat</p>
      </div>

      <div class="right">
        <div class="sight">
          <template v-for="sight in sights">
            <SightTime :sight=sight />
          </template>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.outer_container {
  padding: 0 120px;
  background: black;
}

.outer {
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
}

.container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.image_container {
  background: white;
  padding: 12px;
  border-radius: 14px;
}

img {
  width: 200px;
  height: auto;
}

.count {
  background: white;
  color: black;
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  color: black;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #eeeeee;
  padding: 36px;
  border-radius: 32px;
}

.seat_tools {
  display: flex;
  justify-content: space-between;
}

.sight {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
</style>

<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import SightTime from '../components/SightTime.vue'

import axios from 'axios'

import {useUserStore} from '../store.js'

export default {
  components: {
    Banner,
    NavBar,
    SightTime,
  },
  data() {
    return {
      count: 1,
      sights: JSON.parse(localStorage.getItem("sights")),
      selected_car: JSON.parse(localStorage.getItem("selected_car")),
      user_id: null,
      journey: JSON.parse(localStorage.getItem("journey")),
      driver: 1,
    }
  },
  mounted() {
  },
  methods: {
    add(){
      this.count += 1;
    },
    remove(){
      if(this.count <= 0) {
        this.count = 0;
      } else {
        this.count -= 1;
      }
    },
    handleFinish(){
      const journey = JSON.parse(localStorage.getItem("journey"));
      const sights = this.sights;
      const child_seat = this.count;

      console.log(journey);

      const data = {
        origin: journey.pickup_location,
        destination: journey.dropoff_location,
        Departure_Date: journey.pickup_date,
        Departure_time: journey.time,
        list_of_Sightseeing: this.sights,
        user: 1,
        vehicle: 1,
      }

      axios.post('https://xpresspro-core.onrender.com/journeys', data)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>