import Header from "./Components/ComponentsHeader/Header";
import Aside from "./Components/ComponentsAside/Aside";
import RightsContainer from "./Components/ComponentsRights/RightsContainer";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
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
import './Main.css'
import {CSSTransition, TransitionGroup} from "react-transition-group";

function App() {

    const [coins, setCoins]                     = useState(0);
    const [switcherRights, setSwitcherRights]   = useState('pr')
    const [tradeLink, setTradeLink]             = useState('')
    const [arrayForHit, setArrayForHit]         = useState([]);
    const [seconds, setSeconds]                 = useState(0)
    const [milliseconds, setMilliseconds]       = useState(0);
    const [timeToFly, setTimeToFly]             = useState(false)
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

    // grey     - 1
    // green    - 2
    // blue     - 3
    // red      - 4

    const dataItems = [
        {
            id: 1,
            title: "Yellow Racer Pants",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin1.png',
            count: 1,
            cost: 2450
        },
        {
            id: 2,
            title: "Excavator Door",
            rarity: 3,
            rating: 'blue',
            image: 'images/skins/skin2.png',
            count: 1,
            cost: 4050
        },
        {
            id: 3,
            title: "Glory AK47",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin3.png',
            count: 1,
            cost: 4050
        },
        {
            id: 4,
            title: "Alien Relic SMG",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin4.png',
            count: 1,
            cost: 8009
        },
        {
            id: 5,
            title: "Grandmother's Gift Barricade",
            rarity: 3,
            rating: 'blue',
            image: 'images/skins/skin5.png',
            count: 1,
            cost: 1450
        },
        {
            id: 6,
            title: "Santa Balaclava",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin6.png',
            count: 1,
            cost: 540
        },
        {
            id: 7,
            title: "Raven",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin7.png',
            count: 1,
            cost: 8990
        },
        {
            id: 8,
            title: "Train Conductor Miner's Hat",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin8.png',
            count: 1,
            cost: 1450
        },
        {
            id: 9,
            title: "Urban Ice Jacket",
            rarity: 2,
            rating: 'green',
            image: 'images/skins/skin9.png',
            count: 1,
            cost: 4372
        },
        {
            id: 10,
            title: "Combat Knife from Hell",
            rarity: 4,
            rating: 'red',
            image: 'images/skins/skin10.png',
            count: 1,
            cost: 12989
        },
    ]
    const dataInfo = {
        coins: coins
    }

    const [isAirdropEnd, setIsAirdropEnd] = useState(false)

    const location = useLocation()

    return (
        <>
            <Header
                dataInfo={dataInfo}
            />
            <main className="wrapper">

                <Aside
                    switcherRights={switcherRights}
                    onSwitcherRightsChange={setSwitcherRights}
                    timeToFly={timeToFly}
                    setTimeToFly={setTimeToFly}
                    setIsAirdropEnd={setIsAirdropEnd}
                />
                <div className="centerSections">
                    <TransitionGroup component={null}>
                        <CSSTransition key={location.key} classNames={'fade'} timeout={300}>
                            <Routes location={location}>
                                <Route path="/"
                                       element={ <MainPage
                                            dataInfo={dataInfo}
                                            tradeLink={tradeLink}
                                            setTradeLink={setTradeLink}
                                       /> }
                                />
                                <Route
                                    path="/airdrop"
                                    element={<AirdropPage />}
                                />
                                <Route
                                    path="/fight"
                                    element={<FightPage
                                            mainCoins={coins}
                                            onSetCoins={setCoins}
                                            dataInfo={dataInfo}
                                            listFights={listFights}
                                            setFightInfo={setFightInfo}
                                        />}
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
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <RightsContainer
                    onCoinsChange={setCoins}
                    onCoins={coins}
                    dataItems={dataItems}
                    switcherRights={switcherRights}

                    timer={timer}
                    setTimeToFly={setTimeToFly}
                    isAirdropEnd={isAirdropEnd}
                />
            </main>

            <AllPopups
                dataInfo={dataInfo}
            />
        </>
    );
}

export default App;
