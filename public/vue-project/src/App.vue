<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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

<!-- <script setup lang="ts">
import { ref, type Ref } from 'vue';
const pizzas: Ref<string[]> = ref([
  'pepperoni',
  '4 fromages',
  'légumes du soleil',
  'thon câpres'
]);
const userInput = ref('');
const color: Ref<'red' | 'green'> = ref('red');
function addPizza(): void {
  pizzas.value.push(userInput.value);
}
function isColorRed(): boolean {
  return color.value === 'red';
}
function isColorGreen(): boolean {
  return color.value === 'green';
}
function changeColor(): void {
  if (color.value === 'red') {
    color.value = 'green';
  } else {
    color.value = 'red';
  }
}
</script>

<template>
  <ul>
    <li v-for="pizza in pizzas" :class="{ red: isColorRed(), green: isColorGreen() }">
      {{ pizza }}
    </li>
  </ul>

  <button @click="changeColor()">
    Change Color
  </button>

  <input type="text" v-model="userInput">

  <button @click="addPizza()">
    Ajouter la pizza !
  </button>

  <button></button>
</template>

<style scoped>
.red {
  color: red;
}

.green {
  color: green;
}
</style> -->
