import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getChat, getRemoved } from "./getChatData";
import useWebSocket from "react-use-websocket";

const App = () => {
  const [channel, setChannel] = useState("");
  const [msg, setMsg] = useState("Pas de message");
  const [connected, setConnected] = useState(false);

  useQueryClient();

  // const WS_URL = "ws://localhost:3000";

  // useWebSocket(WS_URL, {
  //   onOpen: () => {
  //     console.log("WebSocket connection established.");
  //   },
  // });

  const queryKeyChat = ["chat"];
  const queryKeyRemoved = ["removed"];
  const queryResultChat = useQuery({
    queryKey: queryKeyChat,
    queryFn: getChat,
  });

  //pour ne rafraichir que quand on est focus
  let timeToMakeNewRequest = 0;
  // async function rafTimer(time) {
  //   if (timeToMakeNewRequest <= time) {
  //     queryClient.invalidateQueries(queryKey);
  //     timeToMakeNewRequest = time + 1000;
  //   }
  //   requestAnimationFrame(rafTimer);
  // }
  // requestAnimationFrame(rafTimer);

  // setTimeout(() => {
  //   queryClient.invalidateQueries(queryKey);
  // }, 1000);

  const queryResultRemoved = useQuery({
    queryKey: queryKeyRemoved,
    queryFn: getRemoved,
  });

  if (queryResultChat.isLoading) {
    return <div>Loading...</div>;
  }
  if (queryResultChat.isError) {
    return <div>Error: {queryResultChat.error.message}</div>;
  }

  function handleConnect() {
    fetch("http://localhost:3000/connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channel: channel }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        setConnected(true);
        return response.json();
      })
      .then((data) => {
        console.log(data); // Affiche la réponse du serveur dans la console
        // Faire quelque chose avec la réponse du serveur si nécessaire
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // Gérer l'erreur ici
      });
  }

  function handleDisconnect() {
    fetch("http://localhost:3000/disconnect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ channel: channel }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        setConnected(false);
        return response.json();
      })
      .then((data) => {
        console.log(data); // Affiche la réponse du serveur dans la console
        // Faire quelque chose avec la réponse du serveur si nécessaire
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // Gérer l'erreur ici
      });
  }

  function handleDownload() {
    fetch(`http://localhost:3000/download-json?channel=${channel}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de la requête");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Affiche la réponse du serveur dans la console
        // Faire quelque chose avec la réponse du serveur si nécessaire
      })
      .catch((error) => {
        console.error("Erreur:", error);
        // Gérer l'erreur ici
      });
  }

  return (
    <>
      <div className="header">Les recherches de Jean</div>
      <div className="appContainer">
        <input
          type="text"
          className="input_channel"
          placeholder="Chaine à suivre"
          value={channel}
          onChange={(e) => setChannel(e.target.value)}
        />
        {!connected && (
          <button className="button_connect" onClick={handleConnect}>
            Se connecter
          </button>
        )}
        {connected && (
          <button className="button_disconnect" onClick={handleDisconnect}>
            Se déconnecter
          </button>
        )}
        {connected && <button className="button_record">Enregistrer</button>}
        {connected && (
          <a
            className="button_download"
            href={`http://localhost:3000/download-json?channel=${channel}`}
          >
            Télécharger
          </a>
        )}
        {connected && <button className="button_clear">Nettoyer</button>}
        <div className="chat_holder">
          {!queryResultChat.data && (
            <div className="message">Rien à afficher</div>
          )}
          {queryResultChat.data &&
            queryResultChat.data
              // .filter((entrie) => {
              //   entrie.channel == "alexclick";
              // })
              .map((msg) => (
                <div className="message">{`${msg.data.user} : ${msg.data.message}`}</div>
              ))}
        </div>
        <div className="removed_holder">
          {!queryResultRemoved.data && (
            <div className="message">Rien à afficher</div>
          )}
          {queryResultRemoved.data &&
            queryResultRemoved.data
              // .filter((entrie) => {
              //   entrie.channel == "alexclick";
              // })
              .map((msg) => (
                <div
                  className="message"
                  id={msg.data.id}
                >{`${msg.data.user} : ${msg.data.message}`}</div>
              ))}
        </div>
      </div>
    </>
  );
};

export default App;
