'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [
      {
        username: 'user1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user5',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user6',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user7',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user8',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user9',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'user10',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
