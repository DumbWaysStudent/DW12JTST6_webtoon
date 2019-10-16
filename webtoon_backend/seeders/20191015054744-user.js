'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'admin@gmail.com',
        password: 'rahasia',
        username: 'Ademin'
      },
      {
        email: 'jhon.doe@gmail.com',
        password: 'secret',
        username: 'Jhon Doe'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
