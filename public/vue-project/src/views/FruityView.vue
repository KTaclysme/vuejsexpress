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