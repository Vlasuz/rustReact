import React, {createContext, useEffect, useState} from 'react';
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
import setCookie from "./functions/setCookie";
import {useWsChat} from "./hooks/wsChat";
import { ChatWsContext } from './context/chatWsContext';
import {setUserBalance} from "./redux/toolkitSlice";
import {IUser} from "./model";
import AOS from "aos";
import 'aos/dist/aos.css';


const wsAirdrop = new WebSocket(getWsLink("ws/api/airdrop/"))

export const AirdropSocketContext: any = createContext(null)
export const IsJoinToGame: any = createContext(null)

function App() {

    useEffect(() => {
        AOS.init({
            once: true
        });
        setTimeout(() => {
            AOS.refreshHard();
        }, 100);
    }, []);

    const [isLoad, setIsLoad] = useState(true)
    const [isJoinToGame, setIsJoinToGame] = useState(false)

    const {ws} = useWsChat()

    const dispatch = useDispatch()
    const {popup} = usePopups()
    const isTechnicalTime = useSelector((state: any) => state.toolkit.siteSettings)?.technical_break
    const user: IUser = useSelector((state: any) => state.toolkit.user)

    const [airdropWsMessage, setAirdropWsMessage] = useState({})

    useEffect(() => {
        getUser({dispatch});
        getProducts({dispatch});
        getSettings({dispatch});
        getPages({dispatch})
        setIsLoad(false)
        getInventory({dispatch});
        getCart({dispatch});

        setCookie('access_token', '')

        wsAirdrop.onmessage = (e) => {
            const data = JSON.parse(JSON.parse(e.data))
            console.log(data)
            setAirdropWsMessage(data)

            if(data.airdrop.game_state === "ended" && data.airdrop.winner.user.id === user.id) {
                dispatch(setUserBalance(data.airdrop.winner.user.balance))
            }

        }
    }, [])

    useEffect(() => {
        if (isLoad) return;
    }, [isLoad])

    if (isTechnicalTime) return <Technical/>;

    return (
        <ChatWsContext.Provider value={ws}>
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
        </ChatWsContext.Provider>
    );
}

export default App;
