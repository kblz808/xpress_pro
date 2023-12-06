<script>
export default {
    methods: {
        handleSignIn(){
            this.$router.push('/login');
        }
    }
}
</script>

<template>
    <div class="main">
        <!-- <img src="../assets/logo.png" alt="">  -->
        <router-link to="/"><h1>XpressPro</h1></router-link>
            <nav>
                <router-link to="/"><ul href="#">Home</ul></router-link>
                <router-link to="/cars_filter"><ul href="#">Cars</ul></router-link>
                <router-link to="/journey"><ul href="#">Booking</ul></router-link>
                <ul href="#">My Account</ul>
                <ul href="#">About Us <i class='bx bx-chevron-down'></i></ul>               
                <ul href="#">Blog</ul>               
            </nav>       
        <vs-button color="#1ECB15" @click="handleSignIn">Sign in</vs-button>       
    </div>

</template>

<style scoped>
    .main {
        background-color: transparent;
        display: flex;
        justify-content: space-between;
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
    h1{
        font-size: 34px;
        font-weight: 900;
        color: white;
    }
</style>