const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function() {
  console.log("listening on 3000");
});

app.get("/todo", function(req, res) {
  res.send({ todo: "this is a todo" });
});
