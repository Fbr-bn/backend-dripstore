import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Categoria = sequelize.define(
  "Categoria",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    // Remova slug e use_in_menu se não existir no banco
    // slug: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // use_in_menu: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  },
  {
    tableName: "categorias",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  }
);

export default Categoria;
