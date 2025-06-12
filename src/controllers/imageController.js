import * as imageRepository from "../repositories/imageRepository.js";

//Controlador que busca todos os images
export async function getAllImages(req, res) {
  try {
    const images = await imageRepository.findAllImages();
    return res.json(images);
  } catch (error) {
    console.error("Erro ao buscar todos os images:", error);
    return res.status(400).json({ message: "Erro ao buscar images." });
  }
}

//buscar image por ID
export async function getImageById(req, res) {
  const { id } = req.params;

  try {
    const image = await imageRepository.findImageById(id);

    if (!image) {
      return res.status(404).json({ message: "Image não encontrado" });
    }

    return res.status(200).json(image);
  } catch (error) {
    console.error("Erro ao buscar o image pelo id:", error);
    return res.status(400).json({ message: "Erro ao buscar o image por id" });
  }
}

//criar um novo image
export async function createImage(req, res) {
  const { nome, email, telefone } = req.body;

  try {
    const image = await imageRepository.createImage(nome, email, telefone);

    return res.status(201).json({
      message: "Image criado com sucesso",
      image,
    });
  } catch (error) {
    console.error("Erro ao criar o image", error);
    return res.status(400).json({ message: "Erro ao criar o image" });
  }
}

//atualizar o image
export async function updateImage(req, res) {
  const { id } = req.params;
  const { nome, email, telefone } = req.body;

  try {
    const image = await imageRepository.updateImage(id, {
      nome,
      email,
      telefone,
    });

    if (!image) {
      return res.status(404).json({ message: "Image não encontrado" });
    }

    return res.status(200).json({
      message: "Image atualizado com sucesso",
      image,
    });
  } catch (error) {
    console.error("Erro ao atualizar o image", error);
    return res.status(400).json({ message: "Erro ao atualizar o image" });
  }
}

//deleta o image
export async function deleteImage(req, res) {
  const { id } = req.params;

  try {
    const image = await imageRepository.deleteImage(id);

    if (!image) {
      return res.status(404).json({ message: "Image não encontrado" });
    }

    return res.status(200).json({ message: "Image deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar o image", error);
    return res.status(400).json({ message: "Erro ao deletar o image" });
  }
}
