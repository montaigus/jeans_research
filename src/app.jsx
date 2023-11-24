import { createRoot } from "react-dom/client";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
  useLoaderData,
  useLocation,
} from "react-router-dom";
import { Querystring } from "request/lib/querystring";

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
          href="https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=dkli55f6f0gijol1iaiyrhn1b9n3em&redirect_uri=http://localhost:5173&scope=moderation:read"
          className="link_connect"
        >
          Authoriser l'application
        </a>
      )}
    </>
  );
};

function sendCodeToServer(code) {
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

  // Effectuer la requête
  fetch(serverUrl, options)
    .then((response) => response.json())
    .then((data) => {
      // Traitez la réponse du serveur si nécessaire
      console.log("Réponse du serveur :", data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête POST :", error);
    });
}

const container = document.getElementById("page");
const root = createRoot(container);
root.render(<App />);