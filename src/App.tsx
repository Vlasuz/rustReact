import React, {useEffect, useRef, useState} from 'react';
import {Header} from './components/header/Header';
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

// TODO АИРДРОП
// TODO Сделать зум карты в airdrop
// TODO Сделать таймер в правом меню + линия таймера
// TODO Сделать смену типа таймера в правой части аирдропа
// TODO Сделать таймер в sidebar + линия таймера
// TODO Сделать массив игроко в аирдропе
// TODO Сделать расставления спальников в аирдропе
// TODO Сделать победителя в аирдропе
// TODO Сделать анимацию линии от дропа до спальника (математика)
// TODO Сделать вылетающий самолетик
// TODO Сделать звуки в аирдропе
// TODO Сделать новые пожелания клинета по аирдропу

// TODO ОБЩИЕ
// TODO Сделать создателя сайта в sidebar
// TODO Сделать В правом меню вывод крейтов
// TODO Убрать ошибки 401, сделать так что бы не было ошибок если пользователь не авторизован
// TODO Сделать ленивую загрузку картинок через библиотеку
// TODO Сделать лоадер
// TODO Сделать страницу технического перерыва

// TODO СХВАТКА
// TODO Сделать сокет в появлении игр в схватке
// TODO Сделать кучу анимаций в схватке
// TODO Сделать звуки в схватке
// TODO Проверить схватку на работоспособность
// TODO Настроить таймер в схватке

function App() {

    const dispatch = useDispatch()
    const {popup} = usePopups()
    const isAuth = useSelector((state: any) => state.toolkit.user)
    const [isLoad, setIsLoad] = useState(true)

    useEffect(() => {
        getUser({dispatch});
        getProducts({dispatch});
        getSettings({dispatch});
        getPages({dispatch})
    }, [])

    useEffect(() => {
        if(!(Object.keys(isAuth).length && isLoad)) return;
        setIsLoad(false)

        getInventory({dispatch});
        getCart({dispatch});

    }, [isAuth, isLoad])

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
