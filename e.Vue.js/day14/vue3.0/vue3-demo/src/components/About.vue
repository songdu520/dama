<template>
  <div>
    关于页{{ count }}
  </div>
</template>

<script>
import { useStore } from 'vuex'

export default {
  // computed: {
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  setup() {
    let store = useStore();
    const count = store.state.count;

    return { count }
  }
}
</script>