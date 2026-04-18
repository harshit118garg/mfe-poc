import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { bootstrap } from "./bootstrap";

const root = document.getElementById("root")!;

const renderApp = () => {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

window.addEventListener("error", (event) => {
  console.error("Global error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
  console.error("Unhandled promise rejection:", event.reason);
});

bootstrap().then(() => renderApp());
