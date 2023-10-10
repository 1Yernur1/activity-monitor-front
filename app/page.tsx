"use client";
import { ThemeProvider } from "@emotion/react";
import { Header } from "./components/Header";
import createTheme from "@mui/material/styles/createTheme";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}
