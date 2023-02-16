import { combineReducers } from "redux";
import {reducerAuth} from "./reducerAuth";
import {reducerUserData} from "./reducerUserData";
import {reducerUserStats} from "./reducerUserStats";
import {reducerSwitcherRights} from "./reducerSwitcherRights";
import {reducerAirdropTimerSecond} from "./reducerAirdropTimerSecond";
import {reducerAirdropMembers} from "./reducerAirdropMembers";
import {reducerAirdropTrajectoryPlane} from "./reducerAirdropTrajectoryPlane";
import {reducerAirdropLengthPlane} from "./reducerAirdropLengthPlane";
import {reducerAirdropStep} from "./reducerAirdropStep";
import {reducerAirdropDropIsDown} from "./reducerAirdropDropIsDown";
import {reducerShopList} from "./reducerShopList";
import {reducerShopListAdded} from "./reducerShopListAdded";
import {reducerUserInventory} from "./reducerUserInventory";
import {reducerProcessorList} from "./reducerProcessorList";
import {reducerStorageWithdraw} from "./reducerStorageWithdraw";
import {reducerAirdropStepRights} from "./reducerAirdropStepRights";
import {reducerAirdropCountSleepers} from "./reducerAirdropCountSleepers";
import {reducerShopSkins} from "./reducerShopSkins";
import {reducerUserSkins} from "./reducerUserSkins";
import {reducerFightsRooms} from "./reducerFightsRooms";
import {reducerChat} from "./reducerChat";
import {reducerUserBalance} from "./reducerUserBalance";
import {reducerSession} from "./reducerSession";
import {reducerFightsSocketCreate} from "./reducerFightsSocketCreate";
import {reducerFightsDefense} from "./reducerFightsDefense";
import {reducerFightsAttack} from "./reducerFightsAttack";
import {reducerFightsResponse} from "./reducerFightsResponse";
import {reducerSettings} from "./reducerSettings";
import {reducerFightsSkin} from "./reducerFightsSkin";

export const rootReducer = combineReducers({
    reducerSwitcherRights,
    reducerShopSkins,
    reducerChat,
    reducerSession,
    reducerSettings,
    reducerAuth,
    reducerUserData,
    reducerUserStats,
    reducerUserInventory,
    reducerUserBalance,
    reducerUserSkins,
    reducerAirdropTimerSecond,
    reducerAirdropMembers,
    reducerAirdropTrajectoryPlane,
    reducerAirdropLengthPlane,
    reducerAirdropStep,
    reducerAirdropDropIsDown,
    reducerShopList,
    reducerShopListAdded,
    reducerProcessorList,
    reducerStorageWithdraw,
    reducerAirdropStepRights,
    reducerAirdropCountSleepers,
    reducerFightsRooms,
    reducerFightsSocketCreate,
    reducerFightsDefense,
    reducerFightsAttack,
    reducerFightsSkin,
    reducerFightsResponse,
})