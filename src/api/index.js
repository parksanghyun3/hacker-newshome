import axios from "axios";


//HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};


// 2. API 함수들을 정리
function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`)
}

function fetchAskList(){
  return axios.get(`${config.baseUrl}ask/1.json`)
}

function fetchJobsList(){
  return axios.get(`${config.baseUrl}jobs/1.json`)
}

function fetchUserInfo(username){
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchItemInfo(itemname){
  return axios.get(`${config.baseUrl}item/${itemname}.json`);
}

// fetchNewsList()
//   .then
//   .catch

// 3.  export로 함수로 만든 API를 꺼내주면 된다.
export {
  fetchJobsList,
  fetchAskList,
  fetchNewsList,
  fetchUserInfo,
  fetchItemInfo,
}