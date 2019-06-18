<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <GreenBgHome />
    <FooterHome />
  </div>



</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MenuHeader from "@/components/MenuHeader.vue";
import FooterHome from "@/components/FooterHome.vue";
import GreenBgHome from "@/components/GreenBgHome.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    MenuHeader,
    GreenBgHome,
    FooterHome
  }
};


</script>
