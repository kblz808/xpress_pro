<script>
export default {
  props: ["current"],
}
</script>

<template>
<div class="container">
  <div class="step">
    <div class="icon" :class="{active: current == 1, passive: 1 < current}"></div>
    <h3>Journey</h3>
  </div>

  <div class="line" :class="{active: current > 1}"></div>
  
  <div class="step">
    <div class="icon" :class="{active: current == 2, passive: 2 < current}"></div>
    <h3>Sightseeings</h3>
  </div>

  <div class="line" :class="{active: current > 2}"></div>

  <div class="step">
    <div class="icon" :class="{active: current == 3, passive: 3 < current}"></div>
    <h3>Select Car</h3>
  </div>

  <div class="line" :class="{active: current > 3}"></div>

  <div class="step">
    <div class="icon" :class="{active: current == 4, passive: 4 < current}"></div>
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
}

.container {
  display: flex;
}

.icon {
  width: 100px;
  height: 100px;
  background: silver;
  border-radius: 50%;
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
  color: green;
}

.passive {
  background: blue;
  color: blue;
}
</style>