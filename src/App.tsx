import React, { useEffect, useState } from 'react';
import { Header } from './components/header/header';
import { AppStyled } from './App.styled';
import { Container } from './components/container/Container';
import { useDispatch } from 'react-redux';
import { getProducts } from './api/getProducts';
import { getChat } from './api/getChat';
import { getUser } from './functions/getUser';
import { getSettings } from './api/getSettings';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    getProducts({ dispatch });
    getChat({ dispatch });
    getUser({ dispatch });
    getSettings({ dispatch });
  }, [])

  
  return (
    <AppStyled className="App">

      <Header />
      <Container />

    </AppStyled>
  );
}

export default App;
