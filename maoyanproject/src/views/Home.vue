<template>
  <div>
    <router-view></router-view>

    <my-footer></my-footer>
  </div>
</template>

<script>
// import http from "@/utils/http";

// 引入qs，用于fetch的post请求
// import qs from "qs";

import MyFooter from "com/home/MyFooter";

export default {
  components: {
    MyFooter
  }
};
</script>

<style lang="scss" scoped>
section.header {
  width: 100%;
  height: 96px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

section.wrapper {
  position: absolute;
  top: 96px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
</style>
