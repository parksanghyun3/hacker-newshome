<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script>
export default {
  created() {
    const itemName = this.$route.params.id;
    console.log(this.$route.params.id);
    // axios.get(`https://hacker-news.firebaseio.com/v0/user/${this.$route.params.id}.json`);
    // userName을 인자로 사용해서 값을 넘김
    this.$store.dispatch("FETCH_ITEM", itemName);
  }
}
</script>

<style>

</style>