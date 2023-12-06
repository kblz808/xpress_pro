<template>  
    <div class="container-upper">
        <NavBar />
        <p>My Profile</p>
    </div>
    <div class="container-lower">
        <Profile />
        <router-view></router-view>
        <div class="right">
           <ProfileEdit />
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
    import Profile from '../Profile.vue'
    import ProfileEdit from './ProfileEdit.vue'
   

    export default {
        components: {
            NavBar,
            Footer,
            Profile,
            ProfileEdit
           
        }
    }
</script> 

