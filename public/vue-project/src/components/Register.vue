<script>

import users from "../../../../user/registered.json";

export default {
  data() {
    return {
      nom: "",
      prenom: "",
      mail: "",
      mdp: "",
      mailError: "",
      message: "",
    };
  },
  methods: {
    handleInscriptionSubmit() {
      if (!this.nom || !this.prenom || !this.mail || !this.mdp) {
        this.mailError = "Veuillez remplir tous les champs";
        return;
      }

      const existingUser = users.find((user) => user.email === this.mail);

      if (existingUser) {
        this.mailError = "Adresse mail déjà utilisée";
        this.$router.push("/connexion");
      } else {
        // Ajouter le nouvel utilisateur au fichier JSON (ou à votre backend)
        const newUser = {
          id: users.length + 1,
          name: `${this.prenom} ${this.nom}`,
          email: this.mail,
          password: this.mdp,
        };

        users.push(newUser);

        // Vous pouvez sauvegarder le fichier JSON ici, par exemple dans votre backend
        // fs.writeFileSync('./path/to/your/users.json', JSON.stringify(users));

        this.message = "Inscription réussie";
        this.clearForm(); // Effacer le formulaire après une inscription réussie
      }
    },
    clearForm() {
      this.nom = "";
      this.prenom = "";
      this.mail = "";
      this.mdp = "";
      this.mailError = "";
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
        <input v-model="prenom" type="text" placeholder="Prénom" />
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
