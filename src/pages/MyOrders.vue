<template>
    <Banner />
    <MyOrdersLanding />

</template>

<script>
import Banner from '../components/Banner.vue';
import MyOrdersLanding from '../components/MyOrders/MyOrdersLanding.vue'


export default {
    components: {
        Banner,
        MyOrdersLanding,
    }
}
</script>