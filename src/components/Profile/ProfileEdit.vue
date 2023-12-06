<template>
    <div class="container">
        <p class="title">Profile</p>
        <div class="form">
            <div class="input-1">
                <div class="form_inside">
                    <div>
                        <h6>Username</h6>
                        <vs-input style="width: 350px;" v-model="usr" placeholder="Enter your username" />

                    </div>
                    <div>
                        <h6>New Password</h6>
                        <vs-input style="width: 350px; " type="password" v-model="newpass" placeholder="********" />

                    </div>
                </div>
                <div  class="form_inside">
                    <div>
                        <h6>Email Address</h6>
                        <vs-input style="width: 350px;" v-model="email" placeholder="Enter your email" />

                    </div>
                    <div>
                        <h6>Re-enter Password</h6>
                        <vs-input style="width: 350px;" type="password" v-model="repass" placeholder="********" />

                    </div>
                    
                </div>
                
            </div>
            <div class="input-2">
                <div>
                    <h6>Language</h6>
                    <p>Select your preferred language</p>
                    <vs-select style="width: 350px;" v-model="lang" placeholder="Select">
                        <vs-option label="English" value="eng"> English </vs-option>
                        <vs-option label="Duesche" value="due"> Duesche </vs-option>
                        <vs-option label="Russian" value="russ"> Russian </vs-option>
                        <vs-option label="German" value="ger"> German </vs-option>
                    </vs-select>

                </div>

                <div>
                    <h6>Language</h6>
                    <p>Select your preferred language</p>
                    <vs-select style="width: 350px;" v-model="hour" placeholder="Select">
                        <vs-option label="24 hr" value="1"> 24 hr </vs-option>
                        <vs-option label="12 hr" value="2"> 12 hr </vs-option>
                       
                    </vs-select>

                </div>

            </div>
            <vs-button color="#1ECB15">Update Profile</vs-button>
        </div>
    </div>
</template>

<style scoped>
    .container{
        width: 951;
        background-color: white;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap: 20px;

    }
    .title{
        font-size: 20px;
        color: black;
        font-weight: bolder;
    }
    .form {
        color: black;
        border-radius: 10px;
    }
    .input-1 {
       display: flex;
       justify-content: space-between;
    }
    .form_inside {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .input-2{
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
    }
    h6{
        font-size: 16px;
        font-weight: 700;
    }
    p{
        color: lightgray;
        font-size: small;
    }
</style>

<script>
export default {
    data() {
        return {
            usr: '',
            newpass: '',
            email: '',
            repass: '',
            lang: '',
            hour: '',
        }
    }
}
</script>