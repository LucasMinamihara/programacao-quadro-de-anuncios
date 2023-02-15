import express from "express";

const app = express();
const PORT = 5555;

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Página rodando em https://localhost:" + PORT);
});
