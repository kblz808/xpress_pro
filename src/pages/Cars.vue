<template>
<Banner/>
<div class="upper">
  <NavBar/>
  <h1>Vehicle Fleets</h1>
</div>
<div class="outer_container">


  <div class="outer">
    <div class="buttons">
      <vs-button color="success" @click="handleBack">Back</vs-button>
      <vs-button color="success" @click="handleNext">Next</vs-button>
    </div>

    <div class="container">
      <template v-for="car in cars">
        <ApiCarCard :car=car @selected="selectCar" ref="childRef" />
      </template>
    </div>
  </div>
</div>

</template>

<style scoped>
.container {
  padding: 80px 0;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
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
  height: 300px;
  background-image: url('/images/bg.jpg');
  padding: 0 120px;
  
}
.outer_container {
  padding: 30px 120px;
  background-color: aliceblue;
}
</style>

<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import ApiCarCard from '../components/ApiCarCards.vue'

import axios from 'axios'

export default {
  components: {
    Banner,
    NavBar,
    ApiCarCard,
  },
  data() {
    return {
      cars: [],
      selected: '',
    }
  },
  methods: {
    selectCar(carId){
      this.selected = carId;
      console.log(this.selected);
      for(const item of this.$refs.childRef){
        item.childMethod(carId);
      }
    },
    handleNext(){
      localStorage.setItem("selected_car", JSON.stringify(this.selected));
      this.$router.push('/additional');
    },
    handleBack(){
      localStorage.setItem("selected_car", JSON.stringify(this.selected));
      this.$router.push('/sight');
    }
  },
  mounted(){
    axios.get('https://xpresspro-core.onrender.com/vehicles')
      .then(res => {
        this.cars= res.data.data;
      })
      .catch(err => {
        console.error(err);
      })
  }
}
</script>