<template>
  <div>
    {{ arr }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3]
    }
  },
  mounted() {
    setTimeout(() => {
      this.arr.length = 2;
    }, 2000)
  }
}
</script>