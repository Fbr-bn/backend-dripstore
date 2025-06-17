import Usuario from "../models/usuarioModel.js";

// Buscar todos os usuários
export async function findAllUsuarios() {
  return await Usuario.findAll();
}

// Buscar usuário por ID
export async function findUsuarioById(id) {
  return await Usuario.findByPk(id);
}

// Criar novo usuário
export async function createUsuario(data) {
  return await Usuario.create(data);
}

// Atualizar usuário
export async function updateUsuario(id, data) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  await usuario.update(data);
  return usuario;
}

// Deletar usuário
export async function deleteUsuario(id) {
  const usuario = await Usuario.findByPk(id);
  if (!usuario) return null;
  await usuario.destroy();
  return usuario;
}
