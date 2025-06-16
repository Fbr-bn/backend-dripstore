import ProductCategories from "../models/productCategoriesModel.js";

export async function findAllproductCategories() {
  return await ProductCategories.findAll();
}

export async function findproductCategoriesById(id) {
  return await ProductCategories.findByPk(id);
}

export async function createproductCategories({ produto_id, categoria_id }) {
  // O model espera product_id e category_id, então converta os nomes
  return await ProductCategories.create({
    produto_id,
    categoria_id,
  });
}

export async function updateproductCategories(
  id,
  { produto_id, categoria_id }
) {
  const productCategories = await ProductCategories.findByPk(id);
  if (!productCategories) return null;

  await productCategories.update({
    produto_id,
    categoria_id,
  });
  return productCategories;
}

export async function deleteproductCategories(id) {
  const productCategories = await ProductCategories.findByPk(id);
  if (!productCategories) return null;

  await productCategories.destroy();
  return productCategories;
}
