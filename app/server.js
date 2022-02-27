require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const session = require("express-session");

const { createUser, loginUser, getUser } = require('./routes/userRoutes')
const { createProject, getProjects, addUser } = require('./routes/projectRoutes')

const port = process.env.PORT;
const url = process.env.DB_URL;

app.use(express.json());
app.use(cors());
// Use the session middleware
app.use(session({ secret: "keyboard cat", cookie: { maxAge: 600000 } }));

mongoose.connect(
  url,
  () => console.log("Connected to MongoDB"),
  (error) => console.log(error.message)
);

// login and give session
app.post("/login", function (req, res, next) {
  if (req.session.email) {
    res.setHeader("Content-Type", "text/html");
    res.write("<p>expires in: " + req.session.cookie.maxAge / 1000 + "s</p>");
    res.end();
  } else {
    console.log("gave session");
    if (loginUser(req.body)) {
      req.session.email = req.body.email;
    }
    res.end();
  }
});

app.post("/create-project/:userId", async (req, res) => {
  try {
    createProject(req.body);
    res.send({ status: 200 });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.post('/add-user', async (req, res) => {
  try {
    
    addUser(req.body);
    res.send({ status: 200 });
  } catch {
    res.send({ status: 500, message: 'Internal Server Error' });
  }
});

// stubbed for demo
app.get('/get-project-stub', async (req, res) => {
  try {
    return res.send({ status: 200, data: await getProjects('621ad8a6012addbcfe15e578') });
  } catch {
    res.send({ status: 500, message: 'Internal Server Error' });
  }
});


app.get('/get-project/:pid', async (req, res) => {
  try {
    return res.send({ status: 200, data: await getProjects(req.params.pid) });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.post("/create-user", async (req, res) => {
  try {
    createUser(req.body);
    res.sendStatus(200);
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.get("/get-user/:email", async (req, res) => {
  try {
    return res.send({ status: 200, data: await getUser(req.params.email) });
  } catch {
    res.send({ status: 500, message: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
