import express from "express";
//import request from "request";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

await app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function main() {
  const appToken = await getAppToken();
  getValidate(appToken);
  const broadcaster_id = await getIdFromPseudo("montaigus", appToken);
  console.log("broadcasterId  = " + broadcaster_id);
  const userToken = await getUserToken();
  getValidate(userToken);
  getModo(broadcaster_id, userToken);
}

async function getAppToken() {
  const clientServerOptions = {
    body: JSON.stringify({
      client_id: "dkli55f6f0gijol1iaiyrhn1b9n3em",
      client_secret: "ghpzra5yx9rxfs44xenr8nd6l9brdq",
      grant_type: "client_credentials",
      scope: "moderation:read",
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const request = new Request(
    "https://id.twitch.tv/oauth2/token",
    clientServerOptions
  );
  const res = await fetch(request);
  const data = await res.json();

  return data.access_token;
}

async function getUserToken() {
  const clientServerOptions = {
    body: JSON.stringify({
      client_id: "dkli55f6f0gijol1iaiyrhn1b9n3em",
      client_secret: "ghpzra5yx9rxfs44xenr8nd6l9brdq",
      grant_type: "authorization_code",
      code: "oi02mycb4n034ismopytn0l5b1t0vl",
      redirect_uri: "http://localhost:3000",
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const request = new Request(
    "https://id.twitch.tv/oauth2/token",
    clientServerOptions
  );
  const res = await fetch(request);
  const data = await res.json();

  return data.access_token;
}

async function getIdFromPseudo(pseudo, token) {
  const clientServerOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      "Client-ID": "dkli55f6f0gijol1iaiyrhn1b9n3em",
    },
  };
  const request = new Request(
    `https://api.twitch.tv/helix/users?login=${pseudo}`,
    clientServerOptions
  );
  const res = await fetch(request);
  const jres = await res.json();
  console.log("getIdFromPseudo :");
  console.log(jres.data);
  return jres.data[0].id;
}

async function getModo(broadcaster_id, userToken) {
  const getOption = {
    method: "GET",
    headers: {
      "Client-ID": "dkli55f6f0gijol1iaiyrhn1b9n3em",
      Authorization: "Bearer " + userToken,
    },
  };
  const request = new Request(
    "https://api.twitch.tv/helix/moderation/moderators?broadcaster_id=" +
      broadcaster_id,
    getOption
  );

  const res = await fetch(request);
  const data = await res.json();
  console.log("getModo :");
  console.log(data);
}

async function getValidate(token) {
  const getOption = {
    uri: "https://id.twitch.tv/oauth2/validate",
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const request = new Request(
    "https://id.twitch.tv/oauth2/validate",
    getOption
  );

  const res = await fetch(request);
  const data = await res.json();

  console.log("Validate :");
  console.log(data);
}

main();
