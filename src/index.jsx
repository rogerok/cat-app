import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyles";
import { theme } from "./theme";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
