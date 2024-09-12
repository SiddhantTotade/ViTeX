import App from "./App.tsx";
import { StrictMode } from "react";

import { Provider } from "react-redux";
import { store } from "@/redux/store.ts";
import { SnackbarProvider } from "notistack";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  </StrictMode>
);
