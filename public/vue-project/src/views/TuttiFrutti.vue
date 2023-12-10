<script setup lang="ts">
const apiKey = "11920b0";

// http://www.omdbapi.com/?s=interstellar&page=1&apiKey=11920b0
// http://www.omdbapi.com/?i=tt0816692&apiKey=11920b0

fetch(`http://www.omdbapi.com/?apikey=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        // Handle the data here
        console.log(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });
</script>

<template>
    <main>
        <h1>
            BIENVENU SUR TUTTI FRUTTI
        </h1>
    </main>
</template>

<style scoped></style>
