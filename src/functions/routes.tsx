import {Fight} from "../pages/fight/Fight";
import {Profile} from "../pages/profile/Profile";
import {Shop} from "../pages/shop/Shop";
import {History} from "../pages/history/History";
import {Faq} from "../pages/faq/Faq";
import {Policy} from "../pages/policy/Policy";
import {NotFound} from "../pages/notFound/NotFound";
import React from "react";
import {Airdrop} from "../pages/airdrop/Airdrop";
import {OpenCases} from "../pages/openCases/OpenCases";
import {Battle} from "../pages/battle/Battle";
import {BattleSingle} from "../pages/battleSingle/BattleSingle";
import {FightSingle} from "../pages/fightSingle/FightSingle";

export const routes = () => {
    return [
        {
            element: <Fight/>,
            path: '/',
            isGlobal: true,
        },
        {
            element: <FightSingle/>,
            path: '/fight/:fightId',
            isGlobal: true,
        },
        {
            element: <Profile/>,
            path: '/profile',
            isGlobal: false,
        },
        {
            element: <Profile/>,
            path: '/user/:userId',
            isGlobal: true,
        },
        {
            element: <Shop/>,
            path: '/shop',
            isGlobal: false,
        },
        {
            element: <History/>,
            path: '/history',
            isGlobal: false,
        },
        {
            element: <Faq/>,
            path: '/faq',
            isGlobal: true,
        },
        {
            element: <Policy/>,
            path: '/docs/:docId',
            isGlobal: true,
        },
        {
            element: <Airdrop/>,
            path: '/airdrop',
            isGlobal: true,
        },
        {
            element: <OpenCases/>,
            path: '/open-cases',
            isGlobal: true,
        },
        {
            element: <Battle/>,
            path: '/battle',
            isGlobal: true,
        },
        {
            element: <BattleSingle/>,
            path: '/battle/:battleId',
            isGlobal: true,
        },

        {
            element: <NotFound/>,
            path: '*',
            isGlobal: true,
        },
    ]
}