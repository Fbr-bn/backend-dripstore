import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwtConfig.js";

export default function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Acesso negado. Token não fornecido." });
  }

  jwt.verify(token, jwtConfig.secret, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado" });
    }

    req.user = decoded; //Dados do usuário que ficam disponíveis nas rotas protegidas.

    next();
  });
}
