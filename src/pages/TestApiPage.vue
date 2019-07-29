<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />

        <BannerSimple />

        <AppFooter />
      </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import BannerSimple from "@/components/banners/BannerSimple.vue";
import { repofactory } from "@/common/repo_factory.js";
const PostRepository = repofactory.get('posts')
const UserRepository = repofactory.get('users')
const LoginRepository = repofactory.get('login')
const addressRepository = repofactory.get('address')
const axios = require('axios');

export default {
  name: "ApiPage",
  components: {
    AppMenuHeader,
    AppFooter,
    BannerSimple
  },
  mounted(){
      console.log("hola mundo");
        // axios.get('http://localhost:8000/api').then(resp => { 
        //     console.log(resp.data);
        //  });
      this.login();
      //this.getAddress();
  },
  methods:{
		// async fetch (){
		// 	const { data } = await PostRepository.get();
    //   console.log(data);
    //   var data2 = await UserRepository.get();
    //   console.log(data2);
    // }
    async login(){
        let datalogin = {
          "username": "darwin",
          "password": "intel1345"
        }

        try {
          const { response } = await LoginRepository.login(datalogin);
          console.log(responses);
        } catch (error) {
                if (error.response) {
                /*
                * The request was made and the server responded with a
                * status code that falls out of the range of 2xx
                */
                // console.log(error.response.data);
                // console.log(error.response.status);
                console.log(error.response);
                }
            }   
    },
    async getAddress(){
      const { data } = await addressRepository.address();
      console.log(data);
    }
  }
};
</script>