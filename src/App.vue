<template>
  <div id="app">
    <Products />
    <hr>
    <h1>{{a}}</h1>
    <h2>{{b[2]}}111</h2>
    <h2>{{c}}</h2>
    <Cart/>    
  </div>
</template>

<script>
import store from './store'
import Cart from './components/Cart'
import Products from './components/Products'
store.commit('gcadd');
console.log(store.getters.goodlength)
store.dispatch('getProducts');
console.log(store.getters.goodlength)
let cc = {a:1};
export default {
  data(){
    return {
      b:this.$store.state.goods
    }
  },
  computed:{
     a(){return this.$store.state.goods[0]},
     c(){
       return cc.a
     }
  },
  name: 'app',
  store,
  components: {
    Cart,
    Products
  },
  created(){
       this.log()
  },
  methods:{
    getProducts(){
      this.$store.dispatch('getProducts');
      setTimeout(function(){
        cc.a+=1
      })
    },
    log(){
      console.log(this.$store.state.goods,15040)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
