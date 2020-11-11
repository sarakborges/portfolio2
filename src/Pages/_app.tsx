// Dependencies
import App from "next/app";
import { ThemeProvider } from "styled-components";

// Components
import Container from "Components/Common/Container";

// Container
import Home from "./Home";

// Styles
import "reset.css";
import MainTheme from "Themes/Main";
import { GlobalStyle } from "./style";

// App
export default class MyApp extends App {
  render = () => {
    return (
      <ThemeProvider theme={MainTheme}>
        <GlobalStyle />

        <Container>
          <Home />
        </Container>
      </ThemeProvider>
    );
  };
}
