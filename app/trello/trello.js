const fetch = require("node-fetch");
require("dotenv").config();

const apiKey = process.env.TRELLO_KEY;
const apiToken = process.env.TRELLO_TOKEN;

function inviteTrello(boardId, email) {
  fetch(
    `https://api.trello.com/1/boards/${boardId}/members?key=${apiKey}&token=${apiToken}&email=${email}`,
    {
      method: "PUT",
    }
  )
    .then((response) => {
      console.log(`Response: ${response.status} ${response.statusText}`);
      return response.text();
    })
    .then((text) => console.log(text))
    .catch((err) => console.error(err));
}

module.exports = {
  inviteTrello,
};
