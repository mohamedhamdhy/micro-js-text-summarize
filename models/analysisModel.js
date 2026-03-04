"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./userModel");

class Analysis extends Model {}

Analysis.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    type: { type: DataTypes.STRING(50), allowNull: false },
    input_text: { type: DataTypes.TEXT, allowNull: false },
    result_text: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    modelName: "Analysis",
    tableName: "analyses",
    timestamps: true,
  },
);

Analysis.belongsTo(User, { foreignKey: "user_id", as: "user" });
User.hasMany(Analysis, { foreignKey: "user_id", as: "analyses" });

module.exports = Analysis;
