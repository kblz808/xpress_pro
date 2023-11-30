<template>
  <div class="container">
    <template v-for="car in cars">
        <CarCard :car=car />
    </template>
  </div>
</template>

<style scoped>
  .container {
    padding: 32px;
    background: #121212;
    display: flex;
    gap: 20px;
    overflow-x: auto;
    white-space: nowrap;
    width: 100%;
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