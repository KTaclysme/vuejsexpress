<script setup lang="ts">
const apiKey = "11920b0";

//Description du film
fetch(`http://www.omdbapi.com/?apikey=${apiKey}&`)
    .then(response => response.json())
    .then(data => {
        // Handle the data here
        console.log(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:', error);
    });

//Poster du film
fetch(`http://img.omdbapi.com/?apikey=${apiKey}&`)
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
        <input @change="">
    </main>
</template>

<style scoped></style>
