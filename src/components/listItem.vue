<template>
  <div class="wrap">
    <ul class="new_list">
      <li v-for="(item, index) in listItems" :key="index" class="post">
        <div class="points">
          {{ item.points || 0}}
        </div>
        <div class="link_text">
          <template v-if="item.domain">
            <a v-bind:href="item.domain">
              <p class="new_title">{{ item.title }}</p>
            </a>
          </template>
          <template v-else>
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </template>
        </div>
        <small>
          {{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`">{{ item.user }}</router-link>
            <a :href="item.url" v-else>
              {{ item.domain }}
            </a>
        </small>

      </li>
    </ul>
  </div>
</template>

<script>

export default {

  created() {
    // this.$store.dispatch("FETCH_NEWS");
    // console.log(this.$route.path === "/news");
    // route의 index.js 에 각 패스들마다 name값을 지정해주고, 변수로 그것을 불러옴
    // 그 이후 이름이 news 와 일치하는 애는 this.$store.dispatch("FETCH_NEWS")가 실행되게끔 함
    const name = this.$route.name;
    if(name === "news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === "ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (name === "jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    listItems(){
      const name = this.$route.name;
      if(name === "news") {
        return this.$store.state.news;
      }
      else if (name === "ask") {
        return this.$store.state.ask;
      }
      else if (name === "jobs") {
        return this.$store.state.jobs;
      } 
    }
  },
}
</script>

<style scoped>
  .news_list {margin: 0; padding: 0;}
  .post {display: flex; align-items: center; border-bottom: 1px solid #ddd;}
  .points {padding: 10px 20px; color: #42b883;}
  .link_text {display: flex; align-items: center;}
  p {margin: 0;}
</style>