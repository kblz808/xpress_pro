<template>
   <div class="container-upper">
        <NavBar />
        <p class="title">My Orders</p>
    </div>
    <div class="container-lower">
        <Profile @menu-click="handleMenuClick" :activeMenu="activeMenu" />
        <div class="right">
            <div class="orders">
                <p>Completed</p>

                <MyOrdersTable :status="'Completed'" :orders="orders" />
            </div>
            <div class="orders">
                <p>Cancelled</p>

                <MyOrdersTable :status="'Cancelled'" :orders="orders" />
            </div>
            <div class="orders">
                <p>Scheduled</p>

                <MyOrdersTable :status="'Scheduled'" :orders="orders" />
            </div>
        </div>
    </div>
    <Footer />
</template>

<style scoped>
    .container-upper {
        height: 300px;
        background-image: url('/images/bg.jpg');
        padding: 10px 120px;
    }
    .title{
        color: white;
        font-size: 42px;
        font-weight: 800;
        text-align: center;
        padding-top: 42px;
    }
    .container-lower{
        background-color: #F5F8FA;
        display: flex;
        justify-content: center;
        gap: 40px;
        padding: 90px;
    }
    .right{
        width: 951px;
    }
    p{
        font-size: 20px;
        font-weight: 800;
        padding-top: 30px;
        padding-left: 30px;
    }
    .orders{
        background-color: white;
        border-radius: 10px;
    }

</style>

<script>
    import NavBar from '../NavBar.vue'
    import Footer from '../Footer.vue'
    import Profile from '../Profile.vue'
    import MyOrdersTable from './MyOrdersTable.vue'
    import { ordersData } from '../../data.js'

    export default {
        data() {
            return {
                orders: ordersData,
                activeMenu: 'orders', 
            }
        },
        
        methods: {
            handleMenuClick(menu){
                this.activeMenu = menu;
            }
        },
        components: {
            NavBar,
            Profile,
            Footer,
            MyOrdersTable,
        }
    }
</script>