<template>
    <Banner />
    <MyFavoriteLanding />
</template>

<script>
    import Banner from '../components/Banner.vue'
    import MyFavoriteLanding from '../components/MyFavorite/MyFavoriteLanding.vue';

    export default {
        components: {
            Banner,
            MyFavoriteLanding,
        }
    }

</script>