import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

app.get("/feijao", (req, res) => {
  res.send("feijao preto!");
});

const PORT = process.env.PORT || 5111;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
