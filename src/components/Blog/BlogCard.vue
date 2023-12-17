<template>
  <div class="container">
    <img :src="testimonial.image" alt="">
    <p class="name" v-if="testimonial.userName">{{ testimonial.userName }}</p>
    <p><i class='bx bxs-quote-alt-left'></i>{{ testimonial.comment }}<i class='bx bxs-quote-alt-right' ></i></p>
    <div class="stars">
      <i v-for="(star, index) in starIcons" :key="index" class="bx" :class="[star ? 'bxs-star' : 'bx-star']"></i>
    </div>
    <!-- <vs-button v-if="isCurrentUser" color="danger" @click="deleteTestimonial">
      <i class='bx bxs-trash-alt'></i>
    </vs-button> -->
    <vs-button v-if="testimonial.userName" @click="deleteTestimonial" color="danger"><i class='bx bxs-trash-alt'></i></vs-button>
  </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    props: {
      testimonial: {
        type: Object,
        required: true
      },
      currentUserID: {
      type: Number,
      required: true
    },
    isLoggedIn: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isCurrentUser: false
    };
  },
    computed: {
      starIcons() {
        const filledStars = this.testimonial.stars;
        const totalStars = 5;
        const emptyStars = totalStars - filledStars;
        return Array(filledStars).fill(true).concat(Array(emptyStars).fill(false));
      }
    },
    async mounted() {
      try {
        const usersResponse = await axios.get('https://xpresspro-core.onrender.com/users/');
        const users = usersResponse.data.users || [];
  
        const user = users.find(user => user.id === this.testimonial.user_id);
        if (user) {
          this.testimonial.userName = `${user.first_name} ${user.last_name}`;
        } else {
          this.testimonial.userName = 'Unknown User';
        }

        this.isCurrentUser = this.currentUserID === this.testimonial.user_id;

      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    methods: {
      async deleteTestimonial() {
        // if(!this.isLoggedIn){
        //   return;
        // }
      try {
        await axios.delete(`https://xpresspro-core.onrender.com/blogs/${this.testimonial.id}`);
        this.$emit('testimonialDeleted', this.testimonial.id);
        this.$router.go();
      } catch (error) {
        console.error('Error deleting testimonial:', error);
      }
    }
    }
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
  .name{
    font-size: 20px;
    font-weight: 800;
    color: green;
  }
  
  p {
    color: gray;
  }
  
  strong {
    color: limegreen;
    font-size: 30px;
    font-weight: 900;
  }
  
  .bxs-star {
    color: #f0a213;
  }
  
  .bx-star {
    color: grey;
  }
  
  i {
    font-size: 20px;
  }
  .bxs-quote-alt-left{
    color: limegreen;
  }
  .bxs-quote-alt-right{
    color: limegreen;
  }
</style>