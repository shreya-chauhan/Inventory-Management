<template>
  <div id="app">
    <HomePage msg="Inventry Management"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
.logo-height {
  width: 300px;
  height: 150px;
  position: absolute;
  left: 200px;
}
</style>
