<script setup lang="ts">
import { RouterView } from 'vue-router'
import LayoutH from './components/LayoutHeader.vue'
import LayoutF from './components/LayoutFooter.vue'
</script>

<template>
  <header>
    <LayoutH />
  </header>

  <body>
    <RouterView />
  </body>

  <footer>
    <LayoutF />
  </footer>
</template>

<style scoped>
header {
  margin-top: 64px;
}

footer {
  margin-bottom: 64px;
}
</style>