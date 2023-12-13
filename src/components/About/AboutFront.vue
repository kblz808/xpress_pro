<template>
    <div class="info">
            <div class="text">
                <h3>We offer customers a wide range of<br/> 
                  <strong>commercial cars</strong> and <strong>luxury cars</strong> for <br/> 
                    any occasion.
                </h3>
                <p>At <strong>XPressPro</strong>, we are dedicated to providing exceptional car rental services 
                    to our valued customers. With a commitment to quality, convenience, and 
                    customer satisfaction, we strive to make every rental experience a seamless  
                    and enjoyable one. We understand that every customer has unique needs and  
                    preferences when it comes to renting a car. That's why we maintain a diverse  
                    fleet of well-maintained vehicles to cater to various requirements. From   
                    compact cars for solo travelers to spacious SUVs for families, we have a wide 
                    range of options to choose from.</p>
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
    .info{
        padding: 90px 120px;
        background-color: rgb(242, 255, 240);
    }
    .text{
        display: flex;
        justify-content: space-between;
    }
    h3{
        font-size: 30px;
        font-weight: 800;
    }
    h3{
        font-size: 42px;
        font-weight: 700;
    }
    p{
        width: 800px;
        color: gray;
    }
    strong{
        color: limegreen;
        
    }
    .box_container{
        padding: 60px 0;
        display: flex;
        justify-content: space-between;
    }
    .box{
        width: 220px;
        height: 100px;
        background-color: white;
        box-shadow: inset 0 0 20px rgb(150, 212, 150);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h6{
        color: gray;
    }
    .num{
        font-size: 30px;
        font-weight: 700;
        color: #1ceb15;
    }
</style>

<script>
    
</script>