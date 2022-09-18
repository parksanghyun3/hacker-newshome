<template>
  <div class="wrap">
    <p v-for="item in fetchedAsk" v-bind:key="item.title">
      <router-link :to="`/item/${item.id}`" :href="item.url"> {{ item.title }} </router-link>
      <small>
        {{ item.title }} by {{ item.user }}
        <!-- router-link에서 item.id로 접근하는 이유는 id값을 불러오면 객체안의 값을 불러올 수 있기 때문이다. 라고 생각합니다.-->
      </small>
    </p>
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

<style>

</style> 