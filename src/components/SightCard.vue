<template>
<div class="card">
  <div class="image">
    <img :src='sight.image' />
  </div>

  <div class="info">
    <h2>{{sight.location}}</h2>
    <p>{{sight.description}}</p>
    <div class="price">price per hour: {{sight.price_per_hour}}</div>
  </div>

  <vs-button :active="clicked" type="border" @click="emitClicked(sight.id)" color="success">Select</vs-button>
</div>
</template>

<style scoped>
.card {
  width: 318px;
  background: #222222;
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  flex-shrink: 0;

  gap: 18px;
}

img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.price {
  background: black;
  padding: 6px 12px;
  display: flex;
  justify-content: start;
  border-radius: 8px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info h2 {
  font-size: 18px;
  font-weight: 600;
}

.info p {
  font-size: 14px;
}
</style>

<script>
export default {
  props: ['sight'],
  methods: {
    emitClicked(){
      if(this.clicked) {
        this.$emit('card-clicked', this.sight, false);
        this.clicked = false;
      } else {
        this.$emit('card-clicked', this.sight, true);
        this.clicked = true;
      }
    },
  },
  data(){
    return {
      clicked: false,
    }
  }
}
</script>