import Vue from "vue";
import Vuex from "vuex";

import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
// import { fetchJobsList } from "../api/index.js"
// import { fetchAskList } from "../api/index.js"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //프로젝트에서 공통으로 사용할 변수를 정의하는 곳s
    //프로젝트 내의 모든 곳에서 참조 및 사용이 가능합니다.
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    fetchedAsk(state){
      return state.ask;
    }
  },
  mutations,
  actions,
});