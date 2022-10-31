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

// import 'https://unpkg.com/imask';

function App() {

    const [coins, setCoins] = useState(0);
    const [switcherRights, setSwitcherRights] = useState('pr')

    const [arrayForHit, setArrayForHit] = useState([])


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
                </Routes>

                <RightsContainer
                    onCoinsChange={setCoins}
                    onCoins={coins}
                    dataItems={dataItems}
                    switcherRights={switcherRights}
                />
            </main>

            <AllPopups
                dataInfo={dataInfo}
            />
        </BrowserRouter>
    );
}

export default App;
