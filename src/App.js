import React from "react";
import GlobalStyle from "./features/GlobalStyle";
import Navbar from "./features/Navbar";
import Container from "./features/Container";
import Home from "./features/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Home />
      </Container>
    </>
  );
}

export default App;
