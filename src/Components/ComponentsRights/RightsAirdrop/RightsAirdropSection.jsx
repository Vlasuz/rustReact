import React from 'react';
import RightsAirdropBlock from "./RightsAirdropBlock";
import RightsAirdropSleepers from "./RightsAirdropSleepers";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";
import RightsAirdropMember from "./RightsAirdropMember";
import {useState} from "react";
import States from "../../../States";
import {useSelector} from "react-redux";
import {reducerAirdropStepRights} from "../../../Redux/Reducers/reducerAirdropStepRights";

const RightsAirdropSection = (props) => {

    const switcherRightsStep = useSelector(state => state.reducerAirdropStepRights.step)
    const stepAirdrop = useSelector(state => state.reducerAirdropStep.step)
    const auth = useSelector(state => state.reducerAuth.auth)
    const isPlayerMember = useSelector(state => state.reducerSubmitAirdrop.data)

    return (
        <div className="section-right__airdrop">
            <RightsAirdropBlock states={props.states}/>
            {
                (auth && stepAirdrop === "waiting") || isPlayerMember ?
                    <>
                        {
                            switcherRightsStep === 1 && !isPlayerMember ? <RightsAirdropSleepers/> :
                                switcherRightsStep === 2 && !isPlayerMember ? <RightsAirdropMoveSleepers/> :
                                    switcherRightsStep === 3 || isPlayerMember ? <RightsAirdropMember/> : ""
                        }
                    </> : ""
            }

        </div>
    );
};

export default RightsAirdropSection;