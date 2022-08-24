<template>
  <div class="wrap">
    <p>{{ itemInfo.title }}</p>
    <div v-html="itemInfo.content">{{ itemInfo.content }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    itemInfo(){
      return this.$store.state.item;
    }
  },
  created() {
    const itemName = this.$route.params.id;
    // console.log(this.$route.params.id);
    // axios.get(`https://hacker-news.firebaseio.com/v0/user/${this.$route.params.id}.json`);
    // userName을 인자로 사용해서 값을 넘김
    this.$store.dispatch("FETCH_ITEM", itemName);
  }
}
</script>

<style>

</style>