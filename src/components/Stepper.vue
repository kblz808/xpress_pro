<script>
export default {
  props: ["current"],
  methods: {
    clicked(id){
      this.$emit('selected', id);
    }
  }
}
</script>

<template>
<div class="container">
  <div class="step">
    <div @click="clicked" class="icon" :class="{active: current == 0, passive: 0 < current}"><i class='bx bxs-map-pin'></i></div>
    <h3>Journey</h3>
  </div>

  <div class="line" :class="{active: current > 0}"></div>

  <div class="step">
    <div @click="clicked" class="icon" :class="{active: current == 1, passive: 1 < current}"><i class='bx bxs-car' ></i></div>
    <h3>Select Car</h3>
  </div>

  <div class="line" :class="{active: current > 1}"></div>

  <div class="step">
    <div @click="clicked" class="icon" :class="{active: current == 2, passive: 2 < current}"><i class='bx bxs-map'></i></div>
    <h3>Sightseeings</h3>
  </div>

  <div class="line" :class="{active: current > 2}"></div>

  <div class="step">
    <div @click="clicked" class="icon" :class="{active: current == 3, passive: 3 < current}"><i class='bx bxs-message-alt-add'></i></div>
    <h3>Additional</h3>
  </div>

</div>
</template>

<style scoped>
.line {
  height: 4px;
  flex-grow: 1;
  align-self: center;
  background: silver;
  border-radius: 32px;
}

.container {
  display: flex;
}

.icon {
  width: 100px;
  height: 100px;
  background: silver;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  color: white;
  cursor: pointer;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.step h3 {
  font-size: 16px;
  font-weight: 600;
}

.active {
  background: green;
  color: white;
}

.passive {
  background: silver;
  color: white;
}
</style>