<template>
    <div class="container">
        <div class="text">
          <div class="enjoy">Why Choose Us</div>
          <h1>Our Features</h1>
          <p>Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.</p>
        </div>
        
        <div class="features-container">
            <div class="features-1">
                <div class="feature">
                    <div class="item"> <i class='bx bxs-trophy'></i></div>
                    <div class="text-1">
                        <h3>First class services</h3>
                        <h4>Where luxury meets exceptional <br/>care, creating unforgettable<br/> moments and exceeding your<br/> every expectation.</h4>
                    </div>
                </div>
                <div class="feature">
                    <div class="item"><i class='bx bxs-car' ></i></div>
                    <div class="text-1">
                        <h3>24/7 road assistance</h3>
                        <h4>Reliable support when you need<br/> it most, keeping you on the move<br/> with confidence and peace of<br/> mind.</h4>
                    </div>
                </div>
            </div>

            <img src="/images/car-2.png" alt="">

            <div class="features-2">
                <div class="feature">
                    <div class="text-2">
                        <h3>Quality at Minimum Expense</h3>
                        <h5 >Unlocking affordable brilliance<br/> with elevating quality while<br/> minimizing costs for maximum<br/> value.</h5>
                    </div>
                    <div class="item"><i class='bx bxs-purchase-tag'></i></div>
                </div>
                <div class="feature">
                    <div class="text-2">
                        <h3>Free Pick-Up & Drop-Off</h3>
                        <h5>Enjoy free pickup and drop-off<br/> services, adding an extra layer of <br/>ease to your car rental<br/>experience.</h5>
                    </div>
                    <div class="item"><i class='bx bxs-location-plus' ></i></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        height: 700px;
        background-color: white;
    }
    .text {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    width: 700px;
    word-wrap: break-word;
    text-align: center;
    color: darkslategray;
  }
  .text{
    padding-top: 40px;
  }

  .text h1 {
    font-size: 38px;
    font-weight: 900;
  }

  .enjoy {
    padding: 8px;
    background: #525252;
    color: #1ecb15;
    font-weight: 800;
    font-size: 16px;
    border-radius: 4px;
  }
  h1{
    color: black;
  }
  h3{
    font-weight: 900;
    font-size: 20px;
  }
  h4{
    color: darkslategray;
  }
  h5{
    text-align: end;
    color: darkslategray;

  }
  
  img{
    height: 350px;
  }
  i{
    color: white;
  }

  .features-container{
    padding: 45px 120px;
    display: flex;
    justify-content: space-between;
  }
  .features-1{
    display: flex;
    flex-direction: column;
      gap: 20px;
  }
  .features-2{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
  }
  .text-1{
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .feature{
    color: black;
    display: flex;
    gap: 20px;
  }
  .item{ border-radius: 5px;
    background-color: rgb(16, 173, 16);
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    i{
        font-size: 30px;
    }

    .text-2{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        gap: 3px;
    }

</style>

