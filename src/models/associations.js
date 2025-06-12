import Produto from "./produtoModel.js";
import Categoria from "./categoriaModel.js";
import ProductCategories from "./ProductCategoriesModel.js";

// Associação N:N
Produto.belongsToMany(Categoria, {
  through: ProductCategories,
  foreignKey: "product_id",
  otherKey: "category_id",
  as: "categorias",
});
Categoria.belongsToMany(Produto, {
  through: ProductCategories,
  foreignKey: "category_id",
  otherKey: "product_id",
  as: "produtos",
});