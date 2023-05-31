import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { queryClient } from "./queries/index.ts";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import { isDev, isServer } from "./utils/common.ts";

if (isDev) {
  /**
   * @see https://mswjs.io/docs/getting-started/integrate/node#setup
   * TODO: setup Jest
   */
  if (isServer) {
    (async () => {
      const { server } = await import("@mocks/server");
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import("@mocks/browser");
      worker.start();
    })();
  }
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />

      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </StrictMode>
);
