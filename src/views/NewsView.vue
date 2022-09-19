<template>
  <div class="wrap">
      <!-- for문에서 key값을 반드시 바인딩 해줘야 하는데 그 key값은 데이터가 객체이면 객체안의 특정 속성을 key값으로 지정해줘야 오류가 안뜬다 -->
    <p v-for="user in this.$store.state.news" v-bind:key="user.title">
      <a v-bind:href="user.url">{{ user.title }}</a>
      <small> {{ user.time_ago }} by
        <router-link :to="`/user/${user.user}`"> {{ user.user }} </router-link>
      </small>
    </p>
    
  </div>
</template>

<script>


export default {

  created() {
    this.$store.dispatch("FETCH_NEWS");
  }

}
</script>

<style>

</style>