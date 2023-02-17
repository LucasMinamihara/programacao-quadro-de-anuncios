import express from "express";
import route from "./routes/logarUsuario.route.js";
import conectarBancoDeDados from "./database/bancoDeDados.js";

const app = express();
const PORT = 5555;

// Conectar banco de dados
conectarBancoDeDados();

app.use(express.json());

// Rotas para logar
app.use("/user", route);

app.listen(PORT, () => {
  console.log("Página rodando em https://localhost:" + PORT);
});
