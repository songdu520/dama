<template>
  <div class="cities">
    <div class="hot-cities">
    <div class="title">
      热门城市
    </div>
    <ul>
      <li v-for="item in cityiesList[0].cities" :key="item.cityId">
           {{item}}
      </li>
    </ul>
  
    </div>
  </div>
</template>

<script>
import {getCityiesApi} from "../utils/api"
export default {
  data() {
    return {
      cityiesList:[]
    };
  },
  async beforeRouteEnter(to,from,next){
    const res=await getCityiesApi();
    next(vm=>{
      vm.citiesList = res.result;
      console.log(res.result)
     })
  },
  components: {},
   
  computed: {
    
  },

  mounted() {

  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.cities{
  background-color: #ebebeb;
  padding: 0 15px;
  font-size: 14px;
  
    .hot-cities{
    .title{
 
   line-height: 30px;
    }
  }
}
</style>
