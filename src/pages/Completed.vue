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
            <h1>{{ user.first_name.toUpperCase() + " " +  user.last_name.toUpperCase() }}</h1>
            </div>
            <div class="text">
                <h2>Pickup Location</h2>
                <h1>{{ data1.origin1.toUpperCase() }}</h1>

            </div>
            <div class="text">
                <h2>Dropoff Location</h2>
                <h1>{{ data1.destination1.toUpperCase() }}</h1>

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
                <h2>Sightseeing Stops</h2>
                <h1 v-for="stop in data1.stop">{{stop.location.toUpperCase() }}</h1>
            </div>
            <div class="text">
                <h2>Sightseeing Stops Price</h2>
                <h1 v-for="stop in data1.stop">{{stop.price_per_hour }}</h1>
                
            </div>
            Go to <router-link to="/payment"> <strong>Payment</strong> </router-link>
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
        data(){
            return{
                data1: null,
                user: null,
            }
        }
        
    }

</script>