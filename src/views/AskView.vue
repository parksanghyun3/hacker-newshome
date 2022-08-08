<template>
  <div>
    <div v-for="item in ask"> {{ item.title }} </div>
  </div>
</template>

<script>
import console from 'console';
import { fetchAsksList } from '../api/index.js';
 

export default {
  data(){
    return {
      ask: []
    }
  },  
  created(){
    fetchAsksList()
      var vm = this
      .then(function(){
        vm.ask = response.data
      })
      .catch(function(){
        console.log(error);
      });
    
  }
}
</script>

<style>

</style>