<template>
    <div class="container">
        <div class="text">
          <div class="enjoy">Latest From Us</div>
          <h1>News & Promo</h1>
          <p>Breaking news, fresh perspectives, and in-depth coverage - stay ahead with our latest news, insights, and analysis.</p>
        </div>

        <div class="news-container">
            <div class="news">
                <img src="/images/pic-blog-1.jpg" alt="">
                <!-- <div class="date">Nov, 26</div> -->
                <div class="info">
                    <h2>Enjoy Best Travel Experience</h2>
                    <h3>Traveling is an enriching experience that<br/> allows us to explore new destinations,<br/> immerse ourselves in different cultures,<br/> and create lifelong memories.</h3>
                    <vs-button type="border" color="#fff">Read More </vs-button>
                </div>
            </div>
            <div class="news">
                <img src="/images/pic-blog-2.jpg" alt="">
                <!-- <div class="date">Nov, 26</div> -->
                <div class="info">
                    <h2>Enjoy Best Travel Experience</h2>
                    <h3>Traveling is an enriching experience that<br/> allows us to explore new destinations,<br/> immerse ourselves in different cultures,<br/> and create lifelong memories.</h3>
                    <vs-button type="border" color="#fff">Read More </vs-button>
                </div>
            </div>
            <div class="news">
                <img src="/images/pic-blog-3.jpg" alt="">
                <!-- <div class="date">Nov, 26</div> -->
                <div class="info">
                    <h2>Enjoy Best Travel Experience</h2>
                    <h3>Traveling is an enriching experience that<br/> allows us to explore new destinations,<br/> immerse ourselves in different cultures,<br/> and create lifelong memories.</h3>
                    <vs-button type="border" color="#fff">Read More </vs-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        height: 800px;
        background-color: #121212;
        padding-top: 40px;
    }
    .text {
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    width: 700px;
    word-wrap: break-word;
    text-align: center;
    color: lightgray;
  }
  .text h1 {
    font-size: 38px;
    font-weight: 900;
  }

  .enjoy {
    padding: 8px;
    background: #333333;
    color: #1ecb15;
    font-weight: 800;
    font-size: 16px;
    border-radius: 4px;
  }
  h1{
    color: white;
  }
  img{
    height: 300px;
    border-radius: 12px;
  }

  .news{
    /* background-color: #1ecb15; */
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.news-container{
    padding: 45px 200px;
    display: flex;
    justify-content: space-around;
}
/* .date{
    height: 100px;
    width: 100px;
    background-color: #1ecb15;
    position: relative;
    top: -30vh;
    left: -18vh;
} */
.info{
    height: 1300px;
    width: 400px;
    padding: 30px;
    border-radius: 12px;
    background-color: #121212;
    position: relative;
    top: -50px;
    color: white;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center; */
  }

  h2{
    font-weight: 900;
    font-size: 20px;
    padding-bottom: 10px;
  }
  h3{
    font-size: 16px;
    color: lightgray;
    padding-bottom: 10px;
  }
</style>