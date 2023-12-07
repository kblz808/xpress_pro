<template>
    <div class="hero">
        <NavBar/>
        <div class="info">
            <h1>Looking for a <span>vehicle</span>? You're <br/>in the right place.</h1>
            <JourneyForm />
            <div class="step-container">
                <div class="step">
                    <div class="item completed">1</div>
                    <p class="title">Choose a Vehicle</p>
                    <p>
                        Unlock unparalleled adventures and<br/>
                        memorable journeys with our vast<br/>
                        fleet of vehicles tailored to suit every<br/>
                        need, taste, and destination.
                    </p>
                </div>
                <div class="step">
                    <div class="item">2</div>
                        <p class="title">Pick Up Location & Date</p>
                            <p>
                                Pick your ideal location and date,<br/>
                                and let us take you on a journey<br/>
                                filled with convenience, flexibility,<br/>
                                and unforgettable experiences.
                            </p>
                </div>
                <div class="step">
                    <div class="item">3</div>
                    
                        <p class="title">Make a Booking</p>
                            <p>
                            Secure your reservation with ease,<br/>
                            unlocking a world of possibilities and<br/>
                            embarking on your next adventure<br/>
                            with confidence.
                        </p>

               
                </div>
                <div class="step">
                    <div class="item">4</div>                  
                    <p class="title">Sit Back & Relax</p>
                    <p>
                        Hassle-free convenience as we take<br/>
                        care of every detail, allowing you to<br/>
                        unwind and embrace a journey filled<br/>
                        comfort.
                    </p>               
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .hero {
        background-image: url('/images/bg.jpg');
        height: 972px;
        padding: 10px 120px;
    }
    .info {
        padding: 60px 0px;
        display: flex;
        flex-direction: column;
        gap: 42px;
    }
    h1 {
        color: white;
        font-size: 40px;
        font-weight: 800;
    }
    span {
        color: #1ECB15;
    }
    .step-container {
        display: flex;
        justify-content: space-between;
    }
    .item {
        border-radius: 5px;
        background-color: rgb(16, 173, 16);
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-size: large;
        font-weight: bolder;
    }
    .step{
        display: flex;
        flex-direction: column;
        gap: 16px;
        font-size: 0.8rem;
        color: lightgray;
    }
    .title{
        font-weight: 800;
        color: white;
    }
</style>


<script>
import NavBar from '../NavBar.vue'
import JourneyForm from '../JourneyForm.vue';

export default {
    components: {
        NavBar,
        JourneyForm,
    },
    data() {
        return {
            vehicle_type: '',
            pickup_location: '',
            dropoff_location: '',
            pickup_time: '',
            pickup_date: '',
        }
    },
    methods: {
        handleBooking() {
            if(localStorage.getItem('token')) {
                this.$router.push('/additional');
            } else {
                this.$router.push('/login');
            }
        }
    }
}
</script>