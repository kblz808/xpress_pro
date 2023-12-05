<template>
    <div class="favorite">
        <p class="title">
            My Favorite

        </p>
        <div class="card">
            <img src="/images/jeep-renegade.png" alt="">
            <div class="section">
                <p class="title">Jeep Renegade</p>
                <div  class="info">
                    <div>
                        <p class="item">Seats: 5</p>
                        <p class="item">Luggage: 5</p>
                        <p class="item">Doors: 4</p>
                        <p class="item">Fuel: Petrol</p>
                    </div>
                    <div>
                        <p class="item">Horsepower: 500</p>
                        <p class="item">Engine: 3000</p>
                        <p class="item">Drive: 4x4</p>
                        <p class="item">Type: Hatchback</p>
                    </div>
                </div>
            </div>
            <div>
                <p class="item">Daily rate from</p>
                <h1>$251</h1>
                <vs-button color="#1ECB15">Rent Now</vs-button>
            </div>

        </div>
        <div class="card">
            <img src="/images/ferrari-enzo.png" alt="">
            <div class="section">
                <p class="title">Ferrari Enzo</p>
                <div  class="info">
                    <div>
                        <p class="item">Seats: 5</p>
                        <p class="item">Luggage: 5</p>
                        <p class="item">Doors: 4</p>
                        <p class="item">Fuel: Petrol</p>
                    </div>
                    <div>
                        <p class="item">Horsepower: 500</p>
                        <p class="item">Engine: 3000</p>
                        <p class="item">Drive: 4x4</p>
                        <p class="item">Type: Hatchback</p>
                    </div>
                </div>
            </div>
            <div>
                <p class="item">Daily rate from</p>
                <h1>$251</h1>
                <vs-button color="#1ECB15">Rent Now</vs-button>
            </div>

        </div>
        <div class="card">
            <img src="/images/mini-cooper.png" alt="">
            <div class="section">
                <p class="title">Mini Cooper</p>
                <div  class="info">
                    <div>
                        <p class="item">Seats: 5</p>
                        <p class="item">Luggage: 5</p>
                        <p class="item">Doors: 4</p>
                        <p class="item">Fuel: Petrol</p>
                    </div>
                    <div>
                        <p class="item">Horsepower: 500</p>
                        <p class="item">Engine: 3000</p>
                        <p class="item">Drive: 4x4</p>
                        <p class="item">Type: Hatchback</p>
                    </div>
                </div>
            </div>
            <div>
                <p class="item">Daily rate from</p>
                <h1>$251</h1>
                <vs-button color="#1ECB15">Rent Now</vs-button>
            </div>
        </div>
    </div>

</template>

<style scoped>
    .favorite{
        width: 951px;
        border-radius: 10px;
        background-color: white;
        /* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); */
        padding: 30px;
    }
    .title{
        font-size: 20px;
        font-weight: 800;
    } 
    .card{
        width: 891px;
        height: 201px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 30px;
    }
    img{
        width: 256px;
        height: 144px;
        object-fit: cover;
        border-radius: 10px;
        box-shadow: 0px 12px 8px rgba(0, 0, 0, 0.1);
    }
    .section{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .info{
        display: flex;
        gap: 90px;
    }
    p{
        font-size:12px;
    }
    .item{
        color: gray;
    }
    h1{
        font-size: 20px;
        font-weight: 800;
    }
    
</style>

