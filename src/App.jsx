import { createRoot } from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ChatClient } from "@twurple/chat";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
      },
    },
  });

  const location = window.location;
  let code;

  const queryString = location.search;
  console.log(queryString);
  const params = new URLSearchParams(queryString);
  code = params.get("code");

  if (code) sendCodeToServer(code);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="appContainer">{<MainElement code={code} />}</div>
    </QueryClientProvider>
  );
};

const MainElement = (props) => {
  const code = props.code;

  return (
    <>
      {code ? (
        <p>merci !</p>
      ) : (
        <a
          href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=dkli55f6f0gijol1iaiyrhn1b9n3em&redirect_uri=http://localhost:5173&scope=chat:read"
          className="link_connect"
        >
          Authoriser l'application
        </a>
      )}
    </>
  );
};

main();

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

async function sendCodeToServer(code) {
  const serverUrl = "http://localhost:3000/authorized";

  // Données à envoyer dans la requête POST
  const data = { code };

  // Options de la requête
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(serverUrl, options);

    if (!response.ok) {
      throw new Error(`Erreur HTTP! Statut : ${response.status}`);
    }

    const responseData = await response.json();
    console.log("Réponse du serveur :", responseData);
  } catch (error) {
    console.error("Erreur lors de la requête POST :", error.message);
  }
}

const container = document.getElementById("page");
const root = createRoot(container);
root.render(<App />);
