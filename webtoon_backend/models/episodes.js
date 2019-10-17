'use strict';
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define('episodes', {
    title: DataTypes.STRING,
    cover_image: DataTypes.STRING,
    webtoon_id: DataTypes.INTEGER
  }, {});
  episodes.associate = function(models) {
    // associations can be defined here
    episodes.belongsTo(models.webtoons,{
      as:'WebtoonData',
      foreignKey:'webtoon_id',
    })
  };
  return episodes;
};