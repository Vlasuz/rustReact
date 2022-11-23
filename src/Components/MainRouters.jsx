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
import FightPageWaiting from "../pages/FightPageWaiting";

const MainRouters = (props) => {
    const location = useLocation()

    const Routers = [
        {
            path: "/",
            element: <MainPage states={props.states}/>,
        },
        {
            path: "/airdrop",
            element: <AirdropPage states={props.states}/>,
        },
        {
            path: "/fight",
            element: <FightPage states={props.states}/>,
        },
        {
            path: "/fight-waiting",
            element: <FightPageWaiting states={props.states}/>,
        },
        {
            path: "/fight-running",
            element: <FightPageRunning states={props.states}/>,
        },
        {
            path: "/fight-finish",
            element: <FightPageFinish states={props.states}/>,
        },
        {
            path: "/history",
            element: <HistoryPage states={props.states}/>,
        },
        {
            path: "/policy",
            element: <PolicyPage states={props.states}/>,
        },
        {
            path: "/clothes-shop",
            element: <ClothesShopPage states={props.states}/>,
        },
    ]

    return (
        <div className="centerSections">
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames={'fade'} timeout={300}>
                    <Routes location={location}>
                        {
                            Routers.map((router, routerId) =>
                                <Route key={routerId} path={router.path} element={router.element}/>
                            )
                        }
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default MainRouters;