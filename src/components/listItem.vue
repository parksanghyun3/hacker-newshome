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

      </li>
    </ul>
  </div>
</template>

<script>

export default {

  created() {
    this.$store.dispatch("FETCH_NEWS");
  }

}
</script>

<style scoped>
  .news_list {margin: 0; padding: 0;}
  .post {display: flex; align-items: center; border-bottom: 1px solid #ddd;}
  .points {padding: 10px 20px; color: #42b883;}
  .link_text {display: flex; align-items: center;}
  p {margin: 0;}
</style>