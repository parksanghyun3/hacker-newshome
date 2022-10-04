<template>
  <div class="wrap">
    <!-- <p v-for="item in fetchedAsk" v-bind:key="item.title">
      <router-link :to="`/item/${item.id}`" :href="item.url"> {{ item.title }} </router-link>
      <small>
        {{ item.title }} by {{ item.user }}
        router-link에서 item.id로 접근하는 이유는 id값을 불러오면 객체안의 값을 불러올 수 있기 때문이다. 라고 생각합니다.
      </small>
    </p> -->

    <ul class="ask_list">
      <li v-for="(item, index) in fetchedAsk" :key="index" class="post">
        <div class="points">
          {{ item.points }}
        </div>
        <div class="link_text">
          <p>
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small>
            <span>{{ item.time_ago }} by</span>
            <router-link :to="`/user/${item.user}`" class="link_text">{{ item.user }}</router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// import console from 'console';
// import { fetchAskList } from '../api/index.js';
 
import { mapGetters } from 'vuex'

export default {
  // data(){
  //   return {
  //     ask: []
  //   }
  computed: {
    // mapGatters의 배열과 객체연결의 차이
    ...mapGetters([
      "fetchedAsk"
    ]),
      // ask 를 컴퓨티드로 만들었기 때문에 위에 v-for 문에 사용가능 this.$store.state.payload -> ask
    // #2
    // ...mapState({
    //     fetchedAsk: state => state.payload
    //   })
    // #1
    // ask(){

      // return this.$store.state;
    // }
  },
  created(){
    this.$store.dispatch("FETCH_ASK");
  //   fetchAskList()
  //     .then(response => this.ask = response.data)
  //     .catch(error => console.log(error));
  // }
  },
  
}
</script>

<style scoped>
  .asks_list {margin: 0; padding: 0;}
  .post {display: flex; align-items: center; border-bottom: 1px solid #ddd;}
  .points {padding: 10px 20px; color: #42b883;}
  .link_text {display: flex; align-items: center;}
  small {display: flex; align-items: center;}
  p {margin: 0;}
</style> 