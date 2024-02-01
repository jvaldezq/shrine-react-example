import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import AppRouter from "@/router.tsx";
import { AppContextProvider } from "@/context/AppContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <AppContextProvider>
      <AppRouter />
    </AppContextProvider>
  </ChakraProvider>,
);
