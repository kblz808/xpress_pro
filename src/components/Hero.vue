<template>
    <div class="hero">
        <NavBar/>
        <div class="info">
            <h1>Looking for a <span>vehicle</span>? You're <br/>in the right place.</h1>
            <div class="form">
                <div class="input-1">
                    <div>
                        <h6>Pick Up Location</h6>
    
                        <vs-input v-model="value" input-style="border" placeholder="Enter your pickup location" />
                        
                    </div>
                    <div>
                        <h6>Pick Up Date & Time</h6>
                        <div class="form_inside">
                            <vs-input v-model="value" input-style="border" placeholder="November 30, 2023" />
                           
    
                            <vs-time-select
                                v-model="value"
                                start="00:00"
                                step="00:30"
                                end="23:59"
                                placeholder="Select time"
                                format="hh:mm A"
                            />
    
                        </div>
    
    
                    </div>

                </div>
                <div class="input-1">
                    <div>
                        <h6>Drop Off Location</h6>    
                        <vs-input v-model="value" input-style="border" placeholder="Enter your drodoff location" />    
                    </div>
                    <div>
                        <h6>Return Date & Time</h6>    
                        <div class="form_inside">
                            <vs-input v-model="value" input-style="border" placeholder="october 30, 2023" />
                            <vs-time-select
                                v-model="value"
                                start="00:00"
                                step="00:30"
                                end="23:59"
                                placeholder="Select time"
                                format="hh:mm A"
                            />
                        </div>   
                    </div>
                </div>
                <div class="input-1">
                    <div>
                        <h6>Vehicle Type</h6>
    
                        <vs-input v-model="value" input-style="border" placeholder="SUV" />
                        
    
                    </div>
                        <vs-button color="#1ECB15">Sign in</vs-button>       

                    
                </div>
            </div>


            <div class='steps'>
                <div class='bar'>
                    <div class="progress"></div>
                    <div class="item">1</div>
                    <div class="item">2</div>
                    <div class="item">3</div>
                    <div class="item">4</div>

                </div>

                <div className="step-content">
                        <div className="step-items">
                            <p>Choose a Vehicle</p>
                            <p>
                                Unlock unparalleled adventures and<br/>
                                memorable journeys with our vast<br/>
                                fleet of vehicles tailored to suit every<br/>
                                need, taste, and destination.
                            </p>

                        </div>

                        <div className="step-items">
                            <p>Pick Up Location & Date</p>
                            <p>
                                Pick your ideal location and date,<br/>
                                and let us take you on a journey<br/>
                                filled with convenience, flexibility,<br/>
                                and unforgettable experiences.
                            </p>
                        </div>

                        <div className="step-items">
                            <p>Make a Booking</p>
                            <p>
                            Secure your reservation with ease,<br/>
                            unlocking a world of possibilities and<br/>
                            embarking on your next adventure<br/>
                            with confidence.
                            </p>
                        </div>

                        <div className="step-items">
                            <p>Sit Back & Relax</p>
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

    </div>
</template>

<style scoped>
    .hero {
        background-image: url('../assets/bg.jpg');
        height: 972px;
    }
    .info {
        margin: 0px 120px;
    }
    h1{
        color: white;
        font-size: 40px;
        font-weight: 800;
    }
    span{
        color: #1ECB15;
    }
    .form{
        color: white;
        background-color: #14141477;
        margin: 80px 0px;
        padding: 24px;
        height: 233px;
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .input-1{
        display: grid;
        gap: 30px;
    }
    .form_inside{
        display: flex;
        align-items: center;
        gap: 60px;
    }
    .steps{
        margin: 80px 0px;
    }
    .bar{
        display: grid;
        grid-template-columns: repeat(4, 50px);
        grid-gap: 411px;
    }
    .item{
        border-radius: 5px;
    background-color: rgb(16, 173, 16);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    }
    .item:not(:last-child)::after{
        content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    width: 450px;
    height: 2px;
    background-color: darkgreen;
    }
    .progress{
        position: absolute;
    top: calc(40% - 2px);
    left: 0;
    right: 0;
    height: 4px;
    background-color: darkgreen;
    z-index: -1;
    }
    .step-content{
    display: grid;
    grid-template-columns: repeat(4, 50px);
    grid-gap: 411.8px;
    position: relative;
    color: white;
  }

  .step-items{
    margin-top: 20px;
    width: 400px;
    display: flex;
    flex-direction: column;
  }
   
</style>

<script>
import NavBar from '../components/NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>