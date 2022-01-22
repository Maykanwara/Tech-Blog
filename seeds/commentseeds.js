const { Comment, Blog } = require("../models");

const commentData = [
  {
    body: "Computer",
  },
  {
    body: "Books",
  },
  {
    body: "Pens",
  },
  {
    body: "Coffee",
  },
  {
    body: "Phone",
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
