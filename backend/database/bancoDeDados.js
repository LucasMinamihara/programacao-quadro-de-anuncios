import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";

function conectarBancoDeDados() {
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("banco de dados connectado com sucesso!");
  });
}

export default conectarBancoDeDados;
