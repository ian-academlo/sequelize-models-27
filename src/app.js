import express from "express";
import db from "./utils/database.js";
import User from "./models/users.model.js";

User;

const PORT = 8000;
// probar conexión con la base de datos
db.authenticate()
  .then(() => {
    console.log("Conexión correcta");
  })
  .catch((error) => console.log(error));

db.sync()
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

//
const app = express();

// health check
app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
