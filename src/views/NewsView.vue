<template>
  <div>
    <div v-for="user in this.$store.state.news" v-bind:key="user"> {{ user.title }} </div>
  </div>
</template>

<script>

// import { fetchNewsList } from '../api/index.js'

export default {
  created() {
    // fetchNewsList()
    //   .then(response => this.users = response.data) 
    //   .catch(error => console.log(error))
    this.$store.dispatch("FECH_NEWS");
  }

}
</script>

<style>

</style>