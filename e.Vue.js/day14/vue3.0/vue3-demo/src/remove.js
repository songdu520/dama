//! reactive用来定义复杂类型
import { reactive } from 'vue'

function remove() {
  const state = reactive({
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
  })
  const removeItem = (i) => {
    state.list = state.list.filter((item, index) => index !== i)
  }
  return { state, removeItem }
}

export default remove