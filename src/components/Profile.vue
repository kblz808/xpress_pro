<template>
    <div class="left">
      <img src="/images/girl.jpg" alt="">
      <div class="info">
        <h3>Monica Lucas</h3>
        <h5>monica@xpresspro.com</h5>
      </div>
  
      <div class="menu">
        <router-link to="/dashboard" @click="setActiveMenu('dashboard')">
          <div :class="{ 'menu-item': true, 'active': activeMenu === 'dashboard' }">
             <i class='bx bxs-home'></i> Dashboard
          </div>

        </router-link>
        <router-link to="/profile" @click="setActiveMenu('profile')">
          <div :class="{ 'menu-item': true, 'active': activeMenu === 'profile' }">
             <i class='bx bxs-user'></i> My Profile
          </div>
        </router-link>
        <router-link to="/myorders" @click="setActiveMenu('orders')">
          <div :class="{ 'menu-item': true, 'active': activeMenu === 'orders' }">
             <i class='bx bx-calendar'></i> My Orders
          </div>
        </router-link>
        <router-link to="/myfavorite"  @click="setActiveMenu('favorite')">
          <div :class="{ 'menu-item': true, 'active': activeMenu === 'favorite' }">
            <i class='bx bxs-car'></i> My Favorite Cars
          </div>
        </router-link>
        <router-link to="/login" @click="setActiveMenu('signOut')">
          <div :class="{ 'menu-item': true, 'active': activeMenu === 'signOut' }">
             <i class='bx bx-log-out'></i> Sign Out
          </div>
        </router-link>
      </div>
    </div>
</template>
  

  
<style scoped>
   .left{
        border-radius: 10px;
        width: 301px;
        height: 512px;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }
    img{
        border-radius: 50%;
        height: 170px;
        width: 170px;
        border: 5px solid limegreen;
    }
    .info{
        text-align: center;
    }
    h3{
        font-size: 20px;
        font-weight: 700;
    }
    h5{
        font-size: 14px;
        color: rgb(164, 163, 163);
    }
    .menu{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
    .menu a {
        color: black;
        text-decoration: none;
        padding: 10px; 
        cursor: pointer;
    }
    .menu .menu-item {
        margin-bottom: 4px;
        width: 170px;
        border-radius: 4px;
    }
    
    .menu .menu-item.active {
        background-color: limegreen;
        color: white;
        padding: 10px;
        font-weight: bold;
    }
</style>
  

<script>
  export default {
    props: ["activeMenu"],
    methods: {
      setActiveMenu(menu) {
        this.$emit('menu-click', menu);
      },
    },
  };
</script>