<script>
  export default {
    props: ['car'],
    methods: {
      carSelected() {
        
      }
    }
  }
</script>

<template>
  <div>
    <div class="card">
      <div class="image_container">
        <img :src="car.frontview"/>
      </div>

      <div class="info">
        <div class="upper">
          <div class="name">
            <div>{{car.vehicle_name}}</div>
            <div><p>{{car.vehicle_model}}</p></div>
          </div>

          <div class="icons">
            <div><i class='bx bxs-user'></i> {{car.person_capacity}}</div>
            <div><i class='bx bxs-briefcase-alt-2' ></i> {{car.luggage_capacity}}</div>
          </div>
        </div>

        <hr/>

        <div class="lower">
          <div>
            <p>Price per day</p>
            <h2>${{car.price_per_day}}</h2>
          </div>

          <vs-button @click="carSelected" type="flat" :active="selected">Rent Now</vs-button>
        </div>
      </div>
    </div>

    
  </div>
</template>

<style scoped>
.card {
  background: white;
  border: 1px solid silver;
  padding: 16px;
  color: black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  flex-shrink: 0;
  gap: 10px;
}

.image_container {
  width: 240px;
}

.upper {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.name {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
}

.name p {
  font-size: 12px;
  font-weight: 500;
}

.icons {
  display: flex;
  gap: 12px;
  font-weight: 600;
}

.icons i {
  color: green;
}

.info {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}

.lower {
  display: flex;
  justify-content: space-between;
  align-items: start;
}

.lower div p {
  font-size: 14px;
}

h2 {
  font-size: 20px;
  font-weight: 700;
}
</style>