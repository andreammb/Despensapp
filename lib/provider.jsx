import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./micro/src/global";
import { theme } from "./theme";
import { createMicroTheme, StylesMicro } from "./micro/src/micro";

export function ThemeMicroProvider({ children }) {
  const currentTheme = createMicroTheme(theme);
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <StylesMicro />
      {children}
    </ThemeProvider>
  );
}