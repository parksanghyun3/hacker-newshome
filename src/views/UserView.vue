<template>
  <div class="wrap">
    <!-- <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p> -->
    <UserProfile :info="userInfo">
      <div slot="username"> {{ userInfo.id }} </div>
      <span slot="time"> {{ 'Joined' +  userInfo.created }}, </span>
      <span slot="karma"> {{ userInfo.karma }} </span>
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile,
  },
  computed: {
      userInfo() {
          return this.$store.state.user;
      }
  },

  // userview의 param를 받아왔기 때문에, route의 params의 id값을 가져온다.
  // id를 api에 태워서 호출하면 된다.
  created() {
      const userName = this.$route.params.id;
      // console.log(this.$route.params.id);
      // axios.get(`https://hacker-news.firebaseio.com/v0/user/${this.$route.params.id}.json`);
      // userName을 인자로 사용해서 값을 넘김
      this.$store.dispatch("FETCH_USER", userName);
  },
}
</script>

<style>

</style>