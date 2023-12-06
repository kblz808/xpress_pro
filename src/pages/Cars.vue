<template>
<Banner/>
<NavBar/>

<div class="container">
  <template v-for="car in cars">
    <ApiCarCard :car=car @selected="selectCar" ref="childRef" />
  </template>
</div>

</template>

<style scoped>
.container {
  background: black;
  padding: 120px;
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  justify-content: center;
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