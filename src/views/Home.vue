<template>

<b-container fluid >
  <div class="home">
    <MenuHeader />
    <HomeBanner />
  </div>
</b-container>

</template>

<script>
// @ is an alias to /src
import MenuHeader from "@/components/MenuHeader.vue";
import HomeBanner from "@/components/HomeBanner.vue";

export default {
  name: "home",
  components: {
    MenuHeader,
    HomeBanner
  }
};


</script>
