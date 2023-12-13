<template>
    <div class="about">
            <img src="/images/about.jpg" alt="">
            <div class="info-a">
                <h3>Only Quality For Clients</h3>
                <div class="btn">
                    <vs-button :class="{ 'selected': selectedButton === 1}" color="success"  @click="changeText(1)">Luxury</vs-button>
                    <vs-button :class="{ 'selected': selectedButton === 2}" color="success"  @click="changeText(2)">Comfort</vs-button>
                    <vs-button :class="{ 'selected': selectedButton === 3}" color="success"  @click="changeText(3)">Prestige</vs-button>
                </div>
                <p>{{paragraphText}}</p>
            </div>
        </div>
</template>

<style scoped>
    .about{
        padding: 0px 120px 0px 0px;
        display: flex;
        gap: 200px;
        align-items: center;
        background-color: rgb(242, 255, 240);
    }
    img{
        height: 440.3px;
    }
    .info-a{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 30px;
    }
    h3{
        font-size: 38px;
        font-weight: 700;
    }
    .btn{
        display: flex;
        justify-content: space-around;
    }
    p{
        color: darkslategray;
    }
    .selected {
        background-color: #427e45;
        color: white;
    }
</style>

<script>
    export default {
        data() {
            return {
                paragraphText: "We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.",                
                paragraphText1: "We offer a meticulously curated collection of the most sought-after luxury vehicles on the market. Whether you prefer the sporty allure of a high-performance sports car, the sophistication of a sleek and luxurious sedan, or the versatility of a premium SUV, we have the perfect car to match your discerning taste.",  
                selectedButton: null,              
            }
        },
        props: ["activeItem"],
        methods: {
            changeText(buttonNumber) {
                if (buttonNumber === 1) {
                    this.paragraphText = this.paragraphText1;
                } else if (buttonNumber === 2) {
                    this.paragraphText = "We prioritize your comfort and convenience throughout your journey. We understand that a comfortable ride can make a world of difference, whether you're embarking on a business trip or enjoying a leisurely vacation. That's why we offer a wide range of well-maintained, comfortable cars that cater to your specific needs.";
                } else if (buttonNumber === 3) {
                    this.paragraphText = "We understand that prestige goes beyond luxury. It's about making a statement, embracing sophistication, and indulging in the finer things in life. That's why we offer an exclusive selection of prestigious cars that exude elegance, style, and status.";
                }
                this.selectedButton = buttonNumber;
            },
        },
    }
</script>