/** @jsxImportSource @emotion/react */
import { ThemeProvider } from "@emotion/react";
const theme = {
  backgroundColor: "black",
  color: "white",
};
const adjustedTheme = (ancestorTheme) => ({ ...ancestorTheme, color: "blue" });


class Container extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <ThemeProvider theme={adjustedTheme}>
          <Text>Boom shaka laka!</Text>
        </ThemeProvider>
      </ThemeProvider>
    )
  }
}

 