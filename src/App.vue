<template>
  <div id="app">
    <h1>vue-todolist</h1>
    <div class="container">
      <div class="input-group">
        <span class="input-group-addon" id="basic-addon1">@</span>
        <input v-model="content" type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1">
        <button @click="add" type="button" class="btn btn-default">添加</button>
      </div>
    </div>
    <div class="container">
      <ul class="list-group" v-if="xuanran =='all'">
        <li v-for=" t in all" class="list-group-item">
          <span @click="jian(t.id)" class="badge" v-bind:class="{ complete:t.complete }">完成</span>
          {{t.content}}
        </li>
      </ul>

      <ul class="list-group" v-else-if="xuanran == 'active'">
        <li v-for=" t in active" class="list-group-item">
          <span @click="jian(t.id)" class="badge" v-bind:class="{ complete:t.complete }">完成</span>
          {{t.content}}
        </li>
      </ul>
      <ul class="list-group" v-else-if="xuanran == 'complete'">
        <li v-for=" t in complete" class="list-group-item">
          <span @click="jian(t.id)" class="badge" v-bind:class="{ complete:t.complete }">完成</span>
          {{t.content}}
        </li>
      </ul>
    </div>
    <div class="btn-group" role="group" aria-label="...">
      <button @click="Aall" type="button" class="btn btn-default">全部</button>
      <button @click="Aactive" type="button" class="btn btn-default">待完成</button>
      <button @click="Acomplete" type="button" class="btn btn-default">已完成</button>
      <button @click="dele" type="button" class="btn btn-default">清空已完成</button>

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
      xuanran:'all',
      content:'',
      todos:[
        {id: 1, content:'待办事项',complete:false}
       ]
    }
  },
  computed:{
    all: function(){return this.todos},
    active: function() {return this.todos.filter(function(e){return !e.complete}) } ,
    complete: function(){return this.todos.filter(function(e){return e.complete})}
  },
  methods:{
    dele(){
   this.todos=   this.todos.filter(function(e){
        return !e.complete 
      })
    },
    Aall(){
     this.xuanran = 'all';
     console.log(this.xuanran)
    },
    Aactive(){
      this.xuanran = 'active'
      console.log(this.xuanran)
    },
    Acomplete(){
      this.xuanran = 'complete'
      console.log(this.xuanran)
    },
    add(){
      console.log(this.content);
      let todo = {
        id : randomString(32),
        content:this.content,
        complete:false
      }
      if(this.content){
        this.todos.push(todo);     
      }
    },
    jian(id){
      let index = '';
      this.todos.forEach((e,i)=>{if(e.id==id){
        index = i
         this.todos[index].complete = true;
        }});
     
    }
  }
};
</script>

<style>
.complete {color: red;background-color: blue}
</style>
