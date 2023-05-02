import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import TwitterPost from "./pages/twitter-post";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
