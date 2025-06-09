import express from "express";
import router from "./routes/router.js";
import sequelize from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import corsConfig from "./config/corsConfig.js";

const app = express();

//diz para a API que vamos manipular JSON
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));

//Rotas
app.use("/api", router);

//Sincronizar as tabelas do banco
sequelize
  .sync()
  .then(() => console.log("Banco de dados sincronizado."))
  .catch((error) =>
    console.error("Erro ao sincronizar o banco de dados:", error)
  );

export default app;
