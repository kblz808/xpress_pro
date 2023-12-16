<template>
    <div class="contact">
        <h3>Call us for further information. XPressPro customer care is here to help you anytime.</h3>
        <div class="contact-1">
            <div class="box">
                <i class='bx bxs-phone'></i>
                <h2>Call Us Now</h2>
                <h1>+49 200 333 800</h1>
            </div>
            <vs-button color="#1ecb15" :onclick="makePhoneCall">Contact Us</vs-button>
        </div>
    </div>
</template>

<style scoped>
    .contact{
        padding: 40px 120px;
        background-color: green;
        color: white;
        display: flex;
        gap: 30px;
        justify-content: space-between;
        align-items: center;
    }
    h3{
        font-size: 30px;
        font-weight: 800;
    }
    .contact-1{
        width: 500px;
        display: flex;
        flex-direction: column;
    }
    .box{
        display: flex;
        gap: 10px;
        flex-direction: column;
        align-items: center;
    }
    i{
        font-size: 50px;
    }
    h1{
        font-size: 30px;
        font-weight: 800;
    }
</style>

<script>
    export default {
        methods: {
            makePhoneCall() {
            window.open('tel:+49 200 333 800');
            },
        },
    };
</script>