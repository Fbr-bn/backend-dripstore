const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const ProductOption = sequelize.define(
    "ProductOption",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Products",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shape: {
        type: DataTypes.ENUM("square", "circle"),
        allowNull: false,
        defaultValue: "square",
      },
      radius: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      type: {
        type: DataTypes.ENUM("text", "color"),
        allowNull: false,
        defaultValue: "text",
      },
      values: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "product_options",
      timestamps: false,
    }
  );

  // Como associar
  // if (sequelize.models.Product) {
  //   ProductOption.belongsTo(sequelize.models.Product, {
  //     foreignKey: 'product_id',
  //     as: 'product',
  //   });
  // }

  return ProductOption;
};
