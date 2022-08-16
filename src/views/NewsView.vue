<template>
  <div>
      <!-- for문에서 key값을 반드시 바인딩 해줘야 하는데 그 key값은 데이터가 객체이면 객체안의 특정 속성을 key값으로 지정해줘야 오류가 안뜬다 -->
    <div v-for="user in this.$store.state.news" v-bind:key="user.title"> {{ user.title }} </div>
  </div>
</template>

<script>

// import { fetchNewsList } from '../api/index.js'

export default {
  // data(){
  //   return{
  //     users: []
  //   }
  // },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }

}
</script>

<style>

</style>