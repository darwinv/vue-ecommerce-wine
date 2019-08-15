<template>
  <b-container fluid >
    <div class="row">
        <AppMenuHeader />
        <ProductDetailHeader v-bind:product="product"/>
        <ProductVerticalDetail v-bind:product="product" />
        <ProductRelate />
        <AppFooter />
    </div>
  </b-container>
</template>

<script>
// @ is an alias to /src
import AppMenuHeader from "@/components/layout/AppMenuHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
import ProductDetailHeader from "@/components/product/ProductDetailHeader.vue";
import ProductVerticalDetail from "@/components/product/ProductVerticalDetail.vue";
import ProductRelate from "@/components/product/ProductRelate.vue";
import { repofactory } from "@/common/repo_factory.js";

const Collection = repofactory.get('collection');



export default {
  name: "ProductDetail",
  components: {
    AppMenuHeader,
    AppFooter,
    ProductDetailHeader,
    ProductVerticalDetail,
    ProductRelate
  },    
  
  mounted(){
      // console.log('hello');
      //console.log(this.$route.params.id)
      
      this.getProduct(this.$route.params.id);
  },
  data(){
    return {
      product: {}
     };
    },
methods:{
  async getProduct(id){
      try {
        const { data } = await Collection.product(id);
        this.product = data;
        
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
  }
}    
};
</script>
