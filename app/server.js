require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const url = process.env.DB_URL;

app.use(cors());
app.use(express.json());

mongoose.connect(
  url,
  () => console.log("Connected to MongoDB"),
  (error) => console.log(error.message)
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
