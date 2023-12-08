<template>
<Banner />
<div class="upper">
  <NavBar/>
  <h1>Additional Services</h1>
</div>

<div class="outer_container">
  <div class="stepper">
    <Stepper :current="current"/>
  </div>  

  <div class="outer">
    <div class="buttons">
      <vs-button color="success" @click="handleBack">Back</vs-button>
      <vs-button color="success" @click="handleFinish">Finish</vs-button>
    </div>

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
        <div class="sight" v-if="sights && sights.length > 0">
          <template v-for="sight in sights">
            <SightTime :sight="sight" />
          </template>
        </div>
        <div v-else>
          Nothing is selected.
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
h1{
  font-size: 32px;
  color:white;
  font-weight: 800;
  text-align: center;
  padding-top: 30px;
}

.upper{
  background-image: url('/images/bg.jpg');
  padding: 0 120px 60px 120px;
}

.outer_container {
  padding: 0px 120px;
  background-color: aliceblue;
}
.buttons{
  display: flex;
  justify-content: space-between;
}
.container {
  padding-top: 30px;
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
  height: 450px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background: white;
  padding: 36px;
  border-radius: 32px;
}
.right{
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  border-radius: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

import Stepper from '../components/Stepper.vue'

import axios from 'axios'

export default {
  components: {
    Banner,
    NavBar,
    SightTime,
    Stepper,
  },
  data() {
    return {
      current: 4,
      count: 1,
      sights: JSON.parse(localStorage.getItem("sights")),
      // selected_car: JSON.parse(localStorage.getItem("selected_car")),
      user_id: null,
      journey: JSON.parse(localStorage.getItem("journey")),
      driver: 1,
    }
  },
  mounted() {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user_id = user.id;
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
      const vehicle = JSON.parse(localStorage.getItem("selected_car"));

      const data = {
        origin: journey.pickup_location,
        destination: journey.dropoff_location,
        Departure_Date: journey.pickup_date,
        Departure_time: journey.time,
        list_of_Sightseeing: this.sights,
        user: this.user_id,
        vehicle: vehicle,
      }
      console.log(data);
      
      axios.post('https://xpresspro-core.onrender.com/journeys', data)
        .then(res => {
          this.$router.push({name: 'completed', query: {data: JSON.stringify(data)}});
        })
    },
    handleBack(){
      localStorage.setItem('', JSON.stringify(this.selected));
      this.$router.push('/cars');
    },
    errorNotification(){
      VsNotification({
        progressAuto: true,
        icon: `<i class='bx bx-error' ></i>`,
        position: 'top-right',
        color: 'danger',
        title: 'Request Submission Error',
        text: 'A problem was detected with your submission. Please ensure all required fields are filled out completely to avoid processing errors in the backend.',
      })
    }
  }
}
</script>