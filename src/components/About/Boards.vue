<template>
    <div class="boards">
            <h4>Board of Directors</h4>
            <div class="directors">
                <div class="director">
                    <div class="dir-1">
                        <div class="item"> <i class='bx bxl-facebook-square'></i></div>
                        <div class="item"> <i class='bx bxl-twitter' ></i></div>
                        <div class="item"> <i class='bx bxl-instagram-alt' ></i></div>
                        <div class="item"> <i class='bx bxl-pinterest'></i></div>
                    </div>
                    <div>
                        <h2>Fynley Wilkinson</h2>
                        <h5>Chief Executive Officer</h5>
                    </div>
                </div>
                <div class="director">
                    <div class="dir-2">
                        <div class="item"> <i class='bx bxl-facebook-square'></i></div>
                        <div class="item"> <i class='bx bxl-twitter' ></i></div>
                        <div class="item"> <i class='bx bxl-instagram-alt' ></i></div>
                        <div class="item"> <i class='bx bxl-pinterest'></i></div>
                    </div>
                    <div>
                        <h2>Peter Welsh</h2>
                        <h5>Chief Technology Officer</h5>
                    </div>
                </div>
                <div class="director">
                    <div class="dir-3">
                        <div class="item"> <i class='bx bxl-facebook-square'></i></div>
                        <div class="item"> <i class='bx bxl-twitter' ></i></div>
                        <div class="item"> <i class='bx bxl-instagram-alt' ></i></div>
                        <div class="item"> <i class='bx bxl-pinterest'></i></div>
                    </div>
                    <div>
                        <h2>John Shepard</h2>
                        <h5>Chief Creative Officer</h5>
                    </div>
                </div>
                <div class="director">
                    <div class="dir-4">
                        <div class="item"> <i class='bx bxl-facebook-square'></i></div>
                        <div class="item"> <i class='bx bxl-twitter' ></i></div>
                        <div class="item"> <i class='bx bxl-instagram-alt' ></i></div>
                        <div class="item"> <i class='bx bxl-pinterest'></i></div>
                    </div>
                    <div>
                        <h2>Robyn Peel</h2>
                        <h5>Chief Finance Officer</h5>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped>
    .boards{
        background-image: url(/images/bg-about.jpg);
        padding: 50px 120px;
        text-align: center;
    }
    h4{
        color: white;
        font-size: 42px;
        font-weight: 800;
    }
    .directors{
        padding: 50px 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 20px;
    }
    .director{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .dir-1{
        background-image: url(/images/p1.jpg);
        background-size: cover;
        height: 300px;
        width: 300px;
        border-radius: 10px;
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 7px;
        padding-bottom: 30px;
        transition: transform .4s;
    }
    .dir-1:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    .dir-2{
        background-image: url(/images/p2.jpg);
        background-size: cover;
        height: 300px;
        width: 300px;
        border-radius: 10px;
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 7px;
        padding-bottom: 30px;
        transition: transform .4s;
    }
    .dir-2:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    .dir-3{
        background-image: url(/images/p3.jpg);
        background-size: cover;
        height: 300px;
        width: 300px;
        border-radius: 10px;
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 7px;
        padding-bottom: 30px;
        transition: transform .4s;
    }
    .dir-3:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    .dir-4{
        background-image: url(/images/p4.jpg);
        background-size: cover;
        height: 300px;
        width: 300px;
        border-radius: 10px;
        display: flex;
        align-items: end;
        justify-content: center;
        gap: 7px;
        padding-bottom: 30px;
        transition: transform .4s;
    }
    .dir-4:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
    .item{ 
        border-radius: 5px;
        background-color: rgb(16, 173, 16);
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    i{
        color: white;
    }
    h2{
        color: white;
        font-size: 24px;
        font-weight: 800;
    }
    h5{
        color: lightgreen;
        font-size: 16px;
        font-weight: 800;
    }
</style>