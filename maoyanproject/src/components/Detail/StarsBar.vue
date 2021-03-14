<template>
  <div class="stars-percent-bar">
    <div class="stars">
      <img
        v-for="(item, index) in starsCount"
        :key="index"
        src="//s0.meituan.net/bs/myfe/canary/file/asgard/images/movie/star-not-graded.png"
        alt=""
      />
    </div>
    <div class="bar">
      <div class="percent" :style="{ width: proportion + '%' }"></div>
    </div>
    <div class="percent-value">{{ proportion }}%</div>
  </div>
</template>

<script>
export default {
  props: ["starsCount", "proportion"]
};
</script>

<style lang="scss" scoped>
.stars-percent-bar {
  width: 180px;
  height: 18px;
  display: flex;
  justify-content: space-around;
  .stars {
    img {
      width: 5px;
      height: 5px;
    }
  }
  .bar {
    width: 100px;
    height: 5px;
    background-color: hsla(0, 0%, 100%, 0.05);
    border-radius: 2px;
    margin-left: 6px;
    margin-right: 5px;
    margin-top: 7px;
    .percent {
      height: 100%;
      line-height: 18px;
      background-color: #ffb400;
      border-radius: 1px;
    }
  }
}
</style>
