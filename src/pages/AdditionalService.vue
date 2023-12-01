<template>
<Banner />
<NavBar />

<div class="container">
  <div class="left">
    <div class="image_container">
      <img src="/images/child_seat.png" />
    </div>

    <div class="seat_tools">
      <vs-button><i class='bx bx-minus'></i></vs-button>
      <div class="count">{{count}}</div>
      <vs-button><i class='bx bx-plus'></i></vs-button>
    </div>

    <p>Number of child seat</p>
  </div>

  <div class="right">
    <div class="sight">
      <template>
        <SightTime />
      </template>
    </div>
  </div>

</div>
</template>

<style scoped>
.container {
  padding: 40px 120px;
  display: flex;
  justify-content: space-around;
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
  background: white;
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
}

.seat_tools {
  display: flex;
  justify-content: space-between;
}

.sight {
  display: flex;
  flex-direction: column;
}
</style>

<script>
import Banner from '../components/Banner.vue'
import NavBar from '../components/NavBar.vue'
import SightTime from '../components/SightTime.vue'

export default {
  components: {
    Banner,
    NavBar,
    SightTime,
  },
  data() {
    return {
      count: 1,
    }
  }
}
</script>