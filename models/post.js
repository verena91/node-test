"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT
  },
  {
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'post'
  }
);

  return Post;
};
