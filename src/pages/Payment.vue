<template>
    <Banner />
    <div class="upper">
        <NavBar />
        <p>Payment</p>
    </div>
    <div class="lower">
        <h1>Thank you! Proceed your payment here.</h1>
        <div class="container">
            <h2>Payment</h2>
            <h3>How would you like to pay?</h3>
            <select width="100%" v-model="value" placeholder="Select" required >
                <option label="Credit/Debit Card" value="1"> Credit/Debit Card </option>
                <option label="Cash" value="2"> Cash </option>
                <option label="Paypal" value="2"> Paypal </option>
            </select>
            <hr>
                <div class="total">
                    <h4>Total </h4><h4>$300</h4>
                </div>
            <hr>
            <div>
                <h3>Card Number</h3>
                <input v-model="input1" placeholder="Card Number" required/>
                <!-- <img src="/images/cards2.png" alt=""> -->
                <img src="/images/cards4.png" alt="">
            </div>
            <div class="card">
                <div>
                    <h3>Fisrt Name</h3>
            <input v-model="input2" placeholder="First Name" required/>
                </div>
                <div>
                    <h3>Last Name</h3>
            <input v-model="input3" placeholder="Last Name" required/>
                </div>
            </div>
            <h3>Country of Residence</h3>
            <input v-model="input1" placeholder="Country of Residence" required/>
            <!-- <router-link to="/#"> -->

                <vs-button>Checkout</vs-button>
            <!-- </router-link> -->
        </div>

    </div>
</template>

<style scoped>
    .upper {
        background-image: url("/images/subheader.jpg");
        padding: 0 120px;
        height: 300px;
    }
    p{
        color: white;
        font-size: 42px;
        font-weight: 800;
        text-align: center;
    }
    .lower{
        background-color: aliceblue;
        padding: 50px 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }
    h1{
        text-align: center;
        font-size: larger;
        font-weight: 700;
    }
    .container{
        background-color: white;
        width: 700px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        padding: 30px;
    }
    h2{
        font-size: xx-large;
    }
    h3{
        font-size: large;
    }
    .total{
        display: flex;
        justify-content: space-between;
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
    img{
        height: 60px;
    }
    .card{
        display: flex;
        justify-content: space-between;
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

<script>
    import Banner from '../components/Banner.vue';
    import NavBar from '../components/NavBar.vue';

    import { ref } from 'vue'

   

    export default {
        components: {
            Banner,
            NavBar,
        },
        data() {
            return {
                value: "Credit/Debit Card",
                input1: "",
                input2: "",
                input3: "",
            }
        },
        created(){
            const data = JSON.parse(this.$route.query.data || '{}');
            this.user = JSON.parse(localStorage.getItem("user"));
            this.data1 = {
                origin1: data.origin,
                destination1: data.destination,
                real_user: data.user,
                date: data.Departure_Date,
                time: data.Departure_time,
                car: data.vehicle,
                stop: data.list_of_Sightseeing,
            }
            console.log("Recieved:", data);
            console.log("origin",this.data1.origin1);
            console.log("destination",this.data1.destination1);
            console.log("car", this.data1.car);
            console.log('Sightprice:', data.list_of_Sightseeing);
        },
    }
</script>