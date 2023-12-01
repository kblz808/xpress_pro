<template>
<div class="container">
  <div class="name">Sight name</div>
  <vs-select label="Label placeholder" label-float>
    <vs-option label="Vuesax" value="0.30"> 30min </vs-option>
    <vs-option label="Vuesax" value="1"> 1hr </vs-option>
    <vs-option label="Vuesax" value="1.30"> 1hr 30min </vs-option>
    <vs-option label="Vuesax" value="2"> 2hr </vs-option>
    <vs-option label="Vuesax" value="2.30"> 2hr 30min </vs-option>
  </vs-select>
</div>
</template>

<script>
export default {
  props: ['sight'],
}
</script>

<style scoped>
.container {
  display: flex;
  align-items: end;
  gap: 24px;
}

.name {
  background: white;
  padding: 6px 12px;
  color: black;
  border-radius: 10px;
}
</style>