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

async function main() {
  console.log("======================= start main =======================");
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
