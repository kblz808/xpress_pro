<template>
    <div class="container">
        <!-- <img src="/images/girl.jpg" alt=""> -->
      <img :src="testimonial.image" alt="">
      <p><strong>"</strong>{{ testimonial.comment }}<strong>"</strong></p>
      <div class="stars">
        <i v-for="(star, index) in starIcons" :key="index" class="bx" :class="[star ? 'bxs-star' : 'bx-star']"></i>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: {
      testimonial: {
        type: Object,
        required: true
      }
    },
    computed: {
      starIcons() {
        const filledStars = this.testimonial.stars;
        const totalStars = 5;
        const emptyStars = totalStars - filledStars;
        return Array(filledStars).fill(true).concat(Array(emptyStars).fill(false));
      }
    },
    // async mounted() {
      
    //     const usrrsep = await axios.get(`https://xpresspro-core.onrender.com/users/${this.testimonial.user_id}`);
    //     console.log( "Userdata:", usrrsep);
    //     this.usrrsep = usrrsep;
    // }
  };
  </script>
  
  <style scoped>
  .container {
    width: 500px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 30px;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    text-align: center;
  }
  
  img {
    border-radius: 50%;
    border: 5px solid limegreen;
    width: 180px;
    height: 200px;
  }
  
  p {
    color: gray;
  }
  
  strong {
    color: limegreen;
    font-size: 30px;
    font-weight: 900;
  }
  .bxs-star{
    color: #f0a213;
  }
  .bx-star{
    color: black;
  }
  </style>
  