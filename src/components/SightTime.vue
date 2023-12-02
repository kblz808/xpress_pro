<template>
<div class="container">
  <div class="name">{{sight.location}}</div>
  <vs-select v-model="value" label="Label placeholder" label-float>
    <vs-option label="1hr" value="1"> 1hr </vs-option>
    <vs-option label="2hr" value="2"> 2hr </vs-option>
    <vs-option label="3hr" value="3"> 3hr </vs-option>
  </vs-select>
</div>
</template>

<script>
export default {
  props: ['sight'],
  data() {
    return {
      value: "",
    }
  }
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