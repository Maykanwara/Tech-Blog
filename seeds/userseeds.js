const { User } = require("../models");

const userData = [
  {
    name: "Computer",
    email: "Maykanwara1@gmail.com",
    password: "9999999"
  },
  {
    name: "Books",
    email: "Maykanwara2@gmail.com",
    password: "9999999"
  },
  {
    name: "Pens",
    email: "Maykanwara3@gmail.com",
    password: "9999999"
    },
  {
    name: "Coffee",
    email: "Maykanwara4@gmail.com",
    password: "9999999"
  },
  {
    name: "Phone",
    email: "Maykanwara5@gmail.com",
    password: "9999999"
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
