<template>
    <div class="records">
        <div class='topics'>
            <i class='bx bxs-calendar-check'></i>
            <div class="info">
                <h3>03</h3>
                <p>Upcoming Orders</p>
            </div>
        </div>
        <div class="topics">
            <i class='bx bxs-purchase-tag' ></i>
            <div class="info">
                <h3>12</h3>
                <p>Coupons</p>
            </div>
        </div>
        <div class="topics">
            <i class='bx bxs-calendar' ></i>
            <div class="info">
                <h3>58</h3>
                <p>Total Orders</p>
            </div>
        </div>
        <div class="topics">
            <i class='bx bxs-calendar-x' ></i>
            <div class="info">
                <h3>24</h3>
                <p>Canceled Orders</p>
            </div>
        </div>

    </div>

</template>

<style scoped>
     .records{
        width: 951px;
        height: 240px;
        margin-bottom: 30px;
        display: flex;
        justify-content: space-between;
    }
    .topics{
        width: 220px;
        height: 240px;
        border-radius: 10px;
        padding: 30px;
        background-color: white;       
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        gap: 50px;

    }
    i{
        color: limegreen;
        font-size: 40px;
    }
    h3{
        font-size: xx-large;
        font-weight: 700;
    }
    p{
        color: rgb(164, 163, 163);
    }
</style>