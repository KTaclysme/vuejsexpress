<template>
  <div>
    <input type="text" v-model="input" placeholder="Search fruits..." @input="handleInput" />
    <div class="dropdown" v-if="showDropdown && filteredFruits.length">
      <div class="item" v-for="fruit in filteredFruits" :key="fruit" @click="selectFruit(fruit)">
        {{ fruit }}
      </div>
    </div>
    <div class="item fruit" v-for="fruit in selectedFruits" :key="fruit">
      <p>{{ fruit }}</p>
    </div>
    <div class="item error" v-if="input && !filteredList().length">
      <p>No results found!</p>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const input = ref('');
const fruits = ['apple', 'banana', 'orange'];
const showDropdown = ref(false);
const selectedFruits = ref([]);

const filteredList = () => {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
};

const handleInput = () => {
  showDropdown.value = true;
};

const selectFruit = (fruit) => {
  input.value = fruit;
  showDropdown.value = false;
  selectedFruits.value.push(fruit);
};

watch(input, () => {
  if (!input.value) {
    showDropdown.value = false;
  }
});
</script>

<style>
/* Ajoutez du style pour votre dropdown ici */
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

.dropdown {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
}

.item {
  padding: 8px;
  cursor: pointer;
}

.item:hover {
  background-color: #eee;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}

body {
  padding: 20px;
  min-height: 100vh;
  background-color: rgb(234, 242, 255);
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background: white url("assets/search-icon.svg") no-repeat 15px center;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

.fruit {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}

.error {
  background-color: tomato;
}
</style>