import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const client_secret = "42hdibb7abrbtihi5v3vcpcylosirn";
const client_id = "dkli55f6f0gijol1iaiyrhn1b9n3em";

app.use(cors());
// Utilisation de body-parser pour analyser les corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/authorized", (req, res) => {
  const authorizationCode = req.body.code;
  main(authorizationCode);
  res.send("c'est fait");
});

await app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

async function main(authorizationCode) {
  console.log("======================= start main =======================");
  const appToken = await getAppToken();
  getValidate(appToken);
  const broadcaster_id = await getIdFromPseudo("montaigus", appToken);
  console.log("broadcasterId  = " + broadcaster_id);
  const userToken = await getUserToken(authorizationCode);
  await getValidate(userToken);
  await getModo(broadcaster_id, userToken);
  console.log("======================== end main ========================");
}

async function getAppToken() {
  const clientServerOptions = {
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      grant_type: "client_credentials",
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

async function getUserToken(authorizationCode) {
  const clientServerOptions = {
    body: JSON.stringify({
      client_id: client_id,
      client_secret: client_secret,
      grant_type: "authorization_code",
      code: authorizationCode,
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
      "Client-ID": client_id,
    },
  };
  const request = new Request(
    `https://api.twitch.tv/helix/users?login=${pseudo}`,
    clientServerOptions
  );
  const res = await fetch(request);
  const jres = await res.json();
  return jres.data[0].id;
}

async function getModo(broadcaster_id, userToken) {
  const getOption = {
    method: "GET",
    headers: {
      "Client-ID": client_id,
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
