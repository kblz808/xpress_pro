<template>
    <div class="container">
        <div class="feedback-1">
            <div><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i></div>
            <h3>Excellent Service! Car Rent Service!</h3>
            <p class="text">I have been using Rentaly for my Car Rental <br/>
                needs for over 5 years now. I have never had<br/> 
                any problems with their service. Their<br/> 
                customer support is always responsive and <br/>
                helpful. I would recommend Rentaly to anyone<br/> 
                looking for a reliable Car Rental provider.
            </p>
            <p class="name">- Stepanie Hutchkiss</p>
        </div>
        <div class="feedback-2">
            <div><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i></div>
            <h3>Excellent Service! Car Rent Service!</h3>
            <p class="text">We have been using Rentaly for our trips  <br/>
                needs for several years now and have always <br/> 
                been happy with their service. Their customer  <br/>
                support is Excellent Service! and they are <br/>
                always available to help with any issues we <br/>
                have. Their prices are also very competitive.<br/>
                
            </p>
            <p class="name">- Jovan Reels</p>
        </div>
        <div class="feedback-3">
            <div><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i><i class='bx bxs-star' ></i></div>
            <h3>Excellent Service! Car Rent Service!</h3>
            <p class="text">Endorsed by industry experts, Rentaly is the<br/> 
                Car Rental solution you can trust. With years  
                <br/>of experience in the field, we provide fast,<br/>
                reliable and secure Car Rental services.
            </p>
            <p class="name">- Kanesha Keyton</p>
        </div>
       
    </div>

</template>

<style scoped>
    .container {
        background-color: #121212;
        height: 900px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding-left: 200px;
        padding-right: 200px;
        padding-bottom: 200px;
        padding-top: 100px;
    }
    .feedback-1 {
        background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.644), rgba(78, 78, 80, 0)),url('/images/1.jpg');
        background-size: cover;
        height: 70vh;
        width: 50vh;
        padding: 52px;
        color: white;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        transition: transform .4s;
    }
    .feedback-1:hover {
        transform: scale(1.1);
    }
    .feedback-2 {
        background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.644), rgba(78, 78, 80, 0)),url('/images/2.jpg');
        background-size: cover;
        height: 70vh;
        width: 50vh;
        padding: 52px;
        color: white;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        transition: transform .4s;

    }
    .feedback-2:hover {
        transform: scale(1.1);
    }
    .feedback-3 {
        background-image:  linear-gradient(to bottom, rgba(0, 0, 0, 0.644), rgba(78, 78, 80, 0)),url('/images/3.jpg');
        background-size: cover;
        height: 70vh;
        width: 50vh;
        padding: 52px;
        color: white;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        transition: transform .4s;

    }
    .feedback-3:hover {
        transform: scale(1.1);
    }
    .feedback-2:nth-child(2) {
        margin-top: 10vh;
    }
    .feedback-3:nth-child(3) {
        margin-top: 20vh;
    }
    i{
        color: goldenrod;
    }
    h3 {
        padding-top: 10px;
        font-weight: 800;
    }
    .text {
        padding-top: 10px;
        color: lightgrey;
    }
    .name {
        padding-top: 10px;
        font-weight: 800;
    }
</style>