<template>
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
</template>

<script>
export default {
  computed: {
    shopList() {
      return this.$store.state.shopList;
    },
    cartList() {
      return this.$store.state.cartList;
    },
    countPrice() {
      return this.$store.getters.countPrice;
    }
  },
  methods: {
    addtocart(id) {
      this.$store.dispatch("actionsaddtocart", id);
    },
    reduceTo(id) {
      this.$store.dispatch("actionsreduceTo", id);
    }
  }
};
</script>