require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const session = require('express-session')

const { createUser } = require('./routes/userRoutes')
const { createProject, joinProject } = require('./routes/projectRoutes')

const port = process.env.PORT;
const url = process.env.DB_URL;

app.use(express.json());
app.use(cors());
// Use the session middleware
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 } }))


mongoose.connect(
  url,
  () => console.log('Connected to MongoDB'),
  (error) => console.log(error.message)
);

function loginUser() {
  return true;
}
// login and give session
app.post('/login', function (req, res, next) {
  if (req.session.email) {
    res.setHeader('Content-Type', 'text/html')
    res.write('<p>expires in: ' + (req.session.cookie.maxAge / 1000) + 's</p>')
    res.end();
  } else {
    if (loginUser(req.body)) {
      req.session.email = req.body.email;
    } 
    res.end();
  }
})

app.post('/create-project/:userId', async (req, res) => {
  try {
    let data = createProject(req.params.userId, req.body);
    res.send({ status: 200 });
  } catch {
    res.send({ status: 500, message: 'Internal Server Error' });
  }
});

app.post('/join-project/:userId', (req, res) => {
  try {
    let data = joinProject(req.params.userId, req.body);
    res.send({ status: 200 });
  } catch {
    res.send({ status: 500, message: 'Internal Server Error' });
  }
});

app.post('/create-user', async (req, res) => {
  try {
    createUser(req.body);
    res.sendStatus(200);
  } catch {
    res.send({ status: 500, message: 'Internal Server Error' });
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});