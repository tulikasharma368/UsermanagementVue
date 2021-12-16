<style lang="less">
  @import "./App.less";
</style>

<template>
  <div id="app">
    <div>
      <Home/>
    </div>
     <router-view/>
  </div>
  
</template>

<script>
import Home from './components/Home/Home.vue'
export default {
  name: 'App',
  components: {
    Home  
    }
}
</script>




