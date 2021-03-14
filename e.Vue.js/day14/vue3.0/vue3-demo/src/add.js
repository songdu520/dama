//! reactive用来定义复杂类型
import { reactive } from 'vue'
function add(state) {
  const state2 = reactive({
    obj: {
      name: '',
      age: 0
    }
  })
  const addItem = () => {
    state.list.push({...state2.obj});
    state2.obj.name = '';
    state2.obj.age = 0;
  }
  return { state2, addItem }
}

export default add