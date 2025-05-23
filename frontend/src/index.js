import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CowRouter } from "./CowRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Creates the theme for MUI
const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#79412A" },
    secondary: { main: "#DAA400" },
    text: {
      primary: "#42271C",
      secondary: "#79412A",
    },
    background: { default: "#E8D3CA" },
  },
});

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CowRouter />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
