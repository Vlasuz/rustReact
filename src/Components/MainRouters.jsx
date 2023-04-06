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
import {useDispatch, useSelector} from "react-redux";
import NotFound from "../pages/NotFound";
import {logger} from "../middleware/logger";
import {switcherRights} from "../Redux/actions";
import DocsRules from "../pages/DocsRules";
import DocsPolicy from "../pages/DocsPolicy";
import DocsContacts from "../pages/DocsContacts";

const MainRouters = () => {
    const location = useLocation()
    const auth = useSelector(state => state.reducerAuth.auth)

    const Routers = [
        {
            path: "/",
            element: <FightPage/>,
        },
        {
            path: "/fight/:id",
            element: <FightRoom/>,
        },
        {
            path: "/profile",
            element: <MainPage/>,
        },
        {
            path: "/airdrop",
            element: <AirdropPage/>,
        },
        {
            path: "/history",
            element: <HistoryPage/>,
        },
        {
            path: "/policy",
            element: <PolicyPage/>,
        },
        {
            path: "/clothes-shop",
            element: <ClothesShopPage/>,
        },
        {
            path: "/user/:id",
            element: <PersonPage/>,
        },
        {
            path: "/faq",
            element: <FaqPage/>,
        },
        {
            path: "/docs/:id",
            element: <PolicyPage/>,
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
                            Routers?.map((router, routerId) =>
                                {
                                    if(!auth) {
                                        if(router.path === '/profile'){
                                            router.element = <NotFound/>
                                        } else if (router.path === '/history' || router.path === '/clothes-shop'){
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