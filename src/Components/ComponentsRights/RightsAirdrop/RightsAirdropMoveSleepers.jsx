import React, {useEffect} from 'react';
import RightsAirdropSleepersList from "./RightsAirdropSleepersList";
import RightsAirdropSleepersButtons from "./RightsAirdropSleepersButtons";
import {useDispatch} from "react-redux";
// import {removeBoughtSleeper, setSleepers} from "../../../Redux/Reducers/reducerAirdropMySleepers";

const RightsAirdropMoveSleepers = () => {
    return (
        <div className="airdrop__move">

            <RightsAirdropSleepersList/>
            <RightsAirdropSleepersButtons />

        </div>
    );
};

export default RightsAirdropMoveSleepers;