<template>
    <div class="container">
        <div class="text">
            <h1>We offer customers a wide range of <br/>commercial cars and luxury cars for<br/> any occasion.</h1>
            <p>At our car rental agency, we believe that everyone deserves to experience the 
                pleasure of driving a reliable and comfortable vehicle, regardless of their budget. 
                We have curated a diverse fleet of well-maintained cars, ranging from sleek sedans 
                to spacious SUVs, all at competitive prices. With our streamlined rental process, 
                you can quickly and conveniently reserve your desired vehicle. Whether you need 
                transportation for a business trip, family vacation, or simply want to enjoy a 
                weekend getaway, we have flexible rental options to accommodate your schedule.</p>

        </div>
        <div class="box_container">
            <div class="box">
                <h6 class="num">12345</h6>
                <h6>Completed Orders</h6>
            </div>
            <div class="box">
                <h6 class="num">10345</h6>
                <h6>Happy Customers</h6>
            </div>
            <div class="box">
                <h6 class="num">2345</h6>
                <h6> Vehicles Fleet</h6>
            </div>
            <div class="box">
                <h6 class="num">7</h6>
                <h6>Years Experience</h6>
            </div>
        </div>

    </div>
</template>

<style scoped>
    .container{
        height: 700px;
        padding: 120px ;
        background-image: url('/images/infobg.jpg');
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .text{
        display: flex;
        justify-content: space-between;
    }
    h1{
        color: white;
        font-size: 42px;
        font-weight: 700;
    }
    p{
        width: 800px;
        color: lightgray;
    }
    .box_container{
        padding: 50px 0;
        display: flex;
        justify-content: space-between;
    }
    .box{
        width: 220px;
        height: 100px;
        background-color: rgba(44, 44, 44, 0.404);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h6{
        color: aliceblue;
    }
    .num{
        font-size: 30px;
        font-weight: 700;
        color: #1ceb15;
    }

</style>

<script>

</script>