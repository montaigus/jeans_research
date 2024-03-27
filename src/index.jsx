import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChatMessagesProvider } from "./ChatMessagesProvider";
import App from "./App";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatMessagesProvider>
        <App />
      </ChatMessagesProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
