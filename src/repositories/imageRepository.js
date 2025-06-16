import Image from "../models/imageModel.js";

export async function findAllImages() {
  return await Image.findAll({
    include: {
      model: Image,
      as: "image",
      attributes: [produto_id, path],
    },
  });
}

export async function findImageById(id) {
  return await Image.findByPk(id, {
    include: {
      model: Image,
      as: "image",
      attributes: [produto_id, path],
    },
  });
}

export async function createImage({ produto_id, path }) {
  return await Image.create({ produto_id, path });
}

export async function updateImage(id, { produto_id, path }) {
  const image = await Image.findByPk(id);
  if (!image) return null;

  await image.update({ produto_id, path });
  return image;
}

export async function deleteImage(id) {
  const image = await Image.findByPk(id);
  if (!image) return null;

  await image.destroy();
  return image;
}
