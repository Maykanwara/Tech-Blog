const router = require("express").Router();
const { User, Blog, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("Hello");
  try {
    const blogData = await Blog.findAll({
      include: [{ model: User, attributes: ["name"], exclude: ["password"] }],
    });

    const blogs = blogData.map((blog) => blog.get({ plain: true }));

    res.render("homepage", {
      blogs: blogs,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("dashboard", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Blog }],
      include: [{ model: User }],
      attributes: ["display_name"],
    });

    const users = userData.get({ plain: true });
    console.log(users.blogs);
    res.render("profile", {
      users: users,
      blogs: users.blogs,
      logged_in: true,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/post/:id", async (req, res) => {
  try {
    const blogData = await Blog.findByPk(req.params.id, {
      include: [
        { model: User, attributes: ["display_name"], exclude: ["password"] },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["display_name"],
            },
          ],
        },
      ],
    });

    const blogs = blogData.get({ plain: true });
    console.log(blogs);
    res.render("blog", {
      blogs: blogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
