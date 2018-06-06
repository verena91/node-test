"use strict";

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("post", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.TEXT
  },
  {
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'post'
  }
);

  return Post;
};
