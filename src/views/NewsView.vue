<template>
  <div class="wrap">
    <listItem></listItem>
  </div>
</template>

<script>
import ListItem from "../components/listItem.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    ListItem,
  },
  created(){
    this.$store.dispatch("FETCH_NEWS");
    bus.$emit("start:spinner");
  }
}
</script>

<style>

</style>  