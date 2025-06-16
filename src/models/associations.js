import Produto from "./produtoModel.js";
import Categoria from "./categoriaModel.js";
import ProductCategories from "./ProductCategoriesModel.js";

// Associação N:N
Produto.belongsToMany(Categoria, {
  through: ProductCategories,
  foreignKey: "produto_id",
  otherKey: "categoria_id",
  as: "categorias",
});
Categoria.belongsToMany(Produto, {
  through: ProductCategories,
  foreignKey: "categoria_id",
  otherKey: "produto_id",
  as: "produtos",
});
