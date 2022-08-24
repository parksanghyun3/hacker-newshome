<template>
  <div class="header">
    <!-- router link의 to 속성은 이동할 url을 넣어주면 된다.-->
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scorped>
  .header {padding: 8px; display: flex; background: #42b883; color:#fff;}
  .header a {margin-right: 10px; color: #fff; text-decoration: none; font-weight: 700;}
  .header .router-link-exact-active {color: #35495e;}
  .wrap {padding: 0 20px;}
</style>