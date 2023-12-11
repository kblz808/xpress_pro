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
                <div class="info">
                    <h2>Enjoy Best Travel Experience</h2>
                    <h3>Traveling is an enriching experience that<br/> allows us to explore new destinations,<br/> immerse ourselves in different cultures,<br/> and create lifelong memories.</h3>
                    <vs-button type="border" color="#000">Read More </vs-button>
                </div>
            </div>
            <div class="news">
                <img src="/images/pic-blog-2.jpg" alt="">
                <div class="info">
                    <h2>Enjoy Best Travel Experience</h2>
                    <h3>Traveling is an enriching experience that<br/> allows us to explore new destinations,<br/> immerse ourselves in different cultures,<br/> and create lifelong memories.</h3>
                    <vs-button type="border" color="#000">Read More </vs-button>
                </div>
            </div>
            <div class="news">
                <img src="/images/pic-blog-3.jpg" alt="">
                <div class="info">
                    <h2>Enjoy Best Travel Experience</h2>
                    <h3>Traveling is an enriching experience that<br/> allows us to explore new destinations,<br/> immerse ourselves in different cultures,<br/> and create lifelong memories.</h3>
                    <vs-button type="border" color="#000">Read More </vs-button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .container {
    height: 800px;
    background-color: white;
    padding-top: 40px;
  }
  .text {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    width: 700px;
    word-wrap: break-word;
    text-align: center;
    color: darkslategray;
  }
  .text h1 {
    font-size: 38px;
    font-weight: 900;
  }

  .enjoy {
    padding: 8px;
    background: #525252;
    color: #1ecb15;
    font-weight: 800;
    font-size: 16px;
    border-radius: 4px;
  }
  h1{
    color: black;
  }
  img{
    height: 300px;
    border-radius: 12px;
  }

  .news{
    height: 500px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .news-container{
    padding: 45px 120px;
    display: flex;
    gap: 30px;
    justify-content: space-between;
  }
  .info{
    height: 1300px;
    padding: 30px;
    border-radius: 12px;
    background: rgb(242, 255, 240);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    top: -50px;
    color: black;
  }

  h2{
    font-weight: 900;
    font-size: 20px;
    padding-bottom: 10px;
  }
  h3{
    font-size: 16px;
    color: darkslategray;
    padding-bottom: 10px;
  }
</style>