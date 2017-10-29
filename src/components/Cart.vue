<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p><i>Please add some products to cart.</i></p>
    <ul>
      <li v-for="p in products">
       <span>名称: <b>苹果</b> </span>
      <span>价格: <b>12</b> </span>
      <span>数量: <b>14</b> </span>
      <button>
          +1
      </button>
      <button>
          -1
      </button>
      </li>
    </ul>
    <p>Total:</p>
    <p><button>Checkout</button></p>
    <p >Checkout</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            products:[1,2,3,4,5]
        }
    }
 }
</script>