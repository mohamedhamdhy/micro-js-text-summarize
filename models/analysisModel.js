"use strict";
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

class Analysis extends Model {}

Analysis.init(
  {
    user_id: { type: DataTypes.INTEGER, allowNull: false },
    type: { type: DataTypes.STRING(50), allowNull: false },
    input_text: { type: DataTypes.TEXT, allowNull: false },
    result_text: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    sequelize,
    modelName: "Analysis",
    tableName: "analyses",
    timestamps: false,
  },
);

module.exports = Analysis;
