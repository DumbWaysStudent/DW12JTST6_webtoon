'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode_details = sequelize.define('episode_details', {
    page: DataTypes.INTEGER,
    image: DataTypes.STRING,
    episode_id: DataTypes.INTEGER,
    webtoon_id: DataTypes.INTEGER
  }, {});
  episode_details.associate = function(models) {
    episode_details.belongsTo(models.episodes,{
      as:'EpisodeData',
      foreignKey:'episode_id',
    }),
    episode_details.belongsTo(models.webtoons,{
      as:'WebtoonData',
      foreignKey:'webtoon_id',
    })
  };
  return episode_details;
};