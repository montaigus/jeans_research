import express from "express";
import request from "request";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

await app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function getToken(callback) {
  const clientServerOptions = {
    uri: "https://id.twitch.tv/oauth2/token",
    body: JSON.stringify({
      client_id: "dkli55f6f0gijol1iaiyrhn1b9n3em",
      client_secret: "ghpzra5yx9rxfs44xenr8nd6l9brdq",
      grant_type: "client_credentials",
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  request(clientServerOptions, function (error, response) {
    if (error) console.log(error);
    console.log(response.body);
    callback(response.body);
  });
}

let OAuthToken = "";
getToken((body) => {
  OAuthToken = JSON.parse(body).access_token;
  console.log("there");
  console.log(OAuthToken);
  return OAuthToken;
});

function getModo(callback) {
  const getOption = {
    uri: "https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=103762288",
    method: "GET",
    headers: {
      "Client-ID": "dkli55f6f0gijol1iaiyrhn1b9n3em",
      Authorization: "Bearer " + OAuthToken,
    },
  };
  request(getOption, function (error, response, body) {
    if (error) console.log(error);
    console.log("plop");
    console.log(response.statusCode);
    console.log(body);
  });
}

setTimeout(
  () =>
    getModo(() => {
      "pourt";
    }),
  5000
);
