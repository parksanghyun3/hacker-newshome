import Vue from "vue";
import Vuex from "vuex";

import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js"
// import { fetchJobsList } from "../api/index.js"
// import { fetchAskList } from "../api/index.js"

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //프로젝트에서 공통으로 사용할 변수를 정의하는 곳
    //프로젝트 내의 모든 곳에서 참조 및 사용이 가능합니다.
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    // state를 변경시키는 역할 (mutations를 통해서만 state를 변경할 수 있다.)
    // 비동기처리가 아닌 동기처리가 일어나는 구간
    // mutations 내에 함수 형태로 작성해야함
    // 기본 인자는 payload로 받아야 한다.
    SET_NEWS(state, payload){
      state.payload = payload;
    },
    SET_JOBS(state, payload){
      state.payload = payload;
    },
    SET_ASK(state, payload){
      state.payload = payload;
    },
  },
  actions: {
    // mutations을 실행시키는 역할
    // 동기처리가 아닌 비동기 처리가 일어나는 곳
    // dispatch("함수명", "전달인자")로 실행시킬 수 있다.
    // actions 내에 함수 형태로 작성해야함
    FETCH_NEWS(context){
      fetchNewsList()
      .then(response => context.commit("SET_NEWS", response.data)) 
      .catch(error => console.log(error))
    },
    // distructuring
    FETCH_JOBS({ commit }){
      fetchJobsList()
      .then(({ data }) => commit("SET_JOBS", data)) 
      .catch(error => console.log(error))
    },

    // distructuring
    FETCH_ASK({ commit }){
      fetchAskList()
      .then(({ data }) => commit("SET_ASK", data))
      .catch(error => console.log(error));

    }
  }
});