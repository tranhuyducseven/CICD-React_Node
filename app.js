const express = require("express");

const app = express();
app.get("/names", (req, res) => {
  res.send("Huy Duc");
});

app.listen(5000, () => {
  console.log("HELLLLLLLLL, Im Duc");
});
