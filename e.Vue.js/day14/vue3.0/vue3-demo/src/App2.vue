<template>
  <div>
    <div>{{ count }}</div>
    <button @click="countAdd">按钮</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  //! setup函数是组合api的入口函数
  //! 可以在setup里面去定义data，methods等
  setup() {
    //! 定义一个响应式的count，并且初始化赋值为3
    const count = ref(3)  // {value: 3}
    //! 定义函数
    const countAdd = () => {
      // console.log(count.value)
      count.value++
    }

    //! 如果想在外部使用setup里面的内容，必须要暴露出去return
    return { count, countAdd }
  }
}
</script>