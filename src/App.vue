<template>
  <div id="app">
    
    <Header the-title="this is a parent prop"></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
</style>
