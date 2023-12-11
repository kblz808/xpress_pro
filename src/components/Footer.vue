<template>
    <div class="container">
        <div class="upper">
            <div class="text">
                <h3>About XpressPro</h3>
                <p>Where quality meets affordability. We
                    <br/> understand the importance of a smooth 
                    <br/>and enjoyable journey without the burden 
                    <br/>of excessive costs. That's why we have 
                    <br/>meticulously crafted our offerings to 
                    <br/>provide you with top-notch vehicles at
                    <br/> minimum expense.
                </p>
            </div>
            <div class="text">
                <h3>Contact Info</h3>
                <div>
                    <i class='bx bxs-phone' ></i> <a href="tel:+1123-456-7890">123-456-7890</a>
                </div>
                <div>
                    <i class='bx bxs-envelope' ></i> <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
                <div>
                    <i class='bx bxs-map' ></i> <a href="https://earth.google.com/web/search/germany/@51.17747204,10.44677578,216.28943878a,10945.84046503d,35y,0h,0t,0r/data=CnIaSBJCCiUweDQ3OWE3MjFlYzJiMWJlNmI6MHg3NWU4NWQ2YjhlOTFlNTViGeoe2Vw1lUlAIV-Wdmou5yRAKgdnZXJtYW55GAIgASImCiQJ-QfOwDQAIkAR705qgRD4IUAZ5Eq0SndlQ0Ahac19TzdhQ0A6AwoBMA">123 Main St, Munich, MN 10001</a>
                </div>
                <div>
                    <a href="#"><i class='bx bxs-file-pdf' ></i> Download Brochure</a>                
                </div>
                <p></p>
            </div>
            <div class="text">
                <h3>Quik links</h3>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">News</a>
                <a href="#">Partners</a>
            </div>
            <div class="text">
                <h3>Social Networks</h3>
                <a href="#">
                    <div><i class='bx bxl-facebook' ></i> Facebook</div>
                </a>
                <a href="#">
                    <div><i class='bx bxl-instagram' ></i> Instagram</div>                    
                </a>
                <a href="#">                    
                    <div><i class='bx bxl-youtube' ></i> YouTube</div>
                </a>
                <a href="#">
                    <div><i class='bx bxl-linkedin' ></i> LinkedIn</div>
                    
                </a>
                

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
        background-color: rgb(240, 255, 240);
        height: 460px;
        color: darkslategray;
        padding: 50px 120px;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: space-between;
    }
    .upper{
        display: flex;
        justify-content: space-between;
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
        font-size: large;
        font-weight: 800;
        color: #1ecb15;
    }
</style>