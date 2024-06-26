import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ChatClient } from "@twurple/chat";
import fs from "fs";

const app = express();
const port = 3000;
const server = await app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(cors());
app.use(cors({ origin: "http://jeans-research-frontend.vercel.app" }));
// Utilisation de body-parser pour analyser les corps des requêtes
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let chatMsg = [];
let banMsg = [];

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.get("/chat", (req, res) => {
  res.json(chatMsg);
});

app.get("/removed", (req, res) => {
  res.json(banMsg);
});

let allBots = [];

async function connectChat(channel) {
  console.log("======================= start main =======================");
  const bot = new ChatClient({
    channels: [channel],
    readOnly: true,
  });

  await bot.connect();
  console.log(`connecté au chat de ${channel} !`);

  bot.onMessage((channel, user, message, msg) => {
    console.log(
      "\x1b[36m%s\x1b[0m",
      `${channel} : Nouveau message de ${user}: ${message}`
    );
    chatMsg.push({
      channel: channel,
      data: {
        id: msg.id,
        user: user,
        message: message,
      },
    });
  });

  bot.onBan((channel, user, msg) => {
    console.log(
      "\x1b[33m%s\x1b[0m",
      `Cet utilisateur a été ban : ${user}, pour le message suivant : ${msg}`
    );
  });

  bot.onMessageRemove((channel, messageId, msg) => {
    const removedMsg = chatMsg.find((c) => {
      c.data.id === messageId;
    });
    console.log("\x1b[31m%s\x1b[0m", "message banni " + removedMsg);
    banMsg.push({
      channel: channel,
      data: {
        id: messageId,
        message: removedMsg || "",
        date: new Date().toLocaleDateString(),
      },
    });
    if (msg.params) console.log("\x1b[32m%s\x1b[0m", msg.params);
  });

  return bot;
}

app.post("/connect", async (req, res) => {
  const channel = req.body.channel;
  console.log(req.body);
  const existingBot = allBots.find((bot) => bot.channel === channel);
  if (existingBot) {
    return res.send("already connected");
  }
  allBots.forEach((bot) => {
    bot.bot.quit();
    console.log(`Bot déconnecté du canal ${bot.channel}`);
  });

  try {
    // Connexion du nouveau bot
    const bot = await connectChat(channel);
    // Ajout du nouveau bot à allBots
    allBots.push({
      channel: channel,
      bot: bot,
    });
    console.log(`Bot connecté au canal ${channel}`);
    res.send("ok");
  } catch (error) {
    console.error("Erreur lors de la connexion du bot:", error);
    res
      .status(500)
      .send("Une erreur s'est produite lors de la connexion du bot");
  }
});

app.post("/disconnect", async (req, res) => {
  const channel = req.body.channel;
  const bot = allBots.find((bot) => bot.channel === channel);
  if (!bot) {
    return res.send("not connected");
  }
  bot.bot.quit();
  chatMsg = chatMsg.filter((msg) => msg.channel !== channel);
  allBots = allBots.filter((b) => b.channel !== channel);
  console.log(`Bot déconnecté du canal ${channel}`);

  res.send("ok");
});

// Route pour générer et télécharger le fichier JSON
app.get("/download-json", (req, res) => {
  // Données que vous souhaitez inclure dans le fichier JSON (par exemple, un tableau de données)
  const channel = req.query.channel;
  if (!channel) res.status = 500;

  if (chatMsg.length === 0) {
    console.log("pas de message a télécharger");
    res.status = 500;
  }

  const onlyMsgData = chatMsg.map((msg) => msg.data);
  const onlyBanData = banMsg.map((msg) => msg.data);

  const allData = {
    channel: channel,
    allChat: onlyMsgData,
    removedMsg: onlyBanData,
  };

  // Convertir les données en format JSON
  const jsonData = JSON.stringify(allData);

  // Écrire le contenu JSON dans un fichier temporaire
  fs.writeFile("./temp/temp.json", jsonData, (err) => {
    if (err) throw err;

    const date = new Date().toLocaleDateString().replaceAll("/", "_");
    const fileName = `msgData_${channel}_${date}.json`;

    // Envoyer le fichier au client en tant que téléchargement
    res.download("./temp/temp.json", fileName + ".json", (err) => {
      if (err) throw err;

      // Supprimer le fichier temporaire après le téléchargement
      fs.unlink("./temp/temp.json", (err) => {
        if (err) throw err;
        console.log("Fichier temporaire supprimé.");
      });
    });
  });
});
