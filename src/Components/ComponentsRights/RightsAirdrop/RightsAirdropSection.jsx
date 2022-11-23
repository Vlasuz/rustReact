import React from 'react';
import RightsAirdropBlock from "./RightsAirdropBlock";
import RightsAirdropSleepers from "./RightsAirdropSleepers";
import RightsAirdropMoveSleepers from "./RightsAirdropMoveSleepers";
import RightsAirdropMember from "./RightsAirdropMember";
import {useState} from "react";
import States from "../../../States";

const RightsAirdropSection = (props) => {

    let funcNumSwitch = function () {
        if(props.states.numSwitch === 1){
            return (
                <RightsAirdropSleepers states={props.states}/>
            )
        } else if(props.states.numSwitch === 2){
            return (
                <RightsAirdropMoveSleepers states={props.states}/>
            )
        } else if (props.states.numSwitch === 3){
            return (
                <RightsAirdropMember/>
            )
        }
    }

    return (
        <div className="section-right__airdrop">
            <RightsAirdropBlock states={props.states}/>
            {funcNumSwitch()}
        </div>
    );
};

export default RightsAirdropSection;