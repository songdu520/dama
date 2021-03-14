<template>
  <div>
    detail{{id}}
  </div>
</template>

<script>

import {useRoute,useRouter} from "vue-router"

export default {
  // props: ['id']
  setup() {
    const route = useRoute()
    console.log(route.params.id)
  }
}
</script>