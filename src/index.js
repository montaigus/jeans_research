import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ChatClient } from "@twurple/chat";

const app = express();
const port = 3000;
//pour récupérer clientId et clientSecret
dotenv.config({ path: "config.env" });

const client_secret = process.env.CLIENT_SECRET;
const client_id = process.env.CLIENT_ID;

app.use(cors());
// Utilisation de body-parser pour analyser les corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = await app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//?ça servait pour l'OAtuh client : authorisation du broadcaster. Pour l'instant, c'est inutile.
// app.post("/authorized", (req, res) => {
//   const authorizationCode = req.body.code;
//   main(authorizationCode);
//   res.send("c'est fait");
// });

//?ça c'est l'ancienne façon, on va essayer autre chose.
// async function main(authorizationCode) {
//   console.log("======================= start main =======================");
//   const appToken = await getAppToken();
//   getValidate(appToken);
//   const broadcaster_id = await getIdFromPseudo("montaigus", appToken);
//   console.log("broadcasterId  = " + broadcaster_id);
//   const userToken = await getUserToken(authorizationCode);
//   await getValidate(userToken);
//   //await getModo(broadcaster_id, userToken);
//   console.log("début du websocket");

//   // Connexion au chat Twitch via WebSocket
//   const chatWebSocketUrl = `wss://irc-ws.chat.twitch.tv`;
//   const ws = new WebSocket(chatWebSocketUrl);

//   ws.on("open", () => {
//     console.log("Connected to Twitch Chat WebSocket");
//     ws.send(`PASS oauth:${userToken}`);
//     ws.send(`NICK blabla`); // Utilisez un nom d'utilisateur anonyme
//     ws.send(`JOIN #${broadcaster_id}`); // Joindre le canal spécifique
//   });

//   ws.on("message", (data) => {
//     console.log(`Received message from Twitch Chat WebSocket: ${data}`);
//     // Traitement des messages du chat ici
//   });

//   console.log("======================== end main ========================");
// }

async function main() {
  console.log("======================= start main =======================");
  // const authProvider = new Anonym();
  const bot = new ChatClient({
    channels: ["Tonton"],
    readOnly: true,
  });
  await bot.connect();
  console.log("connecté au chat de Tonton");
  bot.onMessage((channel, user, message, msg) => {
    console.log(`msg id : ${msg.id} user : ${user}: ${message}`);
  });

  bot.onBan((channel, user, msg) => {
    console.log(
      `Cet utilisateur a été ban : ${user}, pour le message suivant : ${msg.isResponseTo}`
    );
  });

  bot.onMessageRemove((channel, user, msg) => {
    console.log(`Le message de ${user} a été modéré : ${msg.params.message}`);
  });
}

main();
