<template>
    <Banner />
    <div class="container-upper">
        <NavBar />
        <h1>About Us</h1>
    </div>
        <AboutFront />
        <Boards />
        
        <div class="features">
            <Feature />
        </div>
        <AboutInfo />
        <Contact />
        
        
        <Footer />
</template>

<style scoped>
    .container-upper {
        height: 300px;
        background-image: url(/images/subheader.jpg);
        padding: 10px 120px;
    }
    h1{
        color: white;
        font-size: 42px;
        font-weight: 800;
        text-align: center;
        padding-top: 42px;
    }
    .features{
        height: 900px;
    }
</style>

<script>
    import Banner from '../components/Banner.vue';
    import NavBar from '../components/NavBar.vue';
    import Footer from '../components/Footer.vue';
    import Feature from '../components/Home/Features.vue';
    import AboutInfo from '../components/About/AboutInfo.vue';
    import AboutFront from '../components/About/AboutFront.vue';
    import Boards from '../components/About/Boards.vue';
    import Contact from '../components/About/Contact.vue';

    export default {
        components: {
            Banner,
            NavBar,
            Footer,
            Feature,
            AboutInfo,
            AboutFront,
            Boards,
            Contact,
        }
    }
</script>