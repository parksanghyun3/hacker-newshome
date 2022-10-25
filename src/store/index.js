import Vue from "vue";
import Vuex from "vuex";

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
    // 전달받을 데이터가 안에 담겨s야 하므로... 빈객체나, 빈배열 형식으로 임의로 선택해서 받아줘도 된다.
    // 네트워크 패널열어서 넘어오는 값 확인하면 된다. 보통의 경우 대부분 객체데이터로 넘어옴
    user: {},
    item: {}
  },
  getters: {
    fetchedAsk(state){
      return state.ask;
    },
    fetchedItem(state){
      return state.item;
    }
  },
  mutations,
  actions,
});