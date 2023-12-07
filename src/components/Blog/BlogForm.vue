<!-- <template>
    <div class="container">
        
            <p>Comment</p>
            <input type="text" placeholder="Comment">
        
       
        <vs-button color="success">Submit</vs-button>
    </div>
</template>

<style scoped>
    .container {
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 30px;
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 10px;
        border-radius: 10px;
        border: 1px solid limegreen;
        outline: none;
        /* height: 400px;
        width: 1600px; */
    }
</style>

<script setup>
import { ref } from 'vue'

const value2 = ref('')

</script> -->

<template>
    <form @submit.prevent="submitTestimonial">
      <label for="name">Name:</label>
      <input v-model="testimonialData.name" type="text" id="name" name="name" required>
  
      <label for="email">Email:</label>
      <input v-model="testimonialData.email" type="email" id="email" name="email">
  
      <label for="rating">Rating:</label>
      <select v-model="testimonialData.rating" id="rating" name="rating">
        <option value="5">5 stars</option>
        <option value="4">4 stars</option>
        <option value="3">3 stars</option>
        <option value="2">2 stars</option>
        <option value="1">1 star</option>
      </select>
  
      <label for="testimonial">Testimonial:</label>
      <textarea v-model="testimonialData.testimonial" id="testimonial" name="testimonial" required></textarea>
  
      <label for="product">Product/Service Used:</label>
      <input v-model="testimonialData.product" type="text" id="product" name="product">
  
      <label for="company">Company (optional):</label>
      <input v-model="testimonialData.company" type="text" id="company" name="company">
  
      <button type="submit">Submit Testimonial</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonialData: {
          name: '',
          email: '',
          rating: '5',
          testimonial: '',
          product: '',
          company: '',
        },
      };
    },
    methods: {
      submitTestimonial() {
        // Handle form submission, e.g., send data to the server
        console.log('Testimonial submitted:', this.testimonialData);
  
        // Optionally, you can reset the form after submission
        this.resetForm();
      },
      resetForm() {
        this.testimonialData = {
          name: '',
          email: '',
          rating: '5',
          testimonial: '',
          product: '',
          company: '',
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
  