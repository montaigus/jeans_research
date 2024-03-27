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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="appContainer">{<MainElement />}</div>
    </QueryClientProvider>
  );
};

const MainElement = (props) => {
  return <></>;
};

main();

const container = document.getElementById("page");
const root = createRoot(container);
root.render(<App />);
