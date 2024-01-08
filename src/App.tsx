import React, {createContext, useEffect, useRef, useState} from 'react';
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
import {Loader} from "./components/loader/Loader";
import {Technical} from "./pages/technical/Technical";
import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from 'react-dnd';
import {getWsLink} from "./functions/getWsLink";

// TODO АИРДРОП
// TODO Сделать зум карты в airdrop
// TODO Сделать анимацию у победителя (конфети)
// TODO Сделать звук вылета самолета
// TODO Сделать звук победы
// TODO Сделать звук поражения
// TODO Сделать звук выпадения дропа

// TODO ОБЩИЕ

// TODO ЮЗЕР
// TODO Добавить таблицу с баттлами (ПОТОМ)

// TODO СХВАТКА
// TODO Сделать анимацию у победителя (конфети)
// TODO Сделать звук победы
// TODO Сделать звук поражения
// TODO Перенаправление юзера в лобби
// TODO Начисления баланса юзеру после победы
// TODO Анимация начисления и убавления в схватке

// TODO БАТТЛЫ
// TODO Сделать прокрут в открытие кейсов
// TODO Сделать визуальный перевод денег победителю на счет
// TODO Показывать какой кейс сейчас открывается (как в дизайне)
// TODO Сделать так, если нажимаешь вызвать бота, то что бы вызывался бот а не ты начинал играть сам с собой (ПОТОМ)
// TODO Починить таймер
// TODO Не показывать цену продукта пока не прокрутится кейс
// TODO Починить создания батлов

const wsAirdrop = new WebSocket(getWsLink("ws/api/airdrop/"))

export const AirdropSocketContext: any = createContext(null)
export const IsJoinToGame: any = createContext(null)

function App() {

    const [isLoad, setIsLoad] = useState(true)
    const [isJoinToGame, setIsJoinToGame] = useState(false)

    const dispatch = useDispatch()
    const {popup} = usePopups()
    const isTechnicalTime = useSelector((state: any) => state.toolkit.siteSettings)?.technical_break
    const userData = useSelector((state: any) => state.toolkit.user)

    const [airdropWsMessage, setAirdropWsMessage] = useState({})

    useEffect(() => {
        getUser({dispatch});
        getProducts({dispatch});
        getSettings({dispatch});
        getPages({dispatch})
        setIsLoad(false)
        getInventory({dispatch});
        getCart({dispatch});

        wsAirdrop.onmessage = (e) => {
            const data = JSON.parse(JSON.parse(e.data))
            console.log(data)
            setAirdropWsMessage(data)
        }
    }, [])

    useEffect(() => {
        if (isLoad) return;
    }, [isLoad])

    if (isTechnicalTime) return <Technical/>;

    return (
        <IsJoinToGame.Provider value={{isJoinToGame, setIsJoinToGame}}>
            <AirdropSocketContext.Provider value={airdropWsMessage}>
                <DndProvider backend={HTML5Backend}>
                    <AppStyled className="App">

                        <Header/>
                        <Container/>
                        <Notice/>

                        <Loader/>

                        {popup}

                    </AppStyled>
                </DndProvider>
            </AirdropSocketContext.Provider>
        </IsJoinToGame.Provider>
    );
}

export default App;
