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

    return (
        <div className="section-right__airdrop">
            <RightsAirdropBlock states={props.states}/>
            {
                stepAirdrop === 1 && auth ?
                    <>
                        {
                            switcherRightsStep === 1 ? <RightsAirdropSleepers states={props.states}/> :
                                switcherRightsStep === 2 ? <RightsAirdropMoveSleepers states={props.states}/> :
                                    switcherRightsStep === 3 ? <RightsAirdropMember/> : ""
                        }
                    </> : ""
            }

        </div>
    );
};

export default RightsAirdropSection;