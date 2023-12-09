<script>

import users from "../../../../user/registered.json";

export default {
  data() {
    return {
      nom: "",
      name: "",
      mail: "",
      mdp: "",
      message: "",
    };
  },
  methods: {
    handleInscriptionSubmit() {
      if (!this.name || !this.mail || !this.mdp) {
        this.mailError = "Veuillez remplir tous les champs";
        return;
      }

      const existingUser = users.find((user) => user.email === this.mail);

      if (existingUser) {
        this.mailError = "Adresse mail déjà utilisée";
      } else {
        const newUser = {
          id: users.length + 1,
          name: this.name,
          email: this.mail,
          password: this.mdp,
        };

        fetch('http://localhost:3000/api/user/add-user', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newUser.name, email: newUser.email, password: newUser.password }),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`Réponse du serveur non réussie: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Réponse du serveur:', data);
            this.message = "Inscription réussie";
            this.$router.push("/connexion");
          })
          .catch(error => {
            console.error('Erreur lors de la requête:', error);
          });
      }
    },
  },
};

</script>

<template>
  <div class="inscription">
    <h1>Formulaire d'inscription</h1>
    <form class="inscriptionform" @submit.prevent="handleInscriptionSubmit">
      <label>
        <input v-model="nom" type="text" placeholder="Nom" />
      </label>
      <br />
      <label>
        <input v-model="name" type="text" placeholder="Prénom" />
      </label>
      <br />
      <label>
        Sexe:
        <select v-model="sexe">
          <option value="">Sélectionnez</option>
          <option value="M">Masculin</option>
          <option value="F">Féminin</option>
        </select>
      </label>
      <br />
      <label>
        Date de naissance:
        <input v-model="dateDeNaissance" type="date" />
      </label>
      <br />
      <label>
        <input v-model="mail" type="text" placeholder="Adresse mail" />
        <span v-if="mailError" class="msg" style="color: red">{{ mailError }}</span>
      </label>
      <br />
      <label>
        <input v-model="mdp" type="password" placeholder="Mot de passe" />
        <span v-if="mdpError" class="msg" style="color: red">{{ mdpError }}</span>
      </label>
      <br />
      <button class="btn" type="submit">S'inscrire</button>
    </form>
    <p v-if="message" class="msg">{{ message }}</p>
  </div>
</template>

<style scoped>
.inscription input {
  margin-bottom: 1em;
}

.inscription {
  text-align: center;
  background-color: transparent;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 35px;
}

.connexion {
  text-align: center;
  background-color: transparent;
}

form {
  margin-top: 50px;
  width: 250px;
  height: auto;
  color: white;
  background: rgba(0, 0, 0, 0.8);
  opacity: .53;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 40px 25px;
}

input {
  width: 100%;
  height: 65px;
  padding: 25px;
  margin-bottom: 5px;
  background: transparent;
  border-bottom: 1px solid white;
  border-top: 5px;
  border-left: none;
  border-right: none;
  color: white;
  font-size: 15px;
  letter-spacing: 1px;
  outline: none;
}

input:focus {
  outline: none;
}

::placeholder {
  color: white;
  font-family: Arial;
}

.btn {
  margin-top: 10px;
  font-size: 18px;
  padding: 10px 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: rgb(37, 203, 245);
  font-weight: bold;
}

.btn:hover {
  color: rgb(253, 198, 95);
}

.inscriptionform select {
  margin-top: 10px;
  padding: 10px 15px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: white;
}

.inscription label {
  display: block;
}

.inscription input[type="date"] {
  margin-top: 1px;
}

.inscriptionform option {
  color: black;
}

a:visited {
  text-decoration: none;
  color: white;
}

.msg {
  color: rgb(255, 68, 68);
  font-weight: bold;
  text-shadow: -1px -1px 0 #000, 2px -1px 0 #000, -1px 2px 0 #000, 2px 2px 0 #000;
}
</style>
