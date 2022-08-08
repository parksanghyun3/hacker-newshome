<template>
  <div id="app">
    <!-- 스크립트 단에서는 파스칼케이스가 맞고, 태그를 등록할 때는 케밥케이스로 등록한다.-->
    <!-- 하지만 vue 에서 강력히 추천하는 방법은 파스칼이므로 파스칼사용할거임-->
    <ToolBar></ToolBar>
    <!-- <tool-bar></tool-bar> -->
    <router-view></router-view>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
}
}
</script>

<style>
  body {padding: 0; margin: 0;}
</style>
