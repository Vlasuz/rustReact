import React, {useEffect, useRef, useState} from 'react';
import {Header} from './components/header/header';
import {AppStyled} from './App.styled';
import {Container} from './components/container/Container';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from './api/getProducts';
import {getUser} from './api/getUser';
import {getSettings} from './api/getSettings';
import {getInventory} from './api/getInventory';
import {getCart} from './api/getCart';
import {Notice} from './components/notice/Notice';
import {usePopups} from "./hooks/popup/popup";
import {getPages} from "./api/getPages";

function App() {

    const dispatch = useDispatch()
    const {popup} = usePopups()
    const isAuth = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {
        // Object.keys(isAuth).length && getUser({dispatch});
        // Object.keys(isAuth).length && getInventory({dispatch});
        // Object.keys(isAuth).length && getCart({dispatch});
        getUser({dispatch});
        getInventory({dispatch});
        getCart({dispatch});

        getProducts({dispatch});
        getSettings({dispatch});
        getPages({dispatch})
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
