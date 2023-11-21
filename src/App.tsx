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
// TODO Сделать таймер в правом меню + линия таймера
// TODO Сделать смену типа таймера в правой части аирдропа
// TODO Сделать таймер в sidebar + линия таймера
// TODO Сделать массив игроко в аирдропе
// TODO Сделать победителя в аирдропе
// TODO Сделать анимацию линии от дропа до спальника (математика)
// TODO Сделать звуки в аирдропе

// TODO ОБЩИЕ
// TODO Сделать В правом меню вывод крейтов

// TODO СХВАТКА
// TODO Сделать кучу анимаций в схватке
// TODO Сделать звуки в схватке
// TODO Проверить схватку на работоспособность
// TODO Настроить таймер в схватке

const wsAirdrop = new WebSocket(getWsLink("ws/api/airdrop/"))
export const AirdropSocketContext: any = createContext(null)

function App() {

    const dispatch = useDispatch()
    const [isLoad, setIsLoad] = useState(true)
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
    );
}

export default App;
