import App from "./App";
import ReactDOM from "react-dom/client";
import { MenuProvider } from "./lib/context/MenuContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MenuProvider>
    <App />
  </MenuProvider>
);
