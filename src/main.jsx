import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerLicense } from "@syncfusion/ej2-base";
import { ContextProvider } from "./contexts/ContextProvider.jsx";
import App from "./App.jsx";
import "./index.css";

registerLicense("Ngo9BigBOggjHTQxAR8/V1JEaF5cXmRCeUx0THxbf1x1ZFdMYF5bQX5PIiBoS35Rc0VlWn9edHZRRWdeV0BwVEFd");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
