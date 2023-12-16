<template>
    <div class="container-upper">
        <NavBar />
        <p>Blog</p>
    </div>
    <div class="container-lower">
        <h1 class="title">What a clients say</h1>
        <p class="description">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <div class="blogs">
            <BlogCard  v-for="(testimonial, index) in testimonials" :key="index" :testimonial="testimonial"/>
        </div>
        <div>
            <BlogForm @testimonialSubmitted="updateTestimonials"/>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
  .container-upper{
      padding: 10px 120px;
      background-image: url('/images/bg.jpg');
      height: 300px;
  }
  p{
      color: white;
      font-size: 42px;
      font-weight: 800;
      text-align: center;
      padding-top: 42px;
  }
  .container-lower{
      width: 100%;
      background-color: #F5F8FA;
      padding: 40px 120px;
      display: flex;
      flex-direction: column;
      gap: 40px;
  }
  .title{
      text-align: center;
      color: limegreen;
      font-size: 42px;
      font-weight: 800;
  }
  .description{
      text-align: center;
      color: gray;
      font-size: 20px;
      font-weight: 500;
      padding: 20px;
  }
  .blogs{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 30px
      
  }
</style>

<script>
  import NavBar from '../NavBar.vue';
  import Footer from '../Footer.vue';
  import BlogCard from './BlogCard.vue';
  import BlogForm from './BlogForm.vue';
  import axios from 'axios';

  export default {
    components: {
      NavBar,
      Footer,
      BlogCard,
      BlogForm,
    },
    data() {
      return {
        testimonials: [],
        isLoading: false, 
      };
    },
    methods: {
      async updateTestimonials(newTestimonial) {
        this.isLoading = true;
        this.testimonials.push(newTestimonial);
        this.isLoading = false;
      },
      async fetchTestimonials() {
        try {
          const response = await axios.get('https://xpresspro-core.onrender.com/blogs/');
          console.log('Testimonials fetched:', response.data.data);
          this.testimonials = response.data.data;
        } catch (error) {
          console.error('Error fetching testimonials:', error);
        }
      }
    },
    created() {
      this.fetchTestimonials();
    } 
  }
</script>