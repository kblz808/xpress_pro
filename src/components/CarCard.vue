<script>
  export default {
    props: ['car']
  }
</script>

<template>
  <div class="card">
    <div class="image_container">
      <img :src="car.img"/>
    </div>

    <div class="info">
      <div class="upper">
        <div class="name">
          <div>{{car.name}}</div>
          <div><i class='bx bxs-heart'></i> {{car.like}}</div>
        </div>

        <div class="icons">
          <div><i class='bx bxs-user'></i> {{car.seats}}</div>
          <div><i class='bx bxs-briefcase-alt-2' ></i> {{car.luggage}}</div>
          <div><i class='bx bx-group'></i> {{car.doors}}</div>
        </div>
      </div>

      <hr/>

      <div class="lower">
        <div>
          <p>{{car.text}}</p>
          <h2>${{car.price}}</h2>
        </div>

        <vs-button color="success">Rent Now</vs-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 318px;
  height: 358px;
  background: #222222;
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  flex-shrink: 0;
}

.image_container {
  height: 180px;
}

.upper {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.name {
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 700;
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
  font-size: 16px;
}

h2 {
  font-size: 22px;
  font-weight: 700;
}
</style>