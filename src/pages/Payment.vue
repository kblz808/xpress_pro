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
                    <h4>Total </h4><h4>${{total_price}}</h4>
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
            <input v-model="first_name" placeholder="First Name" required/>
                </div>
                <div>
                    <h3>Last Name</h3>
            <input v-model="last_name" placeholder="Last Name" required/>
                </div>
            </div>
            <h3>Country of Residence</h3>
            <input v-model="input1" placeholder="Country of Residence" required/>
                <vs-button size="large" @click="handleConfirm">Confirm and pay ${{total_price}}</vs-button>
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
                first_name: "",
                last_name: "",
                total_price: null,
            }
        },
        created(){
            this.total_price = JSON.parse(localStorage.getItem("total_price"));
        },
        methods: {
            handleConfirm(){
                const user_name = {first_name: this.first_name, last_name: this.last_name};
                localStorage.setItem("user_name", JSON.stringify(user_name));
                console.log(localStorage.getItem("user_name"));
                this.$router.push('/completed');
            }
        }
    }
</script>