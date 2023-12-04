const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express());

app.get("/", (req, res) => {
  res.send("Welcome to Ema-John-Simple-With-Router server");
});

app.listen(port, () => {
  console.log(`Ema-John-Simple-With-Router server is running on port ${port}`);
});
