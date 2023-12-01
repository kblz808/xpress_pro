<template>
  <div class="container">
    <div class="text">
      <div class="enjoy">Enjoy Your Ride</div>
      <h1>Our Vehicle Fleet</h1>
      <p>Driving your dreams to reality with an exquisite fleet of versatile vehicles for <span>unforgettable journeys.</span></p>
    </div>
  
    <vs-scrollbar height="400px">
      <div class="scroll_container">
        <template v-for="car in cars">
            <CarCard :car=car />
        </template>
      </div>
    </vs-scrollbar>
  </div>
</template>

<style scoped>
  .container {
    padding: 42px 0;
    background: #121212;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 42px;
  }

  span {
    font-weight: 800;
    font-size: 20px;
    color: #1ecb15;
  }

  .scroll_container {
    width: 100%;
    display: flex;
    gap: 24px;
  }

  .text {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    width: 700px;
    word-wrap: break-word;
    text-align: center;
  }

  .text h1 {
    font-size: 38px;
    font-weight: 900;
  }

  .enjoy {
    padding: 8px;
    background: #333333;
    color: #1ecb15;
    font-weight: 800;
    font-size: 16px;
    border-radius: 4px;
  }
  
</style>

<script>
  import CarCard from "./CarCard.vue"
  import {carData} from "../data.js"

  export default {
    data() {
      return {
        cars: carData,
      }
    },
    components: {
      CarCard,
    }
  }
</script>