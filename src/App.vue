<template>
  <div id="app">
    <!-- 스크립트 단에서는 파스칼케이스가 맞고, 태그를 등록할 때는 케밥케이스로 등록한다.-->
    <!-- 하지만 vue 에서 강력히 추천하는 방법은 파스칼이므로 파스칼사용할거임-->
    <ToolBar></ToolBar>
    <!-- <tool-bar></tool-bar> -->
    <Transition name="page">
      <router-view></router-view>
    </Transition>
    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import Spinner from './components/Spinner.vue';
import bus from "./utils/bus.js";

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data(){
    return {
      loadingStatus: false,
    };
  },  
  methods: {
    startSpinner(){
      this.loadingStatus = true;
    },
    endSpinner(){
      this.loadingStatus = false;
    },
  },
  create() {
    // Bus.$on("start:spinner", () => this.loadingStatus = true);
    bus.$on("start:spinner", this.startSpinner);
  }
}
</script>

<style>
  a {text-decoration: none; color: #34495e;}
  a:hover {text-decoration: underline; color: #42b883;}
  body {margin: 0; padding: 0;}
  .page-enter-active, .page-leave-active {transition: opacity 0.3s ease;}
  .page-enter-from, .page-leave-to {opacity: 0;}
  ul {margin: 0; padding: 0;}
</style>
