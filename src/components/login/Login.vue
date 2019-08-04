<template>
  <div class="relative banner-container" 
  :style="{ backgroundImage: 'url('+ require('@/assets/img/login/img.png') +')'}">
    <div class="banner-container inner"
    :style="{ backgroundImage: 'url('+ require('@/assets/img/login/login_bg.png') +')'}">
        


      <div class="tabs">
        <div class="tab-2">
          <label for="tab2-1">LOG IN</label>
          <input id="tab2-1" name="tabs-two" type="radio" checked="checked">
          
          <div>
            <div class="text-left form-login" >
                <span>USER OR EMAIL</span>
                <input type="text"  v-model="input.username" name="user">

                <span>PASSWORD</span>
                <input type="password" v-model="input.password" name="password">

                <div class="text-right remenber">
                  <div>
                    REMENBER ME 
                  </div>
                  <label class="container-check">
                    <input type="checkbox">
                    <span class="checkmark"></span>
                  </label>
                </div>
            </div>
            <div class="login-bottom text-center basic-text" >
                  <div class="alert alert-danger" v-if="errors && errors.length">
                    <ul>
                        <li v-for="error in errors" >{{ error }}</li>
                    </ul>
                  </div>
                <button v-on:click="login()" class="btn-green" >SIGN IN</button>
                <span>FORGOT YOUR PASSWORD?</span>
                <span>NOT A MEMBER YET?</span>
            </div>
          </div>
        </div>

        <div class="tab-2">
          <label for="tab2-2">REGISTER</label>
          <input id="tab2-2" name="tabs-two" type="radio">
          <div>
            
            <div class="text-left form-login" >

                <span>USER</span>
                <input type="text" name="user">

                <span>EMAIL</span>
                <input type="text" name="email">

                <span>PASSWORD</span>
                <input type="password" name="password">

                <span>CONFIRM PASSWORD</span>
                <input type="password" name="password">

            </div>

            <div class="inline-block basic-text" >
                <span>OR SING IN WITH:</span>
                <span>GOOGLE+</span>
                <span>FACEBOOK</span>
              </div>
            

            <div class="login-bottom text-center basic-text" >
              
                <button class="btn-green" >SIGN UP</button>
                <span>ALREADY HAVE AN ACCOUNT?</span>
            </div>



          </div>
        </div>
      </div>


    </div>
  </div>
    
</template>


<script>
import Product from "@/components/product/Product.vue";
import { repofactory } from "@/common/repo_factory.js";
const LoginRepository = repofactory.get('login')

export default {
  name: "ProductRelate",
  components: {
    Product
  },
    data () {
        return {
            input: {
                user: "",
                password: ""
            },
            resp: "",
            errors: []
        }
    },
  methods:{
    async login(){

        try {
          const { data } = await LoginRepository.login(this.input);
          localStorage.setItem('token', data.token);
          console.log(data);
          this.$router.push({name:'home'}) 
        } catch (error) {
                if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
               if (error.response.data.non_field_errors){
                  this.errors.push("Credencales erroneas");
                }
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response);
                }
            }   
    }
  }    
};
</script>

<style lang="scss" scoped>
  @import "@/styles/global.scss";
  
.inline-block.basic-text {
    margin-top: 15px;
    margin-bottom: 15px;
}
  .inline-block.basic-text span {
    margin-right: 15px;
    margin-top: 10px;
    font-weight: bold;
}
.basic-text span{
  color: white;
    font-size: 0.8rem;
}
.form-login{
    width: 60%;
    margin: auto;
}
.login-bottom span {
    display: block;
    margin-top: 17px;
}
.remenber {
    color: white;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 0.8rem;
    margin-right: 24px;
}
.remenber div{
    display: inline-block;
}


  .form-login span {
    display: block;
    color: #ffffff;
    margin-top: 30px;
}

input{
    background: transparent;
    border: none;
    border-bottom: 2px solid #818181;
    display: block;
        width: 100%;
    color: white;
    font-weight: bold;
}

.banner-container {
    max-width: 100%;
    width: 100%;
    background-size: cover;
    min-height: 85vh;
    background-repeat: no-repeat;
    background-position: center center;
}

.banner-container.inner {
    width: 73%;
}


a {
    background: #fd264f;
    color: #fff;
    display: block;
    font-size: 12px;
    line-height: 1em;
    margin: 0;
    padding: 5px 110px;
    position: fixed;
    top: 20px;
    right: -100px;
    text-align: center;
    text-decoration: none;
    transform: rotate(45deg);
}
button:focus,
input:focus,
textarea:focus,
select:focus {
  outline: none; }

  .tabs {
        width: 60%;
    padding: 30px 30px 10px 30px;
  display: block;
  display: -webkit-flex;
  display: -moz-flex;
  display: flex;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0;
  overflow: hidden; }
  .tabs [class^="tab"] label,
  .tabs [class*=" tab"] label {
    color: #efedef;
    cursor: pointer;
    display: inline-block;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1em;
    padding: 0.5rem 0;
    text-align: center; }
  .tabs [class^="tab"] [type="radio"],
  .tabs [class*=" tab"] [type="radio"] {
  border-bottom: 1px solid rgba(239, 237, 239, 0.5);
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: block;
  width: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out; }
  .tabs [class^="tab"] [type="radio"]:hover, .tabs [class^="tab"] [type="radio"]:focus,
  .tabs [class*=" tab"] [type="radio"]:hover,
  .tabs [class*=" tab"] [type="radio"]:focus {
  border-bottom: 1px solid #fbfbfb; }
  .tabs [class^="tab"] [type="radio"]:checked,
  .tabs [class*=" tab"] [type="radio"]:checked {
  border-bottom: 4px solid #fbfbfb;; }
  .tabs [class^="tab"] [type="radio"]:checked + div,
  .tabs [class*=" tab"] [type="radio"]:checked + div {
  opacity: 1; }
  .tabs [class^="tab"] [type="radio"] + div,
  .tabs [class*=" tab"] [type="radio"] + div {
  display: block;
  opacity: 0;
  padding: 2rem 0;
  width: 90%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out; }
  .tabs .tab-2 {
  width: 50%; }
  .tabs .tab-2 [type="radio"] + div {
  width: 200%;
  margin-left: 200%; }
  .tabs .tab-2 [type="radio"]:checked + div {
  margin-left: 0; }
  .tabs .tab-2:last-child [type="radio"] + div {
  margin-left: 100%; }
  .tabs .tab-2:last-child [type="radio"]:checked + div {
  margin-left: -100%; }


/* Small devices  */
@media (max-width: 576px) {
  .tabs {
    width: 100%;
  }
  .banner-container.inner {
    width: 100%;
  }
  .relative.banner-container {
    background-image: none !important;
  }
}

</style>

<style lang="scss" scoped>
/* The container-check */
.container-check {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container-check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.container-check:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container-check input:checked ~ .checkmark {
  background-color: #48693e;
}
.form-login span.checkmark {
    border-radius: 50%;
    margin-top: 10px;
        margin-left: 5px;
}
/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container-check input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container-check .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>