'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('episodes', [
      {
        title: "ep.1",
        cover_image:'https://via.placeholder.com/1080',
        webtoon_id: 1
      },
      {
        title: "ep.2",
        cover_image:'https://via.placeholder.com/1080',
        webtoon_id: 2
      },
      {
        title: "ep.3",
        cover_image:'https://via.placeholder.com/1080',
        webtoon_id: 1
      },

    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('episodes', null, {});    
    
  }
};
