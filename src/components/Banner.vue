<template>
  <div class="banner">
    <div class="info">
      <div><i class='bx bxs-phone'></i> +208 333 9296</div>

      <div><i class='bx bxs-envelope'></i> contact@xpresspro.com</div>

      <div><i class='bx bxs-time'></i> Mon - Fri 8:00 - 18:00</div>
    </div>

    <div class="social">
      <i class='bx bxl-facebook'></i>
      <i class='bx bxl-twitter'></i>
      <i class='bx bxl-youtube'></i>
      <i class='bx bxl-pinterest'></i>
      <i class='bx bxl-instagram'></i>
    </div>
  </div>
</template>

<style scoped>
  .banner {
    width: 100%;
    background: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    padding: 0 120px;
  }

  .info {
    display: flex;
    gap: 24px;
  }

  .social {
    display: flex;
    gap: 24px;
  }

  .info i {
    color: green;
  }

  .social i {
    font-size: 18px;
  }
</style>