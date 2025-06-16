import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ProductImage = sequelize.define(
  "ProductImage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    produto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "produtos",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "product_images",
    timestamps: false,
  }
);

//Como associar o modelo de Produto
// if (sequelize.models.Product) {
//   ProductImage.belongsTo(sequelize.models.Product, {
//     foreignKey: 'product_id',
//     as: 'product',
//   });
// }

export default ProductImage;
