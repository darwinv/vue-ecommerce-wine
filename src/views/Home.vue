<template>
  <b-container fluid >
    <div class="home" >
      <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      
      <MenuHeader />
    </div>
  </b-container>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MenuHeader from "@/components/MenuHeader.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    MenuHeader
  }
};


</script>
