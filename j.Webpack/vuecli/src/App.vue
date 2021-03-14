<template>
  <div>{{msg}}<Child /></div>
</template>

<script>
import Child from 'com/Child';
export default {
  data() {
    return {
      msg: 'hello webpack'
    };
  },
  components: {
    Child
  }
};
</script>
<style scoped></style>
