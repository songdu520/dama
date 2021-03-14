<template>
  <p>count: {{ count }}</p>
  <p>{{ msg }}</p>
  <p>{{ obj }}</p>
  <p>{{ arr }}</p>
  <p @click="handleClick(5)">{{ msg1 }}</p>
  <child :msg="msg" :obj="obj" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { key } from './store/index'
import Child from './components/Child.vue'
import { ObjType } from './interface/index'

// interface ObjType {
//   name: string,
//   age: number
// }

export default defineComponent({
  name: 'App',
  data() {
    return {
      // 简单类型不需要类型推断
      msg: 'hello world',
      // 复杂类型, 需要加类型， 用as加在后面
      obj: {
        name: 'zhangsan',
        age: 30
      } as ObjType,
      arr: [1, 2, 3] as number[],
      arr2: [
        {
          name: 'zhangsan',
          age: 30
        },
        {
          name: 'lisi',
          age: 40
        }
      ] as ObjType[]
    }
  },
  computed: {
    msg1(): string {
      return this.msg + '!!'
    }
  },
  methods: {
    handleClick(num: number): void {
      console.log(num * 2)
    }
  },
  components: {
    Child
  },
  setup() {
    const store = useStore(key);
    console.log(store);
    const { count } = store.state.a
    return { count }
  }
})
</script>
