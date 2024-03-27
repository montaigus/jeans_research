import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { ChatClient } from "@twurple/chat";
import WebSocket from "ws";

const app = express();
const port = process.env.PORT || 3000;
const wss = new WebSocket.Server({ app });

app.use(cors());
// Utilisation de body-parser pour analyser les corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = await app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const chatMsg = [];
const banMsg = [];
const MESSAGE_TYPE = {
  INITIAL_DATA: "INITIAL_DATA",
  SEND_MESSAGE: "SEND_MESSAGE",
  NEW_MESSAGE: "NEW_MESSAGE",
};

wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.send(
    JSON.stringify({
      type: MESSAGE_TYPE.INITIAL_DATA,
      payload: chatMsg,
    })
  );
});

ws.on("close", () => {
  console.log("client disconnected");
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
    chatMsg.push({
      channel: channel,
      id: msg.id,
      user: user,
      message: message,
    });
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(
          JSON.stringify({
            type: MESSAGE_TYPE.NEW_MESSAGE,
            payload: newMessage,
          })
        );
      }
    });
  });

  bot.onBan((channel, user, msg) => {
    console.log(
      `Cet utilisateur a été ban : ${user}, pour le message suivant : ${msg.isResponseTo}`
    );
  });

  bot.onMessageRemove((channel, messageId, msg) => {
    console.log(
      `Le message n°${messageId} a été modéré : ${msg.params.message}`
    );
    banMsg.push({ channel: channel, id: messageId });
  });
}

main();
