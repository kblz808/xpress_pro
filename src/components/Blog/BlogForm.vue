 <template>
  <form @submit.prevent="submitTestimonial">
    <label for="rating">Rating:</label>
    <Stars :initialRating="stars" required @rated="updateRating"></Stars>

    <label for="testimonial">Testimonial:</label>
    <textarea v-model="comment" id="testimonial" name="testimonial" required></textarea>

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
        stars: 0,
        comment: '',

      };
    },
    methods: {
      updateRating(stars) {
        this.stars = stars;
      },
      async submitTestimonial() {
        const testimonialData = {
          comment: this.comment,
          stars: this.stars,
          user_id: JSON.parse(localStorage.getItem("user")).id,
        }
        try {
          const response = await axios.post('https://xpresspro-core.onrender.com/blogs/', {payload: testimonialData});
          console.log('Testimonial submitted:', response.data);
  
          this.resetForm();
        } catch (error) {
          console.error('Error submitting testimonial:', error);
        }
      },
      resetForm() {
        this.testimonialData = {
          comment: '',
          stars: 0,
          user_id: 0, 
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
  