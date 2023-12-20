import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalProvider from "./context/GlobalProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </ChakraProvider>
  </React.StrictMode>
);

