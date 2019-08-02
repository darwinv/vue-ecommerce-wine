<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />
        
        <div class="hello">
            <input type="text" v-model="input.username" placeholder="username" />
            <input type="password" v-model="input.password" placeholder="password" />
            <button v-on:click="login()">Log in</button>
            <button v-on:click="logout()">Log out</button>
            <br />
            <br />
            <textarea v-model="resp" />
        </div>

        <AppFooter />
      </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import { repofactory } from "@/common/repo_factory.js";
const PostRepository = repofactory.get('posts')
const UserRepository = repofactory.get('users')
const LoginRepository = repofactory.get('login')
const addressRepository = repofactory.get('address')
const axios = require('axios');

export default {
  name: "ApiLoginTest",
  components: {
    AppMenuHeader,
    AppFooter
  },
    data () {
        return {
            input: {
                user: "",
                password: ""
            },
            resp: ""
        }
    },
  mounted(){
    this.getAddress();
  },
  methods:{
    async login(){
        // let datalogin = {
        //   "username": "darwin",
        //   "password": "intel12345"
        // }
        try {
          const { data } = await LoginRepository.login(this.input);
          localStorage.setItem('token', data.token);
          console.log(data);
          this.resp = "Te has Logueado =D"
        } catch (error) {
                if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response);
                }
            }   
    },
    async logout(){
        localStorage.removeItem('token');
        window.location.reload()
    },
    async getAddress(){
        try {
            const { data } = await addressRepository.address();
            console.log(data);
            if (localStorage.token){
                this.resp =  ` ya estas logueado ${localStorage.token}`;
            }else{
                this.resp ="no estas logueado :(";
            }
            
        } catch (error) {
            this.resp ="no estas logueado :(";
        }

      
    }
  }
};
</script>