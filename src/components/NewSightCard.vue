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
      stop_minutes: 75,
      price: 51,
    }
  }
}
</script>

<template>
<div class="card" :style="{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(255, 255, 255, 0)), url(' + sight.image + ')'}">

  <div class="info">
    <h2>{{sight.location}}</h2>
    <div class="info_link"><p>{{sight.description}}</p><a>Learn more</a></div>
  </div>

  <div class="add">
    <div class="buttons">
      <vs-button icon><i class='bx bx-minus'></i></vs-button>
      <h4>{{stop_minutes}} min stop</h4>
      <vs-button icon><i class='bx bx-plus'></i></vs-button>
    </div>
    <vs-button :active="clicked" @click="emitClicked(sight.id)" size='large'>Add for ${{price}}</vs-button>
  </div>

</div>
</template>

<style scoped>
button {
  flex-grow: 1;
}

.add {
  display: flex;
  justify-content: space-between;
}

.buttons {
  display: flex;
  gap: 24px;
  align-items: center;
  padding: 12px;
  background: white;
  border-radius: 22px;
}

.buttons h4 {
  font-size: 18px;
  font-weight: 500;
}

.card {
  background-size: cover;
  background-position: cover;
  background-repeat: no-repeat;

  width: 100%;
  height: 420px;
  padding: 24px;
  
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-shrink: 0;
  gap: 18px;


  border-radius: 10px;
}

.price {
  background: black;
  color: white;
  padding: 6px 12px;
  display: flex;
  justify-content: start;
  border-radius: 8px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: white;
}

.info h2 {
  font-size: 26px;
  font-weight: 700;
}

.info p {
  font-size: 16px;
}

.info_link {
  display: flex;
  gap: 8px;
  align-items: center;
}

.info_link a {
  font-size: 14px;
  font-weight: 500;
  text-decoration: underline;
  color: lightblue;
}
</style>