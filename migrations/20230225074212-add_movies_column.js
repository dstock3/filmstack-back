'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'movies', {
      type: DataTypes.ARRAY(DataTypes.JSON),
      allowNull: false,
      defaultValue: JSON.stringify([]),
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'movies');
  }
};
