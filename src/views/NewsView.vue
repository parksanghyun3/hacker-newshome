<template>
  <div class="wrap">
    <ul class="new_list">
      <li v-for="(item, index) in this.$store.state.news" :key="index" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div class="link_text">
          <a v-bind:href="item.url">
            <p class="new_title">{{ item.title }}</p>
          </a>
          <small>
            by
              <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </small>
        </div>
        <!-- <a v-bind:href="item.url">
          {{ item.title }}
        </a>
        <small>
          {{ item.time_ago }} <body>
            <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          </body>
        </small> -->
      </li>
    </ul>
      <!-- for문에서 key값을 반드시 바인딩 해줘야 하는데 그 key값은 데이터가 객체이면 객체안의 특정 속성을 key값으로 지정해줘야 오류가 안뜬다 -->
    <!-- <p v-for="user in this.$store.state.news" v-bind:key="user.title">
      <a v-bind:href="user.url">{{ user.title }}</a>
      <small> {{ user.time_ago }} by
        <router-link :to="`/user/${user.user}`"> {{ user.user }} </router-link>
      </small>
    </p> -->
    
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";  

export default {

  created() {
    this.$store.dispatch("FETCH_NEWS");
  }

}
</script>

<style scoped>
  .news_list {margin: 0; padding: 0;}
  .post {display: flex; align-items: center; border-bottom: 1px solid #ddd;}
  .points {padding: 0 20px; color: #42b883;}
  .link_text {display: flex; align-items: center;}
</style>