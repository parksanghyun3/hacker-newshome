<template>
  <div>
    <div v-for="item in ask" v-bind:key="item"> {{ item.title }} </div>
  </div>
</template>

<script>
// import console from 'console';
import { fetchAskList } from '../api/index.js';
 

export default {
  data(){
    return {
      ask: []
    }
  },  
  created(){
    var vm = this
    fetchAskList()
      .then(function(response){
        vm.ask = response.data
      })
      .catch(function(error){
        console.log(error);
      });
    
  }
}
</script>

<style>

</style>