<template>
  <b-container fluid >
    <div class="row mar-0">
        <AppMenuHeader />
        <b-col sm="12" md="4" lg="3" class="profile-coll" >
          <LateralProfile />
        </b-col>

        <b-col sm="12" md="8" lg="9">.
          <TabProfileProduct />
        </b-col>

        <AppFooter />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import LateralProfile from "@/components/profile/LateralProfile.vue";
import TabProfileProduct from "@/components/profile/TabProfileProduct.vue";

export default {
  name: "login",
  components: {
    AppMenuHeader,
    AppFooter,
    TabProfileProduct,
    LateralProfile
  }
};
</script>

<style lang="scss" scoped>
  .profile-coll{
        background-color: #131313;
  }
  .container-component > div {
    margin-top: 15px;
}

</style>