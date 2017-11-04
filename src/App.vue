<template>
  <div id="app">
   <Products/>
    <hr>
  <Cart/>
    <hr>
    <h3>
      总价:{{countPrice||0}}
    </h3>
  </div>
</template>
<script>
import obj from "./api"
import Products from './components/Products.vue'
import Cart from './components/Cart.vue'
export default {
  components:{
    Products,
    Cart
  },
  // data(){
  //   return {
  //     shopList:this.$store.state.shopList,
  //     cartList:this.$store.state.cartList
  //   }
  // },
  // created(){
  //   this.$store.dispatch('getshopList');
  //   console.log(this.shopList)
  // },
  computed:{
    // shopList(){
    //   return this.$store.state.shopList
    // },
    // cartList(){
    //   return this.$store.state.cartList
    // },
    countPrice(){
      return this.$store.getters.countPrice
    }
  },
  // methods:{
  //   addtocart(id){
  //     this.$store.dispatch('actionsaddtocart',id)
  //   },
  //   reduceTo(id){
  //     this.$store.dispatch('actionsreduceTo',id)
  //   }
  // }
  
}
</script>
<style>
* {margin: 0;padding:0}
</style>
