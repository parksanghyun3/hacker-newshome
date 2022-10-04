<template>
  <div class="wrap">
    <!-- <p v-for="job in this.$store.state.jobs" v-bind:key="job.title">
      <a :href="job.url"> {{ job.title }}</a>
      <small>{{ job.domain }}</small>
    </p> -->
    <ul class="job_list">
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
    </ul>
  </div>
</template>

<script>

export default {

  created(){
    this.$store.dispatch("FETCH_JOBS");
  }
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