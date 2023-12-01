<template>
<Banner/>
<NavBar/>

<div class="container">
  <h1>Looking for a <span>vehicle?</span> You're at the right place.</h1>

  <div class="box">
    <div class="upper">
      <div class="left">
        <h3>What is your vehicle type?</h3>
        <div class="car_types">
          <div class="logo">
            <img src="/images/car.png">
            Car
          </div>

          <div class="logo">
            <img src="/images/van.png">
            Van
          </div>

          <div class="logo">
            <img src="/images/van.png">
            Minibus
          </div>

          <div class="logo">
            <img src="/images/sportscar.png">
            Prestige
          </div>
        </div>
      </div>

      <div class="right">
        <div class="forms">
          <div>
            Pick Up Location
            <vs-input v-model="pickup_location" input-style="border" placeholder="Enter your pickup location" />
          </div>

          <div>
            Drop Off Location
            <vs-input v-model="dropoff_location" input-style="border" placeholder="Enter your dropoff location" />
          </div>
        </div>
      
        <div class="forms">
          <div>
            Pick Up Date & Time
            <vs-input v-model="pickup_date" type="date"  />
          </div>

          <div>
            Return Date & Time
            <vs-input v-model="return_date" type="date"  />
          </div>
        </div>
      </div>
    </div>

    <vs-button color="success"><router-link to="/sight">Rent Now</router-link></vs-button>
  </div>
</div>
</template>

<style scoped>
.container {
  background-image: url("/images/1.jpg");
  color: white;
  padding: 100px 120px;
}

.container h1 {
  font-size: 38px;
  font-weight: 800;
  padding-bottom: 32px;
}

.container span {
  color: green;
}

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
  background: green;
  color: white;
  padding: 24px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
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
import NavBar from '../components/NavBar.vue'
import Banner from '../components/Banner.vue'

export default {
  components: {
    NavBar,
    Banner,
  },
  data() {
    return {
      pickup_location: "",
      dropoff_location: "",
      pickup_date: "",
      return_date: "",
    }
  }
}
</script>