'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episode_details', [
      {
        page: 1,
        image:'https://via.placeholder.com/1080',
        episode_id: 1,
        webtoon_id: 1
      },
      {
        page: 2,
        image:'https://via.placeholder.com/1080',
        episode_id: 2,
        webtoon_id: 2
      },
      {
        page: 3,
        image:'https://via.placeholder.com/1080',
        episode_id: 1,
        webtoon_id: 1
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episode_details', null, {});    

  }
};
