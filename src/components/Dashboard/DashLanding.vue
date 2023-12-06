 <template>  
    <div class="container-upper">
        <NavBar />
        <p>Dashboard</p>
    </div>
    <div class="container-lower">
        <Profile @menu-click="handleMenuClick"/>
        <router-view></router-view>
        <div class="right">
            <Records />
            <Orders />
            <Favorite />
        </div>
    </div>
    <Footer />
</template>

<style scoped>
    .container-upper {
        height: 300px;
        background-image: url('/images/bg.jpg');
    }
    p{
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
</style>

<script>
    import NavBar from '../NavBar.vue'
    import Footer from '../Footer.vue'
    import Orders from './Orders.vue'
    import Profile from '../Profile.vue'
    import Records from './Records.vue'
    import Favorite from '../Favorite.vue'

    export default {
        components: {
            NavBar,
            Footer,
            Orders,
            Profile,
            Records,
            Favorite,
        },
        data(){
            return {
                activeMenu: 'dashboard',
            }
        },
        methods: {
            handleMenuClick(menu) {
                this.activeMenu = menu;
            }

        }
    }
</script> 