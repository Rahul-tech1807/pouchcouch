<template>
  <div id="app">
    <home/>
    <navbar/>
  </div>
</template>

<script>
import home from './components/home.vue'
import navbar from './layout/navbar.vue'

export default {
  name: 'App',
  components: {
    home,
    navbar
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
  margin-top: 60px;
}
</style>
