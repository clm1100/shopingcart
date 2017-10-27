<template>
  <ul>
    <li v-for="p in products">
      <span>名称: <b>苹果</b> </span>
      <span>价格: <b>12</b> </span>
      <span>剩余数量: <b>14</b> </span>
      <button>
          加入购物车
      </button>
    </li>
  </ul>
</template>

<script>

export default {
  data(){ 
        return {
            products: [1,2,3,4,6]
        }
    }
}
</script>

<style>
 li{list-style: none}
</style>

