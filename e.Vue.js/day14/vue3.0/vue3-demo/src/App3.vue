<template>
  <div>
    <input type="text" v-model="state2.obj.name" />
    <input type="number" v-model="state2.obj.age" />
    <button @click="addItem">添加</button>

    <ul>
      <li v-for="(item, index) in state.list" :key="index">
        {{ item.name }} - {{ item.age }} - <span @click="removeItem(index)">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
import add from './add'
import remove from './remove'

export default {
  setup() {
    const { state, removeItem } = remove()
    const { state2, addItem } = add(state)
    return { state, removeItem, state2, addItem }
  }
}
</script>