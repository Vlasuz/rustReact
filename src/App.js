import Header from "./Components/ComponentsHeader/Header";
import Aside from "./Components/ComponentsAside/Aside";
import RightsContainer from "./Components/ComponentsRights/RightsContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AirdropPage from "./pages/AirdropPage";
import FightPage from "./pages/FightPage";
import {useState} from "react";
import AllPopups from "./Components/Popups/AllPopups";
import FightPageRunning from "./pages/FightPageRunning";
import FightPageFinish from "./pages/FightPageFinish";
import HistoryPage from "./pages/HistoryPage";
import PolicyPage from "./pages/PolicyPage";
import ClothesShopPage from "./pages/ClothesShopPage";
import Timer from "./Components/Timer";

function App() {

    const [coins, setCoins] = useState(0);
    const [switcherRights, setSwitcherRights] = useState('pr')
    const [tradeLink, setTradeLink] = useState('')
    const [arrayForHit, setArrayForHit] = useState([]);
    const [seconds, setSeconds] = useState(0)
    const [milliseconds, setMilliseconds] = useState(0)
    const timer = {
        seconds: seconds,
        milliseconds: milliseconds
    }

    const listFights = [
        {
            id: 1,
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "clothes",
            image: "images/user.jpeg",
            name: "Amnesianna5360",
            bid: "130",
            opponentName: "Victorius",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        },
        {
            id: 2,
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "coins",
            image: "images/user.jpeg",
            name: "Amnesianna5360",
            bid: "130",
            opponentName: "Victorius",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        },
        {
            id: 3,
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "coins",
            image: "images/user.jpeg",
            name: "Amna5360",
            bid: "560",
            opponentName: "VictoriusGood",
            opponentPhoto: "images/user.jpeg",
            status: 'waiting',
            youWon: null
        }
    ]
    const [fightInfo, setFightInfo] = useState([
        {
            onSetCoins: setCoins,
            mainCoins: coins,
            typePrice: "",
            image: "",
            name: "",
            bid: "",
            opponentName: "",
            opponentPhoto: "",
            youWon: null
        },
    ])

    const dataItems = [
        {
            rating: 'red',
            image: 'images/skin.png',
            count: 2,
            cost: 4000
        },
        {
            rating: 'blue',
            image: 'images/skin.png',
            count: 2,
            cost: 1500
        },
        {
            rating: 'red',
            image: 'images/skin.png',
            count: 2,
            cost: 305
        },
        {
            rating: 'grey',
            image: 'images/skin.png',
            count: 2,
            cost: 200
        }
    ]

    const dataInfo = {
        coins: coins
    }

    return (
        <BrowserRouter>
            <Timer setSeconds={setSeconds} setMilliseconds={setMilliseconds} />
            <Header
                dataInfo={dataInfo}
            />
            <main className="wrapper">

                <Aside
                    switcherRights={switcherRights}
                    onSwitcherRightsChange={setSwitcherRights}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MainPage
                                dataInfo={dataInfo}
                                tradeLink={tradeLink}
                                setTradeLink={setTradeLink}
                            />
                        }
                    />

                    <Route
                        path="/airdrop"
                        element={
                            <AirdropPage

                            />
                        }
                    />
                    <Route
                        path="/fight"
                        element={
                            <FightPage
                                mainCoins={coins}
                                onSetCoins={setCoins}
                                dataInfo={dataInfo}
                                listFights={listFights}
                                setFightInfo={setFightInfo}
                            />
                        }
                    />

                    <Route
                        path="/fight-running"
                        element={
                            <FightPageRunning
                                arrayForHit={arrayForHit}
                                setArrayForHit={setArrayForHit}
                            />
                        }
                    />
                    <Route
                        path="/fight-finish"
                        element={
                            <FightPageFinish
                                arrayForHit={arrayForHit}
                                setArrayForHit={setArrayForHit}
                            />
                        }
                    />

                    <Route path="/history" element={<HistoryPage/>}/>
                    <Route path="/policy" element={<PolicyPage/>}/>

                    <Route
                        path="/clothes-shop"
                        element={
                            <ClothesShopPage
                                dataInfo={dataInfo}
                            />
                        }
                    />
                </Routes>

                <RightsContainer
                    onCoinsChange={setCoins}
                    onCoins={coins}
                    dataItems={dataItems}
                    switcherRights={switcherRights}

                    timer={timer}
                />
            </main>

            <AllPopups
                dataInfo={dataInfo}
            />
        </BrowserRouter>
    );
}

export default App;
