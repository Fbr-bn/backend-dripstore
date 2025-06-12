import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Produto = sequelize.define(
  "Produto",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marca: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    desconto: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categorias",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    preco: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    precoDesconto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    tableName: "produtos",
    timestamps: false,
  }
);

// Associação com Categoria
// Produto.belongsTo(Categoria, { foreignKey: "categoria_id", as: "categoria" });

export default Produto;
