import React, {useEffect} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Route, Routes, useLocation} from "react-router-dom";
import MainPage from "../pages/MainPage";
import AirdropPage from "../pages/AirdropPage";
import FightPage from "../pages/FightPage";
import HistoryPage from "../pages/HistoryPage";
import PolicyPage from "../pages/PolicyPage";
import ClothesShopPage from "../pages/ClothesShopPage";
import PersonPage from "../pages/PersonPage";
import FaqPage from "../pages/FaqPage";
import FightRoom from "../pages/FightRoom";
import {useSelector} from "react-redux";
import NotFound from "../pages/NotFound";
import {logger} from "../middleware/logger";

const MainRouters = (props) => {
    const location = useLocation()
    const auth = useSelector(state => state.reducerAuth.auth)


    const Routers = [
        {
            path: "/",
            element: <FightPage states={props.states}/>,
        },
        {
            path: "/fight/:id",
            element: <FightRoom states={props.states}/>,
        },
        {
            path: "/profile",
            element: <MainPage states={props.states}/>,
        },
        {
            path: "/airdrop",
            element: <AirdropPage states={props.states}/>,
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
        {
            path: "/user/:id",
            element: <PersonPage/>,
        },
        {
            path: "/faq",
            element: <FaqPage states={props.states}/>,
        },
        {
            path: "*",
            element: <NotFound/>,
        },
    ]

    return (
        <div className="centerSections">
            <TransitionGroup component={null}>
                <CSSTransition key={location.key} classNames={'fade'} timeout={300}>
                    <Routes location={location}>
                        {
                            Routers.map((router, routerId) =>
                                {
                                    if(!auth) {
                                        if(router.path === '/profile'){
                                            router.element = <NotFound/>
                                        } else if (router.path === '/history'){
                                            router.element =  <NotFound/>
                                        }
                                    }

                                    return <Route key={routerId} path={router.path} element={router.element}/>
                                }
                            )
                        }
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
};

export default MainRouters;