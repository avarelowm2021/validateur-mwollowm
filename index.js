import Gun from "gun";
import express from "express";

const app = express();

// Sert les fichiers GUN (librairie, /gun endpoint)
app.use(Gun.serve);

// Petit check pour voir si ton serveur tourne
app.get("/", (req, res) => {
  res.send("✅ Serveur GUN en ligne !");
});

// Démarrage serveur
const PORT = process.env.PORT || 8765;
const server = app.listen(PORT, () => {
  console.log(`🚀 Serveur GUN lancé sur http://localhost:${PORT}/gun`);
});

// Création du nœud GUN
Gun({
  web: server,
  radisk: true,   // stockage disque (utile si Render laisse)
  localStorage: false
});
