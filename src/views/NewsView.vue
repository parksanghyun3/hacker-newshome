<template>
<<<<<<< HEAD
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user"> {{ user.title }} </div>
=======
  <div class="wrap">
      <!-- for문에서 key값을 반드시 바인딩 해줘야 하는데 그 key값은 데이터가 객체이면 객체안의 특정 속성을 key값으로 지정해줘야 오류가 안뜬다 -->
    <p v-for="user in this.$store.state.news" v-bind:key="user.title">
      <a v-bind:href="user.url">{{ user.title }}</a>
      <small> {{ user.time_ago }} by
        <router-link :to="`/user/${user.user}`"> {{ user.user }} </router-link>
      </small>
    </p>
    
>>>>>>> c9dd67de65916f99be8d6597fe3870371a8cafce
  </div>
</template>

<script>

<<<<<<< HEAD
// import { fetchNewsList } from '../api/index.js'

export default {
  created() {
    // fetchNewsList()
    //   .then(response => this.users = response.data) 
    //   .catch(error => console.log(error))
    this.$store.dispatch("FECH_NEWS");
=======

export default {

  created() {
    this.$store.dispatch("FETCH_NEWS");
>>>>>>> c9dd67de65916f99be8d6597fe3870371a8cafce
  }

}
</script>

<style>

</style>