'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define('webtoons', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    isFavourite: DataTypes.BOOLEAN,
    image: DataTypes.STRING,
    created_by: DataTypes.INTEGER
  }, {});
  webtoons.associate = function(models) {
    webtoons.belongsTo(models.users,{
      as:'UserData',
      foreignKey:'created_by',
    })
  };
  return webtoons;
};