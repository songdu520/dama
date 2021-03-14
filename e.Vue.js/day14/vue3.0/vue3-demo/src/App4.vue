<template>
  <div>
    <div>{{ num }}</div>
    <div>{{ count }}</div>
    <button @click="countAdd">按钮</button>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      num: 7,
      // count: 3
    }
  },
  // methods: {
  //   countAdd() {
  //     count.value++
  //   }
  // },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  setup() {
    console.log(this)
    //! 组合api是可以和option Api混合使用的
    //! setup函数是在beforeCreate之前就被调用

    //! setup的时候是拿不到data和methods的
    //! setup里面打印的this是undefined, 因为vue怕在这里滥用this，索性改成了undefined

    const count = ref(3)
    const countAdd = () => {
      count.value++
    }
    return { count, countAdd }
  }
}
</script>