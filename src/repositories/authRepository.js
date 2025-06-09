import Usuario from "../models/usuarioModel.js";

export async function findUserByEmail(email) {
  return Usuario.findOne({ where: { email } });
}

export async function findUserById(id) {
  return Usuario.findByPk(id, { attributes: ["id", "nome", "email"] });
}

export async function createUser({ nome, email, senhaHash }) {
  return await Usuario.create({
    nome,
    email,
    senha: senhaHash,
  });
}
