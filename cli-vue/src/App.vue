<template>
  <div id="app">
    <Header/>
    <Lists/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Lists from './components/Lists.vue'

export default {
  name: 'App',
  components: {
    Header,
    Lists
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
