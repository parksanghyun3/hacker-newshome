import {fetchUserInfo, fetchItemInfo, fetchList } from "../api/index.js"

export default {
    // mutations을 실행시키는 역할
    // 동기처리가 아닌 비동기 처리가 일어나는 곳
    // dispatch("함수명", "전달인자")로 실행시킬 수 있다.
    // actions 내에 함수 형태로 작성해야함
    // FETCH_NEWS(context){
    //   return fetchNewsList()
    //   .then(response =>{
    //     context.commit("SET_NEWS", response.data);
    //     return response;
    // }) 
    //   .catch(error => console.log(error))
    // },
    // // distructuring
    // FETCH_JOBS({ commit }){
    //   return fetchJobsList()
    //   .then(response => {
    //     console.log(response.data);
    //     commit("SET_JOBS", response.data);
    //   })
    //   .catch(error => console.log(error))
    // },

    // // distructuring
    // FETCH_ASK({ commit }){
    //   return fetchAskList()
    //   .then(({ data }) => commit("SET_ASK", data))
    //   .catch(error => console.log(error));
    // },

    FETCH_USER({ commit }, name){
      return fetchUserInfo(name)
      .then(({ data }) => commit("SET_USER", data))
      .catch(error => console.log(error)) 
    },

    FETCH_ITEM({ commit }, item){
      return fetchItemInfo(item)
      .then(({ data }) => commit("SET_ITEM", data))
      .catch(error => console.log(error)) 
    },
    FETCH_LIST({ commit }, pageName){
      return fetchList(pageName)
      .then((response) => {
        console.log("4");
        commit("SET_LIST", response.data);
        return response.data
      })
      .catch(error => console.log(error));
    }
}