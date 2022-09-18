import Vue from 'vue'
import Vuex from 'vuex'
import { fetchNewsList } from '../api/index.js'

Vue.use(Vuex);


// Vuex는 상태관리도구, 상태라는 것은 여러 컴포넌트간에 공유되는 데이터 속성
// newsview 가 user 라는 데이터를 관리하는것

export const store = new Vuex.Store({
  state: {
    news: []
  },
  mutations: {
    SET_NEWS(state, newsData){
      state.news = newsData;
    }
  },
  actions: {
    //store라는 index.js의 vuex의 액션을 호출하려면 dispatch를 사용한다.
    FECH_NEWS(context){ //mutations에서 접근하기위해 context라는 매개변수를 사용함
      fetchNewsList()
        .then(response => context.commit("SET_NEWS", response.data))
        // state.news = response.data 처럼 간단하게 사용하고 싶지만 vuex의 구조상
        // 모든 api처리는 actions에서 이루어지며 state로 보내기 위해선 mutations으로 호출헤주는 형식을 취해야한다.
        .catch(error => console.log(error))
    }
  }
});