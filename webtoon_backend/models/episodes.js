'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER,
    created_by: DataTypes.INTEGER,

  }, {});
  episodes.associate = function(models) {
    episodes.belongsTo(models.webtoons,{
      as:'WebtoonData',
      foreignKey:'webtoon_id',
    }),
    episodes.belongsTo(models.users,{
      as:'UserData',
      foreignKey:'created_by',
    })
  };
  return episodes;
};