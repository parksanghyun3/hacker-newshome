<template>
  <div>
    <div v-for="item in fetchedAsk" v-bind:key="item.title"> {{ item.title }} </div>
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