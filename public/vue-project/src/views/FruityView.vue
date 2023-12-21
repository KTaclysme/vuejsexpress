<!-- <template>
    <div id="app">
        <h1>FRUITY VIEW</h1>

        <form @submit.prevent="handleFindUser">
            <label for="name">Name:</label>
            <input type="text" v-model="name" required>

            <label for="email">Email:</label>
            <input type="email" v-model="email" required>

            <button type="submit">Trouver l'utilisateur</button>
        </form>

        <div v-if="displayedUser">
            <h2>User Details:</h2>
            <p>ID: {{ displayedUser.id }}</p>
            <p>Name: {{ displayedUser.name }}</p>
            <p>Email: {{ displayedUser.email }}</p>
            <p>Password: {{ displayedUser.password }}</p>
        </div>
        <div v-else>
            <p v-if="error">{{ error }}</p>
            <p v-else>No user found.</p>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            displayedUser: null,
            error: null, // Ajoutez cette ligne pour déclarer la propriété error
        };
    },
    methods: {
        async handleFindUser() {
            try {
                const apiUrl = `http://localhost:3000/api/user/display-user?name=${this.name}&email=${this.email}`;
                const response = await fetch(apiUrl, { method: "GET" });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                console.log('Data from server:', data);

                // Mettre à jour la propriété displayedUser avec les données reçues du serveur
                this.displayedUser = data;
                this.error = null; // Réinitialiser l'erreur en cas de succès
            } catch (error) {
                console.error('Error fetching user:', error.message);
                this.displayedUser = null; // Réinitialiser displayedUser en cas d'erreur
                this.error = 'User not found'; // Afficher un message d'erreur à l'utilisateur
            }

        },
    },
};
</script>
  
<style></style> -->
<template>
    <div>
        <h2>Liste des utilisateurs</h2>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }} - {{ user.email }}
            </li>
        </ul>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await fetch('http://localhost:3000/api/user/display-user', {
                    method: 'GET'
                });
                const data = await response.json();
                console.log('Data from server:', data);
                this.users = data;
            } catch (error) {
                console.error('Erreur lors de la récupération des utilisateurs', error);
            }
        },
    },
};

</script>