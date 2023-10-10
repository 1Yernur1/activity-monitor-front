"use client";

import { ReactNode } from "react";
import { Header } from "./components/Header";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";

export default function AuthLayout({ children }: { children: ReactNode }) {
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
      {children}
    </ThemeProvider>
  );
}
