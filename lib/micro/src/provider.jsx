import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { createMicroTheme, StylesMicro } from "./micro";

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