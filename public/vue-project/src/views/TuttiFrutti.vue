<template>
    <div id="app">
        <div v-if="!gameOver">
            <h3>Tu as {{ lives }} PV restant et tu as utilisé ces lettres: {{ usedLetters.join(' ') }}</h3>
            <h3>mot à trouver (en anglais): {{ currentWord.join(' ') }}</h3>
            <input v-model="userLetter" type="text" maxlength="1" @input="onInputChange">
            <button @click="makeGuess">Envoi</button>
        </div>
        <div v-else>
            <p v-if="lives === 0">Zut il es mort! le mot était: {{ word }}</p>
            <p v-else>Bravo! Tu as deviné le mot: {{ word }}!</p>
            <button @click="restart">Recommencer</button>
        </div>
        <div>
            <button><a href="/user">TO GET MORE FRUITS</a></button>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import words from '../../../../word/words.json';

const word = ref('');
const wordLetters = ref<string[]>([]);
const alphabet = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
const usedLetters = ref<string[]>([]);
const lives = ref(7);
const currentWord = ref<string[]>([]);
const userLetter = ref('');
const gameOver = ref(false);

const getValidWord = () => {
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    while (selectedWord.includes('-') || selectedWord.includes(' ')) {
        selectedWord = words[Math.floor(Math.random() * words.length)];
    }
    return selectedWord.toUpperCase();
};

const onInputChange = () => {
    userLetter.value = userLetter.value.toUpperCase();
};

const makeGuess = () => {
    if (!gameOver.value) {
        if (alphabet.has(userLetter.value) && !usedLetters.value.includes(userLetter.value)) {
            usedLetters.value.push(userLetter.value);
            if (wordLetters.value.includes(userLetter.value)) {
                wordLetters.value = wordLetters.value.filter(letter => letter !== userLetter.value);
                updateCurrentWord();
            } else {
                lives.value--;
            }
            if (wordLetters.value.length === 0 || lives.value === 0) {
                gameOver.value = true;
            }
        } else {
            alert('Please enter a valid letter that you have not used before.');
        }
    }
};

const updateCurrentWord = () => {
    currentWord.value = word.value.split('').map(letter =>
        usedLetters.value.includes(letter) ? letter : (letter === ' ' ? ' ' : '-')
    );
};

const restart = () => {
    word.value = getValidWord();
    wordLetters.value = word.value.split('');
    currentWord.value = wordLetters.value.map(letter => (letter === ' ' ? ' ' : '-'));
    usedLetters.value = [];
    lives.value = 7;
    gameOver.value = false;
};

onMounted(() => {
    word.value = getValidWord();
    wordLetters.value = word.value.split('');
    currentWord.value = wordLetters.value.map(letter => (letter === ' ' ? ' ' : '-'));
});
</script>
  
<style scoped></style>
  