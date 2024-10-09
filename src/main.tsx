import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import HomePage from "./Home/HomePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
