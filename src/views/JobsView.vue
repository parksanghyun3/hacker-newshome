<template>
  <div class="wrap">
    <listItem></listItem>
    <!-- <ul class="job_list">
      <li v-for="(job, index) in this.$store.state.jobs" :key="index" class="post">
        <div class="points">
          {{ job.points || 0 }}
        </div>
        <div class="link_text">
          <a :href="job.url"> {{ job.title }}</a>
          <small>
            <span>{{ job.time_ago }} by</span>
            <a :href="job.url"> {{ job.domain }}</a>
          </small>
        </div>
      </li>
    </ul> -->
  </div>
</template>

<script>

import listItem from "../components/listItem.vue";
// import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    listItem,
  },
  mixins: [ListMixin],
  // created(){
  //   bus.$emit("start:spinner");
  //   setTimeout(() => {
  //     this.$store.dispatch("FETCH_JOBS")
  //     .then(() => {
  //       console.log('fetched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }, 3000);
  // }
}
</script>

<style scoped>
  .job_list {margin: 0; padding: 0;}
  .post {display: flex; align-items: center; border-bottom: 1px solid #ddd;}
  .points {padding: 10px 20px; color: #42b883;}
  .link_text {display: flex; align-items: center;}
  small {display: flex; align-items: center;}
  p {margin: 0;}
</style>