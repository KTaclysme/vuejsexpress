<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LayoutH from './components/LayoutHeader.vue'
import LayoutF from './components/LayoutFooter.vue'
import HomeView from './views/HomeView.vue';
</script>

<template>
  <header>
    <LayoutH />
  </header>

  <body>
  </body>

  <footer>
    <LayoutF />
  </footer>

  <RouterView />
</template>

<style scoped>
header {
  margin-top: 45px;
}

footer {
  margin-bottom: 45px;
}
</style>
