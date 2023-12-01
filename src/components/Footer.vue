<template>
    <div class="container">
        <div class="upper">
            <div class="text">
                <h3>About XpressPro</h3>
                <p>Where quality meets affordability. We<br/> understand the importance of a smooth <br/>and enjoyable journey without the burden <br/>of excessive costs. That's why we have <br/>meticulously crafted our offerings to <br/>provide you with top-notch vehicles at<br/> minimum expense.</p>
            </div>
            <div class="text">
                <h3>Contact Info</h3>
                <p>08 W 36th St, New York, NY 10001<br/>
+1 333 9296<br/>
contact@example.com<br/>
Download Brochure</p>
            </div>
            <div class="text">
                <h3>Quik links</h3>
                <p>About<br/>
Blog<br/>
Careers<br/>
News<br/>
Partners</p>
            </div>
            <div class="text">
                <h3>Social Networks</h3>
                <p>Where quality meets affordability. We<br/> understand the importance of a smooth <br/>and enjoyable journey without the burden <br/>of excessive costs. That's why we have <br/>meticulously crafted our offerings to <br/>provide you with top-notch vehicles at<br/> minimum expense.</p>
            </div>
        </div>
        <hr>
        <div class="lower">
            <p>Copyright 2023 - XpressPro</p>
            <div class="terms">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>

    </div>

</template>

<style scoped>
    .container {
        background-color: #1a1919;
        height: 460px;
        color: lightgray;
        padding: 90px 240px 50px 240px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;
    }
    .upper{
        display: flex;
        justify-content: space-around;
    }
    .lower{
        display: flex;
        justify-content: space-between;
    }
    .terms{
        display: flex;
        gap: 10px;
    }
    .text{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    h3{
        color: #1ecb15;
    }
</style>