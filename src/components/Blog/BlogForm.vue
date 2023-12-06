<template>
    <div class="container">
        
            <p>Comment</p>
            <input type="text" placeholder="Comment">
        
       
        <vs-button color="success">Submit</vs-button>
    </div>
</template>

<style scoped>
    .container {
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 30px;
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
    input{
        padding: 10px;
        border-radius: 10px;
        border: 1px solid limegreen;
        outline: none;
        /* height: 400px;
        width: 1600px; */
    }
</style>

<script setup>
import { ref } from 'vue'

const value2 = ref('')

</script>