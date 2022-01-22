const { Blog } = require("../models");

const BlogData = [
  {
    post_title: "Computer",
    post_content: "Post content",
  },

  {
    post_title: "Books",
    post_content: "Post content",
  },

  {
    post_title: "Pens",
    post_content: "Post content",
  },

  {
    post_title: "Coffee",
    post_content: "Post content",
  },

  {
    post_title: "Phone",
    post_content: "Post content",
  },
];

const seedBlog = () => Blog.bulkCreate(BlogData);

module.exports = seedBlog;
