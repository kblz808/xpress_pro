<template>
  <div class="container">
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
    padding: 32px;
    background: #121212;
    width: 100%;
    display: flex;
  }

  .scroll_container {
    width: 100%;
    display: flex;
    gap: 24px;
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