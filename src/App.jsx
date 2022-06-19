import React from "react";
import { Container, MainHeader, Section } from "./globalStyles";
import List from "./components/List/List";

function App() {
  return (
    <Container>
      <Section>
        <MainHeader>Ты сегодня покормил кота?</MainHeader>
        <List></List>
      </Section>
    </Container>
  );
}

export default App;
