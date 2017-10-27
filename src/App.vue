<template>
  <div id="app">
    <Products />
    <hr>
    <Cart/>    
  </div>
</template>

<script>
import Cart from './components/Cart'
import Products from './components/Products'
export default {
  name: 'app',
  components: {
    Cart,
    Products
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
