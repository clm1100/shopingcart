<template>
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
</template>

<script>

export default {
    computed:{
    shopList(){
      return this.$store.state.products.shopList
    },
    cartList(){
      return this.$store.state.carts.cartList
    },
    countPrice(){
      return this.$store.getters.countPrice
    }
  },
    methods:{
    addtocart(id){
      this.$store.dispatch('actionsaddtocart',id)
    },
    reduceTo(id){
      this.$store.dispatch('actionsreduceTo',id)
    }
  },
  created(){
    this.$store.dispatch('getshopList');
    console.log(this.shopList)
  },
}
</script>

<style>
 li{list-style: none}
</style>

