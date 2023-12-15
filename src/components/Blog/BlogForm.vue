<template>
    <form @submit.prevent="submitTestimonial">
      <label for="rating">Rating:</label>
     
      <Stars :initialRating="testimonialData.userRating" required @rated="updateRating"></Stars>
  
      <label for="testimonial">Testimonial:</label>
      <textarea v-model="testimonialData.testimonial" id="testimonial" name="testimonial" required></textarea>
  
      <button type="submit">Submit Testimonial</button>
    </form>
  </template>
  
  <script>
  import Stars from './Stars.vue';
  import axios from 'axios';
  export default {
    components: {
      Stars,
    },
    data() {
      return {
        testimonialData: {
          rating: '5',
          testimonial: '',
          userRating: 0
        },
      };
    },
    methods: {
      updateRating(rating) {
        this.testimonialData.userRating = rating;
      },
      // async submitTestimonial() {
      //   console.log('Testimonial submitted:', this.testimonialData);
      //   this.resetForm();
      // },
      async submitTestimonial() {
      try {
        const response = await axios.post('your_backend_endpoint', this.testimonialData);
        console.log('Testimonial submitted:', response.data);

        // Reset the form after submission if needed
        this.resetForm();
      } catch (error) {
        console.error('Error submitting testimonial:', error);
      }
    },
      resetForm() {
        this.testimonialData = {
          rating: '5',
          testimonial: '',
          userRating: 0
        };
      },
    },
  };
  </script>
  
  
  <style scoped>
form{
    background-color: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

label {
  display: block;
  margin-bottom: 8px;
}

input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border-radius: 10px;
  border: 1px solid limegreen;
  outline: none;
}

textarea {
  resize: vertical;
}

button {
  padding: 10px 16px;
  border: none;
  border-radius: 10px;
  background-color: limegreen;
  color: white;
  cursor: pointer;
}
</style>
  