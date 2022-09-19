<template>
  <div class="wrap">
    <p>{{ itemInfo.title }}</p>
    <div>{{ itemInfo.content }}</div>
  </div>
</template>

<script>

export default {

  // 왜 computed로 사용해야하는지..
  // 템플릿안의 html에서 값을 참조하려면 computed나, methods의 안의 값을 리턴해줘야 참조가 가능하다..
  methods: {
    itemInfo(){
      return this.$store.state.item;
    }
  },
  created() {
    const itemName = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemName);
  }
}
</script>

<style>

</style>