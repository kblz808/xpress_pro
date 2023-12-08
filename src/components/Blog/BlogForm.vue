<template>
    <form @submit.prevent="submitTestimonial">
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
  
  
      <button type="submit">Submit Testimonial</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonialData: {
          rating: '5',
          testimonial: '',
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
          rating: '5',
          testimonial: '',
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
  