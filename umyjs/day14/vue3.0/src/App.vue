<template>
  <div>
    <!-- <input type="text" v-model="obj.name">
    <input type="number"  v-model="obj.age"> -->
    <!-- <span @click="additem">添加</span> -->
    <ul>
      <li v-for="(item,i) in state" :key="item" >
        {{item.name}}年龄{{item.age}}-----<span @click="handclick(i)">X</span>
      </li>
    </ul>
  </div>
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {reactive} from "vue"
export default {
 setup() {
   let state=reactive(
     [{
        name:"lishi",
        age:10
        
      },{
        name:"wangwu",
        age:20
      },
      {
        name:"zaoliu",
        age:30
      }]
    );
    // let obj=reactive({
    //     name:"",
    //     age:0
    //   });
    // function  additem(){

    //   this.list.push({...this.obj})
    //   this.obj.name=""
    //   this.obj.age=0
    // }
   
    const handclick=(i)=>{
      state=state.filter((item,index)=>{
       return index!==i
     })
  
    }
    
    return {state,handclick}
}
}
</script>
