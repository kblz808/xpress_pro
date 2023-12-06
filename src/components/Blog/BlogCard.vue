<template>
    <div class="container">
        <img src="/images/girl.jpg" alt="">
        <p><strong>"</strong> Sed ut perspiciatis unde omnis iste natus error sit
             voluptatem accusantium doloremque laudantium, 
             totam rem aperiam, eaque ipsa quae ab illo inventore 
             veritatis et quasi architecto beatae vitae dicta sunt 
             explicabo. Nemo enim ipsam voluptatem quia voluptas sit 
             aspernatur aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. <strong>"</strong>
        </p>
        <strong>Sarah Monroe</strong>
    </div>
</template>

<style scoped>
    .container{
        width: 500px;
        border-radius: 10px;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 30px;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        text-align: center;
    }
    img{
        border-radius: 50%;
        border: 5px solid limegreen;
        width: 180px;
        height: 200px;
    }
    p{
        color: gray;
    }
    strong{
        color: limegreen;
        font-size: 30px;
        font-weight: 900;
    }
</style>

<script>

</script>