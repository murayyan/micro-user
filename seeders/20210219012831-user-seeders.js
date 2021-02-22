"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Wanda Maximoff",
          profession: "superhero",
          role: "admin",
          email: "wanda@avengers.com",
          password: await bcrypt.hash("vision123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: "Vision",
          profession: "superhero",
          role: "student",
          email: "vision@avengers.com",
          password: await bcrypt.hash("wanda123", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
