import vue from "veu";
import vuex from "vuex";
import {getCityiesApi} from "../utils/api"
vue.use(vuex)
export default new vuex.Store({
  state:{
    cityiesList:[]
  },
  mutations:{
    changeCityies(state,payload){
      state.cityiesList=payload
    }
  },
  actions:{
    async getCityieslist({commit}){
      const res= await getCityiesApi()
      commit("changeCityies",res.result)
    }
  }

})
