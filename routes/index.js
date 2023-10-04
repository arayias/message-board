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

router.get("/", function (req, res, next) {
  const passedMessages = [...messages].map((entry) => {
    typeof entry.added === "object"
      ? (entry.added = entry.added.toLocaleTimeString())
      : (entry.added = entry.added);
    return entry;
  });
  res.render("index", { title: "Message Board", messages: passedMessages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Message Board" });
});

router.post("/new", function (req, res, next) {
  const { user, text } = req.body;
  messages.push({
    text,
    user,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
