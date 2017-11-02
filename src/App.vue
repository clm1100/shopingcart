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
      总价:
    </h3>
  </div>
</template>
<script>
export default {
  data(){
    return {
      shopList:[
        {id:'1',name:"苹果",price:"3",shengyu:10},
        {id:'2',name:"梨子",price:"4",shengyu:15},
        {id:'3',name:"香蕉",price:"5",shengyu:40},
      ],
      cartList:[]
    }
  },
  methods:{
    addtocart(id){
      // 商品总数减一
      this.shopList.filter((e)=>{return e.id == id})[0].shengyu-=1;
      // 购物车商品加一
      if(this.cartList.filter((e)=>{return e.id == id}).length == 0){
        // let objdanli  = Object.assign({},this.shopList.filter((e)=>{return e.id == id})[0]);
        let objdanli = JSON.parse(JSON.stringify(this.shopList.filter((e)=>{return e.id == id})[0]))
        delete objdanli.shengyu
        objdanli.geshu = 1;
        console.log(objdanli)
        this.cartList.push(objdanli);
      }else{
        this.cartList.filter((e)=>{return e.id == id})[0].geshu+=1;
      }
    },
    reduceTo(id){
      this.shopList.filter((e)=>{return e.id == id})[0].shengyu+=1;
      if(this.cartList.filter((e)=>{return e.id == id}).length == 0){
        return false;
      }else{
        this.cartList.filter((e)=>{return e.id == id})[0].geshu-=1;
      }
    }
  }
}
</script>
<style>
* {margin: 0;padding:0}
</style>
