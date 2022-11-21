import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AirdropPage from "../pages/AirdropPage";
import FightPage from "../pages/FightPage";
import FightPageRunning from "../pages/FightPageRunning";
import FightPageFinish from "../pages/FightPageFinish";
import HistoryPage from "../pages/HistoryPage";
import PolicyPage from "../pages/PolicyPage";
import ClothesShopPage from "../pages/ClothesShopPage";
import States from "../States";

const MainRouters = () => {
    const states = States()
    const location = useLocation()
    return (
        <div className="centerSections">
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames={'fade'} timeout={300}>
                    <Routes location={location}>
                        <Route path="/"
                               element={ <MainPage
                                   dataInfo={states.dataInfo}
                                   tradeLink={states.tradeLink}
                                   setTradeLink={states.setTradeLink}
                               /> }
                        />
                        <Route
                            path="/airdrop"
                            element={<AirdropPage />}
                        />
                        <Route
                            path="/fight"
                            element={<FightPage
                                mainCoins={states.coins}
                                onSetCoins={states.setCoins}
                                dataInfo={states.dataInfo}
                                listFightsMembers={states.listFightsMembers}
                                setFightInfo={states.setFightInfo}
                            />}
                        />
                        <Route
                            path="/fight-running"
                            element={
                                <FightPageRunning
                                    arrayForHit={states.arrayForHit}
                                    setArrayForHit={states.setArrayForHit}
                                />
                            }
                        />
                        <Route
                            path="/fight-finish"
                            element={
                                <FightPageFinish
                                    arrayForHit={states.arrayForHit}
                                    setArrayForHit={states.setArrayForHit}
                                />
                            }
                        />

                        <Route path="/history" element={<HistoryPage/>}/>
                        <Route path="/policy" element={<PolicyPage/>}/>

                        <Route
                            path="/clothes-shop"
                            element={
                                <ClothesShopPage
                                    dataInfo={states.dataInfo}
                                />
                            }
                        />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default MainRouters;