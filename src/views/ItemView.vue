<template>
  <!-- 사용자 상세정보 -->
  <div class="wrap">
    <section>
      <!-- <div class="user_container">
        <i class="fa-solid fa-user"></i>
        <router-link :to="`user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
        </router-link>
        <div>
          {{ fetchedItem.time_ago }}
        </div>
      </div> -->
      <userProfile :info="fetchedItem">
        <!-- <div slot="username">{{ fetchedItem.user }}</div> -->
        <router-link slot="username" :to="`user/${fetchedItem.url}`">
          {{ fetchedItem.user }}
        </router-link>
        <template slot="time"> {{ "Posted" + fetchedItem.time_ago }} </template>
      </userProfile>
    </section>
    <section>
      <!-- <h2>
        {{ fetchedItem.title }}
      </h2> -->
    </section>
    <!-- <section v-html="fetchedItem.content"></section> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";
export default {
  components: {
    UserProfile
  },
  // 왜 computed로 사용해야하는지..
  // 템플릿안의 html에서 값을 참조하려면 computed나, methods의 안의 값을 리턴해줘야 참조가 가능하다..
  computed: {
    ...mapGetters(["fetchedItem"])
  },
  // methods: {
  //   itemInfo(){
  //     return this.$store.state.item;
  //   }
  // },
  created() {
    const itemName = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemName);
  }
}
</script>

<style scoped>
  .user_container {display: flex;}
</style>