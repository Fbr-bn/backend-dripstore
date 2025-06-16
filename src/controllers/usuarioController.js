import * as usuarioRepository from "../repositories/usuarioRepository.js";
import bcrypt from "bcrypt";

// Buscar todos os usuarios
export async function getAllUsuarios(req, res) {
  try {
    const usuarios = await usuarioRepository.findAllUsuarios();
    return res.json(usuarios);
  } catch (error) {
    console.error("Erro ao buscar usuarios:", error);
    return res.status(500).json({ message: "Erro ao buscar usuarios." });
  }
}

// Buscar usuario por ID
export async function getUsuarioById(req, res) {
  const { id } = req.params;
  try {
    const usuario = await usuarioRepository.findUsuarioById(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario não encontrado." });
    }
    return res.json(usuario);
  } catch (error) {
    console.error("Erro ao buscar usuario:", error);
    return res.status(500).json({ message: "Erro ao buscar usuario." });
  }
}

// Criar novo usuario
export async function createUsuario(req, res) {
  const {
    nome,
    cpf,
    email,
    celular,
    endereco,
    bairro,
    cidade,
    cep,
    complemento,
    receber_ofertas,
    senha,
  } = req.body;

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const usuario = await usuarioRepository.createUsuario({
      nome,
      cpf,
      email,
      celular,
      endereco,
      bairro,
      cidade,
      cep,
      complemento,
      receber_ofertas,
      senha: senhaHash,
    });
    return res.status(201).json(usuario);
  } catch (error) {
    console.error("Erro ao criar usuario:", error);
    return res.status(400).json({ message: "Erro ao criar usuario." });
  }
}

// Atualizar usuario
export async function updateUsuario(req, res) {
  const { id } = req.params;
  // Pegue os campos corretos do modelo de usuário!
  const {
    nome,
    cpf,
    email,
    celular,
    endereco,
    bairro,
    cidade,
    cep,
    complemento,
    receber_ofertas,
    senha,
  } = req.body;

  try {
    const usuario = await usuarioRepository.updateUsuario(id, {
      nome,
      cpf,
      email,
      celular,
      endereco,
      bairro,
      cidade,
      cep,
      complemento,
      receber_ofertas,
      senha,
    });

    if (!usuario) {
      return res.status(404).json({ message: "Usuario não encontrado." });
    }

    return res.json(usuario);
  } catch (error) {
    console.error("Erro ao atualizar usuario:", error);
    return res.status(400).json({ message: "Erro ao atualizar usuario." });
  }
}

// Deletar usuario
export async function deleteUsuario(req, res) {
  const { id } = req.params;
  try {
    const usuario = await usuarioRepository.deleteUsuario(id);
    if (!usuario) {
      return res.status(404).json({ message: "Usuario não encontrado." });
    }
    return res.json({ message: "Usuario deletado com sucesso!" });
  } catch (error) {
    console.error("Erro ao deletar usuario:", error);
    return res.status(500).json({ message: "Erro ao deletar usuario." });
  }
}
