<!-- App.vue -->
<template>
  <div id="app">
    <Layout />
    <router-view/>
  </div>
</template>

<script>
import Layout from '@/components/Layout.vue';

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
.container{
  margin-top: 64px;
}
h1 {
  margin-top: 0%;
  font-weight: bolder;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
