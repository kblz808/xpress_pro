<template>
    <div class="star-rating">
      <span
        v-for="index in maxStars"
        :key="index"
        @mouseover="hoverRating(index)"
        @click="setRating(index)"
        @mouseleave="resetRating()"
      >
        <i class="bx" :class="[index <= currentRating ? 'bxs-star' : 'bx-star']"></i>
      </span>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      initialRating: {
        type: Number,
        default: 1
      },
      maxStars: {
        type: Number,
        default: 5
      }
    },
    data() {
      return {
        currentRating: this.initialRating
      };
    },
    methods: {
      hoverRating(index) {
        this.currentRating = index;
      },
      setRating(index) {
        this.currentRating = index;
        this.$emit('rated', this.currentRating);
      },
      resetRating() {
        this.currentRating = this.initialRating;
      }
    }
  };
  </script>
  
  <style scoped>
  .bx {
    font-size: 24px;
    color: #f0a213; 
  }
  </style>
  