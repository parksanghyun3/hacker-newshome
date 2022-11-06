<template>
  <div class="wrap">
    <listItem></listItem>
  </div>
</template>

<script>
import ListItem from "../components/listItem.vue";
// import bus from "../utils/bus.js";
import ListMixin from "../mixins/ListMixin.js";

export default {
  components: {
    ListItem, 
  },
  mixins: [ListMixin],
}
</script>

<style>

</style>  