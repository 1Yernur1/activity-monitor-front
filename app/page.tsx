"use client";
import createTheme from "@mui/material/styles/createTheme";
import { ThemeProvider } from "@emotion/react";

import { Header } from "./components/Header";
import { TaskCardsGrid } from "./components/TaskCardsGrid";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex justify-center overflow-auto">
          <TaskCardsGrid />
        </div>
      </div>
    </ThemeProvider>
  );
}
