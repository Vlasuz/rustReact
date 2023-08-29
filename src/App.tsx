import React from 'react';
import { Header } from './components/header/header';
import { AppStyled } from './App.styled';
import { Container } from './components/container/Container';

function App() {
  return (
    <AppStyled className="App">

      <Header />

      <Container/>

    </AppStyled>
  );
}

export default App;
