import { createRoot } from "react-dom/client";  // Import createRoot from React DOM
import { StrictMode } from "react";  // Import StrictMode from React
import { BrowserRouter } from "react-router-dom";  // Import BrowserRouter for routing
import App from "./App";  // Import main App component
import "./index.css";  // Global CSS styles
import "./App.css";  // App-specific CSS styles

// Render the app using createRoot
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

