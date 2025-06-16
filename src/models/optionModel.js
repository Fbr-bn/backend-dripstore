import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Produto from "./produtoModel.js";

const ProductOption = sequelize.define(
  "ProductOption",
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("text", "color"),
      allowNull: false,
      defaultValue: "text",
    },
  },
  {
    tableName: "product_options",
    timestamps: false,
  }
);

// Associação com Produto
ProductOption.belongsTo(Produto, {
  foreignKey: "produto_id",
  as: "produto",
});

export default ProductOption;

// { "product_id": 3, "title": "Tamanho", "values": "39, 40, 41, 42", "type": "text" }

// { "product_id": 3, "title": "Cores disponíveis", "values": "#00000, #00000, #00000", "type": "color" }
