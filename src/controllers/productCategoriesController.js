import * as productCategoriesRepository from "../repositories/productCategoriesRepository.js";

//Controlador que busca todos os productCategories
export async function getAllproductCategories(req, res) {
  try {
    const productCategories =
      await productCategoriesRepository.findAllproductCategories();
    return res.json(productCategories);
  } catch (error) {
    console.error("Erro ao buscar todos os productCategories:", error);
    return res
      .status(400)
      .json({ message: "Erro ao buscar productCategories." });
  }
}

//buscar productCategories por ID
export async function getproductCategoriesById(req, res) {
  const { id } = req.params;

  try {
    const productCategories =
      await productCategoriesRepository.findproductCategoriesById(id);

    if (!productCategories) {
      return res
        .status(404)
        .json({ message: "productCategories não encontrado" });
    }

    return res.status(200).json(productCategories);
  } catch (error) {
    console.error("Erro ao buscar o productCategories pelo id:", error);
    return res
      .status(400)
      .json({ message: "Erro ao buscar o productCategories por id" });
  }
}

//criar um novo productCategories
export async function createproductCategories(req, res) {
  const { produto_id, categoria_id } = req.body;

  try {
    const productCategories =
      await productCategoriesRepository.createproductCategories({
        produto_id,
        categoria_id,
      });

    return res.status(201).json({
      message: "productCategories criado com sucesso",
      productCategories,
    });
  } catch (error) {
    console.error("Erro ao criar o productCategories", error);
    return res
      .status(400)
      .json({ message: "Erro ao criar o productCategories" });
  }
}

//atualizar o productCategories
export async function updateproductCategories(req, res) {
  const { id } = req.params;
  const { produto_id, categoria_id } = req.body;

  try {
    const productCategories =
      await productCategoriesRepository.updateproductCategories(id, {
        produto_id,
        categoria_id,
      });

    if (!productCategories) {
      return res
        .status(404)
        .json({ message: "productCategories não encontrado" });
    }

    return res.status(200).json({
      message: "productCategories atualizado com sucesso",
      productCategories,
    });
  } catch (error) {
    console.error("Erro ao atualizar o productCategories", error);
    return res
      .status(400)
      .json({ message: "Erro ao atualizar o productCategories" });
  }
}

//deleta o productCategories
export async function deleteproductCategories(req, res) {
  const { id } = req.params;

  try {
    const productCategories =
      await productCategoriesRepository.deleteproductCategories(id);

    if (!productCategories) {
      return res
        .status(404)
        .json({ message: "productCategories não encontrado" });
    }

    return res
      .status(200)
      .json({ message: "productCategories deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar o productCategories", error);
    return res
      .status(400)
      .json({ message: "Erro ao deletar o productCategories" });
  }
}
