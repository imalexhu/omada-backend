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

app.put("/update-project/:projectId", (req, res) => {
  try {
    updateProject(req.params.projectId, req.body);
    res.sendStatus(200);
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.post("/create-project/:userId", (req, res) => {
  try {
    let data = createProject(req.params.userId, req.body);
    res.send({ status: 200, body: data });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.post("/join-project/:userId", (req, res) => {
  try {
    let data = joinProject(req.params.userId, req.body);
    res.send({ status: 200, body: data });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.get("/get-user/:userId", (req, res) => {
  try {
    let data = getUser(req.params.userId);
    res.send({ status: 200, body: data });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.put("/update-user/:userId", (req, res) => {
  try {
    updateUser(req.params.userId, req.body);
    res.sendStatus(200);
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.get("/get-projects/:userId", (req, res) => {
  try {
    let data = getProjects(req.params.userId);
    res.send({ status: 200, body: data });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
