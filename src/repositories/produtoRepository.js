import Produto from "../models/produtoModel.js";
import Categoria from "../models/categoriaModel.js";

export async function findAllProdutos() {
  return await Produto.findAll({
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["id", "nome"],
    },
  });
}

export async function findProdutoById(id) {
  return await Produto.findByPk(id, {
    include: {
      model: Categoria,
      as: "categoria",
      attributes: ["id", "nome"],
    },
  });
}

export async function createProduto({
  marca,
  desconto,
  imagem,
  categoria_id,
  nome,
  preco,
  precoDesconto,
}) {
  return await Produto.create({
    marca,
    desconto,
    imagem,
    categoria_id,
    nome,
    preco,
    precoDesconto,
  });
}

export async function updateProduto(
  id,
  { nome, preco, estoque, categoria_id }
) {
  const produto = await Produto.findByPk(id);
  if (!produto) return null;

  await produto.update({ nome, preco, estoque, categoria_id });
  return produto;
}

export async function deleteProduto(id) {
  const produto = await Produto.findByPk(id);
  if (!produto) return null;

  await produto.destroy();
  return produto;
}
