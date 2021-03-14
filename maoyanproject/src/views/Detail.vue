<template>
  <div
    v-if="detailData.nm"
    class="detail"
    :style="{ backgroundColor: detailData.backgroundColor }"
  >
    <p class="top">猫眼电影>{{ detailData.nm }}</p>
    <div class="movie-info-top">
      <img :src="detailData.img | formatUrl" alt="" />
      <div class="text">
        <h2>{{ detailData.nm }}</h2>
        <p>{{ detailData.enm }}</p>
        <p>{{ detailData.cat }}</p>
        <p>{{ detailData.star }}</p>
        <p>{{ detailData.pubDesc }}/{{ detailData.episodeDur }}></p>
        <div class="btns">
          <div>想看</div>
          <div>看过</div>
        </div>
      </div>
    </div>
    <div class="real-time-word-of-mouth">
      <div class="top">
        <div class="left">时实口碑</div>
        <div class="right">
          {{ detailData.wish }}人想看 {{ detailData.watched }}看过
        </div>
      </div>
      <div class="middle">
        <div class="left">
          <div class="score">{{ detailData.sc }}</div>
          <div class="people-grade">{{ detailData.wish }}人评</div>
        </div>
        <div class="right">
          <stars-bar
            v-for="(item, index) in detailData.distributions"
            :key="index"
            :starsCount="3 - index"
            :proportion="item.proportion"
          ></stars-bar>
        </div>
      </div>
    </div>
 <button @click="more">按钮</button>
  </div>
</template>

<script>
import { getDetailDataApi } from "../utils/api";
import StarsBar from "../components/Detail/StarsBar";
export default {
  props: ["movieId"],
  beforeRouteUpdate () {

  },
 
  data() {
    return {
      id: this.movieId,
      detailData: {}
    };
  },
  components: {
    StarsBar
  },
  filters: {
    formatUrl(val) {
      return val.split("/w.h").join("");
    }
  },
  mounted() {
    this.getDetailData();
  },
  methods: {
     more() {
     
    },
    async getDetailData() {
      const res = await getDetailDataApi({ id: this.id });
      console.log(res.result);
      this.detailData = res.result;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/var.scss";
.detail {
  padding: 21px 16px;
  color: #ccc;
  font-size: 12px;
  .top {
    margin-bottom: 15px;
    font-size: 14px;
  }
  .movie-info-top {
    display: flex;
    justify-content: space-between;
    img {
      height: 138px;
      width: 100px;
    }
    .text {
      width: 231px;

      h2 {
        font-size: 20px;
        color: #fff;
      }
      p {
        font-size: 12px;
        line-height: 20px;
      }
      .btns {
        display: flex;
        justify-content: space-between;
        div {
          width: 110px;
          height: 30px;
          border-radius: 4px;
          background: hsla(0, 0%, 100%, 0.35);
          @include center;
        }
      }
    }
  }
  .real-time-word-of-mouth {
    width: 343px;
    height: 173.5px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    margin-top: 15px;
    padding: 10px 10px;
    .top {
      font-size: 12px;
      .left {
        float: left;
        color: #fff;
      }
      .right {
        float: right;
      }
    }
    .middle {
      display: flex;
      justify-content: space-around;
      padding: 40px 0;
      .left {
        height: 58px;
        width: 58px;
        .score {
          font-size: 34px;
          color: #ffb400;
          line-height: 40px;
        }
        .people-grade {
          font-size: 10px;
          opacity: 0.4;
        }
      }
    }
  }
}
</style>
