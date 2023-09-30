import React, {useEffect, useRef, useState} from 'react';
import {Header} from './components/header/header';
import {AppStyled} from './App.styled';
import {Container} from './components/container/Container';
import {useDispatch} from 'react-redux';
import {getProducts} from './api/getProducts';
import {getUser} from './api/getUser';
import {getSettings} from './api/getSettings';
import {getInventory} from './api/getInventory';
import {getCart} from './api/getCart';
import {Notice} from './components/notice/Notice';
import {usePopups} from "./hooks/popup/popup";

function App() {

    const dispatch = useDispatch()
    const {popup} = usePopups()

    useEffect(() => {
        getProducts({dispatch});
        getUser({dispatch});
        getSettings({dispatch});
        getInventory({dispatch});
        getCart({dispatch});
    }, [])

    return (
        <AppStyled className="App">

            <Header/>
            <Container/>
            <Notice/>

            {popup}

        </AppStyled>
    );
}

export default App;
