<template>
  <div>
    <input type="text" v-model="obj.name" />
    <input type="number" v-model="obj.age" />
    <button @click="addItem">添加</button>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item.name }} - {{ item.age }} - <span @click="removeItem(index)">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      //! 添加
      obj: {
        name: '',
        age: 0
      },
      //! 删除
      list: [{
        name: 'zhangsan',
        age: 20
      }, {
        name: 'lisi',
        age: 30
      }, {
        name: 'wangwu',
        age: 80
      }]
    }
  },
  methods: {
    //! 删除
    removeItem(i) {
      this.list = this.list.filter((item, index) => index !== i);
    },
    //! 添加
    addItem() {
      this.list.push({...this.obj});
      this.obj.name = '';
      this.obj.age = 0;
    }
  },
  computed: {

  },
  watch: {
    
  }
}
</script>
