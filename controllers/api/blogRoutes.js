const router = require("express").Router();
const { Blog } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const blogData = await Blog.create({
        ...req.body, 
        user_id: req.session.user_id,
        
    });
    console.log(blogData);

    res.status(200).json(blogData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
