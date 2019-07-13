<template>
  <b-container fluid >
    <div class="home row">
        <AppMenuHeader />

        <BannerSimple />

        <AppFooter />
      </div>
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

export default {
  name: "ApiPage",
  components: {
    AppMenuHeader,
    AppFooter,
    BannerSimple
  },
  mounted(){
      console.log("hola mundo");
      this.fetch();
  },
  methods:{
		async fetch (){
			const { data } = await PostRepository.get();
			console.log(data);
		}
  }
};
</script>