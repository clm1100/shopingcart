<template>
  <div id="app">
    <div>
      <ul>
        <li v-for="item in shopList">
          <p>
            <span>名称 <i v-text="item.name"></i></span>
            <span>价钱: <i v-text="item.price"></i></span>
            <span>剩余 <i v-text="item.shengyu">4</i></span>
            <button @click="addtocart(item.id)">加入购物车</button>
          </p>
        </li>
      </ul>
    </div>
    <hr>
    <div>
      <div>
        <ul>
          <li v-for="item in cartList">
            <p>
              <span>名称 <i v-text="item.name"></i></span>
              <span>价钱: <i v-text="item.price"></i></span>
              <span>个数 <i v-text="item.geshu">4</i></span>
              <button @click="addtocart(item.id)">加一个</button>
              <button @click="reduceTo(item.id)">减一个</button>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <hr>
    <h3>
      总价:{{countPrice||0}}
    </h3>
  </div>
</template>
<script>
import obj from "./api";
export default {
  // data(){
  //   return {
  //     shopList:this.$store.state.shopList,
  //     cartList:this.$store.state.cartList
  //   }
  // },
  created(){
    this.$store.dispatch('getshopList');
    console.log(this.shopList)
  },
  computed:{
    shopList(){
      return this.$store.state.shopList
    },
    cartList(){
      return this.$store.state.cartList
    },
    countPrice(){
      return this.$store.getters.countPrice
    }
  },
  methods:{
    addtocart(id){
      this.$store.commit('addtocart',id)
    },
    reduceTo(id){
      this.$store.commit('reduceTo',id)
    }
  }
  
}
</script>
<style>
* {margin: 0;padding:0}
</style>
