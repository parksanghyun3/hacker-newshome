export default {
    // state를 변경시키는 역할 (mutations를 통해서만 state를 변경할 수 있다.)
    // 비동기처리가 아닌 동기처리가 일어나는 구간
    // mutations 내에 함수 형태로 작성해야함
    // 기본 인자는 payload로 받아야 한다.
    SET_NEWS(state, news){
      state.news = news;
    },
    SET_JOBS(state, jobs){
      state.jobs = jobs;
    },
    SET_ASK(state, ask){
      state.ask = ask;
    },
    SET_USER(state, user){
      state.user = user;
    },
    SET_ITEM(state, item){
      state.item = item;
    },
}