<template>
  <div id="app">
    <h1>22</h1>
    <div class="container">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">@</span>
        <input v-model="content" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        <button @click="add" type="button" class="btn btn-default">添加</button>
      </div>
    </div>
    <div class="container">
      <ul class="list-group">
        <li v-for=" t in todos" class="list-group-item">
          <span @click="jian(t.id)" class="badge">删除</span>
          {{t.content}}
        </li>
      </ul>
    </div>
  </div>
 
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import store from "./store";
function randomString(len) {
　　len = len || 32;
　　var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　var maxPos = $chars.length;
　　var pwd = '';
　　for (let i = 0; i < len; i++) {
　　　　pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
　　}
　　return pwd;
}

export default {
  data(){
    return {
      content:'',
      todos:[
        {id: 1, content:'1111111111'},
        {id: 2, content:'222222'},
        {id: 3, content:'33333333'},
        {id: 4, content:'444444444444444'},
       ]
    }
  },
  methods:{
    add(){
      console.log(this.content);
      let todo = {
        id : randomString(32),
        content:this.content
      }
      if(this.content){
        this.todos.push(todo);     
      }
    },
    jian(id){
      let index = '';
      this.todos.forEach((e,i)=>{if(e.id==id){index = i}});
      console.log(index);
      this.todos.splice(index,1);
    }
  }
};
</script>

<style>

</style>
