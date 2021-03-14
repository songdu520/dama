<template>
  <nav>
    
    <router-link to="/cities"  >杭州</router-link>
    <ul>
      <router-link
        tag="li"
        v-for="(item, index) in navList"
        :key="index"
        active-class="active"
        :to="item.url"
      >
        {{ item.title }}
      </router-link>
    </ul>
    <span class="iconfont icon-icon105"></span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "热映",
          url: "hot"
        },
        {
          title: "影院",
          url: "cinema"
        },
        {
          title: "待映",
          url: "wait"
        },
        {
          title: "经典",
          url: "classic"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../assets/css/var.scss";
nav {
  background: #fff;
  height: 46px;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;

  ul {
    display: flex;
    height: 100%;

    li {
      width: 66px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .active {
      color: $active-color;
      font-size: 17px;
      font-weight: 900;

      &::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        background: $theme-color;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}
</style>
