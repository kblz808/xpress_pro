<template>
    <div class="main">
        <img src="../assets/logo.png" alt="">        
            <nav>
                <ul href="#">Home</ul>
                <ul href="#">Cars</ul>
                <ul href="#">Booking</ul>
                <ul href="#">My Account</ul>
                <ul href="#">About Us <i class='bx bx-chevron-down'></i></ul>               
                <ul href="#">Blog</ul>               
            </nav>       
        <vs-button color="#1ECB15">Sign in</vs-button>       
    </div>

</template>

<style scoped>
    .main {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
        padding: 15px 120px;
        align-items: center;

    }
    nav{
        display: flex;
        gap: 30px; 
    }
     nav ul {
        color: white;
        cursor: pointer;
    }
</style>