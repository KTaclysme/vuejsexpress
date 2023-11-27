const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 8080;

// Middleware pour prendre en charge le format JSON
app.use(express.json());

// Se connecter à la base de données
const uri = "mongodb://127.0.0.1:27018/prod";
const client = new MongoClient(uri);

// Exécuter la connexion à la base de données au démarrage de l'application
async function run() {
  try {
    await client.connect();
    console.log("Connexion à MongoDB réussie");
  } catch (error) {
    console.error("Erreur de connexion à MongoDB:", error.message);
  }
}

// Démarrer le serveur après la connexion à la base de données
run().then(() => {
  app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
  });
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})