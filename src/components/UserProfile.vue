<template>
    <div class="wrap">
    <section>
      <div class="user_container">
        <i class="fa-solid fa-user"></i>
        <!-- <router-link :to="`user/${userInfo.user}`">
          {{ userInfo.id }}
        </router-link> -->
        <div>
          <!-- username: {{ info.id }} -->
          <slot name="username">
            
          </slot>
        </div>
        <div>
          <!-- time: {{ info.created }} -->
          <slot name="time">

          </slot>
        </div>
        <slot name="karma">

        </slot>
      </div>
      <h2>
        {{ info.title }}
      </h2>
    </section>
    <section v-html="info.content"></section>
  </div>
</template>

<script>
export default {
  props: {
    info: Object,
  },
  // userview에서 데이터를 받아올 수 있는 2가지 방법,
  // 1.computed로 메서드를만 들어 데이터를 받아온다.
  // 2.userview에서 props로 데이터를 내려보내, Object형태의 데이터기 때문에 오브젝트로 받아 템플릿 내에 써주면 된다. 
  computed: {
      userInfo() {
          return this.$store.state.user;
      }
  },
}
</script>

<style scoped>
  .user_container {display: flex; align-items: center;}
</style>