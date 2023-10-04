const express = require("express");
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Message Board" });
});

router.post("/new", function (req, res, next) {
  res.render("form", { title: "Message Board" });
});

module.exports = router;
