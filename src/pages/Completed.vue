<template>
    <Banner />
    <div class="upper">
        <NavBar />
    </div>
    <div class="lower">
        <h1>Congratulations!</h1>
        <i class='bx bxs-check-circle'></i>
        <p v-if="$data">You have now completed the booking journey. Here is your journey will look like: </p>

        <div v-if="data1" class="info">
            <div class="text">
                <h2>Name</h2>
            <h1>{{ user_name.first_name + " " +  user_name.last_name }}</h1>
            </div>
            <div class="text">
                <h2>Pickup Location</h2>
                <h1>{{ data1.origin }}</h1>

            </div>
            <div class="text">
                <h2>Dropoff Location</h2>
                <h1>{{ data1.destination1 }}</h1>

            </div>
            <div class="text">
                
                 <h2>Pickup Date</h2>
                 <h1>{{ data1.date }}</h1>

            </div>
            <div class="text">
                <h2>Pickup Time</h2>
                <h1>{{ data1.time}}</h1>

            </div>
            <div class="text">
                <h2>Car</h2>
                <h1>{{ data1.car}}</h1>

            </div>
            <div class="text">
                <h2>Total Price</h2>
                <h1>{{total_price}}</h1>
            </div>
        </div>
        <div v-else>
            No data
        </div>
        <p v-if="$data">You will recieve an email which contains the booking journey.</p>

    </div>

</template>

<style scoped>
    .upper{
        background-image: url('/images/subheader.jpg');
        padding: 30px 120px;
    }
    .lower{
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding: 50px 120px;
        background-color: aliceblue;
    }
    .text{
        display: flex;
        justify-content: space-between;
        /* padding: 30px; */
    }
    i{
        text-align: center;
        font-size: 100px;
        color: limegreen;
    }
    h1{
        text-align: center;
        font-size: 32px;
        font-weight: 900;
        color: limegreen;
    }
    h2{
        text-align: start;
        color: black;
        font-size: 29px
    }
    p{
        text-align: center;
        font-size: larger;
    }
    .info{
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        background-color: white;
        padding: 50PX;
        width: 800px;
        align-self: center;
    }
    button {
        padding: 10px 16px;
        border: none;
        border-radius: 10px;
        background-color: limegreen;
        color: white;
        cursor: pointer;
    } 
    strong{
        color: limegreen;
    }
</style>

<script>
    import NavBar from '../components/NavBar.vue';
    import Banner from '../components/Banner.vue';

    export default {
        components: {
            NavBar,
            Banner,
        },
       
        created(){
            const data = JSON.parse(localStorage.getItem("journey"));
            const car = JSON.parse(localStorage.getItem("selected_car"));
            this.total_price = JSON.parse(localStorage.getItem("total_price"));

            this.user_name = JSON.parse(localStorage.getItem("user_name"));

            this.data1 = {
                origin: data.pickup_location,
                destination1: data.dropoff_location,
                date: data.pickup_date,
                time: data.time,
                car: data.vehicle,
                stop: data.list_of_Sightseeing,
            }

            // localStorage.removeItem("selected_car");
            // localStorage.removeItem("total_price");
            // localStorage.removeItem("data");
            // localStorage.removeItem("sights");
            // localStorage.removeItem("user_name");
            // localStorage.removeItem("journey");
        },
        data(){
            return{
                data1: null,
                user_name: null,
                total_price: 0,
            }
        }
        
    }

</script>