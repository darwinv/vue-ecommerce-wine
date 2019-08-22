<template>
  <div  class="container-component row m-0">
       <b-col sm="12" md="6" lg="3" v-for="item in products" :key="item.id">
          <Product v-bind:item="item"> </Product>
        </b-col>

  </div>

</template>


<script>
import Product from "@/components/product/Product.vue";
import { repofactory } from "@/common/repo_factory.js";
import { bus } from "@/main";

const Collection = repofactory.get('collection')

export default {
  name: "ProductList",
  components: {
    Product
  },
  data(){
    return {
      products: []
    };
  },
   mounted(){
      //console.log(this.products);
      let payload = {
        }
     this.getCollection(payload);
     bus.$on('change', (data)=>{
       this.getCollection(data);
     })
  },
    methods:{
    async getCollection(payload){
        try {
          const { data } = await Collection.obtain(payload);
          console.log(payload)
//          console.log(data);
          this.products = data
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "@/styles/global.scss";
  
  .container-component{
    background-color: #101010;
    width: 100%;
        padding-top: 25px;
  }

  .pagination-product {
      color: #555555;
      margin: 25px 0px;
  }
a.circle-pagination {
    background-color: #282828;
    border-radius: 25px;
    padding: 7px 12px;
    margin: 15px;
}
.pagination-product > a {
    color: #555555;
    margin: 8px;
}
.pagination-product > a:hover {
    color: #ffffff;
}
</style>
