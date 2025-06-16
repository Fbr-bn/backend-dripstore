import * as imageRepository from "../repositories/imageRepository.js";

//Controlador que busca todos os images
export async function getAllImages(req, res) {
  try {
    const images = await imageRepository.findAllImages();
    return res.json(images);
  } catch (error) {
    console.error("Erro ao buscar todas as imagens:", error);
    return res.status(400).json({ message: "Erro ao buscar imagens." });
  }
}

//buscar image por ID
export async function getImageById(req, res) {
  const { id } = req.params;

  try {
    const image = await imageRepository.findImageById(id);

    if (!image) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    return res.status(200).json(image);
  } catch (error) {
    console.error("Erro ao buscar a imagem pelo id:", error);
    return res.status(400).json({ message: "Erro ao buscar a imagem por id" });
  }
}

//criar um novo image
export async function createImage(req, res) {
  const { produto_id, path } = req.body;

  try {
    const image = await imageRepository.createImage({ produto_id, path }); // Corrigido aqui

    return res.status(201).json({
      message: "Imagem criado com sucesso",
      image,
    });
  } catch (error) {
    console.error("Erro ao criar a imagem", error);
    return res.status(400).json({ message: "Erro ao criar a imagem" });
  }
}

//atualizar o image
export async function updateImage(req, res) {
  const { id } = req.params;
  const { produto_id, path } = req.body;

  try {
    const image = await imageRepository.updateImage(id, {
      produto_id,
      path,
    });

    if (!image) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    return res.status(200).json({
      message: "Imagem atualizada com sucesso",
      image,
    });
  } catch (error) {
    console.error("Erro ao atualizar a imagem", error);
    return res.status(400).json({ message: "Erro ao atualizar a imagem" });
  }
}

//deleta o image
export async function deleteImage(req, res) {
  const { id } = req.params;

  try {
    const image = await imageRepository.deleteImage(id);

    if (!image) {
      return res.status(404).json({ message: "Imagem não encontrada" });
    }

    return res.status(200).json({ message: "Imagem deletada com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar a imagem", error);
    return res.status(400).json({ message: "Erro ao deletar a imagem" });
  }
}
