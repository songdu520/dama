<template>
  <div>
    <div>child{{ msg }}</div>
    <p @click="change">{{ count }}</p>
    <p>{{ obj3 }}</p>
    <p>{{ doubleCount }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, reactive, computed } from 'vue'
import { ObjType, Style } from '../interface/index'

// interface ObjType {
//   name: string,
//   age: number
// }

export default defineComponent({
  name: 'Child',
  props: {
    msg: {
      type: String
    },
    obj: {
      type: Object as PropType<ObjType>
    }
  },
  //! setup里面如果要用props，直接当参数传递
  setup(props) {
    // const msg = props.msg;
    // console.log(msg)
    let count = ref<number>(6);
    const change = () => {
      count.value = 7
    }

    let obj3 = reactive<Style>({
      width: 300,
      height: 400,
      color: 'red'
    })


    //! 在setup里面使用计算属性
    // read-only
    const doubleCount = computed(() => count.value * 2)

    return { count, change, obj3, doubleCount }
  }
})
</script>
