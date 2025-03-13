import dotenv from "dotenv";
import express from "express";
import roteadorUsuario from "./routes/usuario.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);

app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: link_gitgub",
  });
});

app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});

router.get("/auth", verificarAutenticacao, async (req, res) => {
  console.log("Rota GET /auth solicitada");
  try {
    res.status(200).json({ user: `${req.userId}` });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});