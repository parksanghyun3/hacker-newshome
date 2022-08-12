<template>
  <div>
    <div v-for="item in ask" v-bind:key="item.title"> {{ item.title }} </div>
  </div>
</template>

<script>
// import console from 'console';
// import { fetchAskList } from '../api/index.js';
 
import { mapState } from 'vuex'

export default {
  // data(){
  //   return {
  //     ask: []
  //   }
  computed: {
    ...mapState({
        // ask 를 컴퓨티드로 만들었기 때문에 위에 v-for 문에 사용가능 this.$store.state.payload -> ask
        ask: state => state.payload
      })
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