<template>
  <div class="connexion">
    <h1>Formulaire de connexion</h1>
    <form class="connexionform" @submit.prevent="handleConnexionSubmit">
      <label class="mail">
        <input type="text" v-model="mail" placeholder="Adresse mail" />
        <span v-if="mailError" class="msg">{{ mailError }}</span>
      </label>
      <br />
      <label class="mdp">
        <input type="password" v-model="mdp" placeholder="Mot de passe" />
      </label>
      <br />
      <button class="btn" type="submit">Se connecter</button>
      <br />
      <router-link class="link" to="/inscription">Pas de compte ? <br /> Je m'inscris</router-link>
    </form>
    <p v-if="message" class="msg">{{ message }}</p>
  </div>
</template>

<script>
import passwords from "../../../../user/registered.json";
import fs from 'fs';

export default {
  data() {
    return {
      mail: "",
      mdp: "",
      mailError: "",
      message: "",
    };
  },
  methods: {
    handleConnexionSubmit() {
      if (!this.mail || !this.mdp) {
        this.mailError = "Veuillez saisir une adresse mail et un mot de passe";
        return;
      }

      // Recherchez le mot de passe correspondant à l'adresse e-mail dans votre fichier JSON
      const user = passwords.find((user) => user.email === this.mail);

      if (user && user.password === this.mdp) {
        // Connexion réussie
        this.message = "Connexion réussie!";
        this.$router.push("/tuttifrutti");
      } else {
        // Mot de passe incorrect
        this.mailError = "Adresse mail ou mot de passe incorrect";
      }
    },
    handleInscriptionSubmit() {
      // Logique pour enregistrer un nouvel utilisateur dans le fichier JSON
      const newUser = {
        email: this.mail,
        password: this.mdp,
      };

      passwords.push(newUser);

      // Enregistrez les modifications dans le fichier JSON
      fs.writeFileSync("../../../../jsonFiles/registered.json", JSON.stringify(passwords));

      this.message = "Inscription réussie!";
      this.$router.push("/tuttifrutti");
    },
  },
};

</script>


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
  border-bottom: 1px solid rgb(255, 255, 255);
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
