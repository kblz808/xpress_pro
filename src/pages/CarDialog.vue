<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'

import axios from 'axios'

export default {
  props: ["id"],
  components: {
    Banner,
    NavBar,
  },
  data() {
    return {
      car: {},
      images: [],
      currentImage: '',
      imageIndex: 0,
    }
  },
  methods: {
    handleNextImage() {
    }
  },
  mounted() {
    axios.get(`https://xpresspro-core.onrender.com/vehicles/${this.id}`)
      .then(res => {
        this.car = res.data.data;
        this.images[0] = this.car.frontview;
        this.images[1] = this.car.sideview;
        this.images[2] = this.car.backview;
        console.log(this.car);
      })
      .catch(err => {
        console.error(err);
      })
  },
}
</script>

<template>
<Banner/>


<div class="outer">
  <div class="upper">
    <NavBar/>

    <h1>Vehicle Fleet</h1>
  </div>

  <div class="car_show">
    <div class="image">
      <img :src="images[imageIndex]" />

      <div class="image_slide">
        <img :src="images[0]" @click="setImageIndex(0)"/>
        <img :src="images[1]" @click="setImageIndex(1)"/>
        <img :src="images[2]" @click="setImageIndex(2)"/>
      </div>
    </div>

    <div class="info">
      <h2>Car Name</h2>

      <p>The BMW M2 is the high-performance version of the 2 Series 2-door coupé. The first generation of the M2 is the F87 coupé and is powered by turbocharged.</p>

      <h2>Specifications</h2>

      <div class="specs">
        <div class="feature"> <h3>Model</h3> <h3 class="spec_bold">{{car.vehicle_model}}</h3> </div>

        <div class="feature"> <h3>Model</h3> <h3 class="spec_bold">{{car.vehicle_model}}</h3> </div>

        <div class="feature"> <h3>Model</h3> <h3 class="spec_bold">{{car.vehicle_model}}</h3> </div>
      </div>
    </div>

    <div class="rate">
      <div class="top"><h3>Daily rate</h3> <h2>${{car.price_per_day}}</h2></div>

      <div class="booking">
        <h3>Booking this car</h3>

        <div class="form">
          <h4>Pick Up Location</h4>
          <vs-input label="pickup location"/>
        </div>

        <div class="form">
          <h4>Drop Off Location</h4>
          <vs-input label="dropoff location"/>
        </div>

        <div class="form">
          <h4>Pick Up Date & Time</h4>
        </div>
      </div>
    
    </div>
  </div>
</div>
</template>

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

.car_show {
  padding: 60px 120px;
  display: flex;
}

.image img {
  width: 534px;
  height: 356px;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
}

.image_slide {
  padding-top: 12px;
  display: flex;
  justify-content: space-between;
}

.image_slide img {
  width: 117px;
  height: 78px;
  border-radius: 16px;
}

.info {
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 22px;
}

.info h2 {
  font-size: 26px;
  font-weight: 700;
}

.specs {
  display: flex;
  flex-direction: column;
}

.feature {
  display: flex;
  justify-content: space-between;
}

.rate {
  width: 290px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.top {
  background: #efefff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.top h3 {
  font-size: 20px;
}

.top h2 {
  font-size: 40px;
  font-weight: 700;
}

.booking {
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.booking h3 {
  font-size: 20px;
  font-weight: 600;
}

.form {
  
}
</style>