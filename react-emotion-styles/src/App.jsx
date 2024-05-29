import { ThemeProvider } from "@emotion/react";
import { themeDark, themeLight } from "./styles/theme.js";

import GlobalStyles from "./styles/globalStyles.jsx";

import { useState } from "react";
import Button from "./components/Button.jsx";
import { UiDivider } from "./styles/components/UiDivider.jsx";
import { UiTitle } from "./styles/components/UiTitle.jsx";

const App = () => {

  const [themeProvide, setThemeProvide] = useState(themeDark)

  const toggleTheme = () => {
    setThemeProvide(themeProvide === themeLight ? themeDark : themeLight)
  }

  return (
    <UiDivider>
      <ThemeProvider theme={themeProvide}>
        <GlobalStyles />

        <UiTitle>Welcome to Emotion</UiTitle>
        <Button action={toggleTheme}/>
      </ThemeProvider>
    </UiDivider>
  );
};

export default App;
